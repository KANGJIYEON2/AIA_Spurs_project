
import { AutoAwesome } from "@mui/icons-material"
import Image from "next/image"
import { Button } from "@mui/material"
import ThemeRegistry from "../theme/ThemeRegistry"


export default function Home() {
  return (
    <main>
      <Image
        src="/pan.png"
        width={900}
        height={300} alt={''}

      /><br />
      <ThemeRegistry >
        <Button variant="contained" color={"secondary"}>이벤트참여하기</Button><br />
      </ThemeRegistry>
    </main>
  )
}
