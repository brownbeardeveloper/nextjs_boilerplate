/**
 * Validate if the provided email address is in a correct format
 * @param email The email address to validate
 * @returns `true` if the email is valid, `false` otherwise
 */
export function validateEmail(email: string) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}