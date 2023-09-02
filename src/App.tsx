// import { DndContext, closestCenter } from "@dnd-kit/core"
// import {
//   SortableContext,
//   verticalListSortingStrategy,
//   arrayMove,
// } from "@dnd-kit/sortable"

import ReactDragList from 'react-drag-list'

import { useState, useEffect } from "react"
import './App.css'
import User from "./User"

function App() {

  const [itemList, setItemList] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Sarah" },
    { id: 3, name: "Paul" },
  ])


  console.log("itemList",itemList)

  useEffect(() => {
    console.log("서버로 업뎃")
  }, [itemList])

  // 드래그해서 변경된 리스트를 브라우저상에 나타나게 만드는것
  const handleUpdate = (evt: any, updated: any) => {
    setItemList([...updated])
  }
  
  // 브라우저 상에 보여지는 데이터 리스트
    const dragList = (record: any, index: any) => (
    // 여기서 record는 dataSource로 itemList이다.
    <div key={index} className="user-card">
      <div className="move">
        :::
      </div>
      <div>{record.name}</div>
      <div className="btn-container">
        <button onClick={() => alert("변경")}>
          변경
        </button>
        <button onClick={() => alert("삭제")}>
          삭제
        </button>
      </div>
    </div>
  )

  // const handleDragEnd = (event: any) => {
  //   const { active, over } = event
  //   console.log("active", active.id)
  //   console.log("over", over.id)

  //   if (!active.id !== over.id) {
  //     setPeople((people) => {
  //       const oldIndex = people.findIndex((person) => person.id === active.id)
  //       const newIndex = people.findIndex((person) => person.id === over.id)

  //       console.log(arrayMove(people, oldIndex, newIndex))
  //       return arrayMove(people, oldIndex, newIndex)
  //     })
  //   }

  //   console.log("drag end")
  // }

  return (
    <div className="App">
      <div className="container">
        <p>dnd test</p>

        <ReactDragList
          dataSource={itemList}//렌더링할 데이터 레코드 배열
          rowKey='name'//렌더링할 행 키
          row={dragList}  //렌더링할 행 데이터
          handles={false} //드래그 핸들 표시
          className='simple-drag'
          rowClassName='simple-drag-row'
          onUpdate={handleUpdate} //정렬 목록이 변경될 때 호출됨
        />

        {/* <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <h1>Users List</h1>
          <SortableContext
            items={people}
            strategy={verticalListSortingStrategy}
          >
            {people.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </SortableContext>
        </DndContext> */}
      </div>
      
    </div>
  );
}

export default App;
