"use client";;
import { TableCell, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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

interface BannerTableRowProps {
  item: TDataType;
  setOpen: (collapsed: boolean) => void;
}

export function BannerTableRow({ item, setOpen }: BannerTableRowProps) {
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  const handleView = () => {
    console.log("View banner:", item.serial);
    // Add your view logic here
  };



  return (
    <TableRow ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <TableCell className="font-medium text-muted-foreground">
        #{item?.id}
      </TableCell>
      <TableCell>
        <div className="relative h-24 w-48">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={`Banner ${item.serial}`}
            fill
            className="object-cover rounded-md"
          />
        </div>
      </TableCell>
      <TableCell className="text-muted-foreground">{item.date}</TableCell>
      <TableCell className="text-right">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleView}
          className="hover:bg-muted"
        >
          <Eye
            onClick={() => setOpen(true)}
            className="h-5 w-5 text-muted-foreground"
          />
          <span className="sr-only">View banner {item.serial}</span>
        </Button>
      </TableCell>
    </TableRow>
  );
}
