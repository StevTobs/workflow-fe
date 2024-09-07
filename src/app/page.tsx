import ListRender from "@/components/ListRender";
import ObjectRender from "@/components/ObjectRender";
import TaskList from "@/components/TaskList"; // Assuming TaskList.js is in the same directory
import TableComp from "@/components/exercise2/TableComp";






const App = () => {
  const task = {
    title: "เบิกงบ",
    amout: 20,
    
  }
  return (
    <div>
      
      < ListRender />
      < TaskList />
      {/* <TableComp /> */}
      <ObjectRender title={task.title} />

     
    </div>
  );
};




export default App;