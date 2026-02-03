import type { JSX } from "react"
import { getIntroductionContent } from "./pages/introduction"
import { getQuickStartContent } from "./pages/quick-start"
import { getCanvasControlContent } from "./pages/canvas-control"
import { getAgenticAIContent } from "./pages/agentic-ai"
import { agentTemplateContentKo, agentTemplateContentEn } from "./pages/agent-template"
import { customAgentContentKo, customAgentContentEn } from "./pages/custom-agent"
import { getAgentTipsContent } from "./pages/agent-tips"
import { getNodeContent } from "./pages/node"
import { nodeTextContentKo, nodeTextContentEn } from "./pages/node-text"
import { nodeImageContentKo, nodeImageContentEn } from "./pages/node-image"
import { nodeVideoContentKo, nodeVideoContentEn } from "./pages/node-video"
import { node3DContentKo, node3DContentEn } from "./pages/node-3d"
import { nodeUploadContentKo, nodeUploadContentEn } from "./pages/node-upload"
import { nodeResultContentKo, nodeResultContentEn } from "./pages/node-result"
import { getEditFeaturesContent } from "./pages/edit-features"
import { getGalleryContent } from "./pages/gallery"
import { getProjectManagementContent } from "./pages/project-management"
import { getSettingsContent } from "./pages/settings"
import { getFormatTypesContent } from "./pages/format-types"
import { getModelListContent } from "./pages/model-list"
import { getFAQContent } from "./pages/faq"
import { getTroubleshootingContent } from "./pages/troubleshooting"
import { getChangelogContent } from "./pages/changelog"
import { getPreviousVersionsContent } from "./pages/previous-versions"
import { bgRemovalContentKo, bgRemovalContentEn } from "./pages/bg-removal"
import { objectSeparationContentKo, objectSeparationContentEn } from "./pages/object-separation"
import { objectCompositionContentKo, objectCompositionContentEn } from "./pages/object-composition"
import { upscaleContentKo, upscaleContentEn } from "./pages/upscale"
import { outpaintingContentKo, outpaintingContentEn } from "./pages/outpainting"
import { inpaintingContentKo, inpaintingContentEn } from "./pages/inpainting"

export const getContentMap = (
  isKorean: boolean,
  onPageChange?: (pageId: string) => void,
): Record<string, { title: string; content: JSX.Element }> => {
  return {
    introduction: getIntroductionContent(isKorean),
    "quick-start": getQuickStartContent(isKorean),
    canvas_control: getCanvasControlContent(isKorean),
    agentic_ai: getAgenticAIContent(isKorean),
    agent_template: {
      title: isKorean ? "에이전트 템플릿" : "Agent Template",
      content: isKorean ? agentTemplateContentKo : agentTemplateContentEn,
    },
    custom_agent: {
      title: isKorean ? "사용자 커스텀 에이전트" : "Custom Agent",
      content: isKorean ? customAgentContentKo : customAgentContentEn,
    },
    agent_tips: getAgentTipsContent(isKorean),
    node: getNodeContent(isKorean),
    node_text: {
      title: isKorean ? "텍스트" : "Text",
      content: isKorean ? nodeTextContentKo : nodeTextContentEn,
    },
    node_image: {
      title: isKorean ? "이미지" : "Image",
      content: isKorean ? nodeImageContentKo : nodeImageContentEn,
    },
    node_video: {
      title: isKorean ? "비디오" : "Video",
      content: isKorean ? nodeVideoContentKo : nodeVideoContentEn,
    },
    node_3d: {
      title: isKorean ? "3D" : "3D",
      content: isKorean ? node3DContentKo : node3DContentEn,
    },
    node_upload: {
      title: isKorean ? "업로드 파일" : "Upload File",
      content: isKorean ? nodeUploadContentKo : nodeUploadContentEn,
    },
    node_result: {
      title: isKorean ? "생성 결과물" : "Generated Results",
      content: isKorean ? nodeResultContentKo : nodeResultContentEn,
    },
    edit_features: getEditFeaturesContent(isKorean, onPageChange),
    bg_removal: {
      title: isKorean ? "배경제거" : "Background Removal",
      content: isKorean ? bgRemovalContentKo : bgRemovalContentEn,
    },
    object_separation: {
      title: isKorean ? "개체분리" : "Object Separation",
      content: isKorean ? objectSeparationContentKo : objectSeparationContentEn,
    },
    object_composition: {
      title: isKorean ? "개체합성" : "Object Composition",
      content: isKorean ? objectCompositionContentKo : objectCompositionContentEn,
    },
    upscale: {
      title: isKorean ? "업스케일" : "Upscale",
      content: isKorean ? upscaleContentKo : upscaleContentEn,
    },
    outpainting: {
      title: isKorean ? "아웃페인팅" : "Outpainting",
      content: isKorean ? outpaintingContentKo : outpaintingContentEn,
    },
    inpainting: {
      title: isKorean ? "인페인팅" : "Inpainting",
      content: isKorean ? inpaintingContentKo : inpaintingContentEn,
    },
    gallery: getGalleryContent(isKorean),
    project_management: getProjectManagementContent(isKorean),
    settings: getSettingsContent(isKorean),
    format_types: getFormatTypesContent(isKorean),
    model_list: getModelListContent(isKorean),
    frequently_asked: getFAQContent(isKorean),
    troubleshooting: getTroubleshootingContent(isKorean),
    latest_updates: getChangelogContent(isKorean),
    previous_versions: getPreviousVersionsContent(isKorean),
  }
}
