// declare module 'aos' {
//   const AOS: {
//     init: (options?: any) => void;
//   };
//   export default AOS;
// }


declare module 'aos' {
  export interface AOSOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    // سایر تنظیمات مورد نیاز رو می‌توانید اضافه کنید
  }

  const AOS: {
    init: (options?: AOSOptions) => void;
  };

  export default AOS;
}
