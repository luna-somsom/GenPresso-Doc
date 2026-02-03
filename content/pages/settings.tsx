import type { JSX } from "react"

export const getSettingsContent = (isKorean: boolean): { title: string; content: JSX.Element } => ({
  title: isKorean ? "설정" : "Settings",
  content: (
    <div className="space-y-6">
      <div>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          {isKorean
            ? "설정 페이지에서는 프로필, 구독, 크레딧, 쿠폰 등 계정과 사용 현황을 한 곳에서 관리할 수 있습니다."
            : "The Settings page allows you to manage your account and usage in one place, including profile, subscription, credits, and coupons."}
        </p>
        <div className="rounded-lg overflow-hidden border border-border">
          <img
            src="/images/settings-page.png"
            alt={isKorean ? "설정 페이지" : "Settings Page"}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">
          {isKorean ? "관리 항목" : "Management Items"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">
              {isKorean ? "프로필" : "Profile"}
            </h4>
            <p className="text-sm text-muted-foreground">
              {isKorean
                ? "개인 정보, 프로필 이미지, 관심사 등을 관리합니다."
                : "Manage personal information, profile image, and interests."}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">
              {isKorean ? "구독" : "Subscription"}
            </h4>
            <p className="text-sm text-muted-foreground">
              {isKorean
                ? "구독 요금제를 변경하거나 취소할 수 있습니다."
                : "Change or cancel your subscription plan."}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">
              {isKorean ? "크레딧" : "Credits"}
            </h4>
            <p className="text-sm text-muted-foreground">
              {isKorean
                ? "현재 잔액과 사용 내역을 확인하고 충전할 수 있습니다."
                : "Check balance and usage history, and purchase credits."}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">
              {isKorean ? "쿠폰" : "Coupon"}
            </h4>
            <p className="text-sm text-muted-foreground">
              {isKorean
                ? "쿠폰 코드를 입력하여 할인이나 보너스 크레딧을 받을 수 있습니다."
                : "Enter coupon codes to receive discounts or bonus credits."}
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
})
