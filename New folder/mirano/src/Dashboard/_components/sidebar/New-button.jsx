"use client";

import { Plus } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
  import { CreateOrganization } from "@clerk/clerk-react";

export const NewButton = () => {
    return (
        <Dialog>
        <DialogTrigger>
            <div className="aspect-square">
                <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
                    <Plus className="text-white" />
                    </button>            
            </div>
            </DialogTrigger>
       <DialogContent>
        <CreateOrganization />
       </DialogContent>
      </Dialog>
          );
};