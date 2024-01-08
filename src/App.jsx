import './App.css'
import { DndContext, MouseSensor, useSensor, useSensors, closestCenter } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import ItemWrapper from './ItemWrapper/ItemWrapper';
import { charts, cards } from './constants';
import { useState } from 'react';

const mergeAndSortItems = () => {
  const items = [].concat(cards, charts);
  return items.sort((a, b) => a.order - b.order);
}

function App() {
  const [itemsArray, setItemsArray] = useState(mergeAndSortItems());

  const sensors = useSensors(
    useSensor(MouseSensor)
  );

  const handleDragEnd = ({ active, over }) => {
    console.log(active, over)
    if (over && active.id !== over.id) {
      const oldIndex = itemsArray.findIndex(({ order }) => order === active.id);
      const newIndex = itemsArray.findIndex(({ order }) => order === over.id);
      const updatedItems = arrayMove(itemsArray, oldIndex, newIndex).map((setting, index) => ({ ...setting, order: index + 1 }));

      setItemsArray(updatedItems)
    }
  }

  const handleDragStart = ({ active, over }) => {
    // console.log(active, over)
  }

  return (
    <div className='border bottom-2 w-[900px] h-[500px] p-4 gap-2' id='container'>
      <DndContext sensors={sensors} onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}>
        <SortableContext strategy={rectSortingStrategy} items={charts.map(chart => chart.order)} collisionDetection={closestCenter}>

          {itemsArray.map(item => {
            return <ItemWrapper key={item.title} item={item} />
          })}
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default App
