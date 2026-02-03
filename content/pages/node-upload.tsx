import type { JSX } from "react"

export const nodeUploadContentKo: JSX.Element = (
  <div className="space-y-8">
    <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
      캔버스에 원하는 이미지 파일을 드래그 & 드롭하거나 이미지 파일 링크를 복사 & 붙여넣기를 통해 파일을 업로드할 수 있습니다. 업로드된 파일은 에이전트에게 참고 정보를 제공하거나 생성 작업에 자유롭게 활용할 수 있습니다.
    </p>

    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">드래그 & 드롭</h3>
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
          {/* @ts-ignore */}
          <video className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upload%20file_drag%26drop-a27qUoeff9los1QMPQHz9l4QFQBmp6.webm"} type="video/webm" />
            브라우저가 비디오를 지원하지 않습니다.
          </video>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">복사 & 붙여넣기</h3>
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
          {/* @ts-ignore */}
          <video className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upload%20file_copylink-H2c1zu7ihTUfiPby69l1ihPQkg8USt.webm"} type="video/webm" />
            브라우저가 비디오를 지원하지 않습니다.
          </video>
        </div>
      </div>
    </div>
  </div>
)

export const nodeUploadContentEn: JSX.Element = (
  <div className="space-y-8">
    <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-gray-300 pl-4">
      You can upload image files to the canvas through drag & drop or by copying and pasting image file links. Uploaded files can be freely used to provide reference information to the agent or for generation tasks.
    </p>

    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Drag & Drop</h3>
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
          {/* @ts-ignore */}
          <video className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upload%20file_drag%26drop-a27qUoeff9los1QMPQHz9l4QFQBmp6.webm"} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Copy & Paste</h3>
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
          {/* @ts-ignore */}
          <video className="w-full h-full object-contain" autoPlay loop muted playsInline>
            <source src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upload%20file_copylink-H2c1zu7ihTUfiPby69l1ihPQkg8USt.webm"} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>
)
