import { MemberUnit } from '@tapie-kr/api-client/enum';

export function memberEnumKorean(data: MemberUnit) {
  switch (data) {
    case MemberUnit.DEVELOPER:
      return '개발자';

    case MemberUnit.DESIGNER:
      return '디자이너';
  }
}
