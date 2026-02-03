"use client"

import type { JSX } from "react"
import { Eraser, Scissors, Layers, Sparkles, Expand, PaintBucket } from "lucide-react"

interface EditFeaturesContentProps {
  isKorean: boolean
  onPageChange: (pageId: string) => void
}

export const getEditFeaturesContent = (
  isKorean: boolean,
  onPageChange?: (pageId: string) => void,
): { title: string; content: JSX.Element } => ({
  title: isKorean ? "편집 기능" : "Edit Features",
  content: (
    <div className="space-y-8">
      <div>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {isKorean
            ? "젠프레소는 다양한 AI 기반 편집 기능을 제공합니다. 원하는 기능을 선택하여 자세한 사용 방법을 확인하세요."
            : "GenPresso provides various AI-powered editing features. Select the feature you want to learn more about."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Background Removal */}
        <button onClick={() => onPageChange?.("bg-removal")} className="group block text-left w-full">
          <div className="border rounded-lg p-6 hover:border-[#4FA8D8] transition-all duration-200 h-full cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Eraser className="w-6 h-6 text-[#4FA8D8]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#4FA8D8] transition-colors">
                  {isKorean ? "배경 제거" : "Background Removal"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isKorean ? "이미지에서 배경을 자동으로 제거합니다" : "Automatically remove backgrounds from images"}
                </p>
              </div>
            </div>
          </div>
        </button>

        {/* Object Separation */}
        <button onClick={() => onPageChange?.("object-separation")} className="group block text-left w-full">
          <div className="border rounded-lg p-6 hover:border-[#4FA8D8] transition-all duration-200 h-full cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Scissors className="w-6 h-6 text-[#4FA8D8]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#4FA8D8] transition-colors">
                  {isKorean ? "개체 분리" : "Object Separation"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isKorean ? "이미지에서 특정 개체를 분리합니다" : "Separate specific objects from images"}
                </p>
              </div>
            </div>
          </div>
        </button>

        {/* Object Composition */}
        <button onClick={() => onPageChange?.("object-composition")} className="group block text-left w-full">
          <div className="border rounded-lg p-6 hover:border-[#4FA8D8] transition-all duration-200 h-full cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6 text-[#4FA8D8]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#4FA8D8] transition-colors">
                  {isKorean ? "개체 합성" : "Object Composition"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isKorean ? "여러 개체를 하나의 이미지로 합성합니다" : "Compose multiple objects into one image"}
                </p>
              </div>
            </div>
          </div>
        </button>

        {/* Upscale */}
        <button onClick={() => onPageChange?.("upscale")} className="group block text-left w-full">
          <div className="border rounded-lg p-6 hover:border-[#4FA8D8] transition-all duration-200 h-full cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-[#4FA8D8]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#4FA8D8] transition-colors">
                  {isKorean ? "업스케일" : "Upscale"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isKorean ? "이미지 해상도를 향상시킵니다" : "Enhance image resolution and quality"}
                </p>
              </div>
            </div>
          </div>
        </button>

        {/* Outpainting */}
        <button onClick={() => onPageChange?.("outpainting")} className="group block text-left w-full">
          <div className="border rounded-lg p-6 hover:border-[#4FA8D8] transition-all duration-200 h-full cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Expand className="w-6 h-6 text-[#4FA8D8]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#4FA8D8] transition-colors">
                  {isKorean ? "아웃페인팅" : "Outpainting"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isKorean
                    ? "이미지 경계를 확장하여 새로운 콘텐츠를 생성합니다"
                    : "Extend image boundaries with new content"}
                </p>
              </div>
            </div>
          </div>
        </button>

        {/* Inpainting */}
        <button onClick={() => onPageChange?.("inpainting")} className="group block text-left w-full">
          <div className="border rounded-lg p-6 hover:border-[#4FA8D8] transition-all duration-200 h-full cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <PaintBucket className="w-6 h-6 text-[#4FA8D8]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#4FA8D8] transition-colors">
                  {isKorean ? "인페인팅" : "Inpainting"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isKorean
                    ? "이미지의 특정 부분을 제거하거나 수정합니다"
                    : "Remove or modify specific parts of images"}
                </p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  ),
})
