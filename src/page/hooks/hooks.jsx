import React, { useState } from 'react'
import './hook.css'
import useDraggable from './useDraggable'

const list = [
  { title: 'card 1 ' },
  { title: 'card 2 ' },
  { title: 'card 3 ' }
]

export default function () {
  return (
    <div>
      <DraggableList list={list}></DraggableList>
    </div>
  )
}

function DraggableList({ list }) {
  const { dragList, createDropperProps, createDraggerProps } = useDraggable(list);

  return (
    dragList.map((item, i) => {
      if (item.type === 'BAR') {
        return <Bar id={i} {...createDropperProps(i)} key={item.id}></Bar>
      } else {
        return <Draggable {...createDraggerProps(i)}>
          <Card {...item.data}></Card>
        </Draggable>
      }
    })
  )
}

function cls(def, ...conditions) {
  const list = [def];
  conditions.forEach(cond => {
    if (cond[0]) {
      list.push(cond[1]);
    }
  });
  return list.join(" ");
}

function Draggable({ children, eventHandlers, dragging, id }) {
  return (
    <div {...eventHandlers} draggable={true}
      className={cls("draggable", [dragging === id, "dragging"])}>
      {children}
    </div>
  )
}
function Bar({ id, dragging, draggOver, eventHandlers }) {
  console.log(id)
  if (id === dragging + 1) {
    return null;
  }

  return (
    <div {...eventHandlers} className={cls("draggable--bar", [draggOver === id, "dragover"])}>
      <div
        className="inner"
        style={{
          height: id === draggOver ? "80px" : "0px"
        }}
      />
    </div>
  )
}

function Card({ title }) {
  return (
    <div >
      <span>{title}</span>
    </div>
  )
}