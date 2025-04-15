
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model CompanySettings
 * 
 */
export type CompanySettings = $Result.DefaultSelection<Prisma.$CompanySettingsPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model EmployeeSchedule
 * 
 */
export type EmployeeSchedule = $Result.DefaultSelection<Prisma.$EmployeeSchedulePayload>
/**
 * Model AttendanceRecord
 * 
 */
export type AttendanceRecord = $Result.DefaultSelection<Prisma.$AttendanceRecordPayload>
/**
 * Model Leave
 * 
 */
export type Leave = $Result.DefaultSelection<Prisma.$LeavePayload>
/**
 * Model Holiday
 * 
 */
export type Holiday = $Result.DefaultSelection<Prisma.$HolidayPayload>
/**
 * Model Visitor
 * 
 */
export type Visitor = $Result.DefaultSelection<Prisma.$VisitorPayload>
/**
 * Model VisitorRecord
 * 
 */
export type VisitorRecord = $Result.DefaultSelection<Prisma.$VisitorRecordPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RecordType: {
  CLOCK_IN: 'CLOCK_IN',
  CLOCK_OUT: 'CLOCK_OUT',
  BREAK_START: 'BREAK_START',
  BREAK_END: 'BREAK_END',
  OVERTIME_START: 'OVERTIME_START',
  OVERTIME_END: 'OVERTIME_END'
};

export type RecordType = (typeof RecordType)[keyof typeof RecordType]


export const RecordStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  MODIFIED: 'MODIFIED'
};

export type RecordStatus = (typeof RecordStatus)[keyof typeof RecordStatus]


export const LeaveType: {
  VACATION: 'VACATION',
  SICK: 'SICK',
  PERSONAL: 'PERSONAL',
  MATERNITY: 'MATERNITY',
  PATERNITY: 'PATERNITY',
  BEREAVEMENT: 'BEREAVEMENT',
  UNPAID: 'UNPAID',
  OTHER: 'OTHER'
};

export type LeaveType = (typeof LeaveType)[keyof typeof LeaveType]


export const LeaveStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED'
};

export type LeaveStatus = (typeof LeaveStatus)[keyof typeof LeaveStatus]


export const UserRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  EMPLOYEE: 'EMPLOYEE',
  RECEPTIONIST: 'RECEPTIONIST'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type RecordType = $Enums.RecordType

export const RecordType: typeof $Enums.RecordType

export type RecordStatus = $Enums.RecordStatus

export const RecordStatus: typeof $Enums.RecordStatus

export type LeaveType = $Enums.LeaveType

export const LeaveType: typeof $Enums.LeaveType

export type LeaveStatus = $Enums.LeaveStatus

export const LeaveStatus: typeof $Enums.LeaveStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companySettings`: Exposes CRUD operations for the **CompanySettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanySettings
    * const companySettings = await prisma.companySettings.findMany()
    * ```
    */
  get companySettings(): Prisma.CompanySettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeSchedule`: Exposes CRUD operations for the **EmployeeSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeSchedules
    * const employeeSchedules = await prisma.employeeSchedule.findMany()
    * ```
    */
  get employeeSchedule(): Prisma.EmployeeScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendanceRecord`: Exposes CRUD operations for the **AttendanceRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceRecords
    * const attendanceRecords = await prisma.attendanceRecord.findMany()
    * ```
    */
  get attendanceRecord(): Prisma.AttendanceRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leave`: Exposes CRUD operations for the **Leave** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leaves
    * const leaves = await prisma.leave.findMany()
    * ```
    */
  get leave(): Prisma.LeaveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.holiday`: Exposes CRUD operations for the **Holiday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holidays
    * const holidays = await prisma.holiday.findMany()
    * ```
    */
  get holiday(): Prisma.HolidayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitor`: Exposes CRUD operations for the **Visitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visitors
    * const visitors = await prisma.visitor.findMany()
    * ```
    */
  get visitor(): Prisma.VisitorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitorRecord`: Exposes CRUD operations for the **VisitorRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisitorRecords
    * const visitorRecords = await prisma.visitorRecord.findMany()
    * ```
    */
  get visitorRecord(): Prisma.VisitorRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Company: 'Company',
    CompanySettings: 'CompanySettings',
    Department: 'Department',
    Employee: 'Employee',
    Device: 'Device',
    Schedule: 'Schedule',
    EmployeeSchedule: 'EmployeeSchedule',
    AttendanceRecord: 'AttendanceRecord',
    Leave: 'Leave',
    Holiday: 'Holiday',
    Visitor: 'Visitor',
    VisitorRecord: 'VisitorRecord',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "companySettings" | "department" | "employee" | "device" | "schedule" | "employeeSchedule" | "attendanceRecord" | "leave" | "holiday" | "visitor" | "visitorRecord" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      CompanySettings: {
        payload: Prisma.$CompanySettingsPayload<ExtArgs>
        fields: Prisma.CompanySettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanySettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanySettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload>
          }
          findFirst: {
            args: Prisma.CompanySettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanySettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload>
          }
          findMany: {
            args: Prisma.CompanySettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload>[]
          }
          create: {
            args: Prisma.CompanySettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload>
          }
          createMany: {
            args: Prisma.CompanySettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanySettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload>[]
          }
          delete: {
            args: Prisma.CompanySettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload>
          }
          update: {
            args: Prisma.CompanySettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload>
          }
          deleteMany: {
            args: Prisma.CompanySettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanySettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanySettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload>[]
          }
          upsert: {
            args: Prisma.CompanySettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySettingsPayload>
          }
          aggregate: {
            args: Prisma.CompanySettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanySettings>
          }
          groupBy: {
            args: Prisma.CompanySettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanySettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanySettingsCountArgs<ExtArgs>
            result: $Utils.Optional<CompanySettingsCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      EmployeeSchedule: {
        payload: Prisma.$EmployeeSchedulePayload<ExtArgs>
        fields: Prisma.EmployeeScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSchedulePayload>
          }
          findFirst: {
            args: Prisma.EmployeeScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSchedulePayload>
          }
          findMany: {
            args: Prisma.EmployeeScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSchedulePayload>[]
          }
          create: {
            args: Prisma.EmployeeScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSchedulePayload>
          }
          createMany: {
            args: Prisma.EmployeeScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSchedulePayload>[]
          }
          delete: {
            args: Prisma.EmployeeScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSchedulePayload>
          }
          update: {
            args: Prisma.EmployeeScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSchedulePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSchedulePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeSchedulePayload>
          }
          aggregate: {
            args: Prisma.EmployeeScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeSchedule>
          }
          groupBy: {
            args: Prisma.EmployeeScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeScheduleCountAggregateOutputType> | number
          }
        }
      }
      AttendanceRecord: {
        payload: Prisma.$AttendanceRecordPayload<ExtArgs>
        fields: Prisma.AttendanceRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          findFirst: {
            args: Prisma.AttendanceRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          findMany: {
            args: Prisma.AttendanceRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[]
          }
          create: {
            args: Prisma.AttendanceRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          createMany: {
            args: Prisma.AttendanceRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[]
          }
          delete: {
            args: Prisma.AttendanceRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          update: {
            args: Prisma.AttendanceRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          deleteMany: {
            args: Prisma.AttendanceRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[]
          }
          upsert: {
            args: Prisma.AttendanceRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          aggregate: {
            args: Prisma.AttendanceRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceRecord>
          }
          groupBy: {
            args: Prisma.AttendanceRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceRecordCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceRecordCountAggregateOutputType> | number
          }
        }
      }
      Leave: {
        payload: Prisma.$LeavePayload<ExtArgs>
        fields: Prisma.LeaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          findFirst: {
            args: Prisma.LeaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          findMany: {
            args: Prisma.LeaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>[]
          }
          create: {
            args: Prisma.LeaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          createMany: {
            args: Prisma.LeaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>[]
          }
          delete: {
            args: Prisma.LeaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          update: {
            args: Prisma.LeaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          deleteMany: {
            args: Prisma.LeaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>[]
          }
          upsert: {
            args: Prisma.LeaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          aggregate: {
            args: Prisma.LeaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeave>
          }
          groupBy: {
            args: Prisma.LeaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveCountAggregateOutputType> | number
          }
        }
      }
      Holiday: {
        payload: Prisma.$HolidayPayload<ExtArgs>
        fields: Prisma.HolidayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HolidayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HolidayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          findFirst: {
            args: Prisma.HolidayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HolidayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          findMany: {
            args: Prisma.HolidayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>[]
          }
          create: {
            args: Prisma.HolidayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          createMany: {
            args: Prisma.HolidayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HolidayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>[]
          }
          delete: {
            args: Prisma.HolidayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          update: {
            args: Prisma.HolidayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          deleteMany: {
            args: Prisma.HolidayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HolidayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HolidayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>[]
          }
          upsert: {
            args: Prisma.HolidayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          aggregate: {
            args: Prisma.HolidayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoliday>
          }
          groupBy: {
            args: Prisma.HolidayGroupByArgs<ExtArgs>
            result: $Utils.Optional<HolidayGroupByOutputType>[]
          }
          count: {
            args: Prisma.HolidayCountArgs<ExtArgs>
            result: $Utils.Optional<HolidayCountAggregateOutputType> | number
          }
        }
      }
      Visitor: {
        payload: Prisma.$VisitorPayload<ExtArgs>
        fields: Prisma.VisitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          findFirst: {
            args: Prisma.VisitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          findMany: {
            args: Prisma.VisitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          create: {
            args: Prisma.VisitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          createMany: {
            args: Prisma.VisitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          delete: {
            args: Prisma.VisitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          update: {
            args: Prisma.VisitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          deleteMany: {
            args: Prisma.VisitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          upsert: {
            args: Prisma.VisitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          aggregate: {
            args: Prisma.VisitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitor>
          }
          groupBy: {
            args: Prisma.VisitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitorCountArgs<ExtArgs>
            result: $Utils.Optional<VisitorCountAggregateOutputType> | number
          }
        }
      }
      VisitorRecord: {
        payload: Prisma.$VisitorRecordPayload<ExtArgs>
        fields: Prisma.VisitorRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitorRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitorRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorRecordPayload>
          }
          findFirst: {
            args: Prisma.VisitorRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitorRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorRecordPayload>
          }
          findMany: {
            args: Prisma.VisitorRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorRecordPayload>[]
          }
          create: {
            args: Prisma.VisitorRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorRecordPayload>
          }
          createMany: {
            args: Prisma.VisitorRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitorRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorRecordPayload>[]
          }
          delete: {
            args: Prisma.VisitorRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorRecordPayload>
          }
          update: {
            args: Prisma.VisitorRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorRecordPayload>
          }
          deleteMany: {
            args: Prisma.VisitorRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitorRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitorRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorRecordPayload>[]
          }
          upsert: {
            args: Prisma.VisitorRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorRecordPayload>
          }
          aggregate: {
            args: Prisma.VisitorRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitorRecord>
          }
          groupBy: {
            args: Prisma.VisitorRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitorRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitorRecordCountArgs<ExtArgs>
            result: $Utils.Optional<VisitorRecordCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    companySettings?: CompanySettingsOmit
    department?: DepartmentOmit
    employee?: EmployeeOmit
    device?: DeviceOmit
    schedule?: ScheduleOmit
    employeeSchedule?: EmployeeScheduleOmit
    attendanceRecord?: AttendanceRecordOmit
    leave?: LeaveOmit
    holiday?: HolidayOmit
    visitor?: VisitorOmit
    visitorRecord?: VisitorRecordOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    departments: number
    employees: number
    devices: number
    schedules: number
    attendanceRecords: number
    visitors: number
    users: number
    holidays: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | CompanyCountOutputTypeCountDepartmentsArgs
    employees?: boolean | CompanyCountOutputTypeCountEmployeesArgs
    devices?: boolean | CompanyCountOutputTypeCountDevicesArgs
    schedules?: boolean | CompanyCountOutputTypeCountSchedulesArgs
    attendanceRecords?: boolean | CompanyCountOutputTypeCountAttendanceRecordsArgs
    visitors?: boolean | CompanyCountOutputTypeCountVisitorsArgs
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
    holidays?: boolean | CompanyCountOutputTypeCountHolidaysArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountAttendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountVisitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountHolidaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HolidayWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    employees: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | DepartmentCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    attendanceRecords: number
    schedules: number
    leaves: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendanceRecords?: boolean | EmployeeCountOutputTypeCountAttendanceRecordsArgs
    schedules?: boolean | EmployeeCountOutputTypeCountSchedulesArgs
    leaves?: boolean | EmployeeCountOutputTypeCountLeavesArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAttendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeScheduleWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    attendanceRecords: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendanceRecords?: boolean | DeviceCountOutputTypeCountAttendanceRecordsArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountAttendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    employeeSchedules: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employeeSchedules?: boolean | ScheduleCountOutputTypeCountEmployeeSchedulesArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountEmployeeSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeScheduleWhereInput
  }


  /**
   * Count Type VisitorCountOutputType
   */

  export type VisitorCountOutputType = {
    visits: number
  }

  export type VisitorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visits?: boolean | VisitorCountOutputTypeCountVisitsArgs
  }

  // Custom InputTypes
  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorCountOutputType
     */
    select?: VisitorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeCountVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    address: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    address: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    address: number
    phone: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    address?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    address?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    address?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    logo: string | null
    address: string | null
    phone: string | null
    email: string | null
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departments?: boolean | Company$departmentsArgs<ExtArgs>
    employees?: boolean | Company$employeesArgs<ExtArgs>
    devices?: boolean | Company$devicesArgs<ExtArgs>
    schedules?: boolean | Company$schedulesArgs<ExtArgs>
    attendanceRecords?: boolean | Company$attendanceRecordsArgs<ExtArgs>
    visitors?: boolean | Company$visitorsArgs<ExtArgs>
    users?: boolean | Company$usersArgs<ExtArgs>
    holidays?: boolean | Company$holidaysArgs<ExtArgs>
    settings?: boolean | Company$settingsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo" | "address" | "phone" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | Company$departmentsArgs<ExtArgs>
    employees?: boolean | Company$employeesArgs<ExtArgs>
    devices?: boolean | Company$devicesArgs<ExtArgs>
    schedules?: boolean | Company$schedulesArgs<ExtArgs>
    attendanceRecords?: boolean | Company$attendanceRecordsArgs<ExtArgs>
    visitors?: boolean | Company$visitorsArgs<ExtArgs>
    users?: boolean | Company$usersArgs<ExtArgs>
    holidays?: boolean | Company$holidaysArgs<ExtArgs>
    settings?: boolean | Company$settingsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      departments: Prisma.$DepartmentPayload<ExtArgs>[]
      employees: Prisma.$EmployeePayload<ExtArgs>[]
      devices: Prisma.$DevicePayload<ExtArgs>[]
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
      attendanceRecords: Prisma.$AttendanceRecordPayload<ExtArgs>[]
      visitors: Prisma.$VisitorPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      holidays: Prisma.$HolidayPayload<ExtArgs>[]
      settings: Prisma.$CompanySettingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      logo: string | null
      address: string | null
      phone: string | null
      email: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departments<T extends Company$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, Company$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employees<T extends Company$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Company$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    devices<T extends Company$devicesArgs<ExtArgs> = {}>(args?: Subset<T, Company$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Company$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Company$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendanceRecords<T extends Company$attendanceRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Company$attendanceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visitors<T extends Company$visitorsArgs<ExtArgs> = {}>(args?: Subset<T, Company$visitorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    holidays<T extends Company$holidaysArgs<ExtArgs> = {}>(args?: Subset<T, Company$holidaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends Company$settingsArgs<ExtArgs> = {}>(args?: Subset<T, Company$settingsArgs<ExtArgs>>): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly logo: FieldRef<"Company", 'String'>
    readonly address: FieldRef<"Company", 'String'>
    readonly phone: FieldRef<"Company", 'String'>
    readonly email: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.departments
   */
  export type Company$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Company.employees
   */
  export type Company$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Company.devices
   */
  export type Company$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Company.schedules
   */
  export type Company$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Company.attendanceRecords
   */
  export type Company$attendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    cursor?: AttendanceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * Company.visitors
   */
  export type Company$visitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    where?: VisitorWhereInput
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    cursor?: VisitorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.holidays
   */
  export type Company$holidaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    where?: HolidayWhereInput
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    cursor?: HolidayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Company.settings
   */
  export type Company$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySettings
     */
    omit?: CompanySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySettingsInclude<ExtArgs> | null
    where?: CompanySettingsWhereInput
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model CompanySettings
   */

  export type AggregateCompanySettings = {
    _count: CompanySettingsCountAggregateOutputType | null
    _avg: CompanySettingsAvgAggregateOutputType | null
    _sum: CompanySettingsSumAggregateOutputType | null
    _min: CompanySettingsMinAggregateOutputType | null
    _max: CompanySettingsMaxAggregateOutputType | null
  }

  export type CompanySettingsAvgAggregateOutputType = {
    gracePeriodMinutes: number | null
  }

  export type CompanySettingsSumAggregateOutputType = {
    gracePeriodMinutes: number | null
  }

  export type CompanySettingsMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    workdayStartTime: string | null
    workdayEndTime: string | null
    lunchStartTime: string | null
    lunchEndTime: string | null
    gracePeriodMinutes: number | null
    overtimeEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanySettingsMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    workdayStartTime: string | null
    workdayEndTime: string | null
    lunchStartTime: string | null
    lunchEndTime: string | null
    gracePeriodMinutes: number | null
    overtimeEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanySettingsCountAggregateOutputType = {
    id: number
    companyId: number
    workdayStartTime: number
    workdayEndTime: number
    lunchStartTime: number
    lunchEndTime: number
    gracePeriodMinutes: number
    weekendDays: number
    overtimeEnabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanySettingsAvgAggregateInputType = {
    gracePeriodMinutes?: true
  }

  export type CompanySettingsSumAggregateInputType = {
    gracePeriodMinutes?: true
  }

  export type CompanySettingsMinAggregateInputType = {
    id?: true
    companyId?: true
    workdayStartTime?: true
    workdayEndTime?: true
    lunchStartTime?: true
    lunchEndTime?: true
    gracePeriodMinutes?: true
    overtimeEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanySettingsMaxAggregateInputType = {
    id?: true
    companyId?: true
    workdayStartTime?: true
    workdayEndTime?: true
    lunchStartTime?: true
    lunchEndTime?: true
    gracePeriodMinutes?: true
    overtimeEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanySettingsCountAggregateInputType = {
    id?: true
    companyId?: true
    workdayStartTime?: true
    workdayEndTime?: true
    lunchStartTime?: true
    lunchEndTime?: true
    gracePeriodMinutes?: true
    weekendDays?: true
    overtimeEnabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanySettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanySettings to aggregate.
     */
    where?: CompanySettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySettings to fetch.
     */
    orderBy?: CompanySettingsOrderByWithRelationInput | CompanySettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanySettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanySettings
    **/
    _count?: true | CompanySettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanySettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanySettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanySettingsMaxAggregateInputType
  }

  export type GetCompanySettingsAggregateType<T extends CompanySettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanySettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanySettings[P]>
      : GetScalarType<T[P], AggregateCompanySettings[P]>
  }




  export type CompanySettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanySettingsWhereInput
    orderBy?: CompanySettingsOrderByWithAggregationInput | CompanySettingsOrderByWithAggregationInput[]
    by: CompanySettingsScalarFieldEnum[] | CompanySettingsScalarFieldEnum
    having?: CompanySettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanySettingsCountAggregateInputType | true
    _avg?: CompanySettingsAvgAggregateInputType
    _sum?: CompanySettingsSumAggregateInputType
    _min?: CompanySettingsMinAggregateInputType
    _max?: CompanySettingsMaxAggregateInputType
  }

  export type CompanySettingsGroupByOutputType = {
    id: string
    companyId: string
    workdayStartTime: string
    workdayEndTime: string
    lunchStartTime: string | null
    lunchEndTime: string | null
    gracePeriodMinutes: number
    weekendDays: string[]
    overtimeEnabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: CompanySettingsCountAggregateOutputType | null
    _avg: CompanySettingsAvgAggregateOutputType | null
    _sum: CompanySettingsSumAggregateOutputType | null
    _min: CompanySettingsMinAggregateOutputType | null
    _max: CompanySettingsMaxAggregateOutputType | null
  }

  type GetCompanySettingsGroupByPayload<T extends CompanySettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanySettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanySettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanySettingsGroupByOutputType[P]>
            : GetScalarType<T[P], CompanySettingsGroupByOutputType[P]>
        }
      >
    >


  export type CompanySettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    workdayStartTime?: boolean
    workdayEndTime?: boolean
    lunchStartTime?: boolean
    lunchEndTime?: boolean
    gracePeriodMinutes?: boolean
    weekendDays?: boolean
    overtimeEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companySettings"]>

  export type CompanySettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    workdayStartTime?: boolean
    workdayEndTime?: boolean
    lunchStartTime?: boolean
    lunchEndTime?: boolean
    gracePeriodMinutes?: boolean
    weekendDays?: boolean
    overtimeEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companySettings"]>

  export type CompanySettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    workdayStartTime?: boolean
    workdayEndTime?: boolean
    lunchStartTime?: boolean
    lunchEndTime?: boolean
    gracePeriodMinutes?: boolean
    weekendDays?: boolean
    overtimeEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companySettings"]>

  export type CompanySettingsSelectScalar = {
    id?: boolean
    companyId?: boolean
    workdayStartTime?: boolean
    workdayEndTime?: boolean
    lunchStartTime?: boolean
    lunchEndTime?: boolean
    gracePeriodMinutes?: boolean
    weekendDays?: boolean
    overtimeEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanySettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "workdayStartTime" | "workdayEndTime" | "lunchStartTime" | "lunchEndTime" | "gracePeriodMinutes" | "weekendDays" | "overtimeEnabled" | "createdAt" | "updatedAt", ExtArgs["result"]["companySettings"]>
  export type CompanySettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanySettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type CompanySettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $CompanySettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanySettings"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      workdayStartTime: string
      workdayEndTime: string
      lunchStartTime: string | null
      lunchEndTime: string | null
      gracePeriodMinutes: number
      weekendDays: string[]
      overtimeEnabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["companySettings"]>
    composites: {}
  }

  type CompanySettingsGetPayload<S extends boolean | null | undefined | CompanySettingsDefaultArgs> = $Result.GetResult<Prisma.$CompanySettingsPayload, S>

  type CompanySettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanySettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanySettingsCountAggregateInputType | true
    }

  export interface CompanySettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanySettings'], meta: { name: 'CompanySettings' } }
    /**
     * Find zero or one CompanySettings that matches the filter.
     * @param {CompanySettingsFindUniqueArgs} args - Arguments to find a CompanySettings
     * @example
     * // Get one CompanySettings
     * const companySettings = await prisma.companySettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanySettingsFindUniqueArgs>(args: SelectSubset<T, CompanySettingsFindUniqueArgs<ExtArgs>>): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanySettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanySettingsFindUniqueOrThrowArgs} args - Arguments to find a CompanySettings
     * @example
     * // Get one CompanySettings
     * const companySettings = await prisma.companySettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanySettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanySettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanySettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySettingsFindFirstArgs} args - Arguments to find a CompanySettings
     * @example
     * // Get one CompanySettings
     * const companySettings = await prisma.companySettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanySettingsFindFirstArgs>(args?: SelectSubset<T, CompanySettingsFindFirstArgs<ExtArgs>>): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanySettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySettingsFindFirstOrThrowArgs} args - Arguments to find a CompanySettings
     * @example
     * // Get one CompanySettings
     * const companySettings = await prisma.companySettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanySettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanySettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanySettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanySettings
     * const companySettings = await prisma.companySettings.findMany()
     * 
     * // Get first 10 CompanySettings
     * const companySettings = await prisma.companySettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companySettingsWithIdOnly = await prisma.companySettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanySettingsFindManyArgs>(args?: SelectSubset<T, CompanySettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanySettings.
     * @param {CompanySettingsCreateArgs} args - Arguments to create a CompanySettings.
     * @example
     * // Create one CompanySettings
     * const CompanySettings = await prisma.companySettings.create({
     *   data: {
     *     // ... data to create a CompanySettings
     *   }
     * })
     * 
     */
    create<T extends CompanySettingsCreateArgs>(args: SelectSubset<T, CompanySettingsCreateArgs<ExtArgs>>): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanySettings.
     * @param {CompanySettingsCreateManyArgs} args - Arguments to create many CompanySettings.
     * @example
     * // Create many CompanySettings
     * const companySettings = await prisma.companySettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanySettingsCreateManyArgs>(args?: SelectSubset<T, CompanySettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanySettings and returns the data saved in the database.
     * @param {CompanySettingsCreateManyAndReturnArgs} args - Arguments to create many CompanySettings.
     * @example
     * // Create many CompanySettings
     * const companySettings = await prisma.companySettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanySettings and only return the `id`
     * const companySettingsWithIdOnly = await prisma.companySettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanySettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanySettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanySettings.
     * @param {CompanySettingsDeleteArgs} args - Arguments to delete one CompanySettings.
     * @example
     * // Delete one CompanySettings
     * const CompanySettings = await prisma.companySettings.delete({
     *   where: {
     *     // ... filter to delete one CompanySettings
     *   }
     * })
     * 
     */
    delete<T extends CompanySettingsDeleteArgs>(args: SelectSubset<T, CompanySettingsDeleteArgs<ExtArgs>>): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanySettings.
     * @param {CompanySettingsUpdateArgs} args - Arguments to update one CompanySettings.
     * @example
     * // Update one CompanySettings
     * const companySettings = await prisma.companySettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanySettingsUpdateArgs>(args: SelectSubset<T, CompanySettingsUpdateArgs<ExtArgs>>): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanySettings.
     * @param {CompanySettingsDeleteManyArgs} args - Arguments to filter CompanySettings to delete.
     * @example
     * // Delete a few CompanySettings
     * const { count } = await prisma.companySettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanySettingsDeleteManyArgs>(args?: SelectSubset<T, CompanySettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanySettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanySettings
     * const companySettings = await prisma.companySettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanySettingsUpdateManyArgs>(args: SelectSubset<T, CompanySettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanySettings and returns the data updated in the database.
     * @param {CompanySettingsUpdateManyAndReturnArgs} args - Arguments to update many CompanySettings.
     * @example
     * // Update many CompanySettings
     * const companySettings = await prisma.companySettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanySettings and only return the `id`
     * const companySettingsWithIdOnly = await prisma.companySettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanySettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanySettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanySettings.
     * @param {CompanySettingsUpsertArgs} args - Arguments to update or create a CompanySettings.
     * @example
     * // Update or create a CompanySettings
     * const companySettings = await prisma.companySettings.upsert({
     *   create: {
     *     // ... data to create a CompanySettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanySettings we want to update
     *   }
     * })
     */
    upsert<T extends CompanySettingsUpsertArgs>(args: SelectSubset<T, CompanySettingsUpsertArgs<ExtArgs>>): Prisma__CompanySettingsClient<$Result.GetResult<Prisma.$CompanySettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanySettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySettingsCountArgs} args - Arguments to filter CompanySettings to count.
     * @example
     * // Count the number of CompanySettings
     * const count = await prisma.companySettings.count({
     *   where: {
     *     // ... the filter for the CompanySettings we want to count
     *   }
     * })
    **/
    count<T extends CompanySettingsCountArgs>(
      args?: Subset<T, CompanySettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanySettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanySettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanySettingsAggregateArgs>(args: Subset<T, CompanySettingsAggregateArgs>): Prisma.PrismaPromise<GetCompanySettingsAggregateType<T>>

    /**
     * Group by CompanySettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanySettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanySettingsGroupByArgs['orderBy'] }
        : { orderBy?: CompanySettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanySettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanySettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanySettings model
   */
  readonly fields: CompanySettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanySettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanySettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanySettings model
   */
  interface CompanySettingsFieldRefs {
    readonly id: FieldRef<"CompanySettings", 'String'>
    readonly companyId: FieldRef<"CompanySettings", 'String'>
    readonly workdayStartTime: FieldRef<"CompanySettings", 'String'>
    readonly workdayEndTime: FieldRef<"CompanySettings", 'String'>
    readonly lunchStartTime: FieldRef<"CompanySettings", 'String'>
    readonly lunchEndTime: FieldRef<"CompanySettings", 'String'>
    readonly gracePeriodMinutes: FieldRef<"CompanySettings", 'Int'>
    readonly weekendDays: FieldRef<"CompanySettings", 'String[]'>
    readonly overtimeEnabled: FieldRef<"CompanySettings", 'Boolean'>
    readonly createdAt: FieldRef<"CompanySettings", 'DateTime'>
    readonly updatedAt: FieldRef<"CompanySettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanySettings findUnique
   */
  export type CompanySettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySettings
     */
    omit?: CompanySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySettingsInclude<ExtArgs> | null
    /**
     * Filter, which CompanySettings to fetch.
     */
    where: CompanySettingsWhereUniqueInput
  }

  /**
   * CompanySettings findUniqueOrThrow
   */
  export type CompanySettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySettings
     */
    omit?: CompanySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySettingsInclude<ExtArgs> | null
    /**
     * Filter, which CompanySettings to fetch.
     */
    where: CompanySettingsWhereUniqueInput
  }

  /**
   * CompanySettings findFirst
   */
  export type CompanySettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySettings
     */
    omit?: CompanySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySettingsInclude<ExtArgs> | null
    /**
     * Filter, which CompanySettings to fetch.
     */
    where?: CompanySettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySettings to fetch.
     */
    orderBy?: CompanySettingsOrderByWithRelationInput | CompanySettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanySettings.
     */
    cursor?: CompanySettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanySettings.
     */
    distinct?: CompanySettingsScalarFieldEnum | CompanySettingsScalarFieldEnum[]
  }

  /**
   * CompanySettings findFirstOrThrow
   */
  export type CompanySettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySettings
     */
    omit?: CompanySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySettingsInclude<ExtArgs> | null
    /**
     * Filter, which CompanySettings to fetch.
     */
    where?: CompanySettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySettings to fetch.
     */
    orderBy?: CompanySettingsOrderByWithRelationInput | CompanySettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanySettings.
     */
    cursor?: CompanySettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanySettings.
     */
    distinct?: CompanySettingsScalarFieldEnum | CompanySettingsScalarFieldEnum[]
  }

  /**
   * CompanySettings findMany
   */
  export type CompanySettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySettings
     */
    omit?: CompanySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySettingsInclude<ExtArgs> | null
    /**
     * Filter, which CompanySettings to fetch.
     */
    where?: CompanySettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySettings to fetch.
     */
    orderBy?: CompanySettingsOrderByWithRelationInput | CompanySettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanySettings.
     */
    cursor?: CompanySettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySettings.
     */
    skip?: number
    distinct?: CompanySettingsScalarFieldEnum | CompanySettingsScalarFieldEnum[]
  }

  /**
   * CompanySettings create
   */
  export type CompanySettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySettings
     */
    omit?: CompanySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanySettings.
     */
    data: XOR<CompanySettingsCreateInput, CompanySettingsUncheckedCreateInput>
  }

  /**
   * CompanySettings createMany
   */
  export type CompanySettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanySettings.
     */
    data: CompanySettingsCreateManyInput | CompanySettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanySettings createManyAndReturn
   */
  export type CompanySettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySettings
     */
    omit?: CompanySettingsOmit<ExtArgs> | null
    /**
     * The data used to create many CompanySettings.
     */
    data: CompanySettingsCreateManyInput | CompanySettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanySettings update
   */
  export type CompanySettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySettings
     */
    omit?: CompanySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanySettings.
     */
    data: XOR<CompanySettingsUpdateInput, CompanySettingsUncheckedUpdateInput>
    /**
     * Choose, which CompanySettings to update.
     */
    where: CompanySettingsWhereUniqueInput
  }

  /**
   * CompanySettings updateMany
   */
  export type CompanySettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanySettings.
     */
    data: XOR<CompanySettingsUpdateManyMutationInput, CompanySettingsUncheckedUpdateManyInput>
    /**
     * Filter which CompanySettings to update
     */
    where?: CompanySettingsWhereInput
    /**
     * Limit how many CompanySettings to update.
     */
    limit?: number
  }

  /**
   * CompanySettings updateManyAndReturn
   */
  export type CompanySettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySettings
     */
    omit?: CompanySettingsOmit<ExtArgs> | null
    /**
     * The data used to update CompanySettings.
     */
    data: XOR<CompanySettingsUpdateManyMutationInput, CompanySettingsUncheckedUpdateManyInput>
    /**
     * Filter which CompanySettings to update
     */
    where?: CompanySettingsWhereInput
    /**
     * Limit how many CompanySettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanySettings upsert
   */
  export type CompanySettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySettings
     */
    omit?: CompanySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanySettings to update in case it exists.
     */
    where: CompanySettingsWhereUniqueInput
    /**
     * In case the CompanySettings found by the `where` argument doesn't exist, create a new CompanySettings with this data.
     */
    create: XOR<CompanySettingsCreateInput, CompanySettingsUncheckedCreateInput>
    /**
     * In case the CompanySettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanySettingsUpdateInput, CompanySettingsUncheckedUpdateInput>
  }

  /**
   * CompanySettings delete
   */
  export type CompanySettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySettings
     */
    omit?: CompanySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySettingsInclude<ExtArgs> | null
    /**
     * Filter which CompanySettings to delete.
     */
    where: CompanySettingsWhereUniqueInput
  }

  /**
   * CompanySettings deleteMany
   */
  export type CompanySettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanySettings to delete
     */
    where?: CompanySettingsWhereInput
    /**
     * Limit how many CompanySettings to delete.
     */
    limit?: number
  }

  /**
   * CompanySettings without action
   */
  export type CompanySettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySettings
     */
    select?: CompanySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySettings
     */
    omit?: CompanySettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySettingsInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    description: string | null
    companyId: string
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employees?: boolean | Department$employeesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employees?: boolean | Department$employeesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      companyId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employees<T extends Department$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Department$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly description: FieldRef<"Department", 'String'>
    readonly companyId: FieldRef<"Department", 'String'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.employees
   */
  export type Department$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    position: string | null
    fingerprintId: string | null
    isActive: boolean | null
    hireDate: Date | null
    terminationDate: Date | null
    companyId: string | null
    departmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    position: string | null
    fingerprintId: string | null
    isActive: boolean | null
    hireDate: Date | null
    terminationDate: Date | null
    companyId: string | null
    departmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    employeeId: number
    firstName: number
    lastName: number
    email: number
    phone: number
    position: number
    fingerprintId: number
    isActive: number
    hireDate: number
    terminationDate: number
    companyId: number
    departmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    employeeId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    position?: true
    fingerprintId?: true
    isActive?: true
    hireDate?: true
    terminationDate?: true
    companyId?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    employeeId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    position?: true
    fingerprintId?: true
    isActive?: true
    hireDate?: true
    terminationDate?: true
    companyId?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    employeeId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    position?: true
    fingerprintId?: true
    isActive?: true
    hireDate?: true
    terminationDate?: true
    companyId?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    employeeId: string
    firstName: string
    lastName: string
    email: string | null
    phone: string | null
    position: string | null
    fingerprintId: string | null
    isActive: boolean
    hireDate: Date
    terminationDate: Date | null
    companyId: string
    departmentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    position?: boolean
    fingerprintId?: boolean
    isActive?: boolean
    hireDate?: boolean
    terminationDate?: boolean
    companyId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
    attendanceRecords?: boolean | Employee$attendanceRecordsArgs<ExtArgs>
    schedules?: boolean | Employee$schedulesArgs<ExtArgs>
    leaves?: boolean | Employee$leavesArgs<ExtArgs>
    user?: boolean | Employee$userArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    position?: boolean
    fingerprintId?: boolean
    isActive?: boolean
    hireDate?: boolean
    terminationDate?: boolean
    companyId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    position?: boolean
    fingerprintId?: boolean
    isActive?: boolean
    hireDate?: boolean
    terminationDate?: boolean
    companyId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    employeeId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    position?: boolean
    fingerprintId?: boolean
    isActive?: boolean
    hireDate?: boolean
    terminationDate?: boolean
    companyId?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "firstName" | "lastName" | "email" | "phone" | "position" | "fingerprintId" | "isActive" | "hireDate" | "terminationDate" | "companyId" | "departmentId" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
    attendanceRecords?: boolean | Employee$attendanceRecordsArgs<ExtArgs>
    schedules?: boolean | Employee$schedulesArgs<ExtArgs>
    leaves?: boolean | Employee$leavesArgs<ExtArgs>
    user?: boolean | Employee$userArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    department?: boolean | Employee$departmentArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      department: Prisma.$DepartmentPayload<ExtArgs> | null
      attendanceRecords: Prisma.$AttendanceRecordPayload<ExtArgs>[]
      schedules: Prisma.$EmployeeSchedulePayload<ExtArgs>[]
      leaves: Prisma.$LeavePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      firstName: string
      lastName: string
      email: string | null
      phone: string | null
      position: string | null
      fingerprintId: string | null
      isActive: boolean
      hireDate: Date
      terminationDate: Date | null
      companyId: string
      departmentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends Employee$departmentArgs<ExtArgs> = {}>(args?: Subset<T, Employee$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    attendanceRecords<T extends Employee$attendanceRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$attendanceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Employee$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaves<T extends Employee$leavesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$leavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Employee$userArgs<ExtArgs> = {}>(args?: Subset<T, Employee$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly employeeId: FieldRef<"Employee", 'String'>
    readonly firstName: FieldRef<"Employee", 'String'>
    readonly lastName: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly phone: FieldRef<"Employee", 'String'>
    readonly position: FieldRef<"Employee", 'String'>
    readonly fingerprintId: FieldRef<"Employee", 'String'>
    readonly isActive: FieldRef<"Employee", 'Boolean'>
    readonly hireDate: FieldRef<"Employee", 'DateTime'>
    readonly terminationDate: FieldRef<"Employee", 'DateTime'>
    readonly companyId: FieldRef<"Employee", 'String'>
    readonly departmentId: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.department
   */
  export type Employee$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * Employee.attendanceRecords
   */
  export type Employee$attendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    cursor?: AttendanceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * Employee.schedules
   */
  export type Employee$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSchedule
     */
    select?: EmployeeScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSchedule
     */
    omit?: EmployeeScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeScheduleInclude<ExtArgs> | null
    where?: EmployeeScheduleWhereInput
    orderBy?: EmployeeScheduleOrderByWithRelationInput | EmployeeScheduleOrderByWithRelationInput[]
    cursor?: EmployeeScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScheduleScalarFieldEnum | EmployeeScheduleScalarFieldEnum[]
  }

  /**
   * Employee.leaves
   */
  export type Employee$leavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    cursor?: LeaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Employee.user
   */
  export type Employee$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    deviceId: string | null
    name: string | null
    location: string | null
    ipAddress: string | null
    lastConnection: Date | null
    isActive: boolean | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    deviceId: string | null
    name: string | null
    location: string | null
    ipAddress: string | null
    lastConnection: Date | null
    isActive: boolean | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    deviceId: number
    name: number
    location: number
    ipAddress: number
    lastConnection: number
    isActive: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    deviceId?: true
    name?: true
    location?: true
    ipAddress?: true
    lastConnection?: true
    isActive?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    deviceId?: true
    name?: true
    location?: true
    ipAddress?: true
    lastConnection?: true
    isActive?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    deviceId?: true
    name?: true
    location?: true
    ipAddress?: true
    lastConnection?: true
    isActive?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    deviceId: string
    name: string
    location: string | null
    ipAddress: string | null
    lastConnection: Date | null
    isActive: boolean
    companyId: string
    createdAt: Date
    updatedAt: Date
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    name?: boolean
    location?: boolean
    ipAddress?: boolean
    lastConnection?: boolean
    isActive?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    attendanceRecords?: boolean | Device$attendanceRecordsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    name?: boolean
    location?: boolean
    ipAddress?: boolean
    lastConnection?: boolean
    isActive?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    name?: boolean
    location?: boolean
    ipAddress?: boolean
    lastConnection?: boolean
    isActive?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    deviceId?: boolean
    name?: boolean
    location?: boolean
    ipAddress?: boolean
    lastConnection?: boolean
    isActive?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "name" | "location" | "ipAddress" | "lastConnection" | "isActive" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    attendanceRecords?: boolean | Device$attendanceRecordsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      attendanceRecords: Prisma.$AttendanceRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceId: string
      name: string
      location: string | null
      ipAddress: string | null
      lastConnection: Date | null
      isActive: boolean
      companyId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendanceRecords<T extends Device$attendanceRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Device$attendanceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly deviceId: FieldRef<"Device", 'String'>
    readonly name: FieldRef<"Device", 'String'>
    readonly location: FieldRef<"Device", 'String'>
    readonly ipAddress: FieldRef<"Device", 'String'>
    readonly lastConnection: FieldRef<"Device", 'DateTime'>
    readonly isActive: FieldRef<"Device", 'Boolean'>
    readonly companyId: FieldRef<"Device", 'String'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
    readonly updatedAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device.attendanceRecords
   */
  export type Device$attendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    cursor?: AttendanceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    startTime: string | null
    endTime: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    startTime: string | null
    endTime: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startTime: number
    endTime: number
    workDays: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startTime?: true
    endTime?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startTime?: true
    endTime?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startTime?: true
    endTime?: true
    workDays?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    startTime: string
    endTime: string
    workDays: string[]
    companyId: string
    createdAt: Date
    updatedAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    workDays?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employeeSchedules?: boolean | Schedule$employeeSchedulesArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    workDays?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    workDays?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    workDays?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "startTime" | "endTime" | "workDays" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employeeSchedules?: boolean | Schedule$employeeSchedulesArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      employeeSchedules: Prisma.$EmployeeSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      startTime: string
      endTime: string
      workDays: string[]
      companyId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employeeSchedules<T extends Schedule$employeeSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$employeeSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly name: FieldRef<"Schedule", 'String'>
    readonly description: FieldRef<"Schedule", 'String'>
    readonly startTime: FieldRef<"Schedule", 'String'>
    readonly endTime: FieldRef<"Schedule", 'String'>
    readonly workDays: FieldRef<"Schedule", 'String[]'>
    readonly companyId: FieldRef<"Schedule", 'String'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule.employeeSchedules
   */
  export type Schedule$employeeSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSchedule
     */
    select?: EmployeeScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSchedule
     */
    omit?: EmployeeScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeScheduleInclude<ExtArgs> | null
    where?: EmployeeScheduleWhereInput
    orderBy?: EmployeeScheduleOrderByWithRelationInput | EmployeeScheduleOrderByWithRelationInput[]
    cursor?: EmployeeScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScheduleScalarFieldEnum | EmployeeScheduleScalarFieldEnum[]
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeSchedule
   */

  export type AggregateEmployeeSchedule = {
    _count: EmployeeScheduleCountAggregateOutputType | null
    _min: EmployeeScheduleMinAggregateOutputType | null
    _max: EmployeeScheduleMaxAggregateOutputType | null
  }

  export type EmployeeScheduleMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    scheduleId: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeScheduleMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    scheduleId: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeScheduleCountAggregateOutputType = {
    id: number
    employeeId: number
    scheduleId: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeScheduleMinAggregateInputType = {
    id?: true
    employeeId?: true
    scheduleId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeScheduleMaxAggregateInputType = {
    id?: true
    employeeId?: true
    scheduleId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeScheduleCountAggregateInputType = {
    id?: true
    employeeId?: true
    scheduleId?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeSchedule to aggregate.
     */
    where?: EmployeeScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeSchedules to fetch.
     */
    orderBy?: EmployeeScheduleOrderByWithRelationInput | EmployeeScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeSchedules
    **/
    _count?: true | EmployeeScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeScheduleMaxAggregateInputType
  }

  export type GetEmployeeScheduleAggregateType<T extends EmployeeScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeSchedule[P]>
      : GetScalarType<T[P], AggregateEmployeeSchedule[P]>
  }




  export type EmployeeScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeScheduleWhereInput
    orderBy?: EmployeeScheduleOrderByWithAggregationInput | EmployeeScheduleOrderByWithAggregationInput[]
    by: EmployeeScheduleScalarFieldEnum[] | EmployeeScheduleScalarFieldEnum
    having?: EmployeeScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeScheduleCountAggregateInputType | true
    _min?: EmployeeScheduleMinAggregateInputType
    _max?: EmployeeScheduleMaxAggregateInputType
  }

  export type EmployeeScheduleGroupByOutputType = {
    id: string
    employeeId: string
    scheduleId: string
    startDate: Date
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeScheduleCountAggregateOutputType | null
    _min: EmployeeScheduleMinAggregateOutputType | null
    _max: EmployeeScheduleMaxAggregateOutputType | null
  }

  type GetEmployeeScheduleGroupByPayload<T extends EmployeeScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeScheduleGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    scheduleId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeSchedule"]>

  export type EmployeeScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    scheduleId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeSchedule"]>

  export type EmployeeScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    scheduleId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeSchedule"]>

  export type EmployeeScheduleSelectScalar = {
    id?: boolean
    employeeId?: boolean
    scheduleId?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "scheduleId" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["employeeSchedule"]>
  export type EmployeeScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }
  export type EmployeeScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }
  export type EmployeeScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }

  export type $EmployeeSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeSchedule"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      schedule: Prisma.$SchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      scheduleId: string
      startDate: Date
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employeeSchedule"]>
    composites: {}
  }

  type EmployeeScheduleGetPayload<S extends boolean | null | undefined | EmployeeScheduleDefaultArgs> = $Result.GetResult<Prisma.$EmployeeSchedulePayload, S>

  type EmployeeScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeScheduleCountAggregateInputType | true
    }

  export interface EmployeeScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeSchedule'], meta: { name: 'EmployeeSchedule' } }
    /**
     * Find zero or one EmployeeSchedule that matches the filter.
     * @param {EmployeeScheduleFindUniqueArgs} args - Arguments to find a EmployeeSchedule
     * @example
     * // Get one EmployeeSchedule
     * const employeeSchedule = await prisma.employeeSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeScheduleFindUniqueArgs>(args: SelectSubset<T, EmployeeScheduleFindUniqueArgs<ExtArgs>>): Prisma__EmployeeScheduleClient<$Result.GetResult<Prisma.$EmployeeSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeScheduleFindUniqueOrThrowArgs} args - Arguments to find a EmployeeSchedule
     * @example
     * // Get one EmployeeSchedule
     * const employeeSchedule = await prisma.employeeSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeScheduleClient<$Result.GetResult<Prisma.$EmployeeSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeScheduleFindFirstArgs} args - Arguments to find a EmployeeSchedule
     * @example
     * // Get one EmployeeSchedule
     * const employeeSchedule = await prisma.employeeSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeScheduleFindFirstArgs>(args?: SelectSubset<T, EmployeeScheduleFindFirstArgs<ExtArgs>>): Prisma__EmployeeScheduleClient<$Result.GetResult<Prisma.$EmployeeSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeScheduleFindFirstOrThrowArgs} args - Arguments to find a EmployeeSchedule
     * @example
     * // Get one EmployeeSchedule
     * const employeeSchedule = await prisma.employeeSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeScheduleClient<$Result.GetResult<Prisma.$EmployeeSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeSchedules
     * const employeeSchedules = await prisma.employeeSchedule.findMany()
     * 
     * // Get first 10 EmployeeSchedules
     * const employeeSchedules = await prisma.employeeSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeScheduleWithIdOnly = await prisma.employeeSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeScheduleFindManyArgs>(args?: SelectSubset<T, EmployeeScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeSchedule.
     * @param {EmployeeScheduleCreateArgs} args - Arguments to create a EmployeeSchedule.
     * @example
     * // Create one EmployeeSchedule
     * const EmployeeSchedule = await prisma.employeeSchedule.create({
     *   data: {
     *     // ... data to create a EmployeeSchedule
     *   }
     * })
     * 
     */
    create<T extends EmployeeScheduleCreateArgs>(args: SelectSubset<T, EmployeeScheduleCreateArgs<ExtArgs>>): Prisma__EmployeeScheduleClient<$Result.GetResult<Prisma.$EmployeeSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeSchedules.
     * @param {EmployeeScheduleCreateManyArgs} args - Arguments to create many EmployeeSchedules.
     * @example
     * // Create many EmployeeSchedules
     * const employeeSchedule = await prisma.employeeSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeScheduleCreateManyArgs>(args?: SelectSubset<T, EmployeeScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeSchedules and returns the data saved in the database.
     * @param {EmployeeScheduleCreateManyAndReturnArgs} args - Arguments to create many EmployeeSchedules.
     * @example
     * // Create many EmployeeSchedules
     * const employeeSchedule = await prisma.employeeSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeSchedules and only return the `id`
     * const employeeScheduleWithIdOnly = await prisma.employeeSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployeeSchedule.
     * @param {EmployeeScheduleDeleteArgs} args - Arguments to delete one EmployeeSchedule.
     * @example
     * // Delete one EmployeeSchedule
     * const EmployeeSchedule = await prisma.employeeSchedule.delete({
     *   where: {
     *     // ... filter to delete one EmployeeSchedule
     *   }
     * })
     * 
     */
    delete<T extends EmployeeScheduleDeleteArgs>(args: SelectSubset<T, EmployeeScheduleDeleteArgs<ExtArgs>>): Prisma__EmployeeScheduleClient<$Result.GetResult<Prisma.$EmployeeSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeSchedule.
     * @param {EmployeeScheduleUpdateArgs} args - Arguments to update one EmployeeSchedule.
     * @example
     * // Update one EmployeeSchedule
     * const employeeSchedule = await prisma.employeeSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeScheduleUpdateArgs>(args: SelectSubset<T, EmployeeScheduleUpdateArgs<ExtArgs>>): Prisma__EmployeeScheduleClient<$Result.GetResult<Prisma.$EmployeeSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeSchedules.
     * @param {EmployeeScheduleDeleteManyArgs} args - Arguments to filter EmployeeSchedules to delete.
     * @example
     * // Delete a few EmployeeSchedules
     * const { count } = await prisma.employeeSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeScheduleDeleteManyArgs>(args?: SelectSubset<T, EmployeeScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeSchedules
     * const employeeSchedule = await prisma.employeeSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeScheduleUpdateManyArgs>(args: SelectSubset<T, EmployeeScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeSchedules and returns the data updated in the database.
     * @param {EmployeeScheduleUpdateManyAndReturnArgs} args - Arguments to update many EmployeeSchedules.
     * @example
     * // Update many EmployeeSchedules
     * const employeeSchedule = await prisma.employeeSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeeSchedules and only return the `id`
     * const employeeScheduleWithIdOnly = await prisma.employeeSchedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployeeSchedule.
     * @param {EmployeeScheduleUpsertArgs} args - Arguments to update or create a EmployeeSchedule.
     * @example
     * // Update or create a EmployeeSchedule
     * const employeeSchedule = await prisma.employeeSchedule.upsert({
     *   create: {
     *     // ... data to create a EmployeeSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeSchedule we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeScheduleUpsertArgs>(args: SelectSubset<T, EmployeeScheduleUpsertArgs<ExtArgs>>): Prisma__EmployeeScheduleClient<$Result.GetResult<Prisma.$EmployeeSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeScheduleCountArgs} args - Arguments to filter EmployeeSchedules to count.
     * @example
     * // Count the number of EmployeeSchedules
     * const count = await prisma.employeeSchedule.count({
     *   where: {
     *     // ... the filter for the EmployeeSchedules we want to count
     *   }
     * })
    **/
    count<T extends EmployeeScheduleCountArgs>(
      args?: Subset<T, EmployeeScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeScheduleAggregateArgs>(args: Subset<T, EmployeeScheduleAggregateArgs>): Prisma.PrismaPromise<GetEmployeeScheduleAggregateType<T>>

    /**
     * Group by EmployeeSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeScheduleGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeSchedule model
   */
  readonly fields: EmployeeScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmployeeSchedule model
   */
  interface EmployeeScheduleFieldRefs {
    readonly id: FieldRef<"EmployeeSchedule", 'String'>
    readonly employeeId: FieldRef<"EmployeeSchedule", 'String'>
    readonly scheduleId: FieldRef<"EmployeeSchedule", 'String'>
    readonly startDate: FieldRef<"EmployeeSchedule", 'DateTime'>
    readonly endDate: FieldRef<"EmployeeSchedule", 'DateTime'>
    readonly createdAt: FieldRef<"EmployeeSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"EmployeeSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeSchedule findUnique
   */
  export type EmployeeScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSchedule
     */
    select?: EmployeeScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSchedule
     */
    omit?: EmployeeScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeScheduleInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeSchedule to fetch.
     */
    where: EmployeeScheduleWhereUniqueInput
  }

  /**
   * EmployeeSchedule findUniqueOrThrow
   */
  export type EmployeeScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSchedule
     */
    select?: EmployeeScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSchedule
     */
    omit?: EmployeeScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeScheduleInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeSchedule to fetch.
     */
    where: EmployeeScheduleWhereUniqueInput
  }

  /**
   * EmployeeSchedule findFirst
   */
  export type EmployeeScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSchedule
     */
    select?: EmployeeScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSchedule
     */
    omit?: EmployeeScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeScheduleInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeSchedule to fetch.
     */
    where?: EmployeeScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeSchedules to fetch.
     */
    orderBy?: EmployeeScheduleOrderByWithRelationInput | EmployeeScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeSchedules.
     */
    cursor?: EmployeeScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeSchedules.
     */
    distinct?: EmployeeScheduleScalarFieldEnum | EmployeeScheduleScalarFieldEnum[]
  }

  /**
   * EmployeeSchedule findFirstOrThrow
   */
  export type EmployeeScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSchedule
     */
    select?: EmployeeScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSchedule
     */
    omit?: EmployeeScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeScheduleInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeSchedule to fetch.
     */
    where?: EmployeeScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeSchedules to fetch.
     */
    orderBy?: EmployeeScheduleOrderByWithRelationInput | EmployeeScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeSchedules.
     */
    cursor?: EmployeeScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeSchedules.
     */
    distinct?: EmployeeScheduleScalarFieldEnum | EmployeeScheduleScalarFieldEnum[]
  }

  /**
   * EmployeeSchedule findMany
   */
  export type EmployeeScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSchedule
     */
    select?: EmployeeScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSchedule
     */
    omit?: EmployeeScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeScheduleInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeSchedules to fetch.
     */
    where?: EmployeeScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeSchedules to fetch.
     */
    orderBy?: EmployeeScheduleOrderByWithRelationInput | EmployeeScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeSchedules.
     */
    cursor?: EmployeeScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeSchedules.
     */
    skip?: number
    distinct?: EmployeeScheduleScalarFieldEnum | EmployeeScheduleScalarFieldEnum[]
  }

  /**
   * EmployeeSchedule create
   */
  export type EmployeeScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSchedule
     */
    select?: EmployeeScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSchedule
     */
    omit?: EmployeeScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeSchedule.
     */
    data: XOR<EmployeeScheduleCreateInput, EmployeeScheduleUncheckedCreateInput>
  }

  /**
   * EmployeeSchedule createMany
   */
  export type EmployeeScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeSchedules.
     */
    data: EmployeeScheduleCreateManyInput | EmployeeScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeSchedule createManyAndReturn
   */
  export type EmployeeScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSchedule
     */
    select?: EmployeeScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSchedule
     */
    omit?: EmployeeScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeeSchedules.
     */
    data: EmployeeScheduleCreateManyInput | EmployeeScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeSchedule update
   */
  export type EmployeeScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSchedule
     */
    select?: EmployeeScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSchedule
     */
    omit?: EmployeeScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeSchedule.
     */
    data: XOR<EmployeeScheduleUpdateInput, EmployeeScheduleUncheckedUpdateInput>
    /**
     * Choose, which EmployeeSchedule to update.
     */
    where: EmployeeScheduleWhereUniqueInput
  }

  /**
   * EmployeeSchedule updateMany
   */
  export type EmployeeScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeSchedules.
     */
    data: XOR<EmployeeScheduleUpdateManyMutationInput, EmployeeScheduleUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeSchedules to update
     */
    where?: EmployeeScheduleWhereInput
    /**
     * Limit how many EmployeeSchedules to update.
     */
    limit?: number
  }

  /**
   * EmployeeSchedule updateManyAndReturn
   */
  export type EmployeeScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSchedule
     */
    select?: EmployeeScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSchedule
     */
    omit?: EmployeeScheduleOmit<ExtArgs> | null
    /**
     * The data used to update EmployeeSchedules.
     */
    data: XOR<EmployeeScheduleUpdateManyMutationInput, EmployeeScheduleUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeSchedules to update
     */
    where?: EmployeeScheduleWhereInput
    /**
     * Limit how many EmployeeSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeSchedule upsert
   */
  export type EmployeeScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSchedule
     */
    select?: EmployeeScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSchedule
     */
    omit?: EmployeeScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeSchedule to update in case it exists.
     */
    where: EmployeeScheduleWhereUniqueInput
    /**
     * In case the EmployeeSchedule found by the `where` argument doesn't exist, create a new EmployeeSchedule with this data.
     */
    create: XOR<EmployeeScheduleCreateInput, EmployeeScheduleUncheckedCreateInput>
    /**
     * In case the EmployeeSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeScheduleUpdateInput, EmployeeScheduleUncheckedUpdateInput>
  }

  /**
   * EmployeeSchedule delete
   */
  export type EmployeeScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSchedule
     */
    select?: EmployeeScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSchedule
     */
    omit?: EmployeeScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeScheduleInclude<ExtArgs> | null
    /**
     * Filter which EmployeeSchedule to delete.
     */
    where: EmployeeScheduleWhereUniqueInput
  }

  /**
   * EmployeeSchedule deleteMany
   */
  export type EmployeeScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeSchedules to delete
     */
    where?: EmployeeScheduleWhereInput
    /**
     * Limit how many EmployeeSchedules to delete.
     */
    limit?: number
  }

  /**
   * EmployeeSchedule without action
   */
  export type EmployeeScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeSchedule
     */
    select?: EmployeeScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeSchedule
     */
    omit?: EmployeeScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeScheduleInclude<ExtArgs> | null
  }


  /**
   * Model AttendanceRecord
   */

  export type AggregateAttendanceRecord = {
    _count: AttendanceRecordCountAggregateOutputType | null
    _min: AttendanceRecordMinAggregateOutputType | null
    _max: AttendanceRecordMaxAggregateOutputType | null
  }

  export type AttendanceRecordMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    deviceId: string | null
    companyId: string | null
    timestamp: Date | null
    type: $Enums.RecordType | null
    status: $Enums.RecordStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceRecordMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    deviceId: string | null
    companyId: string | null
    timestamp: Date | null
    type: $Enums.RecordType | null
    status: $Enums.RecordStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceRecordCountAggregateOutputType = {
    id: number
    employeeId: number
    deviceId: number
    companyId: number
    timestamp: number
    type: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendanceRecordMinAggregateInputType = {
    id?: true
    employeeId?: true
    deviceId?: true
    companyId?: true
    timestamp?: true
    type?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceRecordMaxAggregateInputType = {
    id?: true
    employeeId?: true
    deviceId?: true
    companyId?: true
    timestamp?: true
    type?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceRecordCountAggregateInputType = {
    id?: true
    employeeId?: true
    deviceId?: true
    companyId?: true
    timestamp?: true
    type?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendanceRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceRecord to aggregate.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceRecords
    **/
    _count?: true | AttendanceRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceRecordMaxAggregateInputType
  }

  export type GetAttendanceRecordAggregateType<T extends AttendanceRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceRecord[P]>
      : GetScalarType<T[P], AggregateAttendanceRecord[P]>
  }




  export type AttendanceRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithAggregationInput | AttendanceRecordOrderByWithAggregationInput[]
    by: AttendanceRecordScalarFieldEnum[] | AttendanceRecordScalarFieldEnum
    having?: AttendanceRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceRecordCountAggregateInputType | true
    _min?: AttendanceRecordMinAggregateInputType
    _max?: AttendanceRecordMaxAggregateInputType
  }

  export type AttendanceRecordGroupByOutputType = {
    id: string
    employeeId: string
    deviceId: string | null
    companyId: string
    timestamp: Date
    type: $Enums.RecordType
    status: $Enums.RecordStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: AttendanceRecordCountAggregateOutputType | null
    _min: AttendanceRecordMinAggregateOutputType | null
    _max: AttendanceRecordMaxAggregateOutputType | null
  }

  type GetAttendanceRecordGroupByPayload<T extends AttendanceRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceRecordGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceRecordGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    deviceId?: boolean
    companyId?: boolean
    timestamp?: boolean
    type?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    device?: boolean | AttendanceRecord$deviceArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRecord"]>

  export type AttendanceRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    deviceId?: boolean
    companyId?: boolean
    timestamp?: boolean
    type?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    device?: boolean | AttendanceRecord$deviceArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRecord"]>

  export type AttendanceRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    deviceId?: boolean
    companyId?: boolean
    timestamp?: boolean
    type?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    device?: boolean | AttendanceRecord$deviceArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRecord"]>

  export type AttendanceRecordSelectScalar = {
    id?: boolean
    employeeId?: boolean
    deviceId?: boolean
    companyId?: boolean
    timestamp?: boolean
    type?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendanceRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "deviceId" | "companyId" | "timestamp" | "type" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["attendanceRecord"]>
  export type AttendanceRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    device?: boolean | AttendanceRecord$deviceArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type AttendanceRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    device?: boolean | AttendanceRecord$deviceArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type AttendanceRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    device?: boolean | AttendanceRecord$deviceArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $AttendanceRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceRecord"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      device: Prisma.$DevicePayload<ExtArgs> | null
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      deviceId: string | null
      companyId: string
      timestamp: Date
      type: $Enums.RecordType
      status: $Enums.RecordStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendanceRecord"]>
    composites: {}
  }

  type AttendanceRecordGetPayload<S extends boolean | null | undefined | AttendanceRecordDefaultArgs> = $Result.GetResult<Prisma.$AttendanceRecordPayload, S>

  type AttendanceRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceRecordCountAggregateInputType | true
    }

  export interface AttendanceRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceRecord'], meta: { name: 'AttendanceRecord' } }
    /**
     * Find zero or one AttendanceRecord that matches the filter.
     * @param {AttendanceRecordFindUniqueArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceRecordFindUniqueArgs>(args: SelectSubset<T, AttendanceRecordFindUniqueArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttendanceRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceRecordFindUniqueOrThrowArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindFirstArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceRecordFindFirstArgs>(args?: SelectSubset<T, AttendanceRecordFindFirstArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindFirstOrThrowArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttendanceRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceRecords
     * const attendanceRecords = await prisma.attendanceRecord.findMany()
     * 
     * // Get first 10 AttendanceRecords
     * const attendanceRecords = await prisma.attendanceRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceRecordWithIdOnly = await prisma.attendanceRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceRecordFindManyArgs>(args?: SelectSubset<T, AttendanceRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttendanceRecord.
     * @param {AttendanceRecordCreateArgs} args - Arguments to create a AttendanceRecord.
     * @example
     * // Create one AttendanceRecord
     * const AttendanceRecord = await prisma.attendanceRecord.create({
     *   data: {
     *     // ... data to create a AttendanceRecord
     *   }
     * })
     * 
     */
    create<T extends AttendanceRecordCreateArgs>(args: SelectSubset<T, AttendanceRecordCreateArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttendanceRecords.
     * @param {AttendanceRecordCreateManyArgs} args - Arguments to create many AttendanceRecords.
     * @example
     * // Create many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceRecordCreateManyArgs>(args?: SelectSubset<T, AttendanceRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttendanceRecords and returns the data saved in the database.
     * @param {AttendanceRecordCreateManyAndReturnArgs} args - Arguments to create many AttendanceRecords.
     * @example
     * // Create many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttendanceRecords and only return the `id`
     * const attendanceRecordWithIdOnly = await prisma.attendanceRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttendanceRecord.
     * @param {AttendanceRecordDeleteArgs} args - Arguments to delete one AttendanceRecord.
     * @example
     * // Delete one AttendanceRecord
     * const AttendanceRecord = await prisma.attendanceRecord.delete({
     *   where: {
     *     // ... filter to delete one AttendanceRecord
     *   }
     * })
     * 
     */
    delete<T extends AttendanceRecordDeleteArgs>(args: SelectSubset<T, AttendanceRecordDeleteArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttendanceRecord.
     * @param {AttendanceRecordUpdateArgs} args - Arguments to update one AttendanceRecord.
     * @example
     * // Update one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceRecordUpdateArgs>(args: SelectSubset<T, AttendanceRecordUpdateArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttendanceRecords.
     * @param {AttendanceRecordDeleteManyArgs} args - Arguments to filter AttendanceRecords to delete.
     * @example
     * // Delete a few AttendanceRecords
     * const { count } = await prisma.attendanceRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceRecordDeleteManyArgs>(args?: SelectSubset<T, AttendanceRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceRecordUpdateManyArgs>(args: SelectSubset<T, AttendanceRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceRecords and returns the data updated in the database.
     * @param {AttendanceRecordUpdateManyAndReturnArgs} args - Arguments to update many AttendanceRecords.
     * @example
     * // Update many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttendanceRecords and only return the `id`
     * const attendanceRecordWithIdOnly = await prisma.attendanceRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttendanceRecord.
     * @param {AttendanceRecordUpsertArgs} args - Arguments to update or create a AttendanceRecord.
     * @example
     * // Update or create a AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.upsert({
     *   create: {
     *     // ... data to create a AttendanceRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceRecord we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceRecordUpsertArgs>(args: SelectSubset<T, AttendanceRecordUpsertArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttendanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordCountArgs} args - Arguments to filter AttendanceRecords to count.
     * @example
     * // Count the number of AttendanceRecords
     * const count = await prisma.attendanceRecord.count({
     *   where: {
     *     // ... the filter for the AttendanceRecords we want to count
     *   }
     * })
    **/
    count<T extends AttendanceRecordCountArgs>(
      args?: Subset<T, AttendanceRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceRecordAggregateArgs>(args: Subset<T, AttendanceRecordAggregateArgs>): Prisma.PrismaPromise<GetAttendanceRecordAggregateType<T>>

    /**
     * Group by AttendanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceRecordGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceRecord model
   */
  readonly fields: AttendanceRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    device<T extends AttendanceRecord$deviceArgs<ExtArgs> = {}>(args?: Subset<T, AttendanceRecord$deviceArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AttendanceRecord model
   */
  interface AttendanceRecordFieldRefs {
    readonly id: FieldRef<"AttendanceRecord", 'String'>
    readonly employeeId: FieldRef<"AttendanceRecord", 'String'>
    readonly deviceId: FieldRef<"AttendanceRecord", 'String'>
    readonly companyId: FieldRef<"AttendanceRecord", 'String'>
    readonly timestamp: FieldRef<"AttendanceRecord", 'DateTime'>
    readonly type: FieldRef<"AttendanceRecord", 'RecordType'>
    readonly status: FieldRef<"AttendanceRecord", 'RecordStatus'>
    readonly notes: FieldRef<"AttendanceRecord", 'String'>
    readonly createdAt: FieldRef<"AttendanceRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"AttendanceRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceRecord findUnique
   */
  export type AttendanceRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord findUniqueOrThrow
   */
  export type AttendanceRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord findFirst
   */
  export type AttendanceRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceRecords.
     */
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord findFirstOrThrow
   */
  export type AttendanceRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceRecords.
     */
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord findMany
   */
  export type AttendanceRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecords to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord create
   */
  export type AttendanceRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a AttendanceRecord.
     */
    data: XOR<AttendanceRecordCreateInput, AttendanceRecordUncheckedCreateInput>
  }

  /**
   * AttendanceRecord createMany
   */
  export type AttendanceRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceRecords.
     */
    data: AttendanceRecordCreateManyInput | AttendanceRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceRecord createManyAndReturn
   */
  export type AttendanceRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * The data used to create many AttendanceRecords.
     */
    data: AttendanceRecordCreateManyInput | AttendanceRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttendanceRecord update
   */
  export type AttendanceRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a AttendanceRecord.
     */
    data: XOR<AttendanceRecordUpdateInput, AttendanceRecordUncheckedUpdateInput>
    /**
     * Choose, which AttendanceRecord to update.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord updateMany
   */
  export type AttendanceRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceRecords.
     */
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceRecords to update
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to update.
     */
    limit?: number
  }

  /**
   * AttendanceRecord updateManyAndReturn
   */
  export type AttendanceRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * The data used to update AttendanceRecords.
     */
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceRecords to update
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttendanceRecord upsert
   */
  export type AttendanceRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the AttendanceRecord to update in case it exists.
     */
    where: AttendanceRecordWhereUniqueInput
    /**
     * In case the AttendanceRecord found by the `where` argument doesn't exist, create a new AttendanceRecord with this data.
     */
    create: XOR<AttendanceRecordCreateInput, AttendanceRecordUncheckedCreateInput>
    /**
     * In case the AttendanceRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceRecordUpdateInput, AttendanceRecordUncheckedUpdateInput>
  }

  /**
   * AttendanceRecord delete
   */
  export type AttendanceRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter which AttendanceRecord to delete.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord deleteMany
   */
  export type AttendanceRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceRecords to delete
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to delete.
     */
    limit?: number
  }

  /**
   * AttendanceRecord.device
   */
  export type AttendanceRecord$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
  }

  /**
   * AttendanceRecord without action
   */
  export type AttendanceRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
  }


  /**
   * Model Leave
   */

  export type AggregateLeave = {
    _count: LeaveCountAggregateOutputType | null
    _min: LeaveMinAggregateOutputType | null
    _max: LeaveMaxAggregateOutputType | null
  }

  export type LeaveMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    type: $Enums.LeaveType | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.LeaveStatus | null
    reason: string | null
    approvedBy: string | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaveMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    type: $Enums.LeaveType | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.LeaveStatus | null
    reason: string | null
    approvedBy: string | null
    approvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaveCountAggregateOutputType = {
    id: number
    employeeId: number
    type: number
    startDate: number
    endDate: number
    status: number
    reason: number
    approvedBy: number
    approvedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeaveMinAggregateInputType = {
    id?: true
    employeeId?: true
    type?: true
    startDate?: true
    endDate?: true
    status?: true
    reason?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaveMaxAggregateInputType = {
    id?: true
    employeeId?: true
    type?: true
    startDate?: true
    endDate?: true
    status?: true
    reason?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaveCountAggregateInputType = {
    id?: true
    employeeId?: true
    type?: true
    startDate?: true
    endDate?: true
    status?: true
    reason?: true
    approvedBy?: true
    approvedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leave to aggregate.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leaves
    **/
    _count?: true | LeaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveMaxAggregateInputType
  }

  export type GetLeaveAggregateType<T extends LeaveAggregateArgs> = {
        [P in keyof T & keyof AggregateLeave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeave[P]>
      : GetScalarType<T[P], AggregateLeave[P]>
  }




  export type LeaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithAggregationInput | LeaveOrderByWithAggregationInput[]
    by: LeaveScalarFieldEnum[] | LeaveScalarFieldEnum
    having?: LeaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveCountAggregateInputType | true
    _min?: LeaveMinAggregateInputType
    _max?: LeaveMaxAggregateInputType
  }

  export type LeaveGroupByOutputType = {
    id: string
    employeeId: string
    type: $Enums.LeaveType
    startDate: Date
    endDate: Date
    status: $Enums.LeaveStatus
    reason: string | null
    approvedBy: string | null
    approvedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: LeaveCountAggregateOutputType | null
    _min: LeaveMinAggregateOutputType | null
    _max: LeaveMaxAggregateOutputType | null
  }

  type GetLeaveGroupByPayload<T extends LeaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveGroupByOutputType[P]>
        }
      >
    >


  export type LeaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    reason?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave"]>

  export type LeaveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    reason?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave"]>

  export type LeaveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    reason?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave"]>

  export type LeaveSelectScalar = {
    id?: boolean
    employeeId?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    reason?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeaveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "type" | "startDate" | "endDate" | "status" | "reason" | "approvedBy" | "approvedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["leave"]>
  export type LeaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type LeaveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type LeaveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $LeavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leave"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      type: $Enums.LeaveType
      startDate: Date
      endDate: Date
      status: $Enums.LeaveStatus
      reason: string | null
      approvedBy: string | null
      approvedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["leave"]>
    composites: {}
  }

  type LeaveGetPayload<S extends boolean | null | undefined | LeaveDefaultArgs> = $Result.GetResult<Prisma.$LeavePayload, S>

  type LeaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveCountAggregateInputType | true
    }

  export interface LeaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leave'], meta: { name: 'Leave' } }
    /**
     * Find zero or one Leave that matches the filter.
     * @param {LeaveFindUniqueArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveFindUniqueArgs>(args: SelectSubset<T, LeaveFindUniqueArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leave that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveFindUniqueOrThrowArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindFirstArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveFindFirstArgs>(args?: SelectSubset<T, LeaveFindFirstArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindFirstOrThrowArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leaves
     * const leaves = await prisma.leave.findMany()
     * 
     * // Get first 10 Leaves
     * const leaves = await prisma.leave.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveWithIdOnly = await prisma.leave.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveFindManyArgs>(args?: SelectSubset<T, LeaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leave.
     * @param {LeaveCreateArgs} args - Arguments to create a Leave.
     * @example
     * // Create one Leave
     * const Leave = await prisma.leave.create({
     *   data: {
     *     // ... data to create a Leave
     *   }
     * })
     * 
     */
    create<T extends LeaveCreateArgs>(args: SelectSubset<T, LeaveCreateArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leaves.
     * @param {LeaveCreateManyArgs} args - Arguments to create many Leaves.
     * @example
     * // Create many Leaves
     * const leave = await prisma.leave.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveCreateManyArgs>(args?: SelectSubset<T, LeaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leaves and returns the data saved in the database.
     * @param {LeaveCreateManyAndReturnArgs} args - Arguments to create many Leaves.
     * @example
     * // Create many Leaves
     * const leave = await prisma.leave.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leaves and only return the `id`
     * const leaveWithIdOnly = await prisma.leave.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leave.
     * @param {LeaveDeleteArgs} args - Arguments to delete one Leave.
     * @example
     * // Delete one Leave
     * const Leave = await prisma.leave.delete({
     *   where: {
     *     // ... filter to delete one Leave
     *   }
     * })
     * 
     */
    delete<T extends LeaveDeleteArgs>(args: SelectSubset<T, LeaveDeleteArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leave.
     * @param {LeaveUpdateArgs} args - Arguments to update one Leave.
     * @example
     * // Update one Leave
     * const leave = await prisma.leave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveUpdateArgs>(args: SelectSubset<T, LeaveUpdateArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leaves.
     * @param {LeaveDeleteManyArgs} args - Arguments to filter Leaves to delete.
     * @example
     * // Delete a few Leaves
     * const { count } = await prisma.leave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveDeleteManyArgs>(args?: SelectSubset<T, LeaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leaves
     * const leave = await prisma.leave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveUpdateManyArgs>(args: SelectSubset<T, LeaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaves and returns the data updated in the database.
     * @param {LeaveUpdateManyAndReturnArgs} args - Arguments to update many Leaves.
     * @example
     * // Update many Leaves
     * const leave = await prisma.leave.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leaves and only return the `id`
     * const leaveWithIdOnly = await prisma.leave.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaveUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leave.
     * @param {LeaveUpsertArgs} args - Arguments to update or create a Leave.
     * @example
     * // Update or create a Leave
     * const leave = await prisma.leave.upsert({
     *   create: {
     *     // ... data to create a Leave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leave we want to update
     *   }
     * })
     */
    upsert<T extends LeaveUpsertArgs>(args: SelectSubset<T, LeaveUpsertArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveCountArgs} args - Arguments to filter Leaves to count.
     * @example
     * // Count the number of Leaves
     * const count = await prisma.leave.count({
     *   where: {
     *     // ... the filter for the Leaves we want to count
     *   }
     * })
    **/
    count<T extends LeaveCountArgs>(
      args?: Subset<T, LeaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaveAggregateArgs>(args: Subset<T, LeaveAggregateArgs>): Prisma.PrismaPromise<GetLeaveAggregateType<T>>

    /**
     * Group by Leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveGroupByArgs['orderBy'] }
        : { orderBy?: LeaveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leave model
   */
  readonly fields: LeaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Leave model
   */
  interface LeaveFieldRefs {
    readonly id: FieldRef<"Leave", 'String'>
    readonly employeeId: FieldRef<"Leave", 'String'>
    readonly type: FieldRef<"Leave", 'LeaveType'>
    readonly startDate: FieldRef<"Leave", 'DateTime'>
    readonly endDate: FieldRef<"Leave", 'DateTime'>
    readonly status: FieldRef<"Leave", 'LeaveStatus'>
    readonly reason: FieldRef<"Leave", 'String'>
    readonly approvedBy: FieldRef<"Leave", 'String'>
    readonly approvedAt: FieldRef<"Leave", 'DateTime'>
    readonly createdAt: FieldRef<"Leave", 'DateTime'>
    readonly updatedAt: FieldRef<"Leave", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Leave findUnique
   */
  export type LeaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave findUniqueOrThrow
   */
  export type LeaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave findFirst
   */
  export type LeaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaves.
     */
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave findFirstOrThrow
   */
  export type LeaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaves.
     */
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave findMany
   */
  export type LeaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leaves to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave create
   */
  export type LeaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * The data needed to create a Leave.
     */
    data: XOR<LeaveCreateInput, LeaveUncheckedCreateInput>
  }

  /**
   * Leave createMany
   */
  export type LeaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leaves.
     */
    data: LeaveCreateManyInput | LeaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leave createManyAndReturn
   */
  export type LeaveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * The data used to create many Leaves.
     */
    data: LeaveCreateManyInput | LeaveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leave update
   */
  export type LeaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * The data needed to update a Leave.
     */
    data: XOR<LeaveUpdateInput, LeaveUncheckedUpdateInput>
    /**
     * Choose, which Leave to update.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave updateMany
   */
  export type LeaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leaves.
     */
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyInput>
    /**
     * Filter which Leaves to update
     */
    where?: LeaveWhereInput
    /**
     * Limit how many Leaves to update.
     */
    limit?: number
  }

  /**
   * Leave updateManyAndReturn
   */
  export type LeaveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * The data used to update Leaves.
     */
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyInput>
    /**
     * Filter which Leaves to update
     */
    where?: LeaveWhereInput
    /**
     * Limit how many Leaves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leave upsert
   */
  export type LeaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * The filter to search for the Leave to update in case it exists.
     */
    where: LeaveWhereUniqueInput
    /**
     * In case the Leave found by the `where` argument doesn't exist, create a new Leave with this data.
     */
    create: XOR<LeaveCreateInput, LeaveUncheckedCreateInput>
    /**
     * In case the Leave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveUpdateInput, LeaveUncheckedUpdateInput>
  }

  /**
   * Leave delete
   */
  export type LeaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter which Leave to delete.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave deleteMany
   */
  export type LeaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaves to delete
     */
    where?: LeaveWhereInput
    /**
     * Limit how many Leaves to delete.
     */
    limit?: number
  }

  /**
   * Leave without action
   */
  export type LeaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
  }


  /**
   * Model Holiday
   */

  export type AggregateHoliday = {
    _count: HolidayCountAggregateOutputType | null
    _min: HolidayMinAggregateOutputType | null
    _max: HolidayMaxAggregateOutputType | null
  }

  export type HolidayMinAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    description: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HolidayMaxAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    description: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HolidayCountAggregateOutputType = {
    id: number
    name: number
    date: number
    description: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HolidayMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    description?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HolidayMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    description?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HolidayCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    description?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HolidayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holiday to aggregate.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Holidays
    **/
    _count?: true | HolidayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HolidayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HolidayMaxAggregateInputType
  }

  export type GetHolidayAggregateType<T extends HolidayAggregateArgs> = {
        [P in keyof T & keyof AggregateHoliday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoliday[P]>
      : GetScalarType<T[P], AggregateHoliday[P]>
  }




  export type HolidayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HolidayWhereInput
    orderBy?: HolidayOrderByWithAggregationInput | HolidayOrderByWithAggregationInput[]
    by: HolidayScalarFieldEnum[] | HolidayScalarFieldEnum
    having?: HolidayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HolidayCountAggregateInputType | true
    _min?: HolidayMinAggregateInputType
    _max?: HolidayMaxAggregateInputType
  }

  export type HolidayGroupByOutputType = {
    id: string
    name: string
    date: Date
    description: string | null
    companyId: string
    createdAt: Date
    updatedAt: Date
    _count: HolidayCountAggregateOutputType | null
    _min: HolidayMinAggregateOutputType | null
    _max: HolidayMaxAggregateOutputType | null
  }

  type GetHolidayGroupByPayload<T extends HolidayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HolidayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HolidayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HolidayGroupByOutputType[P]>
            : GetScalarType<T[P], HolidayGroupByOutputType[P]>
        }
      >
    >


  export type HolidaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    description?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holiday"]>

  export type HolidaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    description?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holiday"]>

  export type HolidaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    description?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holiday"]>

  export type HolidaySelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    description?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HolidayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date" | "description" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["holiday"]>
  export type HolidayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type HolidayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type HolidayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $HolidayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Holiday"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      date: Date
      description: string | null
      companyId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["holiday"]>
    composites: {}
  }

  type HolidayGetPayload<S extends boolean | null | undefined | HolidayDefaultArgs> = $Result.GetResult<Prisma.$HolidayPayload, S>

  type HolidayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HolidayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HolidayCountAggregateInputType | true
    }

  export interface HolidayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Holiday'], meta: { name: 'Holiday' } }
    /**
     * Find zero or one Holiday that matches the filter.
     * @param {HolidayFindUniqueArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HolidayFindUniqueArgs>(args: SelectSubset<T, HolidayFindUniqueArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Holiday that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HolidayFindUniqueOrThrowArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HolidayFindUniqueOrThrowArgs>(args: SelectSubset<T, HolidayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holiday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindFirstArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HolidayFindFirstArgs>(args?: SelectSubset<T, HolidayFindFirstArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holiday that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindFirstOrThrowArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HolidayFindFirstOrThrowArgs>(args?: SelectSubset<T, HolidayFindFirstOrThrowArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Holidays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holidays
     * const holidays = await prisma.holiday.findMany()
     * 
     * // Get first 10 Holidays
     * const holidays = await prisma.holiday.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holidayWithIdOnly = await prisma.holiday.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HolidayFindManyArgs>(args?: SelectSubset<T, HolidayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Holiday.
     * @param {HolidayCreateArgs} args - Arguments to create a Holiday.
     * @example
     * // Create one Holiday
     * const Holiday = await prisma.holiday.create({
     *   data: {
     *     // ... data to create a Holiday
     *   }
     * })
     * 
     */
    create<T extends HolidayCreateArgs>(args: SelectSubset<T, HolidayCreateArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Holidays.
     * @param {HolidayCreateManyArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holiday = await prisma.holiday.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HolidayCreateManyArgs>(args?: SelectSubset<T, HolidayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Holidays and returns the data saved in the database.
     * @param {HolidayCreateManyAndReturnArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holiday = await prisma.holiday.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Holidays and only return the `id`
     * const holidayWithIdOnly = await prisma.holiday.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HolidayCreateManyAndReturnArgs>(args?: SelectSubset<T, HolidayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Holiday.
     * @param {HolidayDeleteArgs} args - Arguments to delete one Holiday.
     * @example
     * // Delete one Holiday
     * const Holiday = await prisma.holiday.delete({
     *   where: {
     *     // ... filter to delete one Holiday
     *   }
     * })
     * 
     */
    delete<T extends HolidayDeleteArgs>(args: SelectSubset<T, HolidayDeleteArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Holiday.
     * @param {HolidayUpdateArgs} args - Arguments to update one Holiday.
     * @example
     * // Update one Holiday
     * const holiday = await prisma.holiday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HolidayUpdateArgs>(args: SelectSubset<T, HolidayUpdateArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Holidays.
     * @param {HolidayDeleteManyArgs} args - Arguments to filter Holidays to delete.
     * @example
     * // Delete a few Holidays
     * const { count } = await prisma.holiday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HolidayDeleteManyArgs>(args?: SelectSubset<T, HolidayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holidays
     * const holiday = await prisma.holiday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HolidayUpdateManyArgs>(args: SelectSubset<T, HolidayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holidays and returns the data updated in the database.
     * @param {HolidayUpdateManyAndReturnArgs} args - Arguments to update many Holidays.
     * @example
     * // Update many Holidays
     * const holiday = await prisma.holiday.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Holidays and only return the `id`
     * const holidayWithIdOnly = await prisma.holiday.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HolidayUpdateManyAndReturnArgs>(args: SelectSubset<T, HolidayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Holiday.
     * @param {HolidayUpsertArgs} args - Arguments to update or create a Holiday.
     * @example
     * // Update or create a Holiday
     * const holiday = await prisma.holiday.upsert({
     *   create: {
     *     // ... data to create a Holiday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Holiday we want to update
     *   }
     * })
     */
    upsert<T extends HolidayUpsertArgs>(args: SelectSubset<T, HolidayUpsertArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayCountArgs} args - Arguments to filter Holidays to count.
     * @example
     * // Count the number of Holidays
     * const count = await prisma.holiday.count({
     *   where: {
     *     // ... the filter for the Holidays we want to count
     *   }
     * })
    **/
    count<T extends HolidayCountArgs>(
      args?: Subset<T, HolidayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HolidayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HolidayAggregateArgs>(args: Subset<T, HolidayAggregateArgs>): Prisma.PrismaPromise<GetHolidayAggregateType<T>>

    /**
     * Group by Holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HolidayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HolidayGroupByArgs['orderBy'] }
        : { orderBy?: HolidayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HolidayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHolidayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Holiday model
   */
  readonly fields: HolidayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Holiday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HolidayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Holiday model
   */
  interface HolidayFieldRefs {
    readonly id: FieldRef<"Holiday", 'String'>
    readonly name: FieldRef<"Holiday", 'String'>
    readonly date: FieldRef<"Holiday", 'DateTime'>
    readonly description: FieldRef<"Holiday", 'String'>
    readonly companyId: FieldRef<"Holiday", 'String'>
    readonly createdAt: FieldRef<"Holiday", 'DateTime'>
    readonly updatedAt: FieldRef<"Holiday", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Holiday findUnique
   */
  export type HolidayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday findUniqueOrThrow
   */
  export type HolidayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday findFirst
   */
  export type HolidayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holidays.
     */
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday findFirstOrThrow
   */
  export type HolidayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holidays.
     */
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday findMany
   */
  export type HolidayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holidays to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday create
   */
  export type HolidayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * The data needed to create a Holiday.
     */
    data: XOR<HolidayCreateInput, HolidayUncheckedCreateInput>
  }

  /**
   * Holiday createMany
   */
  export type HolidayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Holidays.
     */
    data: HolidayCreateManyInput | HolidayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Holiday createManyAndReturn
   */
  export type HolidayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * The data used to create many Holidays.
     */
    data: HolidayCreateManyInput | HolidayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Holiday update
   */
  export type HolidayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * The data needed to update a Holiday.
     */
    data: XOR<HolidayUpdateInput, HolidayUncheckedUpdateInput>
    /**
     * Choose, which Holiday to update.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday updateMany
   */
  export type HolidayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Holidays.
     */
    data: XOR<HolidayUpdateManyMutationInput, HolidayUncheckedUpdateManyInput>
    /**
     * Filter which Holidays to update
     */
    where?: HolidayWhereInput
    /**
     * Limit how many Holidays to update.
     */
    limit?: number
  }

  /**
   * Holiday updateManyAndReturn
   */
  export type HolidayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * The data used to update Holidays.
     */
    data: XOR<HolidayUpdateManyMutationInput, HolidayUncheckedUpdateManyInput>
    /**
     * Filter which Holidays to update
     */
    where?: HolidayWhereInput
    /**
     * Limit how many Holidays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Holiday upsert
   */
  export type HolidayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * The filter to search for the Holiday to update in case it exists.
     */
    where: HolidayWhereUniqueInput
    /**
     * In case the Holiday found by the `where` argument doesn't exist, create a new Holiday with this data.
     */
    create: XOR<HolidayCreateInput, HolidayUncheckedCreateInput>
    /**
     * In case the Holiday was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HolidayUpdateInput, HolidayUncheckedUpdateInput>
  }

  /**
   * Holiday delete
   */
  export type HolidayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter which Holiday to delete.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday deleteMany
   */
  export type HolidayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holidays to delete
     */
    where?: HolidayWhereInput
    /**
     * Limit how many Holidays to delete.
     */
    limit?: number
  }

  /**
   * Holiday without action
   */
  export type HolidayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
  }


  /**
   * Model Visitor
   */

  export type AggregateVisitor = {
    _count: VisitorCountAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  export type VisitorMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    company: string | null
    purpose: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitorMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    company: string | null
    purpose: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitorCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    company: number
    purpose: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VisitorMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    company?: true
    purpose?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitorMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    company?: true
    purpose?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitorCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    company?: true
    purpose?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VisitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitor to aggregate.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visitors
    **/
    _count?: true | VisitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorMaxAggregateInputType
  }

  export type GetVisitorAggregateType<T extends VisitorAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitor[P]>
      : GetScalarType<T[P], AggregateVisitor[P]>
  }




  export type VisitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorWhereInput
    orderBy?: VisitorOrderByWithAggregationInput | VisitorOrderByWithAggregationInput[]
    by: VisitorScalarFieldEnum[] | VisitorScalarFieldEnum
    having?: VisitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorCountAggregateInputType | true
    _min?: VisitorMinAggregateInputType
    _max?: VisitorMaxAggregateInputType
  }

  export type VisitorGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string | null
    phone: string | null
    company: string | null
    purpose: string | null
    companyId: string
    createdAt: Date
    updatedAt: Date
    _count: VisitorCountAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  type GetVisitorGroupByPayload<T extends VisitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorGroupByOutputType[P]>
        }
      >
    >


  export type VisitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    purpose?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hostCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    visits?: boolean | Visitor$visitsArgs<ExtArgs>
    _count?: boolean | VisitorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    purpose?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hostCompany?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    purpose?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hostCompany?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    purpose?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VisitorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "company" | "purpose" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["visitor"]>
  export type VisitorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hostCompany?: boolean | CompanyDefaultArgs<ExtArgs>
    visits?: boolean | Visitor$visitsArgs<ExtArgs>
    _count?: boolean | VisitorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VisitorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hostCompany?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type VisitorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hostCompany?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $VisitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visitor"
    objects: {
      hostCompany: Prisma.$CompanyPayload<ExtArgs>
      visits: Prisma.$VisitorRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string | null
      phone: string | null
      company: string | null
      purpose: string | null
      companyId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["visitor"]>
    composites: {}
  }

  type VisitorGetPayload<S extends boolean | null | undefined | VisitorDefaultArgs> = $Result.GetResult<Prisma.$VisitorPayload, S>

  type VisitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitorCountAggregateInputType | true
    }

  export interface VisitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visitor'], meta: { name: 'Visitor' } }
    /**
     * Find zero or one Visitor that matches the filter.
     * @param {VisitorFindUniqueArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitorFindUniqueArgs>(args: SelectSubset<T, VisitorFindUniqueArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visitor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitorFindUniqueOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitorFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitorFindFirstArgs>(args?: SelectSubset<T, VisitorFindFirstArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitorFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visitors
     * const visitors = await prisma.visitor.findMany()
     * 
     * // Get first 10 Visitors
     * const visitors = await prisma.visitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitorWithIdOnly = await prisma.visitor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitorFindManyArgs>(args?: SelectSubset<T, VisitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visitor.
     * @param {VisitorCreateArgs} args - Arguments to create a Visitor.
     * @example
     * // Create one Visitor
     * const Visitor = await prisma.visitor.create({
     *   data: {
     *     // ... data to create a Visitor
     *   }
     * })
     * 
     */
    create<T extends VisitorCreateArgs>(args: SelectSubset<T, VisitorCreateArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visitors.
     * @param {VisitorCreateManyArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitor = await prisma.visitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitorCreateManyArgs>(args?: SelectSubset<T, VisitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visitors and returns the data saved in the database.
     * @param {VisitorCreateManyAndReturnArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitor = await prisma.visitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visitors and only return the `id`
     * const visitorWithIdOnly = await prisma.visitor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitorCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visitor.
     * @param {VisitorDeleteArgs} args - Arguments to delete one Visitor.
     * @example
     * // Delete one Visitor
     * const Visitor = await prisma.visitor.delete({
     *   where: {
     *     // ... filter to delete one Visitor
     *   }
     * })
     * 
     */
    delete<T extends VisitorDeleteArgs>(args: SelectSubset<T, VisitorDeleteArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visitor.
     * @param {VisitorUpdateArgs} args - Arguments to update one Visitor.
     * @example
     * // Update one Visitor
     * const visitor = await prisma.visitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitorUpdateArgs>(args: SelectSubset<T, VisitorUpdateArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visitors.
     * @param {VisitorDeleteManyArgs} args - Arguments to filter Visitors to delete.
     * @example
     * // Delete a few Visitors
     * const { count } = await prisma.visitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitorDeleteManyArgs>(args?: SelectSubset<T, VisitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitorUpdateManyArgs>(args: SelectSubset<T, VisitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors and returns the data updated in the database.
     * @param {VisitorUpdateManyAndReturnArgs} args - Arguments to update many Visitors.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visitors and only return the `id`
     * const visitorWithIdOnly = await prisma.visitor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisitorUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visitor.
     * @param {VisitorUpsertArgs} args - Arguments to update or create a Visitor.
     * @example
     * // Update or create a Visitor
     * const visitor = await prisma.visitor.upsert({
     *   create: {
     *     // ... data to create a Visitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visitor we want to update
     *   }
     * })
     */
    upsert<T extends VisitorUpsertArgs>(args: SelectSubset<T, VisitorUpsertArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorCountArgs} args - Arguments to filter Visitors to count.
     * @example
     * // Count the number of Visitors
     * const count = await prisma.visitor.count({
     *   where: {
     *     // ... the filter for the Visitors we want to count
     *   }
     * })
    **/
    count<T extends VisitorCountArgs>(
      args?: Subset<T, VisitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisitorAggregateArgs>(args: Subset<T, VisitorAggregateArgs>): Prisma.PrismaPromise<GetVisitorAggregateType<T>>

    /**
     * Group by Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitorGroupByArgs['orderBy'] }
        : { orderBy?: VisitorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visitor model
   */
  readonly fields: VisitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hostCompany<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    visits<T extends Visitor$visitsArgs<ExtArgs> = {}>(args?: Subset<T, Visitor$visitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Visitor model
   */
  interface VisitorFieldRefs {
    readonly id: FieldRef<"Visitor", 'String'>
    readonly firstName: FieldRef<"Visitor", 'String'>
    readonly lastName: FieldRef<"Visitor", 'String'>
    readonly email: FieldRef<"Visitor", 'String'>
    readonly phone: FieldRef<"Visitor", 'String'>
    readonly company: FieldRef<"Visitor", 'String'>
    readonly purpose: FieldRef<"Visitor", 'String'>
    readonly companyId: FieldRef<"Visitor", 'String'>
    readonly createdAt: FieldRef<"Visitor", 'DateTime'>
    readonly updatedAt: FieldRef<"Visitor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Visitor findUnique
   */
  export type VisitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor findUniqueOrThrow
   */
  export type VisitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor findFirst
   */
  export type VisitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor findFirstOrThrow
   */
  export type VisitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor findMany
   */
  export type VisitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitors to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor create
   */
  export type VisitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The data needed to create a Visitor.
     */
    data: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
  }

  /**
   * Visitor createMany
   */
  export type VisitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visitors.
     */
    data: VisitorCreateManyInput | VisitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visitor createManyAndReturn
   */
  export type VisitorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * The data used to create many Visitors.
     */
    data: VisitorCreateManyInput | VisitorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visitor update
   */
  export type VisitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The data needed to update a Visitor.
     */
    data: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
    /**
     * Choose, which Visitor to update.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor updateMany
   */
  export type VisitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to update.
     */
    limit?: number
  }

  /**
   * Visitor updateManyAndReturn
   */
  export type VisitorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visitor upsert
   */
  export type VisitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The filter to search for the Visitor to update in case it exists.
     */
    where: VisitorWhereUniqueInput
    /**
     * In case the Visitor found by the `where` argument doesn't exist, create a new Visitor with this data.
     */
    create: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
    /**
     * In case the Visitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
  }

  /**
   * Visitor delete
   */
  export type VisitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter which Visitor to delete.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor deleteMany
   */
  export type VisitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitors to delete
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to delete.
     */
    limit?: number
  }

  /**
   * Visitor.visits
   */
  export type Visitor$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorRecord
     */
    select?: VisitorRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorRecord
     */
    omit?: VisitorRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorRecordInclude<ExtArgs> | null
    where?: VisitorRecordWhereInput
    orderBy?: VisitorRecordOrderByWithRelationInput | VisitorRecordOrderByWithRelationInput[]
    cursor?: VisitorRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitorRecordScalarFieldEnum | VisitorRecordScalarFieldEnum[]
  }

  /**
   * Visitor without action
   */
  export type VisitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
  }


  /**
   * Model VisitorRecord
   */

  export type AggregateVisitorRecord = {
    _count: VisitorRecordCountAggregateOutputType | null
    _min: VisitorRecordMinAggregateOutputType | null
    _max: VisitorRecordMaxAggregateOutputType | null
  }

  export type VisitorRecordMinAggregateOutputType = {
    id: string | null
    visitorId: string | null
    checkIn: Date | null
    checkOut: Date | null
    hostName: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitorRecordMaxAggregateOutputType = {
    id: string | null
    visitorId: string | null
    checkIn: Date | null
    checkOut: Date | null
    hostName: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitorRecordCountAggregateOutputType = {
    id: number
    visitorId: number
    checkIn: number
    checkOut: number
    hostName: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VisitorRecordMinAggregateInputType = {
    id?: true
    visitorId?: true
    checkIn?: true
    checkOut?: true
    hostName?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitorRecordMaxAggregateInputType = {
    id?: true
    visitorId?: true
    checkIn?: true
    checkOut?: true
    hostName?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitorRecordCountAggregateInputType = {
    id?: true
    visitorId?: true
    checkIn?: true
    checkOut?: true
    hostName?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VisitorRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitorRecord to aggregate.
     */
    where?: VisitorRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorRecords to fetch.
     */
    orderBy?: VisitorRecordOrderByWithRelationInput | VisitorRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitorRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisitorRecords
    **/
    _count?: true | VisitorRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorRecordMaxAggregateInputType
  }

  export type GetVisitorRecordAggregateType<T extends VisitorRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitorRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitorRecord[P]>
      : GetScalarType<T[P], AggregateVisitorRecord[P]>
  }




  export type VisitorRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorRecordWhereInput
    orderBy?: VisitorRecordOrderByWithAggregationInput | VisitorRecordOrderByWithAggregationInput[]
    by: VisitorRecordScalarFieldEnum[] | VisitorRecordScalarFieldEnum
    having?: VisitorRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorRecordCountAggregateInputType | true
    _min?: VisitorRecordMinAggregateInputType
    _max?: VisitorRecordMaxAggregateInputType
  }

  export type VisitorRecordGroupByOutputType = {
    id: string
    visitorId: string
    checkIn: Date
    checkOut: Date | null
    hostName: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: VisitorRecordCountAggregateOutputType | null
    _min: VisitorRecordMinAggregateOutputType | null
    _max: VisitorRecordMaxAggregateOutputType | null
  }

  type GetVisitorRecordGroupByPayload<T extends VisitorRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorRecordGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorRecordGroupByOutputType[P]>
        }
      >
    >


  export type VisitorRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    hostName?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitorRecord"]>

  export type VisitorRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    hostName?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitorRecord"]>

  export type VisitorRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    hostName?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitorRecord"]>

  export type VisitorRecordSelectScalar = {
    id?: boolean
    visitorId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    hostName?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VisitorRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "visitorId" | "checkIn" | "checkOut" | "hostName" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["visitorRecord"]>
  export type VisitorRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }
  export type VisitorRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }
  export type VisitorRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }

  export type $VisitorRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisitorRecord"
    objects: {
      visitor: Prisma.$VisitorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      visitorId: string
      checkIn: Date
      checkOut: Date | null
      hostName: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["visitorRecord"]>
    composites: {}
  }

  type VisitorRecordGetPayload<S extends boolean | null | undefined | VisitorRecordDefaultArgs> = $Result.GetResult<Prisma.$VisitorRecordPayload, S>

  type VisitorRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitorRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitorRecordCountAggregateInputType | true
    }

  export interface VisitorRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisitorRecord'], meta: { name: 'VisitorRecord' } }
    /**
     * Find zero or one VisitorRecord that matches the filter.
     * @param {VisitorRecordFindUniqueArgs} args - Arguments to find a VisitorRecord
     * @example
     * // Get one VisitorRecord
     * const visitorRecord = await prisma.visitorRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitorRecordFindUniqueArgs>(args: SelectSubset<T, VisitorRecordFindUniqueArgs<ExtArgs>>): Prisma__VisitorRecordClient<$Result.GetResult<Prisma.$VisitorRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisitorRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitorRecordFindUniqueOrThrowArgs} args - Arguments to find a VisitorRecord
     * @example
     * // Get one VisitorRecord
     * const visitorRecord = await prisma.visitorRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitorRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitorRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitorRecordClient<$Result.GetResult<Prisma.$VisitorRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitorRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorRecordFindFirstArgs} args - Arguments to find a VisitorRecord
     * @example
     * // Get one VisitorRecord
     * const visitorRecord = await prisma.visitorRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitorRecordFindFirstArgs>(args?: SelectSubset<T, VisitorRecordFindFirstArgs<ExtArgs>>): Prisma__VisitorRecordClient<$Result.GetResult<Prisma.$VisitorRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitorRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorRecordFindFirstOrThrowArgs} args - Arguments to find a VisitorRecord
     * @example
     * // Get one VisitorRecord
     * const visitorRecord = await prisma.visitorRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitorRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitorRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitorRecordClient<$Result.GetResult<Prisma.$VisitorRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisitorRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisitorRecords
     * const visitorRecords = await prisma.visitorRecord.findMany()
     * 
     * // Get first 10 VisitorRecords
     * const visitorRecords = await prisma.visitorRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitorRecordWithIdOnly = await prisma.visitorRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitorRecordFindManyArgs>(args?: SelectSubset<T, VisitorRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisitorRecord.
     * @param {VisitorRecordCreateArgs} args - Arguments to create a VisitorRecord.
     * @example
     * // Create one VisitorRecord
     * const VisitorRecord = await prisma.visitorRecord.create({
     *   data: {
     *     // ... data to create a VisitorRecord
     *   }
     * })
     * 
     */
    create<T extends VisitorRecordCreateArgs>(args: SelectSubset<T, VisitorRecordCreateArgs<ExtArgs>>): Prisma__VisitorRecordClient<$Result.GetResult<Prisma.$VisitorRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisitorRecords.
     * @param {VisitorRecordCreateManyArgs} args - Arguments to create many VisitorRecords.
     * @example
     * // Create many VisitorRecords
     * const visitorRecord = await prisma.visitorRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitorRecordCreateManyArgs>(args?: SelectSubset<T, VisitorRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VisitorRecords and returns the data saved in the database.
     * @param {VisitorRecordCreateManyAndReturnArgs} args - Arguments to create many VisitorRecords.
     * @example
     * // Create many VisitorRecords
     * const visitorRecord = await prisma.visitorRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VisitorRecords and only return the `id`
     * const visitorRecordWithIdOnly = await prisma.visitorRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitorRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitorRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VisitorRecord.
     * @param {VisitorRecordDeleteArgs} args - Arguments to delete one VisitorRecord.
     * @example
     * // Delete one VisitorRecord
     * const VisitorRecord = await prisma.visitorRecord.delete({
     *   where: {
     *     // ... filter to delete one VisitorRecord
     *   }
     * })
     * 
     */
    delete<T extends VisitorRecordDeleteArgs>(args: SelectSubset<T, VisitorRecordDeleteArgs<ExtArgs>>): Prisma__VisitorRecordClient<$Result.GetResult<Prisma.$VisitorRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisitorRecord.
     * @param {VisitorRecordUpdateArgs} args - Arguments to update one VisitorRecord.
     * @example
     * // Update one VisitorRecord
     * const visitorRecord = await prisma.visitorRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitorRecordUpdateArgs>(args: SelectSubset<T, VisitorRecordUpdateArgs<ExtArgs>>): Prisma__VisitorRecordClient<$Result.GetResult<Prisma.$VisitorRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisitorRecords.
     * @param {VisitorRecordDeleteManyArgs} args - Arguments to filter VisitorRecords to delete.
     * @example
     * // Delete a few VisitorRecords
     * const { count } = await prisma.visitorRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitorRecordDeleteManyArgs>(args?: SelectSubset<T, VisitorRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitorRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisitorRecords
     * const visitorRecord = await prisma.visitorRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitorRecordUpdateManyArgs>(args: SelectSubset<T, VisitorRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitorRecords and returns the data updated in the database.
     * @param {VisitorRecordUpdateManyAndReturnArgs} args - Arguments to update many VisitorRecords.
     * @example
     * // Update many VisitorRecords
     * const visitorRecord = await prisma.visitorRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VisitorRecords and only return the `id`
     * const visitorRecordWithIdOnly = await prisma.visitorRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisitorRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitorRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VisitorRecord.
     * @param {VisitorRecordUpsertArgs} args - Arguments to update or create a VisitorRecord.
     * @example
     * // Update or create a VisitorRecord
     * const visitorRecord = await prisma.visitorRecord.upsert({
     *   create: {
     *     // ... data to create a VisitorRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisitorRecord we want to update
     *   }
     * })
     */
    upsert<T extends VisitorRecordUpsertArgs>(args: SelectSubset<T, VisitorRecordUpsertArgs<ExtArgs>>): Prisma__VisitorRecordClient<$Result.GetResult<Prisma.$VisitorRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisitorRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorRecordCountArgs} args - Arguments to filter VisitorRecords to count.
     * @example
     * // Count the number of VisitorRecords
     * const count = await prisma.visitorRecord.count({
     *   where: {
     *     // ... the filter for the VisitorRecords we want to count
     *   }
     * })
    **/
    count<T extends VisitorRecordCountArgs>(
      args?: Subset<T, VisitorRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisitorRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisitorRecordAggregateArgs>(args: Subset<T, VisitorRecordAggregateArgs>): Prisma.PrismaPromise<GetVisitorRecordAggregateType<T>>

    /**
     * Group by VisitorRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisitorRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitorRecordGroupByArgs['orderBy'] }
        : { orderBy?: VisitorRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisitorRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisitorRecord model
   */
  readonly fields: VisitorRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisitorRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitorRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visitor<T extends VisitorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisitorDefaultArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VisitorRecord model
   */
  interface VisitorRecordFieldRefs {
    readonly id: FieldRef<"VisitorRecord", 'String'>
    readonly visitorId: FieldRef<"VisitorRecord", 'String'>
    readonly checkIn: FieldRef<"VisitorRecord", 'DateTime'>
    readonly checkOut: FieldRef<"VisitorRecord", 'DateTime'>
    readonly hostName: FieldRef<"VisitorRecord", 'String'>
    readonly notes: FieldRef<"VisitorRecord", 'String'>
    readonly createdAt: FieldRef<"VisitorRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"VisitorRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VisitorRecord findUnique
   */
  export type VisitorRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorRecord
     */
    select?: VisitorRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorRecord
     */
    omit?: VisitorRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorRecordInclude<ExtArgs> | null
    /**
     * Filter, which VisitorRecord to fetch.
     */
    where: VisitorRecordWhereUniqueInput
  }

  /**
   * VisitorRecord findUniqueOrThrow
   */
  export type VisitorRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorRecord
     */
    select?: VisitorRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorRecord
     */
    omit?: VisitorRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorRecordInclude<ExtArgs> | null
    /**
     * Filter, which VisitorRecord to fetch.
     */
    where: VisitorRecordWhereUniqueInput
  }

  /**
   * VisitorRecord findFirst
   */
  export type VisitorRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorRecord
     */
    select?: VisitorRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorRecord
     */
    omit?: VisitorRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorRecordInclude<ExtArgs> | null
    /**
     * Filter, which VisitorRecord to fetch.
     */
    where?: VisitorRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorRecords to fetch.
     */
    orderBy?: VisitorRecordOrderByWithRelationInput | VisitorRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitorRecords.
     */
    cursor?: VisitorRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitorRecords.
     */
    distinct?: VisitorRecordScalarFieldEnum | VisitorRecordScalarFieldEnum[]
  }

  /**
   * VisitorRecord findFirstOrThrow
   */
  export type VisitorRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorRecord
     */
    select?: VisitorRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorRecord
     */
    omit?: VisitorRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorRecordInclude<ExtArgs> | null
    /**
     * Filter, which VisitorRecord to fetch.
     */
    where?: VisitorRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorRecords to fetch.
     */
    orderBy?: VisitorRecordOrderByWithRelationInput | VisitorRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitorRecords.
     */
    cursor?: VisitorRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitorRecords.
     */
    distinct?: VisitorRecordScalarFieldEnum | VisitorRecordScalarFieldEnum[]
  }

  /**
   * VisitorRecord findMany
   */
  export type VisitorRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorRecord
     */
    select?: VisitorRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorRecord
     */
    omit?: VisitorRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorRecordInclude<ExtArgs> | null
    /**
     * Filter, which VisitorRecords to fetch.
     */
    where?: VisitorRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorRecords to fetch.
     */
    orderBy?: VisitorRecordOrderByWithRelationInput | VisitorRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisitorRecords.
     */
    cursor?: VisitorRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorRecords.
     */
    skip?: number
    distinct?: VisitorRecordScalarFieldEnum | VisitorRecordScalarFieldEnum[]
  }

  /**
   * VisitorRecord create
   */
  export type VisitorRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorRecord
     */
    select?: VisitorRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorRecord
     */
    omit?: VisitorRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a VisitorRecord.
     */
    data: XOR<VisitorRecordCreateInput, VisitorRecordUncheckedCreateInput>
  }

  /**
   * VisitorRecord createMany
   */
  export type VisitorRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisitorRecords.
     */
    data: VisitorRecordCreateManyInput | VisitorRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisitorRecord createManyAndReturn
   */
  export type VisitorRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorRecord
     */
    select?: VisitorRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorRecord
     */
    omit?: VisitorRecordOmit<ExtArgs> | null
    /**
     * The data used to create many VisitorRecords.
     */
    data: VisitorRecordCreateManyInput | VisitorRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VisitorRecord update
   */
  export type VisitorRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorRecord
     */
    select?: VisitorRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorRecord
     */
    omit?: VisitorRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a VisitorRecord.
     */
    data: XOR<VisitorRecordUpdateInput, VisitorRecordUncheckedUpdateInput>
    /**
     * Choose, which VisitorRecord to update.
     */
    where: VisitorRecordWhereUniqueInput
  }

  /**
   * VisitorRecord updateMany
   */
  export type VisitorRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisitorRecords.
     */
    data: XOR<VisitorRecordUpdateManyMutationInput, VisitorRecordUncheckedUpdateManyInput>
    /**
     * Filter which VisitorRecords to update
     */
    where?: VisitorRecordWhereInput
    /**
     * Limit how many VisitorRecords to update.
     */
    limit?: number
  }

  /**
   * VisitorRecord updateManyAndReturn
   */
  export type VisitorRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorRecord
     */
    select?: VisitorRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorRecord
     */
    omit?: VisitorRecordOmit<ExtArgs> | null
    /**
     * The data used to update VisitorRecords.
     */
    data: XOR<VisitorRecordUpdateManyMutationInput, VisitorRecordUncheckedUpdateManyInput>
    /**
     * Filter which VisitorRecords to update
     */
    where?: VisitorRecordWhereInput
    /**
     * Limit how many VisitorRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VisitorRecord upsert
   */
  export type VisitorRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorRecord
     */
    select?: VisitorRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorRecord
     */
    omit?: VisitorRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the VisitorRecord to update in case it exists.
     */
    where: VisitorRecordWhereUniqueInput
    /**
     * In case the VisitorRecord found by the `where` argument doesn't exist, create a new VisitorRecord with this data.
     */
    create: XOR<VisitorRecordCreateInput, VisitorRecordUncheckedCreateInput>
    /**
     * In case the VisitorRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitorRecordUpdateInput, VisitorRecordUncheckedUpdateInput>
  }

  /**
   * VisitorRecord delete
   */
  export type VisitorRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorRecord
     */
    select?: VisitorRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorRecord
     */
    omit?: VisitorRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorRecordInclude<ExtArgs> | null
    /**
     * Filter which VisitorRecord to delete.
     */
    where: VisitorRecordWhereUniqueInput
  }

  /**
   * VisitorRecord deleteMany
   */
  export type VisitorRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitorRecords to delete
     */
    where?: VisitorRecordWhereInput
    /**
     * Limit how many VisitorRecords to delete.
     */
    limit?: number
  }

  /**
   * VisitorRecord without action
   */
  export type VisitorRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorRecord
     */
    select?: VisitorRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorRecord
     */
    omit?: VisitorRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorRecordInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    lastLogin: Date | null
    companyId: string | null
    employeeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    lastLogin: Date | null
    companyId: string | null
    employeeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    role: number
    isActive: number
    lastLogin: number
    companyId: number
    employeeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    isActive?: true
    lastLogin?: true
    companyId?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    isActive?: true
    lastLogin?: true
    companyId?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    isActive?: true
    lastLogin?: true
    companyId?: true
    employeeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive: boolean
    lastLogin: Date | null
    companyId: string
    employeeId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    lastLogin?: boolean
    companyId?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | User$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    lastLogin?: boolean
    companyId?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | User$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    lastLogin?: boolean
    companyId?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | User$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    lastLogin?: boolean
    companyId?: boolean
    employeeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "role" | "isActive" | "lastLogin" | "companyId" | "employeeId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | User$employeeArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | User$employeeArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | User$employeeArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      role: $Enums.UserRole
      isActive: boolean
      lastLogin: Date | null
      companyId: string
      employeeId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends User$employeeArgs<ExtArgs> = {}>(args?: Subset<T, User$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly companyId: FieldRef<"User", 'String'>
    readonly employeeId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.employee
   */
  export type User$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo',
    address: 'address',
    phone: 'phone',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const CompanySettingsScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    workdayStartTime: 'workdayStartTime',
    workdayEndTime: 'workdayEndTime',
    lunchStartTime: 'lunchStartTime',
    lunchEndTime: 'lunchEndTime',
    gracePeriodMinutes: 'gracePeriodMinutes',
    weekendDays: 'weekendDays',
    overtimeEnabled: 'overtimeEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanySettingsScalarFieldEnum = (typeof CompanySettingsScalarFieldEnum)[keyof typeof CompanySettingsScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    position: 'position',
    fingerprintId: 'fingerprintId',
    isActive: 'isActive',
    hireDate: 'hireDate',
    terminationDate: 'terminationDate',
    companyId: 'companyId',
    departmentId: 'departmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    name: 'name',
    location: 'location',
    ipAddress: 'ipAddress',
    lastConnection: 'lastConnection',
    isActive: 'isActive',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startTime: 'startTime',
    endTime: 'endTime',
    workDays: 'workDays',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const EmployeeScheduleScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    scheduleId: 'scheduleId',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScheduleScalarFieldEnum = (typeof EmployeeScheduleScalarFieldEnum)[keyof typeof EmployeeScheduleScalarFieldEnum]


  export const AttendanceRecordScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    deviceId: 'deviceId',
    companyId: 'companyId',
    timestamp: 'timestamp',
    type: 'type',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendanceRecordScalarFieldEnum = (typeof AttendanceRecordScalarFieldEnum)[keyof typeof AttendanceRecordScalarFieldEnum]


  export const LeaveScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    type: 'type',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    reason: 'reason',
    approvedBy: 'approvedBy',
    approvedAt: 'approvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeaveScalarFieldEnum = (typeof LeaveScalarFieldEnum)[keyof typeof LeaveScalarFieldEnum]


  export const HolidayScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    description: 'description',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HolidayScalarFieldEnum = (typeof HolidayScalarFieldEnum)[keyof typeof HolidayScalarFieldEnum]


  export const VisitorScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    company: 'company',
    purpose: 'purpose',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VisitorScalarFieldEnum = (typeof VisitorScalarFieldEnum)[keyof typeof VisitorScalarFieldEnum]


  export const VisitorRecordScalarFieldEnum: {
    id: 'id',
    visitorId: 'visitorId',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    hostName: 'hostName',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VisitorRecordScalarFieldEnum = (typeof VisitorRecordScalarFieldEnum)[keyof typeof VisitorRecordScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    isActive: 'isActive',
    lastLogin: 'lastLogin',
    companyId: 'companyId',
    employeeId: 'employeeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RecordType'
   */
  export type EnumRecordTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecordType'>
    


  /**
   * Reference to a field of type 'RecordType[]'
   */
  export type ListEnumRecordTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecordType[]'>
    


  /**
   * Reference to a field of type 'RecordStatus'
   */
  export type EnumRecordStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecordStatus'>
    


  /**
   * Reference to a field of type 'RecordStatus[]'
   */
  export type ListEnumRecordStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecordStatus[]'>
    


  /**
   * Reference to a field of type 'LeaveType'
   */
  export type EnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType'>
    


  /**
   * Reference to a field of type 'LeaveType[]'
   */
  export type ListEnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType[]'>
    


  /**
   * Reference to a field of type 'LeaveStatus'
   */
  export type EnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus'>
    


  /**
   * Reference to a field of type 'LeaveStatus[]'
   */
  export type ListEnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    logo?: StringNullableFilter<"Company"> | string | null
    address?: StringNullableFilter<"Company"> | string | null
    phone?: StringNullableFilter<"Company"> | string | null
    email?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    departments?: DepartmentListRelationFilter
    employees?: EmployeeListRelationFilter
    devices?: DeviceListRelationFilter
    schedules?: ScheduleListRelationFilter
    attendanceRecords?: AttendanceRecordListRelationFilter
    visitors?: VisitorListRelationFilter
    users?: UserListRelationFilter
    holidays?: HolidayListRelationFilter
    settings?: XOR<CompanySettingsNullableScalarRelationFilter, CompanySettingsWhereInput> | null
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departments?: DepartmentOrderByRelationAggregateInput
    employees?: EmployeeOrderByRelationAggregateInput
    devices?: DeviceOrderByRelationAggregateInput
    schedules?: ScheduleOrderByRelationAggregateInput
    attendanceRecords?: AttendanceRecordOrderByRelationAggregateInput
    visitors?: VisitorOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    holidays?: HolidayOrderByRelationAggregateInput
    settings?: CompanySettingsOrderByWithRelationInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    logo?: StringNullableFilter<"Company"> | string | null
    address?: StringNullableFilter<"Company"> | string | null
    phone?: StringNullableFilter<"Company"> | string | null
    email?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    departments?: DepartmentListRelationFilter
    employees?: EmployeeListRelationFilter
    devices?: DeviceListRelationFilter
    schedules?: ScheduleListRelationFilter
    attendanceRecords?: AttendanceRecordListRelationFilter
    visitors?: VisitorListRelationFilter
    users?: UserListRelationFilter
    holidays?: HolidayListRelationFilter
    settings?: XOR<CompanySettingsNullableScalarRelationFilter, CompanySettingsWhereInput> | null
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    logo?: StringNullableWithAggregatesFilter<"Company"> | string | null
    address?: StringNullableWithAggregatesFilter<"Company"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Company"> | string | null
    email?: StringNullableWithAggregatesFilter<"Company"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type CompanySettingsWhereInput = {
    AND?: CompanySettingsWhereInput | CompanySettingsWhereInput[]
    OR?: CompanySettingsWhereInput[]
    NOT?: CompanySettingsWhereInput | CompanySettingsWhereInput[]
    id?: StringFilter<"CompanySettings"> | string
    companyId?: StringFilter<"CompanySettings"> | string
    workdayStartTime?: StringFilter<"CompanySettings"> | string
    workdayEndTime?: StringFilter<"CompanySettings"> | string
    lunchStartTime?: StringNullableFilter<"CompanySettings"> | string | null
    lunchEndTime?: StringNullableFilter<"CompanySettings"> | string | null
    gracePeriodMinutes?: IntFilter<"CompanySettings"> | number
    weekendDays?: StringNullableListFilter<"CompanySettings">
    overtimeEnabled?: BoolFilter<"CompanySettings"> | boolean
    createdAt?: DateTimeFilter<"CompanySettings"> | Date | string
    updatedAt?: DateTimeFilter<"CompanySettings"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type CompanySettingsOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    workdayStartTime?: SortOrder
    workdayEndTime?: SortOrder
    lunchStartTime?: SortOrderInput | SortOrder
    lunchEndTime?: SortOrderInput | SortOrder
    gracePeriodMinutes?: SortOrder
    weekendDays?: SortOrder
    overtimeEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type CompanySettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyId?: string
    AND?: CompanySettingsWhereInput | CompanySettingsWhereInput[]
    OR?: CompanySettingsWhereInput[]
    NOT?: CompanySettingsWhereInput | CompanySettingsWhereInput[]
    workdayStartTime?: StringFilter<"CompanySettings"> | string
    workdayEndTime?: StringFilter<"CompanySettings"> | string
    lunchStartTime?: StringNullableFilter<"CompanySettings"> | string | null
    lunchEndTime?: StringNullableFilter<"CompanySettings"> | string | null
    gracePeriodMinutes?: IntFilter<"CompanySettings"> | number
    weekendDays?: StringNullableListFilter<"CompanySettings">
    overtimeEnabled?: BoolFilter<"CompanySettings"> | boolean
    createdAt?: DateTimeFilter<"CompanySettings"> | Date | string
    updatedAt?: DateTimeFilter<"CompanySettings"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id" | "companyId">

  export type CompanySettingsOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    workdayStartTime?: SortOrder
    workdayEndTime?: SortOrder
    lunchStartTime?: SortOrderInput | SortOrder
    lunchEndTime?: SortOrderInput | SortOrder
    gracePeriodMinutes?: SortOrder
    weekendDays?: SortOrder
    overtimeEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanySettingsCountOrderByAggregateInput
    _avg?: CompanySettingsAvgOrderByAggregateInput
    _max?: CompanySettingsMaxOrderByAggregateInput
    _min?: CompanySettingsMinOrderByAggregateInput
    _sum?: CompanySettingsSumOrderByAggregateInput
  }

  export type CompanySettingsScalarWhereWithAggregatesInput = {
    AND?: CompanySettingsScalarWhereWithAggregatesInput | CompanySettingsScalarWhereWithAggregatesInput[]
    OR?: CompanySettingsScalarWhereWithAggregatesInput[]
    NOT?: CompanySettingsScalarWhereWithAggregatesInput | CompanySettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanySettings"> | string
    companyId?: StringWithAggregatesFilter<"CompanySettings"> | string
    workdayStartTime?: StringWithAggregatesFilter<"CompanySettings"> | string
    workdayEndTime?: StringWithAggregatesFilter<"CompanySettings"> | string
    lunchStartTime?: StringNullableWithAggregatesFilter<"CompanySettings"> | string | null
    lunchEndTime?: StringNullableWithAggregatesFilter<"CompanySettings"> | string | null
    gracePeriodMinutes?: IntWithAggregatesFilter<"CompanySettings"> | number
    weekendDays?: StringNullableListFilter<"CompanySettings">
    overtimeEnabled?: BoolWithAggregatesFilter<"CompanySettings"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CompanySettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompanySettings"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    description?: StringNullableFilter<"Department"> | string | null
    companyId?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    employees?: EmployeeListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    employees?: EmployeeOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyId_name?: DepartmentCompanyIdNameCompoundUniqueInput
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    description?: StringNullableFilter<"Department"> | string | null
    companyId?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    employees?: EmployeeListRelationFilter
  }, "id" | "companyId_name">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    description?: StringNullableWithAggregatesFilter<"Department"> | string | null
    companyId?: StringWithAggregatesFilter<"Department"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    employeeId?: StringFilter<"Employee"> | string
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    email?: StringNullableFilter<"Employee"> | string | null
    phone?: StringNullableFilter<"Employee"> | string | null
    position?: StringNullableFilter<"Employee"> | string | null
    fingerprintId?: StringNullableFilter<"Employee"> | string | null
    isActive?: BoolFilter<"Employee"> | boolean
    hireDate?: DateTimeFilter<"Employee"> | Date | string
    terminationDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    companyId?: StringFilter<"Employee"> | string
    departmentId?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    attendanceRecords?: AttendanceRecordListRelationFilter
    schedules?: EmployeeScheduleListRelationFilter
    leaves?: LeaveListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    fingerprintId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    hireDate?: SortOrder
    terminationDate?: SortOrderInput | SortOrder
    companyId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    department?: DepartmentOrderByWithRelationInput
    attendanceRecords?: AttendanceRecordOrderByRelationAggregateInput
    schedules?: EmployeeScheduleOrderByRelationAggregateInput
    leaves?: LeaveOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyId_employeeId?: EmployeeCompanyIdEmployeeIdCompoundUniqueInput
    companyId_fingerprintId?: EmployeeCompanyIdFingerprintIdCompoundUniqueInput
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    employeeId?: StringFilter<"Employee"> | string
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    email?: StringNullableFilter<"Employee"> | string | null
    phone?: StringNullableFilter<"Employee"> | string | null
    position?: StringNullableFilter<"Employee"> | string | null
    fingerprintId?: StringNullableFilter<"Employee"> | string | null
    isActive?: BoolFilter<"Employee"> | boolean
    hireDate?: DateTimeFilter<"Employee"> | Date | string
    terminationDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    companyId?: StringFilter<"Employee"> | string
    departmentId?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    attendanceRecords?: AttendanceRecordListRelationFilter
    schedules?: EmployeeScheduleListRelationFilter
    leaves?: LeaveListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "companyId_employeeId" | "companyId_fingerprintId">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    fingerprintId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    hireDate?: SortOrder
    terminationDate?: SortOrderInput | SortOrder
    companyId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    employeeId?: StringWithAggregatesFilter<"Employee"> | string
    firstName?: StringWithAggregatesFilter<"Employee"> | string
    lastName?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    position?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    fingerprintId?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    isActive?: BoolWithAggregatesFilter<"Employee"> | boolean
    hireDate?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    terminationDate?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    companyId?: StringWithAggregatesFilter<"Employee"> | string
    departmentId?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: StringFilter<"Device"> | string
    deviceId?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    location?: StringNullableFilter<"Device"> | string | null
    ipAddress?: StringNullableFilter<"Device"> | string | null
    lastConnection?: DateTimeNullableFilter<"Device"> | Date | string | null
    isActive?: BoolFilter<"Device"> | boolean
    companyId?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    attendanceRecords?: AttendanceRecordListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    lastConnection?: SortOrderInput | SortOrder
    isActive?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    attendanceRecords?: AttendanceRecordOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyId_deviceId?: DeviceCompanyIdDeviceIdCompoundUniqueInput
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    deviceId?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    location?: StringNullableFilter<"Device"> | string | null
    ipAddress?: StringNullableFilter<"Device"> | string | null
    lastConnection?: DateTimeNullableFilter<"Device"> | Date | string | null
    isActive?: BoolFilter<"Device"> | boolean
    companyId?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    attendanceRecords?: AttendanceRecordListRelationFilter
  }, "id" | "companyId_deviceId">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    lastConnection?: SortOrderInput | SortOrder
    isActive?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Device"> | string
    deviceId?: StringWithAggregatesFilter<"Device"> | string
    name?: StringWithAggregatesFilter<"Device"> | string
    location?: StringNullableWithAggregatesFilter<"Device"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Device"> | string | null
    lastConnection?: DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Device"> | boolean
    companyId?: StringWithAggregatesFilter<"Device"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: StringFilter<"Schedule"> | string
    name?: StringFilter<"Schedule"> | string
    description?: StringNullableFilter<"Schedule"> | string | null
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    workDays?: StringNullableListFilter<"Schedule">
    companyId?: StringFilter<"Schedule"> | string
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    employeeSchedules?: EmployeeScheduleListRelationFilter
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    workDays?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    employeeSchedules?: EmployeeScheduleOrderByRelationAggregateInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyId_name?: ScheduleCompanyIdNameCompoundUniqueInput
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    name?: StringFilter<"Schedule"> | string
    description?: StringNullableFilter<"Schedule"> | string | null
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    workDays?: StringNullableListFilter<"Schedule">
    companyId?: StringFilter<"Schedule"> | string
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    employeeSchedules?: EmployeeScheduleListRelationFilter
  }, "id" | "companyId_name">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    workDays?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Schedule"> | string
    name?: StringWithAggregatesFilter<"Schedule"> | string
    description?: StringNullableWithAggregatesFilter<"Schedule"> | string | null
    startTime?: StringWithAggregatesFilter<"Schedule"> | string
    endTime?: StringWithAggregatesFilter<"Schedule"> | string
    workDays?: StringNullableListFilter<"Schedule">
    companyId?: StringWithAggregatesFilter<"Schedule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type EmployeeScheduleWhereInput = {
    AND?: EmployeeScheduleWhereInput | EmployeeScheduleWhereInput[]
    OR?: EmployeeScheduleWhereInput[]
    NOT?: EmployeeScheduleWhereInput | EmployeeScheduleWhereInput[]
    id?: StringFilter<"EmployeeSchedule"> | string
    employeeId?: StringFilter<"EmployeeSchedule"> | string
    scheduleId?: StringFilter<"EmployeeSchedule"> | string
    startDate?: DateTimeFilter<"EmployeeSchedule"> | Date | string
    endDate?: DateTimeNullableFilter<"EmployeeSchedule"> | Date | string | null
    createdAt?: DateTimeFilter<"EmployeeSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeSchedule"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }

  export type EmployeeScheduleOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    scheduleId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    schedule?: ScheduleOrderByWithRelationInput
  }

  export type EmployeeScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId_scheduleId_startDate?: EmployeeScheduleEmployeeIdScheduleIdStartDateCompoundUniqueInput
    AND?: EmployeeScheduleWhereInput | EmployeeScheduleWhereInput[]
    OR?: EmployeeScheduleWhereInput[]
    NOT?: EmployeeScheduleWhereInput | EmployeeScheduleWhereInput[]
    employeeId?: StringFilter<"EmployeeSchedule"> | string
    scheduleId?: StringFilter<"EmployeeSchedule"> | string
    startDate?: DateTimeFilter<"EmployeeSchedule"> | Date | string
    endDate?: DateTimeNullableFilter<"EmployeeSchedule"> | Date | string | null
    createdAt?: DateTimeFilter<"EmployeeSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeSchedule"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }, "id" | "employeeId_scheduleId_startDate">

  export type EmployeeScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    scheduleId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeScheduleCountOrderByAggregateInput
    _max?: EmployeeScheduleMaxOrderByAggregateInput
    _min?: EmployeeScheduleMinOrderByAggregateInput
  }

  export type EmployeeScheduleScalarWhereWithAggregatesInput = {
    AND?: EmployeeScheduleScalarWhereWithAggregatesInput | EmployeeScheduleScalarWhereWithAggregatesInput[]
    OR?: EmployeeScheduleScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScheduleScalarWhereWithAggregatesInput | EmployeeScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmployeeSchedule"> | string
    employeeId?: StringWithAggregatesFilter<"EmployeeSchedule"> | string
    scheduleId?: StringWithAggregatesFilter<"EmployeeSchedule"> | string
    startDate?: DateTimeWithAggregatesFilter<"EmployeeSchedule"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"EmployeeSchedule"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmployeeSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmployeeSchedule"> | Date | string
  }

  export type AttendanceRecordWhereInput = {
    AND?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    OR?: AttendanceRecordWhereInput[]
    NOT?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    id?: StringFilter<"AttendanceRecord"> | string
    employeeId?: StringFilter<"AttendanceRecord"> | string
    deviceId?: StringNullableFilter<"AttendanceRecord"> | string | null
    companyId?: StringFilter<"AttendanceRecord"> | string
    timestamp?: DateTimeFilter<"AttendanceRecord"> | Date | string
    type?: EnumRecordTypeFilter<"AttendanceRecord"> | $Enums.RecordType
    status?: EnumRecordStatusFilter<"AttendanceRecord"> | $Enums.RecordStatus
    notes?: StringNullableFilter<"AttendanceRecord"> | string | null
    createdAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    device?: XOR<DeviceNullableScalarRelationFilter, DeviceWhereInput> | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type AttendanceRecordOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    companyId?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    device?: DeviceOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
  }

  export type AttendanceRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    OR?: AttendanceRecordWhereInput[]
    NOT?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    employeeId?: StringFilter<"AttendanceRecord"> | string
    deviceId?: StringNullableFilter<"AttendanceRecord"> | string | null
    companyId?: StringFilter<"AttendanceRecord"> | string
    timestamp?: DateTimeFilter<"AttendanceRecord"> | Date | string
    type?: EnumRecordTypeFilter<"AttendanceRecord"> | $Enums.RecordType
    status?: EnumRecordStatusFilter<"AttendanceRecord"> | $Enums.RecordStatus
    notes?: StringNullableFilter<"AttendanceRecord"> | string | null
    createdAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    device?: XOR<DeviceNullableScalarRelationFilter, DeviceWhereInput> | null
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type AttendanceRecordOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    companyId?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendanceRecordCountOrderByAggregateInput
    _max?: AttendanceRecordMaxOrderByAggregateInput
    _min?: AttendanceRecordMinOrderByAggregateInput
  }

  export type AttendanceRecordScalarWhereWithAggregatesInput = {
    AND?: AttendanceRecordScalarWhereWithAggregatesInput | AttendanceRecordScalarWhereWithAggregatesInput[]
    OR?: AttendanceRecordScalarWhereWithAggregatesInput[]
    NOT?: AttendanceRecordScalarWhereWithAggregatesInput | AttendanceRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttendanceRecord"> | string
    employeeId?: StringWithAggregatesFilter<"AttendanceRecord"> | string
    deviceId?: StringNullableWithAggregatesFilter<"AttendanceRecord"> | string | null
    companyId?: StringWithAggregatesFilter<"AttendanceRecord"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AttendanceRecord"> | Date | string
    type?: EnumRecordTypeWithAggregatesFilter<"AttendanceRecord"> | $Enums.RecordType
    status?: EnumRecordStatusWithAggregatesFilter<"AttendanceRecord"> | $Enums.RecordStatus
    notes?: StringNullableWithAggregatesFilter<"AttendanceRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AttendanceRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AttendanceRecord"> | Date | string
  }

  export type LeaveWhereInput = {
    AND?: LeaveWhereInput | LeaveWhereInput[]
    OR?: LeaveWhereInput[]
    NOT?: LeaveWhereInput | LeaveWhereInput[]
    id?: StringFilter<"Leave"> | string
    employeeId?: StringFilter<"Leave"> | string
    type?: EnumLeaveTypeFilter<"Leave"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"Leave"> | Date | string
    endDate?: DateTimeFilter<"Leave"> | Date | string
    status?: EnumLeaveStatusFilter<"Leave"> | $Enums.LeaveStatus
    reason?: StringNullableFilter<"Leave"> | string | null
    approvedBy?: StringNullableFilter<"Leave"> | string | null
    approvedAt?: DateTimeNullableFilter<"Leave"> | Date | string | null
    createdAt?: DateTimeFilter<"Leave"> | Date | string
    updatedAt?: DateTimeFilter<"Leave"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type LeaveOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type LeaveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaveWhereInput | LeaveWhereInput[]
    OR?: LeaveWhereInput[]
    NOT?: LeaveWhereInput | LeaveWhereInput[]
    employeeId?: StringFilter<"Leave"> | string
    type?: EnumLeaveTypeFilter<"Leave"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"Leave"> | Date | string
    endDate?: DateTimeFilter<"Leave"> | Date | string
    status?: EnumLeaveStatusFilter<"Leave"> | $Enums.LeaveStatus
    reason?: StringNullableFilter<"Leave"> | string | null
    approvedBy?: StringNullableFilter<"Leave"> | string | null
    approvedAt?: DateTimeNullableFilter<"Leave"> | Date | string | null
    createdAt?: DateTimeFilter<"Leave"> | Date | string
    updatedAt?: DateTimeFilter<"Leave"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type LeaveOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeaveCountOrderByAggregateInput
    _max?: LeaveMaxOrderByAggregateInput
    _min?: LeaveMinOrderByAggregateInput
  }

  export type LeaveScalarWhereWithAggregatesInput = {
    AND?: LeaveScalarWhereWithAggregatesInput | LeaveScalarWhereWithAggregatesInput[]
    OR?: LeaveScalarWhereWithAggregatesInput[]
    NOT?: LeaveScalarWhereWithAggregatesInput | LeaveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Leave"> | string
    employeeId?: StringWithAggregatesFilter<"Leave"> | string
    type?: EnumLeaveTypeWithAggregatesFilter<"Leave"> | $Enums.LeaveType
    startDate?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
    status?: EnumLeaveStatusWithAggregatesFilter<"Leave"> | $Enums.LeaveStatus
    reason?: StringNullableWithAggregatesFilter<"Leave"> | string | null
    approvedBy?: StringNullableWithAggregatesFilter<"Leave"> | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Leave"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
  }

  export type HolidayWhereInput = {
    AND?: HolidayWhereInput | HolidayWhereInput[]
    OR?: HolidayWhereInput[]
    NOT?: HolidayWhereInput | HolidayWhereInput[]
    id?: StringFilter<"Holiday"> | string
    name?: StringFilter<"Holiday"> | string
    date?: DateTimeFilter<"Holiday"> | Date | string
    description?: StringNullableFilter<"Holiday"> | string | null
    companyId?: StringFilter<"Holiday"> | string
    createdAt?: DateTimeFilter<"Holiday"> | Date | string
    updatedAt?: DateTimeFilter<"Holiday"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type HolidayOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    description?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type HolidayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyId_date_name?: HolidayCompanyIdDateNameCompoundUniqueInput
    AND?: HolidayWhereInput | HolidayWhereInput[]
    OR?: HolidayWhereInput[]
    NOT?: HolidayWhereInput | HolidayWhereInput[]
    name?: StringFilter<"Holiday"> | string
    date?: DateTimeFilter<"Holiday"> | Date | string
    description?: StringNullableFilter<"Holiday"> | string | null
    companyId?: StringFilter<"Holiday"> | string
    createdAt?: DateTimeFilter<"Holiday"> | Date | string
    updatedAt?: DateTimeFilter<"Holiday"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id" | "companyId_date_name">

  export type HolidayOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    description?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HolidayCountOrderByAggregateInput
    _max?: HolidayMaxOrderByAggregateInput
    _min?: HolidayMinOrderByAggregateInput
  }

  export type HolidayScalarWhereWithAggregatesInput = {
    AND?: HolidayScalarWhereWithAggregatesInput | HolidayScalarWhereWithAggregatesInput[]
    OR?: HolidayScalarWhereWithAggregatesInput[]
    NOT?: HolidayScalarWhereWithAggregatesInput | HolidayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Holiday"> | string
    name?: StringWithAggregatesFilter<"Holiday"> | string
    date?: DateTimeWithAggregatesFilter<"Holiday"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Holiday"> | string | null
    companyId?: StringWithAggregatesFilter<"Holiday"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Holiday"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Holiday"> | Date | string
  }

  export type VisitorWhereInput = {
    AND?: VisitorWhereInput | VisitorWhereInput[]
    OR?: VisitorWhereInput[]
    NOT?: VisitorWhereInput | VisitorWhereInput[]
    id?: StringFilter<"Visitor"> | string
    firstName?: StringFilter<"Visitor"> | string
    lastName?: StringFilter<"Visitor"> | string
    email?: StringNullableFilter<"Visitor"> | string | null
    phone?: StringNullableFilter<"Visitor"> | string | null
    company?: StringNullableFilter<"Visitor"> | string | null
    purpose?: StringNullableFilter<"Visitor"> | string | null
    companyId?: StringFilter<"Visitor"> | string
    createdAt?: DateTimeFilter<"Visitor"> | Date | string
    updatedAt?: DateTimeFilter<"Visitor"> | Date | string
    hostCompany?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    visits?: VisitorRecordListRelationFilter
  }

  export type VisitorOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    purpose?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hostCompany?: CompanyOrderByWithRelationInput
    visits?: VisitorRecordOrderByRelationAggregateInput
  }

  export type VisitorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VisitorWhereInput | VisitorWhereInput[]
    OR?: VisitorWhereInput[]
    NOT?: VisitorWhereInput | VisitorWhereInput[]
    firstName?: StringFilter<"Visitor"> | string
    lastName?: StringFilter<"Visitor"> | string
    email?: StringNullableFilter<"Visitor"> | string | null
    phone?: StringNullableFilter<"Visitor"> | string | null
    company?: StringNullableFilter<"Visitor"> | string | null
    purpose?: StringNullableFilter<"Visitor"> | string | null
    companyId?: StringFilter<"Visitor"> | string
    createdAt?: DateTimeFilter<"Visitor"> | Date | string
    updatedAt?: DateTimeFilter<"Visitor"> | Date | string
    hostCompany?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    visits?: VisitorRecordListRelationFilter
  }, "id">

  export type VisitorOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    purpose?: SortOrderInput | SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VisitorCountOrderByAggregateInput
    _max?: VisitorMaxOrderByAggregateInput
    _min?: VisitorMinOrderByAggregateInput
  }

  export type VisitorScalarWhereWithAggregatesInput = {
    AND?: VisitorScalarWhereWithAggregatesInput | VisitorScalarWhereWithAggregatesInput[]
    OR?: VisitorScalarWhereWithAggregatesInput[]
    NOT?: VisitorScalarWhereWithAggregatesInput | VisitorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Visitor"> | string
    firstName?: StringWithAggregatesFilter<"Visitor"> | string
    lastName?: StringWithAggregatesFilter<"Visitor"> | string
    email?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
    company?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
    purpose?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
    companyId?: StringWithAggregatesFilter<"Visitor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Visitor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Visitor"> | Date | string
  }

  export type VisitorRecordWhereInput = {
    AND?: VisitorRecordWhereInput | VisitorRecordWhereInput[]
    OR?: VisitorRecordWhereInput[]
    NOT?: VisitorRecordWhereInput | VisitorRecordWhereInput[]
    id?: StringFilter<"VisitorRecord"> | string
    visitorId?: StringFilter<"VisitorRecord"> | string
    checkIn?: DateTimeFilter<"VisitorRecord"> | Date | string
    checkOut?: DateTimeNullableFilter<"VisitorRecord"> | Date | string | null
    hostName?: StringNullableFilter<"VisitorRecord"> | string | null
    notes?: StringNullableFilter<"VisitorRecord"> | string | null
    createdAt?: DateTimeFilter<"VisitorRecord"> | Date | string
    updatedAt?: DateTimeFilter<"VisitorRecord"> | Date | string
    visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
  }

  export type VisitorRecordOrderByWithRelationInput = {
    id?: SortOrder
    visitorId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrderInput | SortOrder
    hostName?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    visitor?: VisitorOrderByWithRelationInput
  }

  export type VisitorRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VisitorRecordWhereInput | VisitorRecordWhereInput[]
    OR?: VisitorRecordWhereInput[]
    NOT?: VisitorRecordWhereInput | VisitorRecordWhereInput[]
    visitorId?: StringFilter<"VisitorRecord"> | string
    checkIn?: DateTimeFilter<"VisitorRecord"> | Date | string
    checkOut?: DateTimeNullableFilter<"VisitorRecord"> | Date | string | null
    hostName?: StringNullableFilter<"VisitorRecord"> | string | null
    notes?: StringNullableFilter<"VisitorRecord"> | string | null
    createdAt?: DateTimeFilter<"VisitorRecord"> | Date | string
    updatedAt?: DateTimeFilter<"VisitorRecord"> | Date | string
    visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
  }, "id">

  export type VisitorRecordOrderByWithAggregationInput = {
    id?: SortOrder
    visitorId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrderInput | SortOrder
    hostName?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VisitorRecordCountOrderByAggregateInput
    _max?: VisitorRecordMaxOrderByAggregateInput
    _min?: VisitorRecordMinOrderByAggregateInput
  }

  export type VisitorRecordScalarWhereWithAggregatesInput = {
    AND?: VisitorRecordScalarWhereWithAggregatesInput | VisitorRecordScalarWhereWithAggregatesInput[]
    OR?: VisitorRecordScalarWhereWithAggregatesInput[]
    NOT?: VisitorRecordScalarWhereWithAggregatesInput | VisitorRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VisitorRecord"> | string
    visitorId?: StringWithAggregatesFilter<"VisitorRecord"> | string
    checkIn?: DateTimeWithAggregatesFilter<"VisitorRecord"> | Date | string
    checkOut?: DateTimeNullableWithAggregatesFilter<"VisitorRecord"> | Date | string | null
    hostName?: StringNullableWithAggregatesFilter<"VisitorRecord"> | string | null
    notes?: StringNullableWithAggregatesFilter<"VisitorRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VisitorRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VisitorRecord"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    companyId?: StringFilter<"User"> | string
    employeeId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    companyId?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId?: string
    companyId_email?: UserCompanyIdEmailCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    companyId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }, "id" | "employeeId" | "companyId_email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    companyId?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    companyId?: StringWithAggregatesFilter<"User"> | string
    employeeId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    devices?: DeviceCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutCompanyInput
    visitors?: VisitorCreateNestedManyWithoutHostCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    holidays?: HolidayCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutCompanyInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    devices?: DeviceUncheckedCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutCompanyInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutHostCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsUncheckedCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUpdateManyWithoutHostCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    holidays?: HolidayUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUpdateOneWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutHostCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUncheckedUpdateOneWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySettingsCreateInput = {
    id?: string
    workdayStartTime?: string
    workdayEndTime?: string
    lunchStartTime?: string | null
    lunchEndTime?: string | null
    gracePeriodMinutes?: number
    weekendDays?: CompanySettingsCreateweekendDaysInput | string[]
    overtimeEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutSettingsInput
  }

  export type CompanySettingsUncheckedCreateInput = {
    id?: string
    companyId: string
    workdayStartTime?: string
    workdayEndTime?: string
    lunchStartTime?: string | null
    lunchEndTime?: string | null
    gracePeriodMinutes?: number
    weekendDays?: CompanySettingsCreateweekendDaysInput | string[]
    overtimeEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanySettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workdayStartTime?: StringFieldUpdateOperationsInput | string
    workdayEndTime?: StringFieldUpdateOperationsInput | string
    lunchStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    lunchEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    gracePeriodMinutes?: IntFieldUpdateOperationsInput | number
    weekendDays?: CompanySettingsUpdateweekendDaysInput | string[]
    overtimeEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type CompanySettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    workdayStartTime?: StringFieldUpdateOperationsInput | string
    workdayEndTime?: StringFieldUpdateOperationsInput | string
    lunchStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    lunchEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    gracePeriodMinutes?: IntFieldUpdateOperationsInput | number
    weekendDays?: CompanySettingsUpdateweekendDaysInput | string[]
    overtimeEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySettingsCreateManyInput = {
    id?: string
    companyId: string
    workdayStartTime?: string
    workdayEndTime?: string
    lunchStartTime?: string | null
    lunchEndTime?: string | null
    gracePeriodMinutes?: number
    weekendDays?: CompanySettingsCreateweekendDaysInput | string[]
    overtimeEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanySettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workdayStartTime?: StringFieldUpdateOperationsInput | string
    workdayEndTime?: StringFieldUpdateOperationsInput | string
    lunchStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    lunchEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    gracePeriodMinutes?: IntFieldUpdateOperationsInput | number
    weekendDays?: CompanySettingsUpdateweekendDaysInput | string[]
    overtimeEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    workdayStartTime?: StringFieldUpdateOperationsInput | string
    workdayEndTime?: StringFieldUpdateOperationsInput | string
    lunchStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    lunchEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    gracePeriodMinutes?: IntFieldUpdateOperationsInput | number
    weekendDays?: CompanySettingsUpdateweekendDaysInput | string[]
    overtimeEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutDepartmentsInput
    employees?: EmployeeCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutDepartmentsNestedInput
    employees?: EmployeeUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutEmployeesInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutEmployeeInput
    schedules?: EmployeeScheduleCreateNestedManyWithoutEmployeeInput
    leaves?: LeaveCreateNestedManyWithoutEmployeeInput
    user?: UserCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    companyId: string
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutEmployeeInput
    schedules?: EmployeeScheduleUncheckedCreateNestedManyWithoutEmployeeInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutEmployeeInput
    user?: UserUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutEmployeeNestedInput
    schedules?: EmployeeScheduleUpdateManyWithoutEmployeeNestedInput
    leaves?: LeaveUpdateManyWithoutEmployeeNestedInput
    user?: UserUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutEmployeeNestedInput
    schedules?: EmployeeScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutEmployeeNestedInput
    user?: UserUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    companyId: string
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateInput = {
    id?: string
    deviceId: string
    name: string
    location?: string | null
    ipAddress?: string | null
    lastConnection?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutDevicesInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    deviceId: string
    name: string
    location?: string | null
    ipAddress?: string | null
    lastConnection?: Date | string | null
    isActive?: boolean
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutDevicesNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: string
    deviceId: string
    name: string
    location?: string | null
    ipAddress?: string | null
    lastConnection?: Date | string | null
    isActive?: boolean
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateInput = {
    id?: string
    name: string
    description?: string | null
    startTime: string
    endTime: string
    workDays?: ScheduleCreateworkDaysInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutSchedulesInput
    employeeSchedules?: EmployeeScheduleCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    startTime: string
    endTime: string
    workDays?: ScheduleCreateworkDaysInput | string[]
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeSchedules?: EmployeeScheduleUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    workDays?: ScheduleUpdateworkDaysInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutSchedulesNestedInput
    employeeSchedules?: EmployeeScheduleUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    workDays?: ScheduleUpdateworkDaysInput | string[]
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeSchedules?: EmployeeScheduleUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    startTime: string
    endTime: string
    workDays?: ScheduleCreateworkDaysInput | string[]
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    workDays?: ScheduleUpdateworkDaysInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    workDays?: ScheduleUpdateworkDaysInput | string[]
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeScheduleCreateInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutSchedulesInput
    schedule: ScheduleCreateNestedOneWithoutEmployeeSchedulesInput
  }

  export type EmployeeScheduleUncheckedCreateInput = {
    id?: string
    employeeId: string
    scheduleId: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutSchedulesNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutEmployeeSchedulesNestedInput
  }

  export type EmployeeScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeScheduleCreateManyInput = {
    id?: string
    employeeId: string
    scheduleId: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordCreateInput = {
    id?: string
    timestamp: Date | string
    type: $Enums.RecordType
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutAttendanceRecordsInput
    device?: DeviceCreateNestedOneWithoutAttendanceRecordsInput
    company: CompanyCreateNestedOneWithoutAttendanceRecordsInput
  }

  export type AttendanceRecordUncheckedCreateInput = {
    id?: string
    employeeId: string
    deviceId?: string | null
    companyId: string
    timestamp: Date | string
    type: $Enums.RecordType
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRecordTypeFieldUpdateOperationsInput | $Enums.RecordType
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutAttendanceRecordsNestedInput
    device?: DeviceUpdateOneWithoutAttendanceRecordsNestedInput
    company?: CompanyUpdateOneRequiredWithoutAttendanceRecordsNestedInput
  }

  export type AttendanceRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRecordTypeFieldUpdateOperationsInput | $Enums.RecordType
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordCreateManyInput = {
    id?: string
    employeeId: string
    deviceId?: string | null
    companyId: string
    timestamp: Date | string
    type: $Enums.RecordType
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRecordTypeFieldUpdateOperationsInput | $Enums.RecordType
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRecordTypeFieldUpdateOperationsInput | $Enums.RecordType
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveCreateInput = {
    id?: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.LeaveStatus
    reason?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutLeavesInput
  }

  export type LeaveUncheckedCreateInput = {
    id?: string
    employeeId: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.LeaveStatus
    reason?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutLeavesNestedInput
  }

  export type LeaveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveCreateManyInput = {
    id?: string
    employeeId: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.LeaveStatus
    reason?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayCreateInput = {
    id?: string
    name: string
    date: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutHolidaysInput
  }

  export type HolidayUncheckedCreateInput = {
    id?: string
    name: string
    date: Date | string
    description?: string | null
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HolidayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutHolidaysNestedInput
  }

  export type HolidayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayCreateManyInput = {
    id?: string
    name: string
    date: Date | string
    description?: string | null
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HolidayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    company?: string | null
    purpose?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostCompany: CompanyCreateNestedOneWithoutVisitorsInput
    visits?: VisitorRecordCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    company?: string | null
    purpose?: string | null
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    visits?: VisitorRecordUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostCompany?: CompanyUpdateOneRequiredWithoutVisitorsNestedInput
    visits?: VisitorRecordUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: VisitorRecordUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    company?: string | null
    purpose?: string | null
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorRecordCreateInput = {
    id?: string
    checkIn: Date | string
    checkOut?: Date | string | null
    hostName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    visitor: VisitorCreateNestedOneWithoutVisitsInput
  }

  export type VisitorRecordUncheckedCreateInput = {
    id?: string
    visitorId: string
    checkIn: Date | string
    checkOut?: Date | string | null
    hostName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitorRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hostName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitor?: VisitorUpdateOneRequiredWithoutVisitsNestedInput
  }

  export type VisitorRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hostName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorRecordCreateManyInput = {
    id?: string
    visitorId: string
    checkIn: Date | string
    checkOut?: Date | string | null
    hostName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitorRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hostName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hostName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
    employee?: EmployeeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    companyId: string
    employeeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    employee?: EmployeeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    companyId: string
    employeeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DepartmentListRelationFilter = {
    every?: DepartmentWhereInput
    some?: DepartmentWhereInput
    none?: DepartmentWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type AttendanceRecordListRelationFilter = {
    every?: AttendanceRecordWhereInput
    some?: AttendanceRecordWhereInput
    none?: AttendanceRecordWhereInput
  }

  export type VisitorListRelationFilter = {
    every?: VisitorWhereInput
    some?: VisitorWhereInput
    none?: VisitorWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type HolidayListRelationFilter = {
    every?: HolidayWhereInput
    some?: HolidayWhereInput
    none?: HolidayWhereInput
  }

  export type CompanySettingsNullableScalarRelationFilter = {
    is?: CompanySettingsWhereInput | null
    isNot?: CompanySettingsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HolidayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type CompanySettingsCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    workdayStartTime?: SortOrder
    workdayEndTime?: SortOrder
    lunchStartTime?: SortOrder
    lunchEndTime?: SortOrder
    gracePeriodMinutes?: SortOrder
    weekendDays?: SortOrder
    overtimeEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySettingsAvgOrderByAggregateInput = {
    gracePeriodMinutes?: SortOrder
  }

  export type CompanySettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    workdayStartTime?: SortOrder
    workdayEndTime?: SortOrder
    lunchStartTime?: SortOrder
    lunchEndTime?: SortOrder
    gracePeriodMinutes?: SortOrder
    overtimeEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySettingsMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    workdayStartTime?: SortOrder
    workdayEndTime?: SortOrder
    lunchStartTime?: SortOrder
    lunchEndTime?: SortOrder
    gracePeriodMinutes?: SortOrder
    overtimeEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySettingsSumOrderByAggregateInput = {
    gracePeriodMinutes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DepartmentCompanyIdNameCompoundUniqueInput = {
    companyId: string
    name: string
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type EmployeeScheduleListRelationFilter = {
    every?: EmployeeScheduleWhereInput
    some?: EmployeeScheduleWhereInput
    none?: EmployeeScheduleWhereInput
  }

  export type LeaveListRelationFilter = {
    every?: LeaveWhereInput
    some?: LeaveWhereInput
    none?: LeaveWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EmployeeScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCompanyIdEmployeeIdCompoundUniqueInput = {
    companyId: string
    employeeId: string
  }

  export type EmployeeCompanyIdFingerprintIdCompoundUniqueInput = {
    companyId: string
    fingerprintId: string
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    position?: SortOrder
    fingerprintId?: SortOrder
    isActive?: SortOrder
    hireDate?: SortOrder
    terminationDate?: SortOrder
    companyId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    position?: SortOrder
    fingerprintId?: SortOrder
    isActive?: SortOrder
    hireDate?: SortOrder
    terminationDate?: SortOrder
    companyId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    position?: SortOrder
    fingerprintId?: SortOrder
    isActive?: SortOrder
    hireDate?: SortOrder
    terminationDate?: SortOrder
    companyId?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DeviceCompanyIdDeviceIdCompoundUniqueInput = {
    companyId: string
    deviceId: string
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    ipAddress?: SortOrder
    lastConnection?: SortOrder
    isActive?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    ipAddress?: SortOrder
    lastConnection?: SortOrder
    isActive?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    ipAddress?: SortOrder
    lastConnection?: SortOrder
    isActive?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleCompanyIdNameCompoundUniqueInput = {
    companyId: string
    name: string
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    workDays?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type ScheduleScalarRelationFilter = {
    is?: ScheduleWhereInput
    isNot?: ScheduleWhereInput
  }

  export type EmployeeScheduleEmployeeIdScheduleIdStartDateCompoundUniqueInput = {
    employeeId: string
    scheduleId: string
    startDate: Date | string
  }

  export type EmployeeScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    scheduleId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    scheduleId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    scheduleId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRecordTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordType | EnumRecordTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecordType[] | ListEnumRecordTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecordType[] | ListEnumRecordTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordTypeFilter<$PrismaModel> | $Enums.RecordType
  }

  export type EnumRecordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordStatus | EnumRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordStatus[] | ListEnumRecordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecordStatus[] | ListEnumRecordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordStatusFilter<$PrismaModel> | $Enums.RecordStatus
  }

  export type DeviceNullableScalarRelationFilter = {
    is?: DeviceWhereInput | null
    isNot?: DeviceWhereInput | null
  }

  export type AttendanceRecordCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    deviceId?: SortOrder
    companyId?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    deviceId?: SortOrder
    companyId?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceRecordMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    deviceId?: SortOrder
    companyId?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRecordTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordType | EnumRecordTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecordType[] | ListEnumRecordTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecordType[] | ListEnumRecordTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordTypeWithAggregatesFilter<$PrismaModel> | $Enums.RecordType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordTypeFilter<$PrismaModel>
    _max?: NestedEnumRecordTypeFilter<$PrismaModel>
  }

  export type EnumRecordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordStatus | EnumRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordStatus[] | ListEnumRecordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecordStatus[] | ListEnumRecordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecordStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordStatusFilter<$PrismaModel>
    _max?: NestedEnumRecordStatusFilter<$PrismaModel>
  }

  export type EnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
  }

  export type EnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus
  }

  export type LeaveCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
  }

  export type EnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveStatusFilter<$PrismaModel>
  }

  export type HolidayCompanyIdDateNameCompoundUniqueInput = {
    companyId: string
    date: Date | string
    name: string
  }

  export type HolidayCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HolidayMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HolidayMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitorRecordListRelationFilter = {
    every?: VisitorRecordWhereInput
    some?: VisitorRecordWhereInput
    none?: VisitorRecordWhereInput
  }

  export type VisitorRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitorCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    purpose?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitorMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    purpose?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitorMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    purpose?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitorScalarRelationFilter = {
    is?: VisitorWhereInput
    isNot?: VisitorWhereInput
  }

  export type VisitorRecordCountOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    hostName?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitorRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    hostName?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitorRecordMinOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    hostName?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type UserCompanyIdEmailCompoundUniqueInput = {
    companyId: string
    email: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    companyId?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    companyId?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    companyId?: SortOrder
    employeeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DepartmentCreateNestedManyWithoutCompanyInput = {
    create?: XOR<DepartmentCreateWithoutCompanyInput, DepartmentUncheckedCreateWithoutCompanyInput> | DepartmentCreateWithoutCompanyInput[] | DepartmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutCompanyInput | DepartmentCreateOrConnectWithoutCompanyInput[]
    createMany?: DepartmentCreateManyCompanyInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type EmployeeCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput> | EmployeeCreateWithoutCompanyInput[] | EmployeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompanyInput | EmployeeCreateOrConnectWithoutCompanyInput[]
    createMany?: EmployeeCreateManyCompanyInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type DeviceCreateNestedManyWithoutCompanyInput = {
    create?: XOR<DeviceCreateWithoutCompanyInput, DeviceUncheckedCreateWithoutCompanyInput> | DeviceCreateWithoutCompanyInput[] | DeviceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutCompanyInput | DeviceCreateOrConnectWithoutCompanyInput[]
    createMany?: DeviceCreateManyCompanyInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ScheduleCreateWithoutCompanyInput, ScheduleUncheckedCreateWithoutCompanyInput> | ScheduleCreateWithoutCompanyInput[] | ScheduleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutCompanyInput | ScheduleCreateOrConnectWithoutCompanyInput[]
    createMany?: ScheduleCreateManyCompanyInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type AttendanceRecordCreateNestedManyWithoutCompanyInput = {
    create?: XOR<AttendanceRecordCreateWithoutCompanyInput, AttendanceRecordUncheckedCreateWithoutCompanyInput> | AttendanceRecordCreateWithoutCompanyInput[] | AttendanceRecordUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutCompanyInput | AttendanceRecordCreateOrConnectWithoutCompanyInput[]
    createMany?: AttendanceRecordCreateManyCompanyInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type VisitorCreateNestedManyWithoutHostCompanyInput = {
    create?: XOR<VisitorCreateWithoutHostCompanyInput, VisitorUncheckedCreateWithoutHostCompanyInput> | VisitorCreateWithoutHostCompanyInput[] | VisitorUncheckedCreateWithoutHostCompanyInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutHostCompanyInput | VisitorCreateOrConnectWithoutHostCompanyInput[]
    createMany?: VisitorCreateManyHostCompanyInputEnvelope
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HolidayCreateNestedManyWithoutCompanyInput = {
    create?: XOR<HolidayCreateWithoutCompanyInput, HolidayUncheckedCreateWithoutCompanyInput> | HolidayCreateWithoutCompanyInput[] | HolidayUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: HolidayCreateOrConnectWithoutCompanyInput | HolidayCreateOrConnectWithoutCompanyInput[]
    createMany?: HolidayCreateManyCompanyInputEnvelope
    connect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
  }

  export type CompanySettingsCreateNestedOneWithoutCompanyInput = {
    create?: XOR<CompanySettingsCreateWithoutCompanyInput, CompanySettingsUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: CompanySettingsCreateOrConnectWithoutCompanyInput
    connect?: CompanySettingsWhereUniqueInput
  }

  export type DepartmentUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<DepartmentCreateWithoutCompanyInput, DepartmentUncheckedCreateWithoutCompanyInput> | DepartmentCreateWithoutCompanyInput[] | DepartmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutCompanyInput | DepartmentCreateOrConnectWithoutCompanyInput[]
    createMany?: DepartmentCreateManyCompanyInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput> | EmployeeCreateWithoutCompanyInput[] | EmployeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompanyInput | EmployeeCreateOrConnectWithoutCompanyInput[]
    createMany?: EmployeeCreateManyCompanyInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<DeviceCreateWithoutCompanyInput, DeviceUncheckedCreateWithoutCompanyInput> | DeviceCreateWithoutCompanyInput[] | DeviceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutCompanyInput | DeviceCreateOrConnectWithoutCompanyInput[]
    createMany?: DeviceCreateManyCompanyInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ScheduleCreateWithoutCompanyInput, ScheduleUncheckedCreateWithoutCompanyInput> | ScheduleCreateWithoutCompanyInput[] | ScheduleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutCompanyInput | ScheduleCreateOrConnectWithoutCompanyInput[]
    createMany?: ScheduleCreateManyCompanyInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type AttendanceRecordUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<AttendanceRecordCreateWithoutCompanyInput, AttendanceRecordUncheckedCreateWithoutCompanyInput> | AttendanceRecordCreateWithoutCompanyInput[] | AttendanceRecordUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutCompanyInput | AttendanceRecordCreateOrConnectWithoutCompanyInput[]
    createMany?: AttendanceRecordCreateManyCompanyInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type VisitorUncheckedCreateNestedManyWithoutHostCompanyInput = {
    create?: XOR<VisitorCreateWithoutHostCompanyInput, VisitorUncheckedCreateWithoutHostCompanyInput> | VisitorCreateWithoutHostCompanyInput[] | VisitorUncheckedCreateWithoutHostCompanyInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutHostCompanyInput | VisitorCreateOrConnectWithoutHostCompanyInput[]
    createMany?: VisitorCreateManyHostCompanyInputEnvelope
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HolidayUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<HolidayCreateWithoutCompanyInput, HolidayUncheckedCreateWithoutCompanyInput> | HolidayCreateWithoutCompanyInput[] | HolidayUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: HolidayCreateOrConnectWithoutCompanyInput | HolidayCreateOrConnectWithoutCompanyInput[]
    createMany?: HolidayCreateManyCompanyInputEnvelope
    connect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
  }

  export type CompanySettingsUncheckedCreateNestedOneWithoutCompanyInput = {
    create?: XOR<CompanySettingsCreateWithoutCompanyInput, CompanySettingsUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: CompanySettingsCreateOrConnectWithoutCompanyInput
    connect?: CompanySettingsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DepartmentUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<DepartmentCreateWithoutCompanyInput, DepartmentUncheckedCreateWithoutCompanyInput> | DepartmentCreateWithoutCompanyInput[] | DepartmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutCompanyInput | DepartmentCreateOrConnectWithoutCompanyInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutCompanyInput | DepartmentUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: DepartmentCreateManyCompanyInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutCompanyInput | DepartmentUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutCompanyInput | DepartmentUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type EmployeeUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput> | EmployeeCreateWithoutCompanyInput[] | EmployeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompanyInput | EmployeeCreateOrConnectWithoutCompanyInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutCompanyInput | EmployeeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EmployeeCreateManyCompanyInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutCompanyInput | EmployeeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutCompanyInput | EmployeeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type DeviceUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<DeviceCreateWithoutCompanyInput, DeviceUncheckedCreateWithoutCompanyInput> | DeviceCreateWithoutCompanyInput[] | DeviceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutCompanyInput | DeviceCreateOrConnectWithoutCompanyInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutCompanyInput | DeviceUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: DeviceCreateManyCompanyInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutCompanyInput | DeviceUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutCompanyInput | DeviceUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ScheduleCreateWithoutCompanyInput, ScheduleUncheckedCreateWithoutCompanyInput> | ScheduleCreateWithoutCompanyInput[] | ScheduleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutCompanyInput | ScheduleCreateOrConnectWithoutCompanyInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutCompanyInput | ScheduleUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ScheduleCreateManyCompanyInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutCompanyInput | ScheduleUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutCompanyInput | ScheduleUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type AttendanceRecordUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutCompanyInput, AttendanceRecordUncheckedCreateWithoutCompanyInput> | AttendanceRecordCreateWithoutCompanyInput[] | AttendanceRecordUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutCompanyInput | AttendanceRecordCreateOrConnectWithoutCompanyInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutCompanyInput | AttendanceRecordUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: AttendanceRecordCreateManyCompanyInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutCompanyInput | AttendanceRecordUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutCompanyInput | AttendanceRecordUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type VisitorUpdateManyWithoutHostCompanyNestedInput = {
    create?: XOR<VisitorCreateWithoutHostCompanyInput, VisitorUncheckedCreateWithoutHostCompanyInput> | VisitorCreateWithoutHostCompanyInput[] | VisitorUncheckedCreateWithoutHostCompanyInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutHostCompanyInput | VisitorCreateOrConnectWithoutHostCompanyInput[]
    upsert?: VisitorUpsertWithWhereUniqueWithoutHostCompanyInput | VisitorUpsertWithWhereUniqueWithoutHostCompanyInput[]
    createMany?: VisitorCreateManyHostCompanyInputEnvelope
    set?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    disconnect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    delete?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    update?: VisitorUpdateWithWhereUniqueWithoutHostCompanyInput | VisitorUpdateWithWhereUniqueWithoutHostCompanyInput[]
    updateMany?: VisitorUpdateManyWithWhereWithoutHostCompanyInput | VisitorUpdateManyWithWhereWithoutHostCompanyInput[]
    deleteMany?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HolidayUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<HolidayCreateWithoutCompanyInput, HolidayUncheckedCreateWithoutCompanyInput> | HolidayCreateWithoutCompanyInput[] | HolidayUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: HolidayCreateOrConnectWithoutCompanyInput | HolidayCreateOrConnectWithoutCompanyInput[]
    upsert?: HolidayUpsertWithWhereUniqueWithoutCompanyInput | HolidayUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: HolidayCreateManyCompanyInputEnvelope
    set?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    disconnect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    delete?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    connect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    update?: HolidayUpdateWithWhereUniqueWithoutCompanyInput | HolidayUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: HolidayUpdateManyWithWhereWithoutCompanyInput | HolidayUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: HolidayScalarWhereInput | HolidayScalarWhereInput[]
  }

  export type CompanySettingsUpdateOneWithoutCompanyNestedInput = {
    create?: XOR<CompanySettingsCreateWithoutCompanyInput, CompanySettingsUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: CompanySettingsCreateOrConnectWithoutCompanyInput
    upsert?: CompanySettingsUpsertWithoutCompanyInput
    disconnect?: CompanySettingsWhereInput | boolean
    delete?: CompanySettingsWhereInput | boolean
    connect?: CompanySettingsWhereUniqueInput
    update?: XOR<XOR<CompanySettingsUpdateToOneWithWhereWithoutCompanyInput, CompanySettingsUpdateWithoutCompanyInput>, CompanySettingsUncheckedUpdateWithoutCompanyInput>
  }

  export type DepartmentUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<DepartmentCreateWithoutCompanyInput, DepartmentUncheckedCreateWithoutCompanyInput> | DepartmentCreateWithoutCompanyInput[] | DepartmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutCompanyInput | DepartmentCreateOrConnectWithoutCompanyInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutCompanyInput | DepartmentUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: DepartmentCreateManyCompanyInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutCompanyInput | DepartmentUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutCompanyInput | DepartmentUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput> | EmployeeCreateWithoutCompanyInput[] | EmployeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompanyInput | EmployeeCreateOrConnectWithoutCompanyInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutCompanyInput | EmployeeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EmployeeCreateManyCompanyInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutCompanyInput | EmployeeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutCompanyInput | EmployeeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<DeviceCreateWithoutCompanyInput, DeviceUncheckedCreateWithoutCompanyInput> | DeviceCreateWithoutCompanyInput[] | DeviceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutCompanyInput | DeviceCreateOrConnectWithoutCompanyInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutCompanyInput | DeviceUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: DeviceCreateManyCompanyInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutCompanyInput | DeviceUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutCompanyInput | DeviceUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ScheduleCreateWithoutCompanyInput, ScheduleUncheckedCreateWithoutCompanyInput> | ScheduleCreateWithoutCompanyInput[] | ScheduleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutCompanyInput | ScheduleCreateOrConnectWithoutCompanyInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutCompanyInput | ScheduleUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ScheduleCreateManyCompanyInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutCompanyInput | ScheduleUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutCompanyInput | ScheduleUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutCompanyInput, AttendanceRecordUncheckedCreateWithoutCompanyInput> | AttendanceRecordCreateWithoutCompanyInput[] | AttendanceRecordUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutCompanyInput | AttendanceRecordCreateOrConnectWithoutCompanyInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutCompanyInput | AttendanceRecordUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: AttendanceRecordCreateManyCompanyInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutCompanyInput | AttendanceRecordUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutCompanyInput | AttendanceRecordUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type VisitorUncheckedUpdateManyWithoutHostCompanyNestedInput = {
    create?: XOR<VisitorCreateWithoutHostCompanyInput, VisitorUncheckedCreateWithoutHostCompanyInput> | VisitorCreateWithoutHostCompanyInput[] | VisitorUncheckedCreateWithoutHostCompanyInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutHostCompanyInput | VisitorCreateOrConnectWithoutHostCompanyInput[]
    upsert?: VisitorUpsertWithWhereUniqueWithoutHostCompanyInput | VisitorUpsertWithWhereUniqueWithoutHostCompanyInput[]
    createMany?: VisitorCreateManyHostCompanyInputEnvelope
    set?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    disconnect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    delete?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    update?: VisitorUpdateWithWhereUniqueWithoutHostCompanyInput | VisitorUpdateWithWhereUniqueWithoutHostCompanyInput[]
    updateMany?: VisitorUpdateManyWithWhereWithoutHostCompanyInput | VisitorUpdateManyWithWhereWithoutHostCompanyInput[]
    deleteMany?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HolidayUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<HolidayCreateWithoutCompanyInput, HolidayUncheckedCreateWithoutCompanyInput> | HolidayCreateWithoutCompanyInput[] | HolidayUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: HolidayCreateOrConnectWithoutCompanyInput | HolidayCreateOrConnectWithoutCompanyInput[]
    upsert?: HolidayUpsertWithWhereUniqueWithoutCompanyInput | HolidayUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: HolidayCreateManyCompanyInputEnvelope
    set?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    disconnect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    delete?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    connect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    update?: HolidayUpdateWithWhereUniqueWithoutCompanyInput | HolidayUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: HolidayUpdateManyWithWhereWithoutCompanyInput | HolidayUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: HolidayScalarWhereInput | HolidayScalarWhereInput[]
  }

  export type CompanySettingsUncheckedUpdateOneWithoutCompanyNestedInput = {
    create?: XOR<CompanySettingsCreateWithoutCompanyInput, CompanySettingsUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: CompanySettingsCreateOrConnectWithoutCompanyInput
    upsert?: CompanySettingsUpsertWithoutCompanyInput
    disconnect?: CompanySettingsWhereInput | boolean
    delete?: CompanySettingsWhereInput | boolean
    connect?: CompanySettingsWhereUniqueInput
    update?: XOR<XOR<CompanySettingsUpdateToOneWithWhereWithoutCompanyInput, CompanySettingsUpdateWithoutCompanyInput>, CompanySettingsUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanySettingsCreateweekendDaysInput = {
    set: string[]
  }

  export type CompanyCreateNestedOneWithoutSettingsInput = {
    create?: XOR<CompanyCreateWithoutSettingsInput, CompanyUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSettingsInput
    connect?: CompanyWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanySettingsUpdateweekendDaysInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CompanyUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<CompanyCreateWithoutSettingsInput, CompanyUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSettingsInput
    upsert?: CompanyUpsertWithoutSettingsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutSettingsInput, CompanyUpdateWithoutSettingsInput>, CompanyUncheckedUpdateWithoutSettingsInput>
  }

  export type CompanyCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<CompanyCreateWithoutDepartmentsInput, CompanyUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutDepartmentsInput
    connect?: CompanyWhereUniqueInput
  }

  export type EmployeeCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutDepartmentsNestedInput = {
    create?: XOR<CompanyCreateWithoutDepartmentsInput, CompanyUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutDepartmentsInput
    upsert?: CompanyUpsertWithoutDepartmentsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutDepartmentsInput, CompanyUpdateWithoutDepartmentsInput>, CompanyUncheckedUpdateWithoutDepartmentsInput>
  }

  export type EmployeeUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartmentInput | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartmentInput | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartmentInput | EmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartmentInput | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartmentInput | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartmentInput | EmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEmployeesInput
    connect?: CompanyWhereUniqueInput
  }

  export type DepartmentCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type AttendanceRecordCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<AttendanceRecordCreateWithoutEmployeeInput, AttendanceRecordUncheckedCreateWithoutEmployeeInput> | AttendanceRecordCreateWithoutEmployeeInput[] | AttendanceRecordUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutEmployeeInput | AttendanceRecordCreateOrConnectWithoutEmployeeInput[]
    createMany?: AttendanceRecordCreateManyEmployeeInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type EmployeeScheduleCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeScheduleCreateWithoutEmployeeInput, EmployeeScheduleUncheckedCreateWithoutEmployeeInput> | EmployeeScheduleCreateWithoutEmployeeInput[] | EmployeeScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeScheduleCreateOrConnectWithoutEmployeeInput | EmployeeScheduleCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeScheduleCreateManyEmployeeInputEnvelope
    connect?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
  }

  export type LeaveCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<LeaveCreateWithoutEmployeeInput, LeaveUncheckedCreateWithoutEmployeeInput> | LeaveCreateWithoutEmployeeInput[] | LeaveUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutEmployeeInput | LeaveCreateOrConnectWithoutEmployeeInput[]
    createMany?: LeaveCreateManyEmployeeInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    connect?: UserWhereUniqueInput
  }

  export type AttendanceRecordUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<AttendanceRecordCreateWithoutEmployeeInput, AttendanceRecordUncheckedCreateWithoutEmployeeInput> | AttendanceRecordCreateWithoutEmployeeInput[] | AttendanceRecordUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutEmployeeInput | AttendanceRecordCreateOrConnectWithoutEmployeeInput[]
    createMany?: AttendanceRecordCreateManyEmployeeInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type EmployeeScheduleUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeScheduleCreateWithoutEmployeeInput, EmployeeScheduleUncheckedCreateWithoutEmployeeInput> | EmployeeScheduleCreateWithoutEmployeeInput[] | EmployeeScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeScheduleCreateOrConnectWithoutEmployeeInput | EmployeeScheduleCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeScheduleCreateManyEmployeeInputEnvelope
    connect?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
  }

  export type LeaveUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<LeaveCreateWithoutEmployeeInput, LeaveUncheckedCreateWithoutEmployeeInput> | LeaveCreateWithoutEmployeeInput[] | LeaveUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutEmployeeInput | LeaveCreateOrConnectWithoutEmployeeInput[]
    createMany?: LeaveCreateManyEmployeeInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CompanyUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEmployeesInput
    upsert?: CompanyUpsertWithoutEmployeesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutEmployeesInput, CompanyUpdateWithoutEmployeesInput>, CompanyUncheckedUpdateWithoutEmployeesInput>
  }

  export type DepartmentUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeesInput
    upsert?: DepartmentUpsertWithoutEmployeesInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutEmployeesInput, DepartmentUpdateWithoutEmployeesInput>, DepartmentUncheckedUpdateWithoutEmployeesInput>
  }

  export type AttendanceRecordUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutEmployeeInput, AttendanceRecordUncheckedCreateWithoutEmployeeInput> | AttendanceRecordCreateWithoutEmployeeInput[] | AttendanceRecordUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutEmployeeInput | AttendanceRecordCreateOrConnectWithoutEmployeeInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutEmployeeInput | AttendanceRecordUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: AttendanceRecordCreateManyEmployeeInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutEmployeeInput | AttendanceRecordUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutEmployeeInput | AttendanceRecordUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type EmployeeScheduleUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeScheduleCreateWithoutEmployeeInput, EmployeeScheduleUncheckedCreateWithoutEmployeeInput> | EmployeeScheduleCreateWithoutEmployeeInput[] | EmployeeScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeScheduleCreateOrConnectWithoutEmployeeInput | EmployeeScheduleCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeScheduleUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeScheduleUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeScheduleCreateManyEmployeeInputEnvelope
    set?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
    disconnect?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
    delete?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
    connect?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
    update?: EmployeeScheduleUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeScheduleUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeScheduleUpdateManyWithWhereWithoutEmployeeInput | EmployeeScheduleUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeScheduleScalarWhereInput | EmployeeScheduleScalarWhereInput[]
  }

  export type LeaveUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<LeaveCreateWithoutEmployeeInput, LeaveUncheckedCreateWithoutEmployeeInput> | LeaveCreateWithoutEmployeeInput[] | LeaveUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutEmployeeInput | LeaveCreateOrConnectWithoutEmployeeInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutEmployeeInput | LeaveUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: LeaveCreateManyEmployeeInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutEmployeeInput | LeaveUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutEmployeeInput | LeaveUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type UserUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    upsert?: UserUpsertWithoutEmployeeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeeInput, UserUpdateWithoutEmployeeInput>, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutEmployeeInput, AttendanceRecordUncheckedCreateWithoutEmployeeInput> | AttendanceRecordCreateWithoutEmployeeInput[] | AttendanceRecordUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutEmployeeInput | AttendanceRecordCreateOrConnectWithoutEmployeeInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutEmployeeInput | AttendanceRecordUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: AttendanceRecordCreateManyEmployeeInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutEmployeeInput | AttendanceRecordUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutEmployeeInput | AttendanceRecordUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type EmployeeScheduleUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeScheduleCreateWithoutEmployeeInput, EmployeeScheduleUncheckedCreateWithoutEmployeeInput> | EmployeeScheduleCreateWithoutEmployeeInput[] | EmployeeScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeScheduleCreateOrConnectWithoutEmployeeInput | EmployeeScheduleCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeScheduleUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeScheduleUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeScheduleCreateManyEmployeeInputEnvelope
    set?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
    disconnect?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
    delete?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
    connect?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
    update?: EmployeeScheduleUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeScheduleUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeScheduleUpdateManyWithWhereWithoutEmployeeInput | EmployeeScheduleUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeScheduleScalarWhereInput | EmployeeScheduleScalarWhereInput[]
  }

  export type LeaveUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<LeaveCreateWithoutEmployeeInput, LeaveUncheckedCreateWithoutEmployeeInput> | LeaveCreateWithoutEmployeeInput[] | LeaveUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutEmployeeInput | LeaveCreateOrConnectWithoutEmployeeInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutEmployeeInput | LeaveUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: LeaveCreateManyEmployeeInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutEmployeeInput | LeaveUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutEmployeeInput | LeaveUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput
    upsert?: UserUpsertWithoutEmployeeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeeInput, UserUpdateWithoutEmployeeInput>, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type CompanyCreateNestedOneWithoutDevicesInput = {
    create?: XOR<CompanyCreateWithoutDevicesInput, CompanyUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutDevicesInput
    connect?: CompanyWhereUniqueInput
  }

  export type AttendanceRecordCreateNestedManyWithoutDeviceInput = {
    create?: XOR<AttendanceRecordCreateWithoutDeviceInput, AttendanceRecordUncheckedCreateWithoutDeviceInput> | AttendanceRecordCreateWithoutDeviceInput[] | AttendanceRecordUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutDeviceInput | AttendanceRecordCreateOrConnectWithoutDeviceInput[]
    createMany?: AttendanceRecordCreateManyDeviceInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type AttendanceRecordUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<AttendanceRecordCreateWithoutDeviceInput, AttendanceRecordUncheckedCreateWithoutDeviceInput> | AttendanceRecordCreateWithoutDeviceInput[] | AttendanceRecordUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutDeviceInput | AttendanceRecordCreateOrConnectWithoutDeviceInput[]
    createMany?: AttendanceRecordCreateManyDeviceInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<CompanyCreateWithoutDevicesInput, CompanyUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutDevicesInput
    upsert?: CompanyUpsertWithoutDevicesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutDevicesInput, CompanyUpdateWithoutDevicesInput>, CompanyUncheckedUpdateWithoutDevicesInput>
  }

  export type AttendanceRecordUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutDeviceInput, AttendanceRecordUncheckedCreateWithoutDeviceInput> | AttendanceRecordCreateWithoutDeviceInput[] | AttendanceRecordUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutDeviceInput | AttendanceRecordCreateOrConnectWithoutDeviceInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutDeviceInput | AttendanceRecordUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: AttendanceRecordCreateManyDeviceInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutDeviceInput | AttendanceRecordUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutDeviceInput | AttendanceRecordUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutDeviceInput, AttendanceRecordUncheckedCreateWithoutDeviceInput> | AttendanceRecordCreateWithoutDeviceInput[] | AttendanceRecordUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutDeviceInput | AttendanceRecordCreateOrConnectWithoutDeviceInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutDeviceInput | AttendanceRecordUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: AttendanceRecordCreateManyDeviceInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutDeviceInput | AttendanceRecordUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutDeviceInput | AttendanceRecordUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type ScheduleCreateworkDaysInput = {
    set: string[]
  }

  export type CompanyCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<CompanyCreateWithoutSchedulesInput, CompanyUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSchedulesInput
    connect?: CompanyWhereUniqueInput
  }

  export type EmployeeScheduleCreateNestedManyWithoutScheduleInput = {
    create?: XOR<EmployeeScheduleCreateWithoutScheduleInput, EmployeeScheduleUncheckedCreateWithoutScheduleInput> | EmployeeScheduleCreateWithoutScheduleInput[] | EmployeeScheduleUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: EmployeeScheduleCreateOrConnectWithoutScheduleInput | EmployeeScheduleCreateOrConnectWithoutScheduleInput[]
    createMany?: EmployeeScheduleCreateManyScheduleInputEnvelope
    connect?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
  }

  export type EmployeeScheduleUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<EmployeeScheduleCreateWithoutScheduleInput, EmployeeScheduleUncheckedCreateWithoutScheduleInput> | EmployeeScheduleCreateWithoutScheduleInput[] | EmployeeScheduleUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: EmployeeScheduleCreateOrConnectWithoutScheduleInput | EmployeeScheduleCreateOrConnectWithoutScheduleInput[]
    createMany?: EmployeeScheduleCreateManyScheduleInputEnvelope
    connect?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
  }

  export type ScheduleUpdateworkDaysInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CompanyUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<CompanyCreateWithoutSchedulesInput, CompanyUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSchedulesInput
    upsert?: CompanyUpsertWithoutSchedulesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutSchedulesInput, CompanyUpdateWithoutSchedulesInput>, CompanyUncheckedUpdateWithoutSchedulesInput>
  }

  export type EmployeeScheduleUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<EmployeeScheduleCreateWithoutScheduleInput, EmployeeScheduleUncheckedCreateWithoutScheduleInput> | EmployeeScheduleCreateWithoutScheduleInput[] | EmployeeScheduleUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: EmployeeScheduleCreateOrConnectWithoutScheduleInput | EmployeeScheduleCreateOrConnectWithoutScheduleInput[]
    upsert?: EmployeeScheduleUpsertWithWhereUniqueWithoutScheduleInput | EmployeeScheduleUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: EmployeeScheduleCreateManyScheduleInputEnvelope
    set?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
    disconnect?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
    delete?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
    connect?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
    update?: EmployeeScheduleUpdateWithWhereUniqueWithoutScheduleInput | EmployeeScheduleUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: EmployeeScheduleUpdateManyWithWhereWithoutScheduleInput | EmployeeScheduleUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: EmployeeScheduleScalarWhereInput | EmployeeScheduleScalarWhereInput[]
  }

  export type EmployeeScheduleUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<EmployeeScheduleCreateWithoutScheduleInput, EmployeeScheduleUncheckedCreateWithoutScheduleInput> | EmployeeScheduleCreateWithoutScheduleInput[] | EmployeeScheduleUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: EmployeeScheduleCreateOrConnectWithoutScheduleInput | EmployeeScheduleCreateOrConnectWithoutScheduleInput[]
    upsert?: EmployeeScheduleUpsertWithWhereUniqueWithoutScheduleInput | EmployeeScheduleUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: EmployeeScheduleCreateManyScheduleInputEnvelope
    set?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
    disconnect?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
    delete?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
    connect?: EmployeeScheduleWhereUniqueInput | EmployeeScheduleWhereUniqueInput[]
    update?: EmployeeScheduleUpdateWithWhereUniqueWithoutScheduleInput | EmployeeScheduleUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: EmployeeScheduleUpdateManyWithWhereWithoutScheduleInput | EmployeeScheduleUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: EmployeeScheduleScalarWhereInput | EmployeeScheduleScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<EmployeeCreateWithoutSchedulesInput, EmployeeUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSchedulesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type ScheduleCreateNestedOneWithoutEmployeeSchedulesInput = {
    create?: XOR<ScheduleCreateWithoutEmployeeSchedulesInput, ScheduleUncheckedCreateWithoutEmployeeSchedulesInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutEmployeeSchedulesInput
    connect?: ScheduleWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<EmployeeCreateWithoutSchedulesInput, EmployeeUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSchedulesInput
    upsert?: EmployeeUpsertWithoutSchedulesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutSchedulesInput, EmployeeUpdateWithoutSchedulesInput>, EmployeeUncheckedUpdateWithoutSchedulesInput>
  }

  export type ScheduleUpdateOneRequiredWithoutEmployeeSchedulesNestedInput = {
    create?: XOR<ScheduleCreateWithoutEmployeeSchedulesInput, ScheduleUncheckedCreateWithoutEmployeeSchedulesInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutEmployeeSchedulesInput
    upsert?: ScheduleUpsertWithoutEmployeeSchedulesInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutEmployeeSchedulesInput, ScheduleUpdateWithoutEmployeeSchedulesInput>, ScheduleUncheckedUpdateWithoutEmployeeSchedulesInput>
  }

  export type EmployeeCreateNestedOneWithoutAttendanceRecordsInput = {
    create?: XOR<EmployeeCreateWithoutAttendanceRecordsInput, EmployeeUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAttendanceRecordsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type DeviceCreateNestedOneWithoutAttendanceRecordsInput = {
    create?: XOR<DeviceCreateWithoutAttendanceRecordsInput, DeviceUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutAttendanceRecordsInput
    connect?: DeviceWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutAttendanceRecordsInput = {
    create?: XOR<CompanyCreateWithoutAttendanceRecordsInput, CompanyUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutAttendanceRecordsInput
    connect?: CompanyWhereUniqueInput
  }

  export type EnumRecordTypeFieldUpdateOperationsInput = {
    set?: $Enums.RecordType
  }

  export type EnumRecordStatusFieldUpdateOperationsInput = {
    set?: $Enums.RecordStatus
  }

  export type EmployeeUpdateOneRequiredWithoutAttendanceRecordsNestedInput = {
    create?: XOR<EmployeeCreateWithoutAttendanceRecordsInput, EmployeeUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAttendanceRecordsInput
    upsert?: EmployeeUpsertWithoutAttendanceRecordsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAttendanceRecordsInput, EmployeeUpdateWithoutAttendanceRecordsInput>, EmployeeUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type DeviceUpdateOneWithoutAttendanceRecordsNestedInput = {
    create?: XOR<DeviceCreateWithoutAttendanceRecordsInput, DeviceUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutAttendanceRecordsInput
    upsert?: DeviceUpsertWithoutAttendanceRecordsInput
    disconnect?: DeviceWhereInput | boolean
    delete?: DeviceWhereInput | boolean
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutAttendanceRecordsInput, DeviceUpdateWithoutAttendanceRecordsInput>, DeviceUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type CompanyUpdateOneRequiredWithoutAttendanceRecordsNestedInput = {
    create?: XOR<CompanyCreateWithoutAttendanceRecordsInput, CompanyUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutAttendanceRecordsInput
    upsert?: CompanyUpsertWithoutAttendanceRecordsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutAttendanceRecordsInput, CompanyUpdateWithoutAttendanceRecordsInput>, CompanyUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type EmployeeCreateNestedOneWithoutLeavesInput = {
    create?: XOR<EmployeeCreateWithoutLeavesInput, EmployeeUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLeavesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EnumLeaveTypeFieldUpdateOperationsInput = {
    set?: $Enums.LeaveType
  }

  export type EnumLeaveStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeaveStatus
  }

  export type EmployeeUpdateOneRequiredWithoutLeavesNestedInput = {
    create?: XOR<EmployeeCreateWithoutLeavesInput, EmployeeUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutLeavesInput
    upsert?: EmployeeUpsertWithoutLeavesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutLeavesInput, EmployeeUpdateWithoutLeavesInput>, EmployeeUncheckedUpdateWithoutLeavesInput>
  }

  export type CompanyCreateNestedOneWithoutHolidaysInput = {
    create?: XOR<CompanyCreateWithoutHolidaysInput, CompanyUncheckedCreateWithoutHolidaysInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutHolidaysInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutHolidaysNestedInput = {
    create?: XOR<CompanyCreateWithoutHolidaysInput, CompanyUncheckedCreateWithoutHolidaysInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutHolidaysInput
    upsert?: CompanyUpsertWithoutHolidaysInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutHolidaysInput, CompanyUpdateWithoutHolidaysInput>, CompanyUncheckedUpdateWithoutHolidaysInput>
  }

  export type CompanyCreateNestedOneWithoutVisitorsInput = {
    create?: XOR<CompanyCreateWithoutVisitorsInput, CompanyUncheckedCreateWithoutVisitorsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutVisitorsInput
    connect?: CompanyWhereUniqueInput
  }

  export type VisitorRecordCreateNestedManyWithoutVisitorInput = {
    create?: XOR<VisitorRecordCreateWithoutVisitorInput, VisitorRecordUncheckedCreateWithoutVisitorInput> | VisitorRecordCreateWithoutVisitorInput[] | VisitorRecordUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: VisitorRecordCreateOrConnectWithoutVisitorInput | VisitorRecordCreateOrConnectWithoutVisitorInput[]
    createMany?: VisitorRecordCreateManyVisitorInputEnvelope
    connect?: VisitorRecordWhereUniqueInput | VisitorRecordWhereUniqueInput[]
  }

  export type VisitorRecordUncheckedCreateNestedManyWithoutVisitorInput = {
    create?: XOR<VisitorRecordCreateWithoutVisitorInput, VisitorRecordUncheckedCreateWithoutVisitorInput> | VisitorRecordCreateWithoutVisitorInput[] | VisitorRecordUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: VisitorRecordCreateOrConnectWithoutVisitorInput | VisitorRecordCreateOrConnectWithoutVisitorInput[]
    createMany?: VisitorRecordCreateManyVisitorInputEnvelope
    connect?: VisitorRecordWhereUniqueInput | VisitorRecordWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutVisitorsNestedInput = {
    create?: XOR<CompanyCreateWithoutVisitorsInput, CompanyUncheckedCreateWithoutVisitorsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutVisitorsInput
    upsert?: CompanyUpsertWithoutVisitorsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutVisitorsInput, CompanyUpdateWithoutVisitorsInput>, CompanyUncheckedUpdateWithoutVisitorsInput>
  }

  export type VisitorRecordUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<VisitorRecordCreateWithoutVisitorInput, VisitorRecordUncheckedCreateWithoutVisitorInput> | VisitorRecordCreateWithoutVisitorInput[] | VisitorRecordUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: VisitorRecordCreateOrConnectWithoutVisitorInput | VisitorRecordCreateOrConnectWithoutVisitorInput[]
    upsert?: VisitorRecordUpsertWithWhereUniqueWithoutVisitorInput | VisitorRecordUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: VisitorRecordCreateManyVisitorInputEnvelope
    set?: VisitorRecordWhereUniqueInput | VisitorRecordWhereUniqueInput[]
    disconnect?: VisitorRecordWhereUniqueInput | VisitorRecordWhereUniqueInput[]
    delete?: VisitorRecordWhereUniqueInput | VisitorRecordWhereUniqueInput[]
    connect?: VisitorRecordWhereUniqueInput | VisitorRecordWhereUniqueInput[]
    update?: VisitorRecordUpdateWithWhereUniqueWithoutVisitorInput | VisitorRecordUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: VisitorRecordUpdateManyWithWhereWithoutVisitorInput | VisitorRecordUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: VisitorRecordScalarWhereInput | VisitorRecordScalarWhereInput[]
  }

  export type VisitorRecordUncheckedUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<VisitorRecordCreateWithoutVisitorInput, VisitorRecordUncheckedCreateWithoutVisitorInput> | VisitorRecordCreateWithoutVisitorInput[] | VisitorRecordUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: VisitorRecordCreateOrConnectWithoutVisitorInput | VisitorRecordCreateOrConnectWithoutVisitorInput[]
    upsert?: VisitorRecordUpsertWithWhereUniqueWithoutVisitorInput | VisitorRecordUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: VisitorRecordCreateManyVisitorInputEnvelope
    set?: VisitorRecordWhereUniqueInput | VisitorRecordWhereUniqueInput[]
    disconnect?: VisitorRecordWhereUniqueInput | VisitorRecordWhereUniqueInput[]
    delete?: VisitorRecordWhereUniqueInput | VisitorRecordWhereUniqueInput[]
    connect?: VisitorRecordWhereUniqueInput | VisitorRecordWhereUniqueInput[]
    update?: VisitorRecordUpdateWithWhereUniqueWithoutVisitorInput | VisitorRecordUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: VisitorRecordUpdateManyWithWhereWithoutVisitorInput | VisitorRecordUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: VisitorRecordScalarWhereInput | VisitorRecordScalarWhereInput[]
  }

  export type VisitorCreateNestedOneWithoutVisitsInput = {
    create?: XOR<VisitorCreateWithoutVisitsInput, VisitorUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutVisitsInput
    connect?: VisitorWhereUniqueInput
  }

  export type VisitorUpdateOneRequiredWithoutVisitsNestedInput = {
    create?: XOR<VisitorCreateWithoutVisitsInput, VisitorUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutVisitsInput
    upsert?: VisitorUpsertWithoutVisitsInput
    connect?: VisitorWhereUniqueInput
    update?: XOR<XOR<VisitorUpdateToOneWithWhereWithoutVisitsInput, VisitorUpdateWithoutVisitsInput>, VisitorUncheckedUpdateWithoutVisitsInput>
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type CompanyUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type EmployeeUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput
    upsert?: EmployeeUpsertWithoutUserInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutUserInput, EmployeeUpdateWithoutUserInput>, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRecordTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordType | EnumRecordTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecordType[] | ListEnumRecordTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecordType[] | ListEnumRecordTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordTypeFilter<$PrismaModel> | $Enums.RecordType
  }

  export type NestedEnumRecordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordStatus | EnumRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordStatus[] | ListEnumRecordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecordStatus[] | ListEnumRecordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordStatusFilter<$PrismaModel> | $Enums.RecordStatus
  }

  export type NestedEnumRecordTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordType | EnumRecordTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecordType[] | ListEnumRecordTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecordType[] | ListEnumRecordTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordTypeWithAggregatesFilter<$PrismaModel> | $Enums.RecordType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordTypeFilter<$PrismaModel>
    _max?: NestedEnumRecordTypeFilter<$PrismaModel>
  }

  export type NestedEnumRecordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecordStatus | EnumRecordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecordStatus[] | ListEnumRecordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecordStatus[] | ListEnumRecordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecordStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordStatusFilter<$PrismaModel>
    _max?: NestedEnumRecordStatusFilter<$PrismaModel>
  }

  export type NestedEnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
  }

  export type NestedEnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus
  }

  export type NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
  }

  export type NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveStatusFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DepartmentCreateWithoutCompanyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutCompanyInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutCompanyInput, DepartmentUncheckedCreateWithoutCompanyInput>
  }

  export type DepartmentCreateManyCompanyInputEnvelope = {
    data: DepartmentCreateManyCompanyInput | DepartmentCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutCompanyInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutEmployeeInput
    schedules?: EmployeeScheduleCreateNestedManyWithoutEmployeeInput
    leaves?: LeaveCreateNestedManyWithoutEmployeeInput
    user?: UserCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutCompanyInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutEmployeeInput
    schedules?: EmployeeScheduleUncheckedCreateNestedManyWithoutEmployeeInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutEmployeeInput
    user?: UserUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutCompanyInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput>
  }

  export type EmployeeCreateManyCompanyInputEnvelope = {
    data: EmployeeCreateManyCompanyInput | EmployeeCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type DeviceCreateWithoutCompanyInput = {
    id?: string
    deviceId: string
    name: string
    location?: string | null
    ipAddress?: string | null
    lastConnection?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutCompanyInput = {
    id?: string
    deviceId: string
    name: string
    location?: string | null
    ipAddress?: string | null
    lastConnection?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutCompanyInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutCompanyInput, DeviceUncheckedCreateWithoutCompanyInput>
  }

  export type DeviceCreateManyCompanyInputEnvelope = {
    data: DeviceCreateManyCompanyInput | DeviceCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutCompanyInput = {
    id?: string
    name: string
    description?: string | null
    startTime: string
    endTime: string
    workDays?: ScheduleCreateworkDaysInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeSchedules?: EmployeeScheduleCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    description?: string | null
    startTime: string
    endTime: string
    workDays?: ScheduleCreateworkDaysInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeSchedules?: EmployeeScheduleUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutCompanyInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutCompanyInput, ScheduleUncheckedCreateWithoutCompanyInput>
  }

  export type ScheduleCreateManyCompanyInputEnvelope = {
    data: ScheduleCreateManyCompanyInput | ScheduleCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceRecordCreateWithoutCompanyInput = {
    id?: string
    timestamp: Date | string
    type: $Enums.RecordType
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutAttendanceRecordsInput
    device?: DeviceCreateNestedOneWithoutAttendanceRecordsInput
  }

  export type AttendanceRecordUncheckedCreateWithoutCompanyInput = {
    id?: string
    employeeId: string
    deviceId?: string | null
    timestamp: Date | string
    type: $Enums.RecordType
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRecordCreateOrConnectWithoutCompanyInput = {
    where: AttendanceRecordWhereUniqueInput
    create: XOR<AttendanceRecordCreateWithoutCompanyInput, AttendanceRecordUncheckedCreateWithoutCompanyInput>
  }

  export type AttendanceRecordCreateManyCompanyInputEnvelope = {
    data: AttendanceRecordCreateManyCompanyInput | AttendanceRecordCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type VisitorCreateWithoutHostCompanyInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    company?: string | null
    purpose?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    visits?: VisitorRecordCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUncheckedCreateWithoutHostCompanyInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    company?: string | null
    purpose?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    visits?: VisitorRecordUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorCreateOrConnectWithoutHostCompanyInput = {
    where: VisitorWhereUniqueInput
    create: XOR<VisitorCreateWithoutHostCompanyInput, VisitorUncheckedCreateWithoutHostCompanyInput>
  }

  export type VisitorCreateManyHostCompanyInputEnvelope = {
    data: VisitorCreateManyHostCompanyInput | VisitorCreateManyHostCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee?: EmployeeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    employeeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type HolidayCreateWithoutCompanyInput = {
    id?: string
    name: string
    date: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HolidayUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    date: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HolidayCreateOrConnectWithoutCompanyInput = {
    where: HolidayWhereUniqueInput
    create: XOR<HolidayCreateWithoutCompanyInput, HolidayUncheckedCreateWithoutCompanyInput>
  }

  export type HolidayCreateManyCompanyInputEnvelope = {
    data: HolidayCreateManyCompanyInput | HolidayCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CompanySettingsCreateWithoutCompanyInput = {
    id?: string
    workdayStartTime?: string
    workdayEndTime?: string
    lunchStartTime?: string | null
    lunchEndTime?: string | null
    gracePeriodMinutes?: number
    weekendDays?: CompanySettingsCreateweekendDaysInput | string[]
    overtimeEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanySettingsUncheckedCreateWithoutCompanyInput = {
    id?: string
    workdayStartTime?: string
    workdayEndTime?: string
    lunchStartTime?: string | null
    lunchEndTime?: string | null
    gracePeriodMinutes?: number
    weekendDays?: CompanySettingsCreateweekendDaysInput | string[]
    overtimeEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanySettingsCreateOrConnectWithoutCompanyInput = {
    where: CompanySettingsWhereUniqueInput
    create: XOR<CompanySettingsCreateWithoutCompanyInput, CompanySettingsUncheckedCreateWithoutCompanyInput>
  }

  export type DepartmentUpsertWithWhereUniqueWithoutCompanyInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutCompanyInput, DepartmentUncheckedUpdateWithoutCompanyInput>
    create: XOR<DepartmentCreateWithoutCompanyInput, DepartmentUncheckedCreateWithoutCompanyInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutCompanyInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutCompanyInput, DepartmentUncheckedUpdateWithoutCompanyInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutCompanyInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutCompanyInput>
  }

  export type DepartmentScalarWhereInput = {
    AND?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    OR?: DepartmentScalarWhereInput[]
    NOT?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    description?: StringNullableFilter<"Department"> | string | null
    companyId?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
  }

  export type EmployeeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutCompanyInput, EmployeeUncheckedUpdateWithoutCompanyInput>
    create: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutCompanyInput, EmployeeUncheckedUpdateWithoutCompanyInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutCompanyInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutCompanyInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: StringFilter<"Employee"> | string
    employeeId?: StringFilter<"Employee"> | string
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    email?: StringNullableFilter<"Employee"> | string | null
    phone?: StringNullableFilter<"Employee"> | string | null
    position?: StringNullableFilter<"Employee"> | string | null
    fingerprintId?: StringNullableFilter<"Employee"> | string | null
    isActive?: BoolFilter<"Employee"> | boolean
    hireDate?: DateTimeFilter<"Employee"> | Date | string
    terminationDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    companyId?: StringFilter<"Employee"> | string
    departmentId?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
  }

  export type DeviceUpsertWithWhereUniqueWithoutCompanyInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutCompanyInput, DeviceUncheckedUpdateWithoutCompanyInput>
    create: XOR<DeviceCreateWithoutCompanyInput, DeviceUncheckedCreateWithoutCompanyInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutCompanyInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutCompanyInput, DeviceUncheckedUpdateWithoutCompanyInput>
  }

  export type DeviceUpdateManyWithWhereWithoutCompanyInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutCompanyInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: StringFilter<"Device"> | string
    deviceId?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    location?: StringNullableFilter<"Device"> | string | null
    ipAddress?: StringNullableFilter<"Device"> | string | null
    lastConnection?: DateTimeNullableFilter<"Device"> | Date | string | null
    isActive?: BoolFilter<"Device"> | boolean
    companyId?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
  }

  export type ScheduleUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutCompanyInput, ScheduleUncheckedUpdateWithoutCompanyInput>
    create: XOR<ScheduleCreateWithoutCompanyInput, ScheduleUncheckedCreateWithoutCompanyInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutCompanyInput, ScheduleUncheckedUpdateWithoutCompanyInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutCompanyInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: StringFilter<"Schedule"> | string
    name?: StringFilter<"Schedule"> | string
    description?: StringNullableFilter<"Schedule"> | string | null
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    workDays?: StringNullableListFilter<"Schedule">
    companyId?: StringFilter<"Schedule"> | string
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
  }

  export type AttendanceRecordUpsertWithWhereUniqueWithoutCompanyInput = {
    where: AttendanceRecordWhereUniqueInput
    update: XOR<AttendanceRecordUpdateWithoutCompanyInput, AttendanceRecordUncheckedUpdateWithoutCompanyInput>
    create: XOR<AttendanceRecordCreateWithoutCompanyInput, AttendanceRecordUncheckedCreateWithoutCompanyInput>
  }

  export type AttendanceRecordUpdateWithWhereUniqueWithoutCompanyInput = {
    where: AttendanceRecordWhereUniqueInput
    data: XOR<AttendanceRecordUpdateWithoutCompanyInput, AttendanceRecordUncheckedUpdateWithoutCompanyInput>
  }

  export type AttendanceRecordUpdateManyWithWhereWithoutCompanyInput = {
    where: AttendanceRecordScalarWhereInput
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyWithoutCompanyInput>
  }

  export type AttendanceRecordScalarWhereInput = {
    AND?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
    OR?: AttendanceRecordScalarWhereInput[]
    NOT?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
    id?: StringFilter<"AttendanceRecord"> | string
    employeeId?: StringFilter<"AttendanceRecord"> | string
    deviceId?: StringNullableFilter<"AttendanceRecord"> | string | null
    companyId?: StringFilter<"AttendanceRecord"> | string
    timestamp?: DateTimeFilter<"AttendanceRecord"> | Date | string
    type?: EnumRecordTypeFilter<"AttendanceRecord"> | $Enums.RecordType
    status?: EnumRecordStatusFilter<"AttendanceRecord"> | $Enums.RecordStatus
    notes?: StringNullableFilter<"AttendanceRecord"> | string | null
    createdAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
  }

  export type VisitorUpsertWithWhereUniqueWithoutHostCompanyInput = {
    where: VisitorWhereUniqueInput
    update: XOR<VisitorUpdateWithoutHostCompanyInput, VisitorUncheckedUpdateWithoutHostCompanyInput>
    create: XOR<VisitorCreateWithoutHostCompanyInput, VisitorUncheckedCreateWithoutHostCompanyInput>
  }

  export type VisitorUpdateWithWhereUniqueWithoutHostCompanyInput = {
    where: VisitorWhereUniqueInput
    data: XOR<VisitorUpdateWithoutHostCompanyInput, VisitorUncheckedUpdateWithoutHostCompanyInput>
  }

  export type VisitorUpdateManyWithWhereWithoutHostCompanyInput = {
    where: VisitorScalarWhereInput
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyWithoutHostCompanyInput>
  }

  export type VisitorScalarWhereInput = {
    AND?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
    OR?: VisitorScalarWhereInput[]
    NOT?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
    id?: StringFilter<"Visitor"> | string
    firstName?: StringFilter<"Visitor"> | string
    lastName?: StringFilter<"Visitor"> | string
    email?: StringNullableFilter<"Visitor"> | string | null
    phone?: StringNullableFilter<"Visitor"> | string | null
    company?: StringNullableFilter<"Visitor"> | string | null
    purpose?: StringNullableFilter<"Visitor"> | string | null
    companyId?: StringFilter<"Visitor"> | string
    createdAt?: DateTimeFilter<"Visitor"> | Date | string
    updatedAt?: DateTimeFilter<"Visitor"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    companyId?: StringFilter<"User"> | string
    employeeId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type HolidayUpsertWithWhereUniqueWithoutCompanyInput = {
    where: HolidayWhereUniqueInput
    update: XOR<HolidayUpdateWithoutCompanyInput, HolidayUncheckedUpdateWithoutCompanyInput>
    create: XOR<HolidayCreateWithoutCompanyInput, HolidayUncheckedCreateWithoutCompanyInput>
  }

  export type HolidayUpdateWithWhereUniqueWithoutCompanyInput = {
    where: HolidayWhereUniqueInput
    data: XOR<HolidayUpdateWithoutCompanyInput, HolidayUncheckedUpdateWithoutCompanyInput>
  }

  export type HolidayUpdateManyWithWhereWithoutCompanyInput = {
    where: HolidayScalarWhereInput
    data: XOR<HolidayUpdateManyMutationInput, HolidayUncheckedUpdateManyWithoutCompanyInput>
  }

  export type HolidayScalarWhereInput = {
    AND?: HolidayScalarWhereInput | HolidayScalarWhereInput[]
    OR?: HolidayScalarWhereInput[]
    NOT?: HolidayScalarWhereInput | HolidayScalarWhereInput[]
    id?: StringFilter<"Holiday"> | string
    name?: StringFilter<"Holiday"> | string
    date?: DateTimeFilter<"Holiday"> | Date | string
    description?: StringNullableFilter<"Holiday"> | string | null
    companyId?: StringFilter<"Holiday"> | string
    createdAt?: DateTimeFilter<"Holiday"> | Date | string
    updatedAt?: DateTimeFilter<"Holiday"> | Date | string
  }

  export type CompanySettingsUpsertWithoutCompanyInput = {
    update: XOR<CompanySettingsUpdateWithoutCompanyInput, CompanySettingsUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanySettingsCreateWithoutCompanyInput, CompanySettingsUncheckedCreateWithoutCompanyInput>
    where?: CompanySettingsWhereInput
  }

  export type CompanySettingsUpdateToOneWithWhereWithoutCompanyInput = {
    where?: CompanySettingsWhereInput
    data: XOR<CompanySettingsUpdateWithoutCompanyInput, CompanySettingsUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanySettingsUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workdayStartTime?: StringFieldUpdateOperationsInput | string
    workdayEndTime?: StringFieldUpdateOperationsInput | string
    lunchStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    lunchEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    gracePeriodMinutes?: IntFieldUpdateOperationsInput | number
    weekendDays?: CompanySettingsUpdateweekendDaysInput | string[]
    overtimeEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanySettingsUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workdayStartTime?: StringFieldUpdateOperationsInput | string
    workdayEndTime?: StringFieldUpdateOperationsInput | string
    lunchStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    lunchEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    gracePeriodMinutes?: IntFieldUpdateOperationsInput | number
    weekendDays?: CompanySettingsUpdateweekendDaysInput | string[]
    overtimeEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateWithoutSettingsInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    devices?: DeviceCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutCompanyInput
    visitors?: VisitorCreateNestedManyWithoutHostCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    holidays?: HolidayCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutSettingsInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutCompanyInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    devices?: DeviceUncheckedCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutCompanyInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutHostCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutSettingsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutSettingsInput, CompanyUncheckedCreateWithoutSettingsInput>
  }

  export type CompanyUpsertWithoutSettingsInput = {
    update: XOR<CompanyUpdateWithoutSettingsInput, CompanyUncheckedUpdateWithoutSettingsInput>
    create: XOR<CompanyCreateWithoutSettingsInput, CompanyUncheckedCreateWithoutSettingsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutSettingsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutSettingsInput, CompanyUncheckedUpdateWithoutSettingsInput>
  }

  export type CompanyUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUpdateManyWithoutHostCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    holidays?: HolidayUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutHostCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateWithoutDepartmentsInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    devices?: DeviceCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutCompanyInput
    visitors?: VisitorCreateNestedManyWithoutHostCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    holidays?: HolidayCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutDepartmentsInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    devices?: DeviceUncheckedCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutCompanyInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutHostCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsUncheckedCreateNestedOneWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutDepartmentsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutDepartmentsInput, CompanyUncheckedCreateWithoutDepartmentsInput>
  }

  export type EmployeeCreateWithoutDepartmentInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutEmployeesInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutEmployeeInput
    schedules?: EmployeeScheduleCreateNestedManyWithoutEmployeeInput
    leaves?: LeaveCreateNestedManyWithoutEmployeeInput
    user?: UserCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutDepartmentInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutEmployeeInput
    schedules?: EmployeeScheduleUncheckedCreateNestedManyWithoutEmployeeInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutEmployeeInput
    user?: UserUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type EmployeeCreateManyDepartmentInputEnvelope = {
    data: EmployeeCreateManyDepartmentInput | EmployeeCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutDepartmentsInput = {
    update: XOR<CompanyUpdateWithoutDepartmentsInput, CompanyUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<CompanyCreateWithoutDepartmentsInput, CompanyUncheckedCreateWithoutDepartmentsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutDepartmentsInput, CompanyUncheckedUpdateWithoutDepartmentsInput>
  }

  export type CompanyUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUpdateManyWithoutHostCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    holidays?: HolidayUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUpdateOneWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutHostCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUncheckedUpdateOneWithoutCompanyNestedInput
  }

  export type EmployeeUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutDepartmentInput, EmployeeUncheckedUpdateWithoutDepartmentInput>
    create: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutDepartmentInput, EmployeeUncheckedUpdateWithoutDepartmentInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutDepartmentInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type CompanyCreateWithoutEmployeesInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutCompanyInput
    devices?: DeviceCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutCompanyInput
    visitors?: VisitorCreateNestedManyWithoutHostCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    holidays?: HolidayCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutEmployeesInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutCompanyInput
    devices?: DeviceUncheckedCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutCompanyInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutHostCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsUncheckedCreateNestedOneWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutEmployeesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
  }

  export type DepartmentCreateWithoutEmployeesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutDepartmentsInput
  }

  export type DepartmentUncheckedCreateWithoutEmployeesInput = {
    id?: string
    name: string
    description?: string | null
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentCreateOrConnectWithoutEmployeesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
  }

  export type AttendanceRecordCreateWithoutEmployeeInput = {
    id?: string
    timestamp: Date | string
    type: $Enums.RecordType
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    device?: DeviceCreateNestedOneWithoutAttendanceRecordsInput
    company: CompanyCreateNestedOneWithoutAttendanceRecordsInput
  }

  export type AttendanceRecordUncheckedCreateWithoutEmployeeInput = {
    id?: string
    deviceId?: string | null
    companyId: string
    timestamp: Date | string
    type: $Enums.RecordType
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRecordCreateOrConnectWithoutEmployeeInput = {
    where: AttendanceRecordWhereUniqueInput
    create: XOR<AttendanceRecordCreateWithoutEmployeeInput, AttendanceRecordUncheckedCreateWithoutEmployeeInput>
  }

  export type AttendanceRecordCreateManyEmployeeInputEnvelope = {
    data: AttendanceRecordCreateManyEmployeeInput | AttendanceRecordCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeScheduleCreateWithoutEmployeeInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule: ScheduleCreateNestedOneWithoutEmployeeSchedulesInput
  }

  export type EmployeeScheduleUncheckedCreateWithoutEmployeeInput = {
    id?: string
    scheduleId: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeScheduleCreateOrConnectWithoutEmployeeInput = {
    where: EmployeeScheduleWhereUniqueInput
    create: XOR<EmployeeScheduleCreateWithoutEmployeeInput, EmployeeScheduleUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeScheduleCreateManyEmployeeInputEnvelope = {
    data: EmployeeScheduleCreateManyEmployeeInput | EmployeeScheduleCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type LeaveCreateWithoutEmployeeInput = {
    id?: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.LeaveStatus
    reason?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveUncheckedCreateWithoutEmployeeInput = {
    id?: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.LeaveStatus
    reason?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveCreateOrConnectWithoutEmployeeInput = {
    where: LeaveWhereUniqueInput
    create: XOR<LeaveCreateWithoutEmployeeInput, LeaveUncheckedCreateWithoutEmployeeInput>
  }

  export type LeaveCreateManyEmployeeInputEnvelope = {
    data: LeaveCreateManyEmployeeInput | LeaveCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutEmployeeInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutEmployeeInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutEmployeeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
  }

  export type CompanyUpsertWithoutEmployeesInput = {
    update: XOR<CompanyUpdateWithoutEmployeesInput, CompanyUncheckedUpdateWithoutEmployeesInput>
    create: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutEmployeesInput, CompanyUncheckedUpdateWithoutEmployeesInput>
  }

  export type CompanyUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUpdateManyWithoutHostCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    holidays?: HolidayUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUpdateOneWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutHostCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUncheckedUpdateOneWithoutCompanyNestedInput
  }

  export type DepartmentUpsertWithoutEmployeesInput = {
    update: XOR<DepartmentUpdateWithoutEmployeesInput, DepartmentUncheckedUpdateWithoutEmployeesInput>
    create: XOR<DepartmentCreateWithoutEmployeesInput, DepartmentUncheckedCreateWithoutEmployeesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutEmployeesInput, DepartmentUncheckedUpdateWithoutEmployeesInput>
  }

  export type DepartmentUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutDepartmentsNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: AttendanceRecordWhereUniqueInput
    update: XOR<AttendanceRecordUpdateWithoutEmployeeInput, AttendanceRecordUncheckedUpdateWithoutEmployeeInput>
    create: XOR<AttendanceRecordCreateWithoutEmployeeInput, AttendanceRecordUncheckedCreateWithoutEmployeeInput>
  }

  export type AttendanceRecordUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: AttendanceRecordWhereUniqueInput
    data: XOR<AttendanceRecordUpdateWithoutEmployeeInput, AttendanceRecordUncheckedUpdateWithoutEmployeeInput>
  }

  export type AttendanceRecordUpdateManyWithWhereWithoutEmployeeInput = {
    where: AttendanceRecordScalarWhereInput
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EmployeeScheduleUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeScheduleWhereUniqueInput
    update: XOR<EmployeeScheduleUpdateWithoutEmployeeInput, EmployeeScheduleUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmployeeScheduleCreateWithoutEmployeeInput, EmployeeScheduleUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeScheduleUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeScheduleWhereUniqueInput
    data: XOR<EmployeeScheduleUpdateWithoutEmployeeInput, EmployeeScheduleUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeScheduleUpdateManyWithWhereWithoutEmployeeInput = {
    where: EmployeeScheduleScalarWhereInput
    data: XOR<EmployeeScheduleUpdateManyMutationInput, EmployeeScheduleUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EmployeeScheduleScalarWhereInput = {
    AND?: EmployeeScheduleScalarWhereInput | EmployeeScheduleScalarWhereInput[]
    OR?: EmployeeScheduleScalarWhereInput[]
    NOT?: EmployeeScheduleScalarWhereInput | EmployeeScheduleScalarWhereInput[]
    id?: StringFilter<"EmployeeSchedule"> | string
    employeeId?: StringFilter<"EmployeeSchedule"> | string
    scheduleId?: StringFilter<"EmployeeSchedule"> | string
    startDate?: DateTimeFilter<"EmployeeSchedule"> | Date | string
    endDate?: DateTimeNullableFilter<"EmployeeSchedule"> | Date | string | null
    createdAt?: DateTimeFilter<"EmployeeSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeSchedule"> | Date | string
  }

  export type LeaveUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: LeaveWhereUniqueInput
    update: XOR<LeaveUpdateWithoutEmployeeInput, LeaveUncheckedUpdateWithoutEmployeeInput>
    create: XOR<LeaveCreateWithoutEmployeeInput, LeaveUncheckedCreateWithoutEmployeeInput>
  }

  export type LeaveUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: LeaveWhereUniqueInput
    data: XOR<LeaveUpdateWithoutEmployeeInput, LeaveUncheckedUpdateWithoutEmployeeInput>
  }

  export type LeaveUpdateManyWithWhereWithoutEmployeeInput = {
    where: LeaveScalarWhereInput
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type LeaveScalarWhereInput = {
    AND?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
    OR?: LeaveScalarWhereInput[]
    NOT?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
    id?: StringFilter<"Leave"> | string
    employeeId?: StringFilter<"Leave"> | string
    type?: EnumLeaveTypeFilter<"Leave"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"Leave"> | Date | string
    endDate?: DateTimeFilter<"Leave"> | Date | string
    status?: EnumLeaveStatusFilter<"Leave"> | $Enums.LeaveStatus
    reason?: StringNullableFilter<"Leave"> | string | null
    approvedBy?: StringNullableFilter<"Leave"> | string | null
    approvedAt?: DateTimeNullableFilter<"Leave"> | Date | string | null
    createdAt?: DateTimeFilter<"Leave"> | Date | string
    updatedAt?: DateTimeFilter<"Leave"> | Date | string
  }

  export type UserUpsertWithoutEmployeeInput = {
    update: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
    create: XOR<UserCreateWithoutEmployeeInput, UserUncheckedCreateWithoutEmployeeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeeInput, UserUncheckedUpdateWithoutEmployeeInput>
  }

  export type UserUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateWithoutDevicesInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutCompanyInput
    visitors?: VisitorCreateNestedManyWithoutHostCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    holidays?: HolidayCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutDevicesInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutCompanyInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutCompanyInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutHostCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsUncheckedCreateNestedOneWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutDevicesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutDevicesInput, CompanyUncheckedCreateWithoutDevicesInput>
  }

  export type AttendanceRecordCreateWithoutDeviceInput = {
    id?: string
    timestamp: Date | string
    type: $Enums.RecordType
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutAttendanceRecordsInput
    company: CompanyCreateNestedOneWithoutAttendanceRecordsInput
  }

  export type AttendanceRecordUncheckedCreateWithoutDeviceInput = {
    id?: string
    employeeId: string
    companyId: string
    timestamp: Date | string
    type: $Enums.RecordType
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRecordCreateOrConnectWithoutDeviceInput = {
    where: AttendanceRecordWhereUniqueInput
    create: XOR<AttendanceRecordCreateWithoutDeviceInput, AttendanceRecordUncheckedCreateWithoutDeviceInput>
  }

  export type AttendanceRecordCreateManyDeviceInputEnvelope = {
    data: AttendanceRecordCreateManyDeviceInput | AttendanceRecordCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutDevicesInput = {
    update: XOR<CompanyUpdateWithoutDevicesInput, CompanyUncheckedUpdateWithoutDevicesInput>
    create: XOR<CompanyCreateWithoutDevicesInput, CompanyUncheckedCreateWithoutDevicesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutDevicesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutDevicesInput, CompanyUncheckedUpdateWithoutDevicesInput>
  }

  export type CompanyUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUpdateManyWithoutHostCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    holidays?: HolidayUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUpdateOneWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutHostCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUncheckedUpdateOneWithoutCompanyNestedInput
  }

  export type AttendanceRecordUpsertWithWhereUniqueWithoutDeviceInput = {
    where: AttendanceRecordWhereUniqueInput
    update: XOR<AttendanceRecordUpdateWithoutDeviceInput, AttendanceRecordUncheckedUpdateWithoutDeviceInput>
    create: XOR<AttendanceRecordCreateWithoutDeviceInput, AttendanceRecordUncheckedCreateWithoutDeviceInput>
  }

  export type AttendanceRecordUpdateWithWhereUniqueWithoutDeviceInput = {
    where: AttendanceRecordWhereUniqueInput
    data: XOR<AttendanceRecordUpdateWithoutDeviceInput, AttendanceRecordUncheckedUpdateWithoutDeviceInput>
  }

  export type AttendanceRecordUpdateManyWithWhereWithoutDeviceInput = {
    where: AttendanceRecordScalarWhereInput
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyWithoutDeviceInput>
  }

  export type CompanyCreateWithoutSchedulesInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    devices?: DeviceCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutCompanyInput
    visitors?: VisitorCreateNestedManyWithoutHostCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    holidays?: HolidayCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutSchedulesInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutCompanyInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    devices?: DeviceUncheckedCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutCompanyInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutHostCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsUncheckedCreateNestedOneWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutSchedulesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutSchedulesInput, CompanyUncheckedCreateWithoutSchedulesInput>
  }

  export type EmployeeScheduleCreateWithoutScheduleInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutSchedulesInput
  }

  export type EmployeeScheduleUncheckedCreateWithoutScheduleInput = {
    id?: string
    employeeId: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeScheduleCreateOrConnectWithoutScheduleInput = {
    where: EmployeeScheduleWhereUniqueInput
    create: XOR<EmployeeScheduleCreateWithoutScheduleInput, EmployeeScheduleUncheckedCreateWithoutScheduleInput>
  }

  export type EmployeeScheduleCreateManyScheduleInputEnvelope = {
    data: EmployeeScheduleCreateManyScheduleInput | EmployeeScheduleCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutSchedulesInput = {
    update: XOR<CompanyUpdateWithoutSchedulesInput, CompanyUncheckedUpdateWithoutSchedulesInput>
    create: XOR<CompanyCreateWithoutSchedulesInput, CompanyUncheckedCreateWithoutSchedulesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutSchedulesInput, CompanyUncheckedUpdateWithoutSchedulesInput>
  }

  export type CompanyUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUpdateManyWithoutHostCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    holidays?: HolidayUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUpdateOneWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutHostCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUncheckedUpdateOneWithoutCompanyNestedInput
  }

  export type EmployeeScheduleUpsertWithWhereUniqueWithoutScheduleInput = {
    where: EmployeeScheduleWhereUniqueInput
    update: XOR<EmployeeScheduleUpdateWithoutScheduleInput, EmployeeScheduleUncheckedUpdateWithoutScheduleInput>
    create: XOR<EmployeeScheduleCreateWithoutScheduleInput, EmployeeScheduleUncheckedCreateWithoutScheduleInput>
  }

  export type EmployeeScheduleUpdateWithWhereUniqueWithoutScheduleInput = {
    where: EmployeeScheduleWhereUniqueInput
    data: XOR<EmployeeScheduleUpdateWithoutScheduleInput, EmployeeScheduleUncheckedUpdateWithoutScheduleInput>
  }

  export type EmployeeScheduleUpdateManyWithWhereWithoutScheduleInput = {
    where: EmployeeScheduleScalarWhereInput
    data: XOR<EmployeeScheduleUpdateManyMutationInput, EmployeeScheduleUncheckedUpdateManyWithoutScheduleInput>
  }

  export type EmployeeCreateWithoutSchedulesInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutEmployeesInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutEmployeeInput
    leaves?: LeaveCreateNestedManyWithoutEmployeeInput
    user?: UserCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutSchedulesInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    companyId: string
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutEmployeeInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutEmployeeInput
    user?: UserUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutSchedulesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutSchedulesInput, EmployeeUncheckedCreateWithoutSchedulesInput>
  }

  export type ScheduleCreateWithoutEmployeeSchedulesInput = {
    id?: string
    name: string
    description?: string | null
    startTime: string
    endTime: string
    workDays?: ScheduleCreateworkDaysInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateWithoutEmployeeSchedulesInput = {
    id?: string
    name: string
    description?: string | null
    startTime: string
    endTime: string
    workDays?: ScheduleCreateworkDaysInput | string[]
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutEmployeeSchedulesInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutEmployeeSchedulesInput, ScheduleUncheckedCreateWithoutEmployeeSchedulesInput>
  }

  export type EmployeeUpsertWithoutSchedulesInput = {
    update: XOR<EmployeeUpdateWithoutSchedulesInput, EmployeeUncheckedUpdateWithoutSchedulesInput>
    create: XOR<EmployeeCreateWithoutSchedulesInput, EmployeeUncheckedCreateWithoutSchedulesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutSchedulesInput, EmployeeUncheckedUpdateWithoutSchedulesInput>
  }

  export type EmployeeUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutEmployeeNestedInput
    leaves?: LeaveUpdateManyWithoutEmployeeNestedInput
    user?: UserUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutEmployeeNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutEmployeeNestedInput
    user?: UserUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type ScheduleUpsertWithoutEmployeeSchedulesInput = {
    update: XOR<ScheduleUpdateWithoutEmployeeSchedulesInput, ScheduleUncheckedUpdateWithoutEmployeeSchedulesInput>
    create: XOR<ScheduleCreateWithoutEmployeeSchedulesInput, ScheduleUncheckedCreateWithoutEmployeeSchedulesInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutEmployeeSchedulesInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutEmployeeSchedulesInput, ScheduleUncheckedUpdateWithoutEmployeeSchedulesInput>
  }

  export type ScheduleUpdateWithoutEmployeeSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    workDays?: ScheduleUpdateworkDaysInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutEmployeeSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    workDays?: ScheduleUpdateworkDaysInput | string[]
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateWithoutAttendanceRecordsInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutEmployeesInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    schedules?: EmployeeScheduleCreateNestedManyWithoutEmployeeInput
    leaves?: LeaveCreateNestedManyWithoutEmployeeInput
    user?: UserCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutAttendanceRecordsInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    companyId: string
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: EmployeeScheduleUncheckedCreateNestedManyWithoutEmployeeInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutEmployeeInput
    user?: UserUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutAttendanceRecordsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAttendanceRecordsInput, EmployeeUncheckedCreateWithoutAttendanceRecordsInput>
  }

  export type DeviceCreateWithoutAttendanceRecordsInput = {
    id?: string
    deviceId: string
    name: string
    location?: string | null
    ipAddress?: string | null
    lastConnection?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutAttendanceRecordsInput = {
    id?: string
    deviceId: string
    name: string
    location?: string | null
    ipAddress?: string | null
    lastConnection?: Date | string | null
    isActive?: boolean
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceCreateOrConnectWithoutAttendanceRecordsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutAttendanceRecordsInput, DeviceUncheckedCreateWithoutAttendanceRecordsInput>
  }

  export type CompanyCreateWithoutAttendanceRecordsInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    devices?: DeviceCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleCreateNestedManyWithoutCompanyInput
    visitors?: VisitorCreateNestedManyWithoutHostCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    holidays?: HolidayCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutAttendanceRecordsInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutCompanyInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    devices?: DeviceUncheckedCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutCompanyInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutHostCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsUncheckedCreateNestedOneWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutAttendanceRecordsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutAttendanceRecordsInput, CompanyUncheckedCreateWithoutAttendanceRecordsInput>
  }

  export type EmployeeUpsertWithoutAttendanceRecordsInput = {
    update: XOR<EmployeeUpdateWithoutAttendanceRecordsInput, EmployeeUncheckedUpdateWithoutAttendanceRecordsInput>
    create: XOR<EmployeeCreateWithoutAttendanceRecordsInput, EmployeeUncheckedCreateWithoutAttendanceRecordsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAttendanceRecordsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAttendanceRecordsInput, EmployeeUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type EmployeeUpdateWithoutAttendanceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    schedules?: EmployeeScheduleUpdateManyWithoutEmployeeNestedInput
    leaves?: LeaveUpdateManyWithoutEmployeeNestedInput
    user?: UserUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAttendanceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: EmployeeScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutEmployeeNestedInput
    user?: UserUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type DeviceUpsertWithoutAttendanceRecordsInput = {
    update: XOR<DeviceUpdateWithoutAttendanceRecordsInput, DeviceUncheckedUpdateWithoutAttendanceRecordsInput>
    create: XOR<DeviceCreateWithoutAttendanceRecordsInput, DeviceUncheckedCreateWithoutAttendanceRecordsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutAttendanceRecordsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutAttendanceRecordsInput, DeviceUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type DeviceUpdateWithoutAttendanceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutAttendanceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUpsertWithoutAttendanceRecordsInput = {
    update: XOR<CompanyUpdateWithoutAttendanceRecordsInput, CompanyUncheckedUpdateWithoutAttendanceRecordsInput>
    create: XOR<CompanyCreateWithoutAttendanceRecordsInput, CompanyUncheckedCreateWithoutAttendanceRecordsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutAttendanceRecordsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutAttendanceRecordsInput, CompanyUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type CompanyUpdateWithoutAttendanceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUpdateManyWithoutHostCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    holidays?: HolidayUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUpdateOneWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutAttendanceRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutHostCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUncheckedUpdateOneWithoutCompanyNestedInput
  }

  export type EmployeeCreateWithoutLeavesInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutEmployeesInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutEmployeeInput
    schedules?: EmployeeScheduleCreateNestedManyWithoutEmployeeInput
    user?: UserCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutLeavesInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    companyId: string
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutEmployeeInput
    schedules?: EmployeeScheduleUncheckedCreateNestedManyWithoutEmployeeInput
    user?: UserUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutLeavesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutLeavesInput, EmployeeUncheckedCreateWithoutLeavesInput>
  }

  export type EmployeeUpsertWithoutLeavesInput = {
    update: XOR<EmployeeUpdateWithoutLeavesInput, EmployeeUncheckedUpdateWithoutLeavesInput>
    create: XOR<EmployeeCreateWithoutLeavesInput, EmployeeUncheckedCreateWithoutLeavesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutLeavesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutLeavesInput, EmployeeUncheckedUpdateWithoutLeavesInput>
  }

  export type EmployeeUpdateWithoutLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutEmployeeNestedInput
    schedules?: EmployeeScheduleUpdateManyWithoutEmployeeNestedInput
    user?: UserUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutEmployeeNestedInput
    schedules?: EmployeeScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
    user?: UserUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type CompanyCreateWithoutHolidaysInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    devices?: DeviceCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutCompanyInput
    visitors?: VisitorCreateNestedManyWithoutHostCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutHolidaysInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutCompanyInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    devices?: DeviceUncheckedCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutCompanyInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutHostCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsUncheckedCreateNestedOneWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutHolidaysInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutHolidaysInput, CompanyUncheckedCreateWithoutHolidaysInput>
  }

  export type CompanyUpsertWithoutHolidaysInput = {
    update: XOR<CompanyUpdateWithoutHolidaysInput, CompanyUncheckedUpdateWithoutHolidaysInput>
    create: XOR<CompanyCreateWithoutHolidaysInput, CompanyUncheckedCreateWithoutHolidaysInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutHolidaysInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutHolidaysInput, CompanyUncheckedUpdateWithoutHolidaysInput>
  }

  export type CompanyUpdateWithoutHolidaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUpdateManyWithoutHostCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUpdateOneWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutHolidaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutHostCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUncheckedUpdateOneWithoutCompanyNestedInput
  }

  export type CompanyCreateWithoutVisitorsInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    devices?: DeviceCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutCompanyInput
    users?: UserCreateNestedManyWithoutCompanyInput
    holidays?: HolidayCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutVisitorsInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutCompanyInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    devices?: DeviceUncheckedCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutCompanyInput
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsUncheckedCreateNestedOneWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutVisitorsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutVisitorsInput, CompanyUncheckedCreateWithoutVisitorsInput>
  }

  export type VisitorRecordCreateWithoutVisitorInput = {
    id?: string
    checkIn: Date | string
    checkOut?: Date | string | null
    hostName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitorRecordUncheckedCreateWithoutVisitorInput = {
    id?: string
    checkIn: Date | string
    checkOut?: Date | string | null
    hostName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitorRecordCreateOrConnectWithoutVisitorInput = {
    where: VisitorRecordWhereUniqueInput
    create: XOR<VisitorRecordCreateWithoutVisitorInput, VisitorRecordUncheckedCreateWithoutVisitorInput>
  }

  export type VisitorRecordCreateManyVisitorInputEnvelope = {
    data: VisitorRecordCreateManyVisitorInput | VisitorRecordCreateManyVisitorInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutVisitorsInput = {
    update: XOR<CompanyUpdateWithoutVisitorsInput, CompanyUncheckedUpdateWithoutVisitorsInput>
    create: XOR<CompanyCreateWithoutVisitorsInput, CompanyUncheckedCreateWithoutVisitorsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutVisitorsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutVisitorsInput, CompanyUncheckedUpdateWithoutVisitorsInput>
  }

  export type CompanyUpdateWithoutVisitorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutCompanyNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    holidays?: HolidayUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUpdateOneWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutVisitorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutCompanyNestedInput
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUncheckedUpdateOneWithoutCompanyNestedInput
  }

  export type VisitorRecordUpsertWithWhereUniqueWithoutVisitorInput = {
    where: VisitorRecordWhereUniqueInput
    update: XOR<VisitorRecordUpdateWithoutVisitorInput, VisitorRecordUncheckedUpdateWithoutVisitorInput>
    create: XOR<VisitorRecordCreateWithoutVisitorInput, VisitorRecordUncheckedCreateWithoutVisitorInput>
  }

  export type VisitorRecordUpdateWithWhereUniqueWithoutVisitorInput = {
    where: VisitorRecordWhereUniqueInput
    data: XOR<VisitorRecordUpdateWithoutVisitorInput, VisitorRecordUncheckedUpdateWithoutVisitorInput>
  }

  export type VisitorRecordUpdateManyWithWhereWithoutVisitorInput = {
    where: VisitorRecordScalarWhereInput
    data: XOR<VisitorRecordUpdateManyMutationInput, VisitorRecordUncheckedUpdateManyWithoutVisitorInput>
  }

  export type VisitorRecordScalarWhereInput = {
    AND?: VisitorRecordScalarWhereInput | VisitorRecordScalarWhereInput[]
    OR?: VisitorRecordScalarWhereInput[]
    NOT?: VisitorRecordScalarWhereInput | VisitorRecordScalarWhereInput[]
    id?: StringFilter<"VisitorRecord"> | string
    visitorId?: StringFilter<"VisitorRecord"> | string
    checkIn?: DateTimeFilter<"VisitorRecord"> | Date | string
    checkOut?: DateTimeNullableFilter<"VisitorRecord"> | Date | string | null
    hostName?: StringNullableFilter<"VisitorRecord"> | string | null
    notes?: StringNullableFilter<"VisitorRecord"> | string | null
    createdAt?: DateTimeFilter<"VisitorRecord"> | Date | string
    updatedAt?: DateTimeFilter<"VisitorRecord"> | Date | string
  }

  export type VisitorCreateWithoutVisitsInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    company?: string | null
    purpose?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostCompany: CompanyCreateNestedOneWithoutVisitorsInput
  }

  export type VisitorUncheckedCreateWithoutVisitsInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    company?: string | null
    purpose?: string | null
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitorCreateOrConnectWithoutVisitsInput = {
    where: VisitorWhereUniqueInput
    create: XOR<VisitorCreateWithoutVisitsInput, VisitorUncheckedCreateWithoutVisitsInput>
  }

  export type VisitorUpsertWithoutVisitsInput = {
    update: XOR<VisitorUpdateWithoutVisitsInput, VisitorUncheckedUpdateWithoutVisitsInput>
    create: XOR<VisitorCreateWithoutVisitsInput, VisitorUncheckedCreateWithoutVisitsInput>
    where?: VisitorWhereInput
  }

  export type VisitorUpdateToOneWithWhereWithoutVisitsInput = {
    where?: VisitorWhereInput
    data: XOR<VisitorUpdateWithoutVisitsInput, VisitorUncheckedUpdateWithoutVisitsInput>
  }

  export type VisitorUpdateWithoutVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostCompany?: CompanyUpdateOneRequiredWithoutVisitorsNestedInput
  }

  export type VisitorUncheckedUpdateWithoutVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateWithoutUsersInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentCreateNestedManyWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    devices?: DeviceCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutCompanyInput
    visitors?: VisitorCreateNestedManyWithoutHostCompanyInput
    holidays?: HolidayCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    logo?: string | null
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutCompanyInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    devices?: DeviceUncheckedCreateNestedManyWithoutCompanyInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutCompanyInput
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutCompanyInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutHostCompanyInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutCompanyInput
    settings?: CompanySettingsUncheckedCreateNestedOneWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type EmployeeCreateWithoutUserInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutEmployeesInput
    department?: DepartmentCreateNestedOneWithoutEmployeesInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutEmployeeInput
    schedules?: EmployeeScheduleCreateNestedManyWithoutEmployeeInput
    leaves?: LeaveCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutUserInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    companyId: string
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutEmployeeInput
    schedules?: EmployeeScheduleUncheckedCreateNestedManyWithoutEmployeeInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutUserInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUpdateManyWithoutHostCompanyNestedInput
    holidays?: HolidayUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUpdateOneWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutCompanyNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutCompanyNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutCompanyNestedInput
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutCompanyNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutHostCompanyNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutCompanyNestedInput
    settings?: CompanySettingsUncheckedUpdateOneWithoutCompanyNestedInput
  }

  export type EmployeeUpsertWithoutUserInput = {
    update: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeCreateWithoutUserInput, EmployeeUncheckedCreateWithoutUserInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutUserInput, EmployeeUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutEmployeeNestedInput
    schedules?: EmployeeScheduleUpdateManyWithoutEmployeeNestedInput
    leaves?: LeaveUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutEmployeeNestedInput
    schedules?: EmployeeScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type DepartmentCreateManyCompanyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateManyCompanyInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    departmentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceCreateManyCompanyInput = {
    id?: string
    deviceId: string
    name: string
    location?: string | null
    ipAddress?: string | null
    lastConnection?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateManyCompanyInput = {
    id?: string
    name: string
    description?: string | null
    startTime: string
    endTime: string
    workDays?: ScheduleCreateworkDaysInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRecordCreateManyCompanyInput = {
    id?: string
    employeeId: string
    deviceId?: string | null
    timestamp: Date | string
    type: $Enums.RecordType
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitorCreateManyHostCompanyInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    company?: string | null
    purpose?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyCompanyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    employeeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HolidayCreateManyCompanyInput = {
    id?: string
    name: string
    date: Date | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutEmployeesNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutEmployeeNestedInput
    schedules?: EmployeeScheduleUpdateManyWithoutEmployeeNestedInput
    leaves?: LeaveUpdateManyWithoutEmployeeNestedInput
    user?: UserUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutEmployeeNestedInput
    schedules?: EmployeeScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutEmployeeNestedInput
    user?: UserUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceRecords?: AttendanceRecordUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastConnection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    workDays?: ScheduleUpdateworkDaysInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeSchedules?: EmployeeScheduleUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    workDays?: ScheduleUpdateworkDaysInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeSchedules?: EmployeeScheduleUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    workDays?: ScheduleUpdateworkDaysInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRecordTypeFieldUpdateOperationsInput | $Enums.RecordType
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutAttendanceRecordsNestedInput
    device?: DeviceUpdateOneWithoutAttendanceRecordsNestedInput
  }

  export type AttendanceRecordUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRecordTypeFieldUpdateOperationsInput | $Enums.RecordType
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRecordTypeFieldUpdateOperationsInput | $Enums.RecordType
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorUpdateWithoutHostCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: VisitorRecordUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateWithoutHostCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: VisitorRecordUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateManyWithoutHostCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyDepartmentInput = {
    id?: string
    employeeId: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    position?: string | null
    fingerprintId?: string | null
    isActive?: boolean
    hireDate: Date | string
    terminationDate?: Date | string | null
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutEmployeeNestedInput
    schedules?: EmployeeScheduleUpdateManyWithoutEmployeeNestedInput
    leaves?: LeaveUpdateManyWithoutEmployeeNestedInput
    user?: UserUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutEmployeeNestedInput
    schedules?: EmployeeScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutEmployeeNestedInput
    user?: UserUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprintId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    hireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordCreateManyEmployeeInput = {
    id?: string
    deviceId?: string | null
    companyId: string
    timestamp: Date | string
    type: $Enums.RecordType
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeScheduleCreateManyEmployeeInput = {
    id?: string
    scheduleId: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveCreateManyEmployeeInput = {
    id?: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.LeaveStatus
    reason?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRecordUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRecordTypeFieldUpdateOperationsInput | $Enums.RecordType
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneWithoutAttendanceRecordsNestedInput
    company?: CompanyUpdateOneRequiredWithoutAttendanceRecordsNestedInput
  }

  export type AttendanceRecordUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRecordTypeFieldUpdateOperationsInput | $Enums.RecordType
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRecordTypeFieldUpdateOperationsInput | $Enums.RecordType
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeScheduleUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUpdateOneRequiredWithoutEmployeeSchedulesNestedInput
  }

  export type EmployeeScheduleUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeScheduleUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordCreateManyDeviceInput = {
    id?: string
    employeeId: string
    companyId: string
    timestamp: Date | string
    type: $Enums.RecordType
    status?: $Enums.RecordStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRecordUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRecordTypeFieldUpdateOperationsInput | $Enums.RecordType
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutAttendanceRecordsNestedInput
    company?: CompanyUpdateOneRequiredWithoutAttendanceRecordsNestedInput
  }

  export type AttendanceRecordUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRecordTypeFieldUpdateOperationsInput | $Enums.RecordType
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRecordTypeFieldUpdateOperationsInput | $Enums.RecordType
    status?: EnumRecordStatusFieldUpdateOperationsInput | $Enums.RecordStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeScheduleCreateManyScheduleInput = {
    id?: string
    employeeId: string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeScheduleUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type EmployeeScheduleUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeScheduleUncheckedUpdateManyWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorRecordCreateManyVisitorInput = {
    id?: string
    checkIn: Date | string
    checkOut?: Date | string | null
    hostName?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitorRecordUpdateWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hostName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorRecordUncheckedUpdateWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hostName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorRecordUncheckedUpdateManyWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hostName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}