import { LinearProgress } from "@mui/material"
import Loading from "./Loading"
import NotFound from "./NotFound"
import React  from "react"
const CheckStatus = ({status,children})=>{

  if (status.isLoading) {
    return <Loading />
  }
  else if(status.isFetching){
    return <LinearProgress />
  }
  else if(status.isError){
    return <NotFound />
  }
  else if(status.isSuccess) {
    return children
  }else {
    return <NotFound />
  }
}

export {CheckStatus} 