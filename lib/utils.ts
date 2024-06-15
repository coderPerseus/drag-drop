import { type ClassValue, clsx } from "clsx";
import { customAlphabet } from "nanoid";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 生成唯一的数字ID【默认长度为15位】
 * @returns
 */
export const genUniqueId = (bit: number = 15) => {
  const nanoid = customAlphabet("0123456789", bit);
  const numericId = nanoid();
  return numericId;
};

export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as unknown as T;
  }

  if (obj instanceof Array) {
    const arrCopy = [] as unknown as T;
    (obj as unknown as any[]).forEach((item, index) => {
      (arrCopy as unknown as any[])[index] = deepClone(item);
    });
    return arrCopy;
  }

  if (obj instanceof Object) {
    const objCopy = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        (objCopy as any)[key] = deepClone((obj as any)[key]);
      }
    }
    return objCopy;
  }

  throw new Error("Unable to copy object! Its type isn't supported.");
}
