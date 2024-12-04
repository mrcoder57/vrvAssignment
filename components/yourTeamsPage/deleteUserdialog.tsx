"use client";

import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";

interface DeleteUserDialogProps {
  userId: string;
  userName: string;
  onConfirm: (userId: string) => void;
}

const DeleteUserDialog = ({ userId, userName, onConfirm }: DeleteUserDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    onConfirm(userId);
    setIsOpen(false);
    toast.success(`User "${userName}" deleted successfully.`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
      <button >
                      <Image
                        src="/delete.svg"
                        alt="Edit"
                        width={20}
                        height={20}
                        className="rounded-md"
                      />
                    </button>
      </DialogTrigger>
      <DialogContent>
        <h2 className="text-lg font-semibold">Confirm Deletion</h2>
        <p>Are you sure you want to delete the user <b>{userName}</b>? This action cannot be undone.</p>
        <DialogFooter>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUserDialog;
