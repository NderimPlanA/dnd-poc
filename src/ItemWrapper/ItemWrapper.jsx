/* eslint-disable react/prop-types */
import { useSortable } from '@dnd-kit/sortable';

const widthMapper = {
  '25': '3',
  '33': '4',
  '50': '6',
  '100': '12'
}

const ItemWrapper = ({ item }) => {
  const { attributes, listeners, setNodeRef } = useSortable({
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
    id='item'
    style={{
      gridColumn: `span ${widthMapper[item.width]}`
    }}
    className={
      `
      w-full
      h-12 border border-1
      ${item.card ? 'border-blue-600' : 'border-orange-500'}`
    } {...draggableAttributes}>{item.title}
  </div>
}

export default ItemWrapper
