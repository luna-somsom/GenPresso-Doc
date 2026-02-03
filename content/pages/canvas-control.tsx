import type { JSX } from "react"
import Image from "next/image"

export const getCanvasControlContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "캔버스 조작" : "Canvas Control",
  content: (
    <div className="space-y-8">
      {/* Intro Section */}
      <div className="border-l-2 border-gray-300 pl-6">
        <p className="text-base leading-relaxed text-gray-700">
          {isKorean
            ? "젠프레소의 작업 공간은 무한 캔버스 형태로 되어 있습니다. 하나의 화면 안에 여러 노드(작업 단위)를 자유롭게 배치하고 연결할 수 있기 때문에, 필요에 따라 화면을 이동하거나 확대·축소하면서 전체 흐름을 조망할 수 있습니다."
            : "GenPresso's workspace is designed as an infinite canvas. You can freely place and connect multiple nodes (work units) within a single screen, allowing you to navigate, zoom in and out, and view the entire workflow as needed."}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Pan Card */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">{isKorean ? "화면 이동" : "Pan Canvas"}</h3>
          <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
            <Image
              src="/images/canvas-pan.png"
              alt={isKorean ? "화면 이동 조작법" : "Canvas panning controls"}
              width={1376}
              height={617}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-600 pl-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              {isKorean ? "마우스 휠 클릭" : "Mouse wheel click"}
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              {isKorean ? "스페이스 + 좌클릭" : "Space + left click"}
            </div>
          </div>
        </div>

        {/* Zoom Card */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">{isKorean ? "확대·축소" : "Zoom In/Out"}</h3>
          <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
            <Image
              src="/images/canvas-zoom.png"
              alt={isKorean ? "확대·축소 조작법" : "Zoom controls"}
              width={1376}
              height={617}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-600 pl-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              {isKorean ? "Alt/Cmd + 마우스 휠" : "Alt/Cmd + mouse wheel"}
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-gray-200">
        {/* Focus View Card */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">{isKorean ? "포커스뷰" : "Focus View"}</h3>
          <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-50 aspect-video">
            {/* @ts-ignore */}
            <video
              key="canvas-focus-view"
              className="w-full h-full object-contain"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%91%E1%85%A9%E1%84%8F%E1%85%A5%E1%84%89%E1%85%B3%E1%84%87%E1%85%B2-ch3wQrwslgHAKiFc8LFjZwbS7ZyhgS.webm" type="video/webm" />
              {isKorean ? "브라우저가 비디오를 지원하지 않습니다." : "Your browser does not support the video tag."}
            </video>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {isKorean
              ? "특정 노드나 영역에 집중해야 할 때 사용합니다. 선택한 노드를 중심으로 화면이 자동으로 정렬되어 작업에 집중할 수 있습니다."
              : "Use this when you need to focus on a specific node or area. The screen automatically aligns around the selected node, allowing you to concentrate on your work."}
          </p>
          <div className="flex flex-col gap-2 text-sm text-gray-600 pl-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              {isKorean ? "노드 선택 후 'F' 키 입력" : "Select node and press 'F' key"}
            </div>
          </div>
        </div>

        {/* Minimap Card */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">{isKorean ? "미니맵" : "Minimap"}</h3>
          <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%86%E1%85%B5%E1%84%82%E1%85%B5%E1%84%86%E1%85%A2%E1%86%B8-I8bUWeDHkKPX3Q3dmGJkE3kCDigrJf.png"
              alt={isKorean ? "미니맵 기능 시연" : "Minimap feature demonstration"}
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {isKorean
              ? "전체 캔버스의 축소된 버전을 보여줍니다. 미니맵에서 현재 뷰 위치를 확인하고 드래그해 빠르게 이동할 수 있어, 대규모 프로젝트에서 현재 위치 파악이 용이합니다."
              : "Displays a miniaturized version of the entire canvas. You can check your current view position in the minimap and drag to navigate quickly, making it easy to track your location in large projects."}
          </p>
        </div>
      </div>
    </div>
  ),
})
