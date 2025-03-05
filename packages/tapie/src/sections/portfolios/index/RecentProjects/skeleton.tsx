import { Skeleton, useMediaQuery } from '@tapie-kr/inspire-react';

export default function RecentProjectCardSkeleton() {
  const isMobile = useMediaQuery();

  return (
    <Skeleton
      fullWidth
      height={isMobile ? 200 : 250}
    />
  );
}
