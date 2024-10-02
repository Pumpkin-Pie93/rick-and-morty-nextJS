import {getLayout} from "@/components/layout/Layout";

const NotFound = () => <div><span style={{color:'red',fontWeight:'bold'}}>404</span> page not found</div>

NotFound.getLayout = getLayout
export default NotFound