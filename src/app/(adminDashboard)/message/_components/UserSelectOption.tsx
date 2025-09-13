import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function UserSelectOption() {
  return (
    <Select defaultValue={"all_users"}>
      <SelectTrigger className="bg-[#F8F9FA]">
        <SelectValue placeholder="Select a User Type" />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup>
          <SelectLabel>Users Type</SelectLabel>
          <SelectItem value="all_vendors">All Vendors</SelectItem>
          <SelectItem value="all_users">All Users</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
