/* eslint-disable react/prop-types */
import { useSortable } from '@dnd-kit/sortable';
import React from 'react'

const widthMapper = {
  '25': '1/4',
  '33': '1/3',
  '50': '1/2',
  '100': 'full'
}

const widthMapper2= {
  '25': '1',
  '33': '2',
  '50': '3',
  '100': '4'
}

const ItemWrapper = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging, isOver } = useSortable({
    id: item.order
  });

  const draggableAttributes = {
    ref: setNodeRef,
    // style: sortableStyle,
    ...attributes,
    ...listeners
  }


  return <div
    key={item.title}
    style={{
      // width: `${item.width}%`
      flexGrow: `${widthMapper2[item.width]}%`
    }}
    className={
      `w-${widthMapper[item.width]}
      h-12 border border-1
      ${item.card ? 'border-blue-600' : 'border-orange-500'}`
    } {...draggableAttributes}>{item.title}
  </div>
}

export default ItemWrapper
