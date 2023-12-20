import { AlertTriangle, Ban, CheckCheck, Info } from "lucide-react"
import { Alart } from "./components/UI/Alart"

function App() {


  return (
    <>
        <div style={{padding:"2rem"}}>
        <Alart 
        type={'alert-danger'} 
        icon={<Ban size={20}/>}  
        title={'Something went wrong'}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."/>


        {/*alert-default */}
        <Alart 
        type={'alert-default'} 
        icon={<Ban size={20}/>}  
        title={'Upgrade your plan'}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."/>


        {/* alert-info */}
        <Alart 
        type={'alert-info'} 
        icon={<Info size={20} />}  
        title={'Note'}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."/>


        {/* alert-success */}
        <Alart 
        type={'alert-success'} 
        icon={<CheckCheck size={20} />}  
        title={'Your order has been processed'}
        description={<>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
          </>
        }/>


        {/* alert-warning */}
        <Alart 
        type={'alert-warning'} 
        icon={<AlertTriangle size={20} />}  
        title={'Tips & Tricks'}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."/>



        </div>
    </>
  )
}

export default App
