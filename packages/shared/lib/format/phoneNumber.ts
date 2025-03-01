import { Regex } from "~/constants/regex";

/**
 * 전화번호를 국제전화번호(+82)로 변환합니다.
 * @param phoneNumber 
 * @returns 전화번호
 */
export function phoneNumberToInternational(phoneNumber: string | undefined) {
    if (!phoneNumber) {
      return undefined;
    }

    return '+82' + phoneNumber.slice(1);
}

/**
 * 국제전화번호를 일반전화번호로 변환합니다.
 * @param phoneNumber 
 * @returns 전화번호
 */
export function internationalToPhoneNumber(phoneNumber: string | undefined) {
    if (!phoneNumber) {
      return undefined;
    }

    return '0' + phoneNumber.slice(3);
}

/**
 * 전화번호가 올바른 형식인지 확인합니다.
 * @param phoneNumber
 * @returns boolean
 */
export function isValidPhoneNumber(phoneNumber: string | undefined) {
    if (!phoneNumber || phoneNumber.length === 0) {
      return false;
    }

    return Regex.phoneNumber.test(phoneNumber);
}