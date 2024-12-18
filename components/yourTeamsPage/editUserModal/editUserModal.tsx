"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { nunitoSans } from "@/app/fonts/font";

const roles = [
  { label: "Admin", value: "admin" },
  { label: "Inventory Manager", value: "inventory_manager" },
  { label: "Analyst", value: "analyst" },
];

const permissions = [
  { id: "edit", label: "Edit" },
  { id: "delete", label: "Delete" },
  {id:"view",label:"View"}
];

interface UserEditDialogProps {
  initialData: {
    name: string;
    role: string;
    permissions: string[];
    id: string;
    email: string;
  };
}

export function UserEditDialog({ initialData }: UserEditDialogProps) {
  const [username, setUsername] = useState(initialData.name);
  const [userRole, setRole] = useState(initialData.role);
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>(
    initialData.permissions
  );
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleSave = () => {
    // Implement the save functionality
    console.log({ username, userRole, selectedPermissions });
  };

  const togglePermission = (permission: string) => {
    setSelectedPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <Image
            src="/edit.svg"
            alt="Edit"
            width={20}
            height={20}
            className="rounded-md"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
              Role
            </Label>
            <select className={` w-[200px] h-7 border-[0.5px] focus:outline-none rounded px-1 ${nunitoSans.className}`} value={userRole} onChange={(e)=>setRole(e.target.value)}>
              {roles.map((r,ind)=>(
                <option key={ind} value={r.value}>{r.label}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label className="text-right">Permissions</Label>
            <div className="col-span-3 space-y-2">
              {permissions.map((permission,ind) => (
                <div
                  key={ind}
                  className="flex items-center space-x-2"
                >
                  <Checkbox
                    id={ind.toString()}
                    checked={selectedPermissions.includes(permission.label)}
                    onCheckedChange={() => togglePermission(permission.label)}
                  />
                  <label
                    htmlFor={permission.id}
                    className="text-sm font-medium leading-none"
                  >
                    {permission.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
