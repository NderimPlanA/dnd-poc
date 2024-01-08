/* eslint-disable react/prop-types */
import { useSortable } from '@dnd-kit/sortable';
import React from 'react'

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


  return <div key={item.title} className={`w-20 h-12 border border-1 ${item.card ? 'border-blue-600' : 'border-orange-500'}`} {...draggableAttributes}>{item.title}</div>
}

export default ItemWrapper
