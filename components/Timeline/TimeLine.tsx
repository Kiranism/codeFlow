"use client";
import { useCodeCanvasStore } from "@/hooks/useCodeCanvas";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import TimelineCard from "./TimelineCard";

export default function TimeLine() {
  const { codeSnippet, setCodeSnippet } = useCodeCanvasStore();
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  useEffect(() => {
    useCodeCanvasStore.persist.rehydrate();
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    if (!active.id) return;
    setActiveId(active.id);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;
    if (activeId !== overId) {
      const activeColumnIndex = codeSnippet.findIndex(
        (col) => col.id === activeId
      );
      const overColumnIndex = codeSnippet.findIndex((col) => col.id === overId);
      setCodeSnippet(
        arrayMove(codeSnippet, activeColumnIndex, overColumnIndex)
      );
    }
    setActiveId(null);
  }

  const activeItem = codeSnippet.find((item) => item.id === activeId);
  const findActiveIndex = codeSnippet.findIndex((item) => item.id === activeId);

  return (
    <div className="flex gap-10 text-black p-10">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={codeSnippet}
          strategy={horizontalListSortingStrategy}
        >
          {codeSnippet?.map((item, index) => (
            <TimelineCard item={item} key={item.id} index={index} />
          ))}
          <DragOverlay>
            {activeItem && (
              <TimelineCard
                item={activeItem}
                index={findActiveIndex}
                isOverlay={true}
              />
            )}
          </DragOverlay>
        </SortableContext>
      </DndContext>
    </div>
  );
}
