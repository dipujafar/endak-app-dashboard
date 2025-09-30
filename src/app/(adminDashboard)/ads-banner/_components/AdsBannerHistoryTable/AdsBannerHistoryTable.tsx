import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BannerTableRow } from "./BannerTableRow";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

type TDataType = {
  id: number;
  key?: number;
  serial: number;
  name: string;
  email: string;
  date: string;
  status: string;
  image: string;
  phoneNumber: string;
};

interface BannerTableProps {
  data: TDataType[];
  setOpen: (collapsed: boolean) => void;
  setData: (data: TDataType[]) => void;
  open: boolean
}

export function AdsBannerHistoryTable({
  data,
  setOpen,
  setData,
  open
}: BannerTableProps) {
  const getDataPos = (id: number) => data.findIndex((d) => d.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active?.id === over?.id) return;


    // @ts-ignore
    setData((items) => {
      const originalPos = getDataPos(active.id);
      const newPos = getDataPos(over.id);

      return arrayMove(items, originalPos, newPos);

      const updateData = data.map((d, i) => ({
        ...d,
        id: i + 1,
      }));
      setData(updateData);
    });
  };

  return (
    <>
      <div className="rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#7c3aed] hover:bg-[#7c3aed] h-[50px]">
              <TableHead className="text-white font-semibold">Serial</TableHead>
              <TableHead className="text-white font-semibold">
                Banner Image
              </TableHead>
              <TableHead className="text-white font-semibold">
                Upload Date
              </TableHead>
              <TableHead className="text-white font-semibold text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <TableBody>
              <SortableContext
                items={data}
                strategy={verticalListSortingStrategy}
              >
                {data.map((item) => (
                  <BannerTableRow
                    key={item.key}
                    item={item}
                    setOpen={setOpen}
                  />
                ))}
              </SortableContext>
            </TableBody>
          </DndContext>
        </Table>
      </div>
    </>
  );
}
