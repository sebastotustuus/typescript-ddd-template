/* eslint-disable @typescript-eslint/no-explicit-any */
// interface Newable<T> extends Function {
//     new (...args: any[]): T;
//   }

// export const registeredInjectables: Newable<any>[] = [];

// export const Injectable = () => {    
//     return (target: Newable<any>): Newable<any> => {
        
//         registeredInjectables.push(target);
//         return target;
//     };
// };

export const MyAppService = (): ClassDecorator => {
    return <TFunction extends Function>(target: TFunction): TFunction => {
      return target
    }
  }