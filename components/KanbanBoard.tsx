"use client";
import { useState } from "react";
import PlusIcon from "./icons/PlusIcon";
import { Button } from "./ui/button";

function KanbanBoard() {
    const [columns, setColumns] = useState([]);
  function createNewCollumn() {}

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px] dark:bg-[#030303]">
      <div className="m-auto">
        <Button
          className="h-[60px] w-[350px] rounded-lg flex gap-2"
          variant="outline"
          onClick={() => {
            createNewCollumn();
          }}
        >
          <PlusIcon />
          Add Column
        </Button>
      </div>
    </div>
  );
}

export default KanbanBoard;
