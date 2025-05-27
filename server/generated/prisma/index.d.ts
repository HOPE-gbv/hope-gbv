
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
 * Model Lawyer
 * 
 */
export type Lawyer = $Result.DefaultSelection<Prisma.$LawyerPayload>
/**
 * Model LawyerTestimonial
 * 
 */
export type LawyerTestimonial = $Result.DefaultSelection<Prisma.$LawyerTestimonialPayload>
/**
 * Model LawyerExpertise
 * 
 */
export type LawyerExpertise = $Result.DefaultSelection<Prisma.$LawyerExpertisePayload>
/**
 * Model LawyerDocument
 * 
 */
export type LawyerDocument = $Result.DefaultSelection<Prisma.$LawyerDocumentPayload>
/**
 * Model LawyerAvailability
 * 
 */
export type LawyerAvailability = $Result.DefaultSelection<Prisma.$LawyerAvailabilityPayload>
/**
 * Model Case
 * 
 */
export type Case = $Result.DefaultSelection<Prisma.$CasePayload>
/**
 * Model CaseNote
 * 
 */
export type CaseNote = $Result.DefaultSelection<Prisma.$CaseNotePayload>
/**
 * Model CaseAction
 * 
 */
export type CaseAction = $Result.DefaultSelection<Prisma.$CaseActionPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model EmergencyContact
 * 
 */
export type EmergencyContact = $Result.DefaultSelection<Prisma.$EmergencyContactPayload>
/**
 * Model Resource
 * 
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Lawyers
 * const lawyers = await prisma.lawyer.findMany()
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
   * // Fetch zero or more Lawyers
   * const lawyers = await prisma.lawyer.findMany()
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
   * `prisma.lawyer`: Exposes CRUD operations for the **Lawyer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lawyers
    * const lawyers = await prisma.lawyer.findMany()
    * ```
    */
  get lawyer(): Prisma.LawyerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lawyerTestimonial`: Exposes CRUD operations for the **LawyerTestimonial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LawyerTestimonials
    * const lawyerTestimonials = await prisma.lawyerTestimonial.findMany()
    * ```
    */
  get lawyerTestimonial(): Prisma.LawyerTestimonialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lawyerExpertise`: Exposes CRUD operations for the **LawyerExpertise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LawyerExpertises
    * const lawyerExpertises = await prisma.lawyerExpertise.findMany()
    * ```
    */
  get lawyerExpertise(): Prisma.LawyerExpertiseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lawyerDocument`: Exposes CRUD operations for the **LawyerDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LawyerDocuments
    * const lawyerDocuments = await prisma.lawyerDocument.findMany()
    * ```
    */
  get lawyerDocument(): Prisma.LawyerDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lawyerAvailability`: Exposes CRUD operations for the **LawyerAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LawyerAvailabilities
    * const lawyerAvailabilities = await prisma.lawyerAvailability.findMany()
    * ```
    */
  get lawyerAvailability(): Prisma.LawyerAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.case`: Exposes CRUD operations for the **Case** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cases
    * const cases = await prisma.case.findMany()
    * ```
    */
  get case(): Prisma.CaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caseNote`: Exposes CRUD operations for the **CaseNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaseNotes
    * const caseNotes = await prisma.caseNote.findMany()
    * ```
    */
  get caseNote(): Prisma.CaseNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caseAction`: Exposes CRUD operations for the **CaseAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaseActions
    * const caseActions = await prisma.caseAction.findMany()
    * ```
    */
  get caseAction(): Prisma.CaseActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emergencyContact`: Exposes CRUD operations for the **EmergencyContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmergencyContacts
    * const emergencyContacts = await prisma.emergencyContact.findMany()
    * ```
    */
  get emergencyContact(): Prisma.EmergencyContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.ResourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Lawyer: 'Lawyer',
    LawyerTestimonial: 'LawyerTestimonial',
    LawyerExpertise: 'LawyerExpertise',
    LawyerDocument: 'LawyerDocument',
    LawyerAvailability: 'LawyerAvailability',
    Case: 'Case',
    CaseNote: 'CaseNote',
    CaseAction: 'CaseAction',
    Report: 'Report',
    EmergencyContact: 'EmergencyContact',
    Resource: 'Resource',
    AdminUser: 'AdminUser'
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
      modelProps: "lawyer" | "lawyerTestimonial" | "lawyerExpertise" | "lawyerDocument" | "lawyerAvailability" | "case" | "caseNote" | "caseAction" | "report" | "emergencyContact" | "resource" | "adminUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Lawyer: {
        payload: Prisma.$LawyerPayload<ExtArgs>
        fields: Prisma.LawyerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LawyerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LawyerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          findFirst: {
            args: Prisma.LawyerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LawyerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          findMany: {
            args: Prisma.LawyerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>[]
          }
          create: {
            args: Prisma.LawyerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          createMany: {
            args: Prisma.LawyerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LawyerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>[]
          }
          delete: {
            args: Prisma.LawyerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          update: {
            args: Prisma.LawyerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          deleteMany: {
            args: Prisma.LawyerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LawyerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LawyerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>[]
          }
          upsert: {
            args: Prisma.LawyerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          aggregate: {
            args: Prisma.LawyerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLawyer>
          }
          groupBy: {
            args: Prisma.LawyerGroupByArgs<ExtArgs>
            result: $Utils.Optional<LawyerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LawyerCountArgs<ExtArgs>
            result: $Utils.Optional<LawyerCountAggregateOutputType> | number
          }
        }
      }
      LawyerTestimonial: {
        payload: Prisma.$LawyerTestimonialPayload<ExtArgs>
        fields: Prisma.LawyerTestimonialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LawyerTestimonialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerTestimonialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LawyerTestimonialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerTestimonialPayload>
          }
          findFirst: {
            args: Prisma.LawyerTestimonialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerTestimonialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LawyerTestimonialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerTestimonialPayload>
          }
          findMany: {
            args: Prisma.LawyerTestimonialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerTestimonialPayload>[]
          }
          create: {
            args: Prisma.LawyerTestimonialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerTestimonialPayload>
          }
          createMany: {
            args: Prisma.LawyerTestimonialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LawyerTestimonialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerTestimonialPayload>[]
          }
          delete: {
            args: Prisma.LawyerTestimonialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerTestimonialPayload>
          }
          update: {
            args: Prisma.LawyerTestimonialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerTestimonialPayload>
          }
          deleteMany: {
            args: Prisma.LawyerTestimonialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LawyerTestimonialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LawyerTestimonialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerTestimonialPayload>[]
          }
          upsert: {
            args: Prisma.LawyerTestimonialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerTestimonialPayload>
          }
          aggregate: {
            args: Prisma.LawyerTestimonialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLawyerTestimonial>
          }
          groupBy: {
            args: Prisma.LawyerTestimonialGroupByArgs<ExtArgs>
            result: $Utils.Optional<LawyerTestimonialGroupByOutputType>[]
          }
          count: {
            args: Prisma.LawyerTestimonialCountArgs<ExtArgs>
            result: $Utils.Optional<LawyerTestimonialCountAggregateOutputType> | number
          }
        }
      }
      LawyerExpertise: {
        payload: Prisma.$LawyerExpertisePayload<ExtArgs>
        fields: Prisma.LawyerExpertiseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LawyerExpertiseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerExpertisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LawyerExpertiseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerExpertisePayload>
          }
          findFirst: {
            args: Prisma.LawyerExpertiseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerExpertisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LawyerExpertiseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerExpertisePayload>
          }
          findMany: {
            args: Prisma.LawyerExpertiseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerExpertisePayload>[]
          }
          create: {
            args: Prisma.LawyerExpertiseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerExpertisePayload>
          }
          createMany: {
            args: Prisma.LawyerExpertiseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LawyerExpertiseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerExpertisePayload>[]
          }
          delete: {
            args: Prisma.LawyerExpertiseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerExpertisePayload>
          }
          update: {
            args: Prisma.LawyerExpertiseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerExpertisePayload>
          }
          deleteMany: {
            args: Prisma.LawyerExpertiseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LawyerExpertiseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LawyerExpertiseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerExpertisePayload>[]
          }
          upsert: {
            args: Prisma.LawyerExpertiseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerExpertisePayload>
          }
          aggregate: {
            args: Prisma.LawyerExpertiseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLawyerExpertise>
          }
          groupBy: {
            args: Prisma.LawyerExpertiseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LawyerExpertiseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LawyerExpertiseCountArgs<ExtArgs>
            result: $Utils.Optional<LawyerExpertiseCountAggregateOutputType> | number
          }
        }
      }
      LawyerDocument: {
        payload: Prisma.$LawyerDocumentPayload<ExtArgs>
        fields: Prisma.LawyerDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LawyerDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LawyerDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDocumentPayload>
          }
          findFirst: {
            args: Prisma.LawyerDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LawyerDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDocumentPayload>
          }
          findMany: {
            args: Prisma.LawyerDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDocumentPayload>[]
          }
          create: {
            args: Prisma.LawyerDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDocumentPayload>
          }
          createMany: {
            args: Prisma.LawyerDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LawyerDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDocumentPayload>[]
          }
          delete: {
            args: Prisma.LawyerDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDocumentPayload>
          }
          update: {
            args: Prisma.LawyerDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDocumentPayload>
          }
          deleteMany: {
            args: Prisma.LawyerDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LawyerDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LawyerDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDocumentPayload>[]
          }
          upsert: {
            args: Prisma.LawyerDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerDocumentPayload>
          }
          aggregate: {
            args: Prisma.LawyerDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLawyerDocument>
          }
          groupBy: {
            args: Prisma.LawyerDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<LawyerDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.LawyerDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<LawyerDocumentCountAggregateOutputType> | number
          }
        }
      }
      LawyerAvailability: {
        payload: Prisma.$LawyerAvailabilityPayload<ExtArgs>
        fields: Prisma.LawyerAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LawyerAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LawyerAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.LawyerAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LawyerAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerAvailabilityPayload>
          }
          findMany: {
            args: Prisma.LawyerAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerAvailabilityPayload>[]
          }
          create: {
            args: Prisma.LawyerAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerAvailabilityPayload>
          }
          createMany: {
            args: Prisma.LawyerAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LawyerAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.LawyerAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerAvailabilityPayload>
          }
          update: {
            args: Prisma.LawyerAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.LawyerAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LawyerAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LawyerAvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerAvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.LawyerAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.LawyerAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLawyerAvailability>
          }
          groupBy: {
            args: Prisma.LawyerAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<LawyerAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.LawyerAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<LawyerAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Case: {
        payload: Prisma.$CasePayload<ExtArgs>
        fields: Prisma.CaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          findFirst: {
            args: Prisma.CaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          findMany: {
            args: Prisma.CaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>[]
          }
          create: {
            args: Prisma.CaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          createMany: {
            args: Prisma.CaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>[]
          }
          delete: {
            args: Prisma.CaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          update: {
            args: Prisma.CaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          deleteMany: {
            args: Prisma.CaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>[]
          }
          upsert: {
            args: Prisma.CaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          aggregate: {
            args: Prisma.CaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCase>
          }
          groupBy: {
            args: Prisma.CaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaseCountArgs<ExtArgs>
            result: $Utils.Optional<CaseCountAggregateOutputType> | number
          }
        }
      }
      CaseNote: {
        payload: Prisma.$CaseNotePayload<ExtArgs>
        fields: Prisma.CaseNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaseNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaseNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseNotePayload>
          }
          findFirst: {
            args: Prisma.CaseNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaseNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseNotePayload>
          }
          findMany: {
            args: Prisma.CaseNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseNotePayload>[]
          }
          create: {
            args: Prisma.CaseNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseNotePayload>
          }
          createMany: {
            args: Prisma.CaseNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaseNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseNotePayload>[]
          }
          delete: {
            args: Prisma.CaseNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseNotePayload>
          }
          update: {
            args: Prisma.CaseNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseNotePayload>
          }
          deleteMany: {
            args: Prisma.CaseNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaseNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaseNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseNotePayload>[]
          }
          upsert: {
            args: Prisma.CaseNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseNotePayload>
          }
          aggregate: {
            args: Prisma.CaseNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaseNote>
          }
          groupBy: {
            args: Prisma.CaseNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaseNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaseNoteCountArgs<ExtArgs>
            result: $Utils.Optional<CaseNoteCountAggregateOutputType> | number
          }
        }
      }
      CaseAction: {
        payload: Prisma.$CaseActionPayload<ExtArgs>
        fields: Prisma.CaseActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaseActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaseActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseActionPayload>
          }
          findFirst: {
            args: Prisma.CaseActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaseActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseActionPayload>
          }
          findMany: {
            args: Prisma.CaseActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseActionPayload>[]
          }
          create: {
            args: Prisma.CaseActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseActionPayload>
          }
          createMany: {
            args: Prisma.CaseActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaseActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseActionPayload>[]
          }
          delete: {
            args: Prisma.CaseActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseActionPayload>
          }
          update: {
            args: Prisma.CaseActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseActionPayload>
          }
          deleteMany: {
            args: Prisma.CaseActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaseActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaseActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseActionPayload>[]
          }
          upsert: {
            args: Prisma.CaseActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseActionPayload>
          }
          aggregate: {
            args: Prisma.CaseActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaseAction>
          }
          groupBy: {
            args: Prisma.CaseActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaseActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaseActionCountArgs<ExtArgs>
            result: $Utils.Optional<CaseActionCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      EmergencyContact: {
        payload: Prisma.$EmergencyContactPayload<ExtArgs>
        fields: Prisma.EmergencyContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmergencyContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmergencyContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          findFirst: {
            args: Prisma.EmergencyContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmergencyContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          findMany: {
            args: Prisma.EmergencyContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>[]
          }
          create: {
            args: Prisma.EmergencyContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          createMany: {
            args: Prisma.EmergencyContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmergencyContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>[]
          }
          delete: {
            args: Prisma.EmergencyContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          update: {
            args: Prisma.EmergencyContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          deleteMany: {
            args: Prisma.EmergencyContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmergencyContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmergencyContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>[]
          }
          upsert: {
            args: Prisma.EmergencyContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          aggregate: {
            args: Prisma.EmergencyContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmergencyContact>
          }
          groupBy: {
            args: Prisma.EmergencyContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmergencyContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmergencyContactCountArgs<ExtArgs>
            result: $Utils.Optional<EmergencyContactCountAggregateOutputType> | number
          }
        }
      }
      Resource: {
        payload: Prisma.$ResourcePayload<ExtArgs>
        fields: Prisma.ResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findFirst: {
            args: Prisma.ResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findMany: {
            args: Prisma.ResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          create: {
            args: Prisma.ResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          createMany: {
            args: Prisma.ResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          delete: {
            args: Prisma.ResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          update: {
            args: Prisma.ResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          deleteMany: {
            args: Prisma.ResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          upsert: {
            args: Prisma.ResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.ResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
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
    lawyer?: LawyerOmit
    lawyerTestimonial?: LawyerTestimonialOmit
    lawyerExpertise?: LawyerExpertiseOmit
    lawyerDocument?: LawyerDocumentOmit
    lawyerAvailability?: LawyerAvailabilityOmit
    case?: CaseOmit
    caseNote?: CaseNoteOmit
    caseAction?: CaseActionOmit
    report?: ReportOmit
    emergencyContact?: EmergencyContactOmit
    resource?: ResourceOmit
    adminUser?: AdminUserOmit
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
   * Count Type LawyerCountOutputType
   */

  export type LawyerCountOutputType = {
    testimonials: number
    expertise: number
    documents: number
    availabilityCal: number
  }

  export type LawyerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testimonials?: boolean | LawyerCountOutputTypeCountTestimonialsArgs
    expertise?: boolean | LawyerCountOutputTypeCountExpertiseArgs
    documents?: boolean | LawyerCountOutputTypeCountDocumentsArgs
    availabilityCal?: boolean | LawyerCountOutputTypeCountAvailabilityCalArgs
  }

  // Custom InputTypes
  /**
   * LawyerCountOutputType without action
   */
  export type LawyerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerCountOutputType
     */
    select?: LawyerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LawyerCountOutputType without action
   */
  export type LawyerCountOutputTypeCountTestimonialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawyerTestimonialWhereInput
  }

  /**
   * LawyerCountOutputType without action
   */
  export type LawyerCountOutputTypeCountExpertiseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawyerExpertiseWhereInput
  }

  /**
   * LawyerCountOutputType without action
   */
  export type LawyerCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawyerDocumentWhereInput
  }

  /**
   * LawyerCountOutputType without action
   */
  export type LawyerCountOutputTypeCountAvailabilityCalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawyerAvailabilityWhereInput
  }


  /**
   * Count Type CaseCountOutputType
   */

  export type CaseCountOutputType = {
    notes: number
    actions: number
  }

  export type CaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | CaseCountOutputTypeCountNotesArgs
    actions?: boolean | CaseCountOutputTypeCountActionsArgs
  }

  // Custom InputTypes
  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseCountOutputType
     */
    select?: CaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseNoteWhereInput
  }

  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseActionWhereInput
  }


  /**
   * Count Type AdminUserCountOutputType
   */

  export type AdminUserCountOutputType = {
    cases: number
    reports: number
  }

  export type AdminUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | AdminUserCountOutputTypeCountCasesArgs
    reports?: boolean | AdminUserCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUserCountOutputType
     */
    select?: AdminUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeCountCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
  }

  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Lawyer
   */

  export type AggregateLawyer = {
    _count: LawyerCountAggregateOutputType | null
    _avg: LawyerAvgAggregateOutputType | null
    _sum: LawyerSumAggregateOutputType | null
    _min: LawyerMinAggregateOutputType | null
    _max: LawyerMaxAggregateOutputType | null
  }

  export type LawyerAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    reviews: number | null
    experience: number | null
    caseCount: number | null
  }

  export type LawyerSumAggregateOutputType = {
    id: number | null
    rating: number | null
    reviews: number | null
    experience: number | null
    caseCount: number | null
  }

  export type LawyerMinAggregateOutputType = {
    id: number | null
    name: string | null
    photo: string | null
    location: string | null
    rating: number | null
    reviews: number | null
    verified: boolean | null
    active: boolean | null
    barNumber: string | null
    experience: number | null
    availability: string | null
    successRate: string | null
    bio: string | null
    caseCount: number | null
    education: string | null
    contactHours: string | null
  }

  export type LawyerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    photo: string | null
    location: string | null
    rating: number | null
    reviews: number | null
    verified: boolean | null
    active: boolean | null
    barNumber: string | null
    experience: number | null
    availability: string | null
    successRate: string | null
    bio: string | null
    caseCount: number | null
    education: string | null
    contactHours: string | null
  }

  export type LawyerCountAggregateOutputType = {
    id: number
    name: number
    photo: number
    location: number
    specializations: number
    rating: number
    reviews: number
    verified: number
    active: number
    barNumber: number
    experience: number
    languages: number
    availability: number
    successRate: number
    bio: number
    caseCount: number
    education: number
    contactHours: number
    _all: number
  }


  export type LawyerAvgAggregateInputType = {
    id?: true
    rating?: true
    reviews?: true
    experience?: true
    caseCount?: true
  }

  export type LawyerSumAggregateInputType = {
    id?: true
    rating?: true
    reviews?: true
    experience?: true
    caseCount?: true
  }

  export type LawyerMinAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    location?: true
    rating?: true
    reviews?: true
    verified?: true
    active?: true
    barNumber?: true
    experience?: true
    availability?: true
    successRate?: true
    bio?: true
    caseCount?: true
    education?: true
    contactHours?: true
  }

  export type LawyerMaxAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    location?: true
    rating?: true
    reviews?: true
    verified?: true
    active?: true
    barNumber?: true
    experience?: true
    availability?: true
    successRate?: true
    bio?: true
    caseCount?: true
    education?: true
    contactHours?: true
  }

  export type LawyerCountAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    location?: true
    specializations?: true
    rating?: true
    reviews?: true
    verified?: true
    active?: true
    barNumber?: true
    experience?: true
    languages?: true
    availability?: true
    successRate?: true
    bio?: true
    caseCount?: true
    education?: true
    contactHours?: true
    _all?: true
  }

  export type LawyerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lawyer to aggregate.
     */
    where?: LawyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawyers to fetch.
     */
    orderBy?: LawyerOrderByWithRelationInput | LawyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LawyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lawyers
    **/
    _count?: true | LawyerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LawyerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LawyerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LawyerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LawyerMaxAggregateInputType
  }

  export type GetLawyerAggregateType<T extends LawyerAggregateArgs> = {
        [P in keyof T & keyof AggregateLawyer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawyer[P]>
      : GetScalarType<T[P], AggregateLawyer[P]>
  }




  export type LawyerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawyerWhereInput
    orderBy?: LawyerOrderByWithAggregationInput | LawyerOrderByWithAggregationInput[]
    by: LawyerScalarFieldEnum[] | LawyerScalarFieldEnum
    having?: LawyerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LawyerCountAggregateInputType | true
    _avg?: LawyerAvgAggregateInputType
    _sum?: LawyerSumAggregateInputType
    _min?: LawyerMinAggregateInputType
    _max?: LawyerMaxAggregateInputType
  }

  export type LawyerGroupByOutputType = {
    id: number
    name: string
    photo: string | null
    location: string
    specializations: JsonValue
    rating: number | null
    reviews: number
    verified: boolean
    active: boolean
    barNumber: string
    experience: number
    languages: JsonValue
    availability: string | null
    successRate: string | null
    bio: string | null
    caseCount: number
    education: string | null
    contactHours: string | null
    _count: LawyerCountAggregateOutputType | null
    _avg: LawyerAvgAggregateOutputType | null
    _sum: LawyerSumAggregateOutputType | null
    _min: LawyerMinAggregateOutputType | null
    _max: LawyerMaxAggregateOutputType | null
  }

  type GetLawyerGroupByPayload<T extends LawyerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LawyerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LawyerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LawyerGroupByOutputType[P]>
            : GetScalarType<T[P], LawyerGroupByOutputType[P]>
        }
      >
    >


  export type LawyerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    location?: boolean
    specializations?: boolean
    rating?: boolean
    reviews?: boolean
    verified?: boolean
    active?: boolean
    barNumber?: boolean
    experience?: boolean
    languages?: boolean
    availability?: boolean
    successRate?: boolean
    bio?: boolean
    caseCount?: boolean
    education?: boolean
    contactHours?: boolean
    testimonials?: boolean | Lawyer$testimonialsArgs<ExtArgs>
    expertise?: boolean | Lawyer$expertiseArgs<ExtArgs>
    documents?: boolean | Lawyer$documentsArgs<ExtArgs>
    availabilityCal?: boolean | Lawyer$availabilityCalArgs<ExtArgs>
    _count?: boolean | LawyerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyer"]>

  export type LawyerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    location?: boolean
    specializations?: boolean
    rating?: boolean
    reviews?: boolean
    verified?: boolean
    active?: boolean
    barNumber?: boolean
    experience?: boolean
    languages?: boolean
    availability?: boolean
    successRate?: boolean
    bio?: boolean
    caseCount?: boolean
    education?: boolean
    contactHours?: boolean
  }, ExtArgs["result"]["lawyer"]>

  export type LawyerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    location?: boolean
    specializations?: boolean
    rating?: boolean
    reviews?: boolean
    verified?: boolean
    active?: boolean
    barNumber?: boolean
    experience?: boolean
    languages?: boolean
    availability?: boolean
    successRate?: boolean
    bio?: boolean
    caseCount?: boolean
    education?: boolean
    contactHours?: boolean
  }, ExtArgs["result"]["lawyer"]>

  export type LawyerSelectScalar = {
    id?: boolean
    name?: boolean
    photo?: boolean
    location?: boolean
    specializations?: boolean
    rating?: boolean
    reviews?: boolean
    verified?: boolean
    active?: boolean
    barNumber?: boolean
    experience?: boolean
    languages?: boolean
    availability?: boolean
    successRate?: boolean
    bio?: boolean
    caseCount?: boolean
    education?: boolean
    contactHours?: boolean
  }

  export type LawyerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "photo" | "location" | "specializations" | "rating" | "reviews" | "verified" | "active" | "barNumber" | "experience" | "languages" | "availability" | "successRate" | "bio" | "caseCount" | "education" | "contactHours", ExtArgs["result"]["lawyer"]>
  export type LawyerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testimonials?: boolean | Lawyer$testimonialsArgs<ExtArgs>
    expertise?: boolean | Lawyer$expertiseArgs<ExtArgs>
    documents?: boolean | Lawyer$documentsArgs<ExtArgs>
    availabilityCal?: boolean | Lawyer$availabilityCalArgs<ExtArgs>
    _count?: boolean | LawyerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LawyerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LawyerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LawyerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lawyer"
    objects: {
      testimonials: Prisma.$LawyerTestimonialPayload<ExtArgs>[]
      expertise: Prisma.$LawyerExpertisePayload<ExtArgs>[]
      documents: Prisma.$LawyerDocumentPayload<ExtArgs>[]
      availabilityCal: Prisma.$LawyerAvailabilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      photo: string | null
      location: string
      specializations: Prisma.JsonValue
      rating: number | null
      reviews: number
      verified: boolean
      active: boolean
      barNumber: string
      experience: number
      languages: Prisma.JsonValue
      availability: string | null
      successRate: string | null
      bio: string | null
      caseCount: number
      education: string | null
      contactHours: string | null
    }, ExtArgs["result"]["lawyer"]>
    composites: {}
  }

  type LawyerGetPayload<S extends boolean | null | undefined | LawyerDefaultArgs> = $Result.GetResult<Prisma.$LawyerPayload, S>

  type LawyerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LawyerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LawyerCountAggregateInputType | true
    }

  export interface LawyerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lawyer'], meta: { name: 'Lawyer' } }
    /**
     * Find zero or one Lawyer that matches the filter.
     * @param {LawyerFindUniqueArgs} args - Arguments to find a Lawyer
     * @example
     * // Get one Lawyer
     * const lawyer = await prisma.lawyer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LawyerFindUniqueArgs>(args: SelectSubset<T, LawyerFindUniqueArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lawyer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LawyerFindUniqueOrThrowArgs} args - Arguments to find a Lawyer
     * @example
     * // Get one Lawyer
     * const lawyer = await prisma.lawyer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LawyerFindUniqueOrThrowArgs>(args: SelectSubset<T, LawyerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lawyer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerFindFirstArgs} args - Arguments to find a Lawyer
     * @example
     * // Get one Lawyer
     * const lawyer = await prisma.lawyer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LawyerFindFirstArgs>(args?: SelectSubset<T, LawyerFindFirstArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lawyer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerFindFirstOrThrowArgs} args - Arguments to find a Lawyer
     * @example
     * // Get one Lawyer
     * const lawyer = await prisma.lawyer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LawyerFindFirstOrThrowArgs>(args?: SelectSubset<T, LawyerFindFirstOrThrowArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lawyers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lawyers
     * const lawyers = await prisma.lawyer.findMany()
     * 
     * // Get first 10 Lawyers
     * const lawyers = await prisma.lawyer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawyerWithIdOnly = await prisma.lawyer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LawyerFindManyArgs>(args?: SelectSubset<T, LawyerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lawyer.
     * @param {LawyerCreateArgs} args - Arguments to create a Lawyer.
     * @example
     * // Create one Lawyer
     * const Lawyer = await prisma.lawyer.create({
     *   data: {
     *     // ... data to create a Lawyer
     *   }
     * })
     * 
     */
    create<T extends LawyerCreateArgs>(args: SelectSubset<T, LawyerCreateArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lawyers.
     * @param {LawyerCreateManyArgs} args - Arguments to create many Lawyers.
     * @example
     * // Create many Lawyers
     * const lawyer = await prisma.lawyer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LawyerCreateManyArgs>(args?: SelectSubset<T, LawyerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lawyers and returns the data saved in the database.
     * @param {LawyerCreateManyAndReturnArgs} args - Arguments to create many Lawyers.
     * @example
     * // Create many Lawyers
     * const lawyer = await prisma.lawyer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lawyers and only return the `id`
     * const lawyerWithIdOnly = await prisma.lawyer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LawyerCreateManyAndReturnArgs>(args?: SelectSubset<T, LawyerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lawyer.
     * @param {LawyerDeleteArgs} args - Arguments to delete one Lawyer.
     * @example
     * // Delete one Lawyer
     * const Lawyer = await prisma.lawyer.delete({
     *   where: {
     *     // ... filter to delete one Lawyer
     *   }
     * })
     * 
     */
    delete<T extends LawyerDeleteArgs>(args: SelectSubset<T, LawyerDeleteArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lawyer.
     * @param {LawyerUpdateArgs} args - Arguments to update one Lawyer.
     * @example
     * // Update one Lawyer
     * const lawyer = await prisma.lawyer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LawyerUpdateArgs>(args: SelectSubset<T, LawyerUpdateArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lawyers.
     * @param {LawyerDeleteManyArgs} args - Arguments to filter Lawyers to delete.
     * @example
     * // Delete a few Lawyers
     * const { count } = await prisma.lawyer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LawyerDeleteManyArgs>(args?: SelectSubset<T, LawyerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lawyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lawyers
     * const lawyer = await prisma.lawyer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LawyerUpdateManyArgs>(args: SelectSubset<T, LawyerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lawyers and returns the data updated in the database.
     * @param {LawyerUpdateManyAndReturnArgs} args - Arguments to update many Lawyers.
     * @example
     * // Update many Lawyers
     * const lawyer = await prisma.lawyer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lawyers and only return the `id`
     * const lawyerWithIdOnly = await prisma.lawyer.updateManyAndReturn({
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
    updateManyAndReturn<T extends LawyerUpdateManyAndReturnArgs>(args: SelectSubset<T, LawyerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lawyer.
     * @param {LawyerUpsertArgs} args - Arguments to update or create a Lawyer.
     * @example
     * // Update or create a Lawyer
     * const lawyer = await prisma.lawyer.upsert({
     *   create: {
     *     // ... data to create a Lawyer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lawyer we want to update
     *   }
     * })
     */
    upsert<T extends LawyerUpsertArgs>(args: SelectSubset<T, LawyerUpsertArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lawyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerCountArgs} args - Arguments to filter Lawyers to count.
     * @example
     * // Count the number of Lawyers
     * const count = await prisma.lawyer.count({
     *   where: {
     *     // ... the filter for the Lawyers we want to count
     *   }
     * })
    **/
    count<T extends LawyerCountArgs>(
      args?: Subset<T, LawyerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LawyerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lawyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LawyerAggregateArgs>(args: Subset<T, LawyerAggregateArgs>): Prisma.PrismaPromise<GetLawyerAggregateType<T>>

    /**
     * Group by Lawyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerGroupByArgs} args - Group by arguments.
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
      T extends LawyerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LawyerGroupByArgs['orderBy'] }
        : { orderBy?: LawyerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LawyerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawyerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lawyer model
   */
  readonly fields: LawyerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lawyer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LawyerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testimonials<T extends Lawyer$testimonialsArgs<ExtArgs> = {}>(args?: Subset<T, Lawyer$testimonialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerTestimonialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expertise<T extends Lawyer$expertiseArgs<ExtArgs> = {}>(args?: Subset<T, Lawyer$expertiseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerExpertisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Lawyer$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Lawyer$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availabilityCal<T extends Lawyer$availabilityCalArgs<ExtArgs> = {}>(args?: Subset<T, Lawyer$availabilityCalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lawyer model
   */
  interface LawyerFieldRefs {
    readonly id: FieldRef<"Lawyer", 'Int'>
    readonly name: FieldRef<"Lawyer", 'String'>
    readonly photo: FieldRef<"Lawyer", 'String'>
    readonly location: FieldRef<"Lawyer", 'String'>
    readonly specializations: FieldRef<"Lawyer", 'Json'>
    readonly rating: FieldRef<"Lawyer", 'Float'>
    readonly reviews: FieldRef<"Lawyer", 'Int'>
    readonly verified: FieldRef<"Lawyer", 'Boolean'>
    readonly active: FieldRef<"Lawyer", 'Boolean'>
    readonly barNumber: FieldRef<"Lawyer", 'String'>
    readonly experience: FieldRef<"Lawyer", 'Int'>
    readonly languages: FieldRef<"Lawyer", 'Json'>
    readonly availability: FieldRef<"Lawyer", 'String'>
    readonly successRate: FieldRef<"Lawyer", 'String'>
    readonly bio: FieldRef<"Lawyer", 'String'>
    readonly caseCount: FieldRef<"Lawyer", 'Int'>
    readonly education: FieldRef<"Lawyer", 'String'>
    readonly contactHours: FieldRef<"Lawyer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lawyer findUnique
   */
  export type LawyerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter, which Lawyer to fetch.
     */
    where: LawyerWhereUniqueInput
  }

  /**
   * Lawyer findUniqueOrThrow
   */
  export type LawyerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter, which Lawyer to fetch.
     */
    where: LawyerWhereUniqueInput
  }

  /**
   * Lawyer findFirst
   */
  export type LawyerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter, which Lawyer to fetch.
     */
    where?: LawyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawyers to fetch.
     */
    orderBy?: LawyerOrderByWithRelationInput | LawyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lawyers.
     */
    cursor?: LawyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lawyers.
     */
    distinct?: LawyerScalarFieldEnum | LawyerScalarFieldEnum[]
  }

  /**
   * Lawyer findFirstOrThrow
   */
  export type LawyerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter, which Lawyer to fetch.
     */
    where?: LawyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawyers to fetch.
     */
    orderBy?: LawyerOrderByWithRelationInput | LawyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lawyers.
     */
    cursor?: LawyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lawyers.
     */
    distinct?: LawyerScalarFieldEnum | LawyerScalarFieldEnum[]
  }

  /**
   * Lawyer findMany
   */
  export type LawyerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter, which Lawyers to fetch.
     */
    where?: LawyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawyers to fetch.
     */
    orderBy?: LawyerOrderByWithRelationInput | LawyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lawyers.
     */
    cursor?: LawyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawyers.
     */
    skip?: number
    distinct?: LawyerScalarFieldEnum | LawyerScalarFieldEnum[]
  }

  /**
   * Lawyer create
   */
  export type LawyerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * The data needed to create a Lawyer.
     */
    data: XOR<LawyerCreateInput, LawyerUncheckedCreateInput>
  }

  /**
   * Lawyer createMany
   */
  export type LawyerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lawyers.
     */
    data: LawyerCreateManyInput | LawyerCreateManyInput[]
  }

  /**
   * Lawyer createManyAndReturn
   */
  export type LawyerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * The data used to create many Lawyers.
     */
    data: LawyerCreateManyInput | LawyerCreateManyInput[]
  }

  /**
   * Lawyer update
   */
  export type LawyerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * The data needed to update a Lawyer.
     */
    data: XOR<LawyerUpdateInput, LawyerUncheckedUpdateInput>
    /**
     * Choose, which Lawyer to update.
     */
    where: LawyerWhereUniqueInput
  }

  /**
   * Lawyer updateMany
   */
  export type LawyerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lawyers.
     */
    data: XOR<LawyerUpdateManyMutationInput, LawyerUncheckedUpdateManyInput>
    /**
     * Filter which Lawyers to update
     */
    where?: LawyerWhereInput
    /**
     * Limit how many Lawyers to update.
     */
    limit?: number
  }

  /**
   * Lawyer updateManyAndReturn
   */
  export type LawyerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * The data used to update Lawyers.
     */
    data: XOR<LawyerUpdateManyMutationInput, LawyerUncheckedUpdateManyInput>
    /**
     * Filter which Lawyers to update
     */
    where?: LawyerWhereInput
    /**
     * Limit how many Lawyers to update.
     */
    limit?: number
  }

  /**
   * Lawyer upsert
   */
  export type LawyerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * The filter to search for the Lawyer to update in case it exists.
     */
    where: LawyerWhereUniqueInput
    /**
     * In case the Lawyer found by the `where` argument doesn't exist, create a new Lawyer with this data.
     */
    create: XOR<LawyerCreateInput, LawyerUncheckedCreateInput>
    /**
     * In case the Lawyer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LawyerUpdateInput, LawyerUncheckedUpdateInput>
  }

  /**
   * Lawyer delete
   */
  export type LawyerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter which Lawyer to delete.
     */
    where: LawyerWhereUniqueInput
  }

  /**
   * Lawyer deleteMany
   */
  export type LawyerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lawyers to delete
     */
    where?: LawyerWhereInput
    /**
     * Limit how many Lawyers to delete.
     */
    limit?: number
  }

  /**
   * Lawyer.testimonials
   */
  export type Lawyer$testimonialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerTestimonial
     */
    select?: LawyerTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerTestimonial
     */
    omit?: LawyerTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerTestimonialInclude<ExtArgs> | null
    where?: LawyerTestimonialWhereInput
    orderBy?: LawyerTestimonialOrderByWithRelationInput | LawyerTestimonialOrderByWithRelationInput[]
    cursor?: LawyerTestimonialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LawyerTestimonialScalarFieldEnum | LawyerTestimonialScalarFieldEnum[]
  }

  /**
   * Lawyer.expertise
   */
  export type Lawyer$expertiseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerExpertise
     */
    select?: LawyerExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerExpertise
     */
    omit?: LawyerExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerExpertiseInclude<ExtArgs> | null
    where?: LawyerExpertiseWhereInput
    orderBy?: LawyerExpertiseOrderByWithRelationInput | LawyerExpertiseOrderByWithRelationInput[]
    cursor?: LawyerExpertiseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LawyerExpertiseScalarFieldEnum | LawyerExpertiseScalarFieldEnum[]
  }

  /**
   * Lawyer.documents
   */
  export type Lawyer$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDocument
     */
    select?: LawyerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDocument
     */
    omit?: LawyerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDocumentInclude<ExtArgs> | null
    where?: LawyerDocumentWhereInput
    orderBy?: LawyerDocumentOrderByWithRelationInput | LawyerDocumentOrderByWithRelationInput[]
    cursor?: LawyerDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LawyerDocumentScalarFieldEnum | LawyerDocumentScalarFieldEnum[]
  }

  /**
   * Lawyer.availabilityCal
   */
  export type Lawyer$availabilityCalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerAvailability
     */
    select?: LawyerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerAvailability
     */
    omit?: LawyerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerAvailabilityInclude<ExtArgs> | null
    where?: LawyerAvailabilityWhereInput
    orderBy?: LawyerAvailabilityOrderByWithRelationInput | LawyerAvailabilityOrderByWithRelationInput[]
    cursor?: LawyerAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LawyerAvailabilityScalarFieldEnum | LawyerAvailabilityScalarFieldEnum[]
  }

  /**
   * Lawyer without action
   */
  export type LawyerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
  }


  /**
   * Model LawyerTestimonial
   */

  export type AggregateLawyerTestimonial = {
    _count: LawyerTestimonialCountAggregateOutputType | null
    _avg: LawyerTestimonialAvgAggregateOutputType | null
    _sum: LawyerTestimonialSumAggregateOutputType | null
    _min: LawyerTestimonialMinAggregateOutputType | null
    _max: LawyerTestimonialMaxAggregateOutputType | null
  }

  export type LawyerTestimonialAvgAggregateOutputType = {
    id: number | null
    lawyerId: number | null
  }

  export type LawyerTestimonialSumAggregateOutputType = {
    id: number | null
    lawyerId: number | null
  }

  export type LawyerTestimonialMinAggregateOutputType = {
    id: number | null
    lawyerId: number | null
    text: string | null
    author: string | null
  }

  export type LawyerTestimonialMaxAggregateOutputType = {
    id: number | null
    lawyerId: number | null
    text: string | null
    author: string | null
  }

  export type LawyerTestimonialCountAggregateOutputType = {
    id: number
    lawyerId: number
    text: number
    author: number
    _all: number
  }


  export type LawyerTestimonialAvgAggregateInputType = {
    id?: true
    lawyerId?: true
  }

  export type LawyerTestimonialSumAggregateInputType = {
    id?: true
    lawyerId?: true
  }

  export type LawyerTestimonialMinAggregateInputType = {
    id?: true
    lawyerId?: true
    text?: true
    author?: true
  }

  export type LawyerTestimonialMaxAggregateInputType = {
    id?: true
    lawyerId?: true
    text?: true
    author?: true
  }

  export type LawyerTestimonialCountAggregateInputType = {
    id?: true
    lawyerId?: true
    text?: true
    author?: true
    _all?: true
  }

  export type LawyerTestimonialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawyerTestimonial to aggregate.
     */
    where?: LawyerTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerTestimonials to fetch.
     */
    orderBy?: LawyerTestimonialOrderByWithRelationInput | LawyerTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LawyerTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerTestimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LawyerTestimonials
    **/
    _count?: true | LawyerTestimonialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LawyerTestimonialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LawyerTestimonialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LawyerTestimonialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LawyerTestimonialMaxAggregateInputType
  }

  export type GetLawyerTestimonialAggregateType<T extends LawyerTestimonialAggregateArgs> = {
        [P in keyof T & keyof AggregateLawyerTestimonial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawyerTestimonial[P]>
      : GetScalarType<T[P], AggregateLawyerTestimonial[P]>
  }




  export type LawyerTestimonialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawyerTestimonialWhereInput
    orderBy?: LawyerTestimonialOrderByWithAggregationInput | LawyerTestimonialOrderByWithAggregationInput[]
    by: LawyerTestimonialScalarFieldEnum[] | LawyerTestimonialScalarFieldEnum
    having?: LawyerTestimonialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LawyerTestimonialCountAggregateInputType | true
    _avg?: LawyerTestimonialAvgAggregateInputType
    _sum?: LawyerTestimonialSumAggregateInputType
    _min?: LawyerTestimonialMinAggregateInputType
    _max?: LawyerTestimonialMaxAggregateInputType
  }

  export type LawyerTestimonialGroupByOutputType = {
    id: number
    lawyerId: number
    text: string
    author: string
    _count: LawyerTestimonialCountAggregateOutputType | null
    _avg: LawyerTestimonialAvgAggregateOutputType | null
    _sum: LawyerTestimonialSumAggregateOutputType | null
    _min: LawyerTestimonialMinAggregateOutputType | null
    _max: LawyerTestimonialMaxAggregateOutputType | null
  }

  type GetLawyerTestimonialGroupByPayload<T extends LawyerTestimonialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LawyerTestimonialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LawyerTestimonialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LawyerTestimonialGroupByOutputType[P]>
            : GetScalarType<T[P], LawyerTestimonialGroupByOutputType[P]>
        }
      >
    >


  export type LawyerTestimonialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyerId?: boolean
    text?: boolean
    author?: boolean
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerTestimonial"]>

  export type LawyerTestimonialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyerId?: boolean
    text?: boolean
    author?: boolean
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerTestimonial"]>

  export type LawyerTestimonialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyerId?: boolean
    text?: boolean
    author?: boolean
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerTestimonial"]>

  export type LawyerTestimonialSelectScalar = {
    id?: boolean
    lawyerId?: boolean
    text?: boolean
    author?: boolean
  }

  export type LawyerTestimonialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lawyerId" | "text" | "author", ExtArgs["result"]["lawyerTestimonial"]>
  export type LawyerTestimonialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }
  export type LawyerTestimonialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }
  export type LawyerTestimonialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }

  export type $LawyerTestimonialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LawyerTestimonial"
    objects: {
      lawyer: Prisma.$LawyerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lawyerId: number
      text: string
      author: string
    }, ExtArgs["result"]["lawyerTestimonial"]>
    composites: {}
  }

  type LawyerTestimonialGetPayload<S extends boolean | null | undefined | LawyerTestimonialDefaultArgs> = $Result.GetResult<Prisma.$LawyerTestimonialPayload, S>

  type LawyerTestimonialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LawyerTestimonialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LawyerTestimonialCountAggregateInputType | true
    }

  export interface LawyerTestimonialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LawyerTestimonial'], meta: { name: 'LawyerTestimonial' } }
    /**
     * Find zero or one LawyerTestimonial that matches the filter.
     * @param {LawyerTestimonialFindUniqueArgs} args - Arguments to find a LawyerTestimonial
     * @example
     * // Get one LawyerTestimonial
     * const lawyerTestimonial = await prisma.lawyerTestimonial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LawyerTestimonialFindUniqueArgs>(args: SelectSubset<T, LawyerTestimonialFindUniqueArgs<ExtArgs>>): Prisma__LawyerTestimonialClient<$Result.GetResult<Prisma.$LawyerTestimonialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LawyerTestimonial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LawyerTestimonialFindUniqueOrThrowArgs} args - Arguments to find a LawyerTestimonial
     * @example
     * // Get one LawyerTestimonial
     * const lawyerTestimonial = await prisma.lawyerTestimonial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LawyerTestimonialFindUniqueOrThrowArgs>(args: SelectSubset<T, LawyerTestimonialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LawyerTestimonialClient<$Result.GetResult<Prisma.$LawyerTestimonialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LawyerTestimonial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerTestimonialFindFirstArgs} args - Arguments to find a LawyerTestimonial
     * @example
     * // Get one LawyerTestimonial
     * const lawyerTestimonial = await prisma.lawyerTestimonial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LawyerTestimonialFindFirstArgs>(args?: SelectSubset<T, LawyerTestimonialFindFirstArgs<ExtArgs>>): Prisma__LawyerTestimonialClient<$Result.GetResult<Prisma.$LawyerTestimonialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LawyerTestimonial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerTestimonialFindFirstOrThrowArgs} args - Arguments to find a LawyerTestimonial
     * @example
     * // Get one LawyerTestimonial
     * const lawyerTestimonial = await prisma.lawyerTestimonial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LawyerTestimonialFindFirstOrThrowArgs>(args?: SelectSubset<T, LawyerTestimonialFindFirstOrThrowArgs<ExtArgs>>): Prisma__LawyerTestimonialClient<$Result.GetResult<Prisma.$LawyerTestimonialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LawyerTestimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerTestimonialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LawyerTestimonials
     * const lawyerTestimonials = await prisma.lawyerTestimonial.findMany()
     * 
     * // Get first 10 LawyerTestimonials
     * const lawyerTestimonials = await prisma.lawyerTestimonial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawyerTestimonialWithIdOnly = await prisma.lawyerTestimonial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LawyerTestimonialFindManyArgs>(args?: SelectSubset<T, LawyerTestimonialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerTestimonialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LawyerTestimonial.
     * @param {LawyerTestimonialCreateArgs} args - Arguments to create a LawyerTestimonial.
     * @example
     * // Create one LawyerTestimonial
     * const LawyerTestimonial = await prisma.lawyerTestimonial.create({
     *   data: {
     *     // ... data to create a LawyerTestimonial
     *   }
     * })
     * 
     */
    create<T extends LawyerTestimonialCreateArgs>(args: SelectSubset<T, LawyerTestimonialCreateArgs<ExtArgs>>): Prisma__LawyerTestimonialClient<$Result.GetResult<Prisma.$LawyerTestimonialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LawyerTestimonials.
     * @param {LawyerTestimonialCreateManyArgs} args - Arguments to create many LawyerTestimonials.
     * @example
     * // Create many LawyerTestimonials
     * const lawyerTestimonial = await prisma.lawyerTestimonial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LawyerTestimonialCreateManyArgs>(args?: SelectSubset<T, LawyerTestimonialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LawyerTestimonials and returns the data saved in the database.
     * @param {LawyerTestimonialCreateManyAndReturnArgs} args - Arguments to create many LawyerTestimonials.
     * @example
     * // Create many LawyerTestimonials
     * const lawyerTestimonial = await prisma.lawyerTestimonial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LawyerTestimonials and only return the `id`
     * const lawyerTestimonialWithIdOnly = await prisma.lawyerTestimonial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LawyerTestimonialCreateManyAndReturnArgs>(args?: SelectSubset<T, LawyerTestimonialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerTestimonialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LawyerTestimonial.
     * @param {LawyerTestimonialDeleteArgs} args - Arguments to delete one LawyerTestimonial.
     * @example
     * // Delete one LawyerTestimonial
     * const LawyerTestimonial = await prisma.lawyerTestimonial.delete({
     *   where: {
     *     // ... filter to delete one LawyerTestimonial
     *   }
     * })
     * 
     */
    delete<T extends LawyerTestimonialDeleteArgs>(args: SelectSubset<T, LawyerTestimonialDeleteArgs<ExtArgs>>): Prisma__LawyerTestimonialClient<$Result.GetResult<Prisma.$LawyerTestimonialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LawyerTestimonial.
     * @param {LawyerTestimonialUpdateArgs} args - Arguments to update one LawyerTestimonial.
     * @example
     * // Update one LawyerTestimonial
     * const lawyerTestimonial = await prisma.lawyerTestimonial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LawyerTestimonialUpdateArgs>(args: SelectSubset<T, LawyerTestimonialUpdateArgs<ExtArgs>>): Prisma__LawyerTestimonialClient<$Result.GetResult<Prisma.$LawyerTestimonialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LawyerTestimonials.
     * @param {LawyerTestimonialDeleteManyArgs} args - Arguments to filter LawyerTestimonials to delete.
     * @example
     * // Delete a few LawyerTestimonials
     * const { count } = await prisma.lawyerTestimonial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LawyerTestimonialDeleteManyArgs>(args?: SelectSubset<T, LawyerTestimonialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawyerTestimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerTestimonialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LawyerTestimonials
     * const lawyerTestimonial = await prisma.lawyerTestimonial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LawyerTestimonialUpdateManyArgs>(args: SelectSubset<T, LawyerTestimonialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawyerTestimonials and returns the data updated in the database.
     * @param {LawyerTestimonialUpdateManyAndReturnArgs} args - Arguments to update many LawyerTestimonials.
     * @example
     * // Update many LawyerTestimonials
     * const lawyerTestimonial = await prisma.lawyerTestimonial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LawyerTestimonials and only return the `id`
     * const lawyerTestimonialWithIdOnly = await prisma.lawyerTestimonial.updateManyAndReturn({
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
    updateManyAndReturn<T extends LawyerTestimonialUpdateManyAndReturnArgs>(args: SelectSubset<T, LawyerTestimonialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerTestimonialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LawyerTestimonial.
     * @param {LawyerTestimonialUpsertArgs} args - Arguments to update or create a LawyerTestimonial.
     * @example
     * // Update or create a LawyerTestimonial
     * const lawyerTestimonial = await prisma.lawyerTestimonial.upsert({
     *   create: {
     *     // ... data to create a LawyerTestimonial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LawyerTestimonial we want to update
     *   }
     * })
     */
    upsert<T extends LawyerTestimonialUpsertArgs>(args: SelectSubset<T, LawyerTestimonialUpsertArgs<ExtArgs>>): Prisma__LawyerTestimonialClient<$Result.GetResult<Prisma.$LawyerTestimonialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LawyerTestimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerTestimonialCountArgs} args - Arguments to filter LawyerTestimonials to count.
     * @example
     * // Count the number of LawyerTestimonials
     * const count = await prisma.lawyerTestimonial.count({
     *   where: {
     *     // ... the filter for the LawyerTestimonials we want to count
     *   }
     * })
    **/
    count<T extends LawyerTestimonialCountArgs>(
      args?: Subset<T, LawyerTestimonialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LawyerTestimonialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LawyerTestimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerTestimonialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LawyerTestimonialAggregateArgs>(args: Subset<T, LawyerTestimonialAggregateArgs>): Prisma.PrismaPromise<GetLawyerTestimonialAggregateType<T>>

    /**
     * Group by LawyerTestimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerTestimonialGroupByArgs} args - Group by arguments.
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
      T extends LawyerTestimonialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LawyerTestimonialGroupByArgs['orderBy'] }
        : { orderBy?: LawyerTestimonialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LawyerTestimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawyerTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LawyerTestimonial model
   */
  readonly fields: LawyerTestimonialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LawyerTestimonial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LawyerTestimonialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lawyer<T extends LawyerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LawyerDefaultArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LawyerTestimonial model
   */
  interface LawyerTestimonialFieldRefs {
    readonly id: FieldRef<"LawyerTestimonial", 'Int'>
    readonly lawyerId: FieldRef<"LawyerTestimonial", 'Int'>
    readonly text: FieldRef<"LawyerTestimonial", 'String'>
    readonly author: FieldRef<"LawyerTestimonial", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LawyerTestimonial findUnique
   */
  export type LawyerTestimonialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerTestimonial
     */
    select?: LawyerTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerTestimonial
     */
    omit?: LawyerTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerTestimonialInclude<ExtArgs> | null
    /**
     * Filter, which LawyerTestimonial to fetch.
     */
    where: LawyerTestimonialWhereUniqueInput
  }

  /**
   * LawyerTestimonial findUniqueOrThrow
   */
  export type LawyerTestimonialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerTestimonial
     */
    select?: LawyerTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerTestimonial
     */
    omit?: LawyerTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerTestimonialInclude<ExtArgs> | null
    /**
     * Filter, which LawyerTestimonial to fetch.
     */
    where: LawyerTestimonialWhereUniqueInput
  }

  /**
   * LawyerTestimonial findFirst
   */
  export type LawyerTestimonialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerTestimonial
     */
    select?: LawyerTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerTestimonial
     */
    omit?: LawyerTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerTestimonialInclude<ExtArgs> | null
    /**
     * Filter, which LawyerTestimonial to fetch.
     */
    where?: LawyerTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerTestimonials to fetch.
     */
    orderBy?: LawyerTestimonialOrderByWithRelationInput | LawyerTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawyerTestimonials.
     */
    cursor?: LawyerTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerTestimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawyerTestimonials.
     */
    distinct?: LawyerTestimonialScalarFieldEnum | LawyerTestimonialScalarFieldEnum[]
  }

  /**
   * LawyerTestimonial findFirstOrThrow
   */
  export type LawyerTestimonialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerTestimonial
     */
    select?: LawyerTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerTestimonial
     */
    omit?: LawyerTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerTestimonialInclude<ExtArgs> | null
    /**
     * Filter, which LawyerTestimonial to fetch.
     */
    where?: LawyerTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerTestimonials to fetch.
     */
    orderBy?: LawyerTestimonialOrderByWithRelationInput | LawyerTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawyerTestimonials.
     */
    cursor?: LawyerTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerTestimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawyerTestimonials.
     */
    distinct?: LawyerTestimonialScalarFieldEnum | LawyerTestimonialScalarFieldEnum[]
  }

  /**
   * LawyerTestimonial findMany
   */
  export type LawyerTestimonialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerTestimonial
     */
    select?: LawyerTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerTestimonial
     */
    omit?: LawyerTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerTestimonialInclude<ExtArgs> | null
    /**
     * Filter, which LawyerTestimonials to fetch.
     */
    where?: LawyerTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerTestimonials to fetch.
     */
    orderBy?: LawyerTestimonialOrderByWithRelationInput | LawyerTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LawyerTestimonials.
     */
    cursor?: LawyerTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerTestimonials.
     */
    skip?: number
    distinct?: LawyerTestimonialScalarFieldEnum | LawyerTestimonialScalarFieldEnum[]
  }

  /**
   * LawyerTestimonial create
   */
  export type LawyerTestimonialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerTestimonial
     */
    select?: LawyerTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerTestimonial
     */
    omit?: LawyerTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerTestimonialInclude<ExtArgs> | null
    /**
     * The data needed to create a LawyerTestimonial.
     */
    data: XOR<LawyerTestimonialCreateInput, LawyerTestimonialUncheckedCreateInput>
  }

  /**
   * LawyerTestimonial createMany
   */
  export type LawyerTestimonialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LawyerTestimonials.
     */
    data: LawyerTestimonialCreateManyInput | LawyerTestimonialCreateManyInput[]
  }

  /**
   * LawyerTestimonial createManyAndReturn
   */
  export type LawyerTestimonialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerTestimonial
     */
    select?: LawyerTestimonialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerTestimonial
     */
    omit?: LawyerTestimonialOmit<ExtArgs> | null
    /**
     * The data used to create many LawyerTestimonials.
     */
    data: LawyerTestimonialCreateManyInput | LawyerTestimonialCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerTestimonialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LawyerTestimonial update
   */
  export type LawyerTestimonialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerTestimonial
     */
    select?: LawyerTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerTestimonial
     */
    omit?: LawyerTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerTestimonialInclude<ExtArgs> | null
    /**
     * The data needed to update a LawyerTestimonial.
     */
    data: XOR<LawyerTestimonialUpdateInput, LawyerTestimonialUncheckedUpdateInput>
    /**
     * Choose, which LawyerTestimonial to update.
     */
    where: LawyerTestimonialWhereUniqueInput
  }

  /**
   * LawyerTestimonial updateMany
   */
  export type LawyerTestimonialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LawyerTestimonials.
     */
    data: XOR<LawyerTestimonialUpdateManyMutationInput, LawyerTestimonialUncheckedUpdateManyInput>
    /**
     * Filter which LawyerTestimonials to update
     */
    where?: LawyerTestimonialWhereInput
    /**
     * Limit how many LawyerTestimonials to update.
     */
    limit?: number
  }

  /**
   * LawyerTestimonial updateManyAndReturn
   */
  export type LawyerTestimonialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerTestimonial
     */
    select?: LawyerTestimonialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerTestimonial
     */
    omit?: LawyerTestimonialOmit<ExtArgs> | null
    /**
     * The data used to update LawyerTestimonials.
     */
    data: XOR<LawyerTestimonialUpdateManyMutationInput, LawyerTestimonialUncheckedUpdateManyInput>
    /**
     * Filter which LawyerTestimonials to update
     */
    where?: LawyerTestimonialWhereInput
    /**
     * Limit how many LawyerTestimonials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerTestimonialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LawyerTestimonial upsert
   */
  export type LawyerTestimonialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerTestimonial
     */
    select?: LawyerTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerTestimonial
     */
    omit?: LawyerTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerTestimonialInclude<ExtArgs> | null
    /**
     * The filter to search for the LawyerTestimonial to update in case it exists.
     */
    where: LawyerTestimonialWhereUniqueInput
    /**
     * In case the LawyerTestimonial found by the `where` argument doesn't exist, create a new LawyerTestimonial with this data.
     */
    create: XOR<LawyerTestimonialCreateInput, LawyerTestimonialUncheckedCreateInput>
    /**
     * In case the LawyerTestimonial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LawyerTestimonialUpdateInput, LawyerTestimonialUncheckedUpdateInput>
  }

  /**
   * LawyerTestimonial delete
   */
  export type LawyerTestimonialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerTestimonial
     */
    select?: LawyerTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerTestimonial
     */
    omit?: LawyerTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerTestimonialInclude<ExtArgs> | null
    /**
     * Filter which LawyerTestimonial to delete.
     */
    where: LawyerTestimonialWhereUniqueInput
  }

  /**
   * LawyerTestimonial deleteMany
   */
  export type LawyerTestimonialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawyerTestimonials to delete
     */
    where?: LawyerTestimonialWhereInput
    /**
     * Limit how many LawyerTestimonials to delete.
     */
    limit?: number
  }

  /**
   * LawyerTestimonial without action
   */
  export type LawyerTestimonialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerTestimonial
     */
    select?: LawyerTestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerTestimonial
     */
    omit?: LawyerTestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerTestimonialInclude<ExtArgs> | null
  }


  /**
   * Model LawyerExpertise
   */

  export type AggregateLawyerExpertise = {
    _count: LawyerExpertiseCountAggregateOutputType | null
    _avg: LawyerExpertiseAvgAggregateOutputType | null
    _sum: LawyerExpertiseSumAggregateOutputType | null
    _min: LawyerExpertiseMinAggregateOutputType | null
    _max: LawyerExpertiseMaxAggregateOutputType | null
  }

  export type LawyerExpertiseAvgAggregateOutputType = {
    id: number | null
    lawyerId: number | null
  }

  export type LawyerExpertiseSumAggregateOutputType = {
    id: number | null
    lawyerId: number | null
  }

  export type LawyerExpertiseMinAggregateOutputType = {
    id: number | null
    lawyerId: number | null
    expertise: string | null
  }

  export type LawyerExpertiseMaxAggregateOutputType = {
    id: number | null
    lawyerId: number | null
    expertise: string | null
  }

  export type LawyerExpertiseCountAggregateOutputType = {
    id: number
    lawyerId: number
    expertise: number
    _all: number
  }


  export type LawyerExpertiseAvgAggregateInputType = {
    id?: true
    lawyerId?: true
  }

  export type LawyerExpertiseSumAggregateInputType = {
    id?: true
    lawyerId?: true
  }

  export type LawyerExpertiseMinAggregateInputType = {
    id?: true
    lawyerId?: true
    expertise?: true
  }

  export type LawyerExpertiseMaxAggregateInputType = {
    id?: true
    lawyerId?: true
    expertise?: true
  }

  export type LawyerExpertiseCountAggregateInputType = {
    id?: true
    lawyerId?: true
    expertise?: true
    _all?: true
  }

  export type LawyerExpertiseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawyerExpertise to aggregate.
     */
    where?: LawyerExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerExpertises to fetch.
     */
    orderBy?: LawyerExpertiseOrderByWithRelationInput | LawyerExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LawyerExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerExpertises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerExpertises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LawyerExpertises
    **/
    _count?: true | LawyerExpertiseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LawyerExpertiseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LawyerExpertiseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LawyerExpertiseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LawyerExpertiseMaxAggregateInputType
  }

  export type GetLawyerExpertiseAggregateType<T extends LawyerExpertiseAggregateArgs> = {
        [P in keyof T & keyof AggregateLawyerExpertise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawyerExpertise[P]>
      : GetScalarType<T[P], AggregateLawyerExpertise[P]>
  }




  export type LawyerExpertiseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawyerExpertiseWhereInput
    orderBy?: LawyerExpertiseOrderByWithAggregationInput | LawyerExpertiseOrderByWithAggregationInput[]
    by: LawyerExpertiseScalarFieldEnum[] | LawyerExpertiseScalarFieldEnum
    having?: LawyerExpertiseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LawyerExpertiseCountAggregateInputType | true
    _avg?: LawyerExpertiseAvgAggregateInputType
    _sum?: LawyerExpertiseSumAggregateInputType
    _min?: LawyerExpertiseMinAggregateInputType
    _max?: LawyerExpertiseMaxAggregateInputType
  }

  export type LawyerExpertiseGroupByOutputType = {
    id: number
    lawyerId: number
    expertise: string
    _count: LawyerExpertiseCountAggregateOutputType | null
    _avg: LawyerExpertiseAvgAggregateOutputType | null
    _sum: LawyerExpertiseSumAggregateOutputType | null
    _min: LawyerExpertiseMinAggregateOutputType | null
    _max: LawyerExpertiseMaxAggregateOutputType | null
  }

  type GetLawyerExpertiseGroupByPayload<T extends LawyerExpertiseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LawyerExpertiseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LawyerExpertiseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LawyerExpertiseGroupByOutputType[P]>
            : GetScalarType<T[P], LawyerExpertiseGroupByOutputType[P]>
        }
      >
    >


  export type LawyerExpertiseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyerId?: boolean
    expertise?: boolean
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerExpertise"]>

  export type LawyerExpertiseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyerId?: boolean
    expertise?: boolean
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerExpertise"]>

  export type LawyerExpertiseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyerId?: boolean
    expertise?: boolean
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerExpertise"]>

  export type LawyerExpertiseSelectScalar = {
    id?: boolean
    lawyerId?: boolean
    expertise?: boolean
  }

  export type LawyerExpertiseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lawyerId" | "expertise", ExtArgs["result"]["lawyerExpertise"]>
  export type LawyerExpertiseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }
  export type LawyerExpertiseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }
  export type LawyerExpertiseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }

  export type $LawyerExpertisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LawyerExpertise"
    objects: {
      lawyer: Prisma.$LawyerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lawyerId: number
      expertise: string
    }, ExtArgs["result"]["lawyerExpertise"]>
    composites: {}
  }

  type LawyerExpertiseGetPayload<S extends boolean | null | undefined | LawyerExpertiseDefaultArgs> = $Result.GetResult<Prisma.$LawyerExpertisePayload, S>

  type LawyerExpertiseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LawyerExpertiseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LawyerExpertiseCountAggregateInputType | true
    }

  export interface LawyerExpertiseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LawyerExpertise'], meta: { name: 'LawyerExpertise' } }
    /**
     * Find zero or one LawyerExpertise that matches the filter.
     * @param {LawyerExpertiseFindUniqueArgs} args - Arguments to find a LawyerExpertise
     * @example
     * // Get one LawyerExpertise
     * const lawyerExpertise = await prisma.lawyerExpertise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LawyerExpertiseFindUniqueArgs>(args: SelectSubset<T, LawyerExpertiseFindUniqueArgs<ExtArgs>>): Prisma__LawyerExpertiseClient<$Result.GetResult<Prisma.$LawyerExpertisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LawyerExpertise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LawyerExpertiseFindUniqueOrThrowArgs} args - Arguments to find a LawyerExpertise
     * @example
     * // Get one LawyerExpertise
     * const lawyerExpertise = await prisma.lawyerExpertise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LawyerExpertiseFindUniqueOrThrowArgs>(args: SelectSubset<T, LawyerExpertiseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LawyerExpertiseClient<$Result.GetResult<Prisma.$LawyerExpertisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LawyerExpertise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerExpertiseFindFirstArgs} args - Arguments to find a LawyerExpertise
     * @example
     * // Get one LawyerExpertise
     * const lawyerExpertise = await prisma.lawyerExpertise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LawyerExpertiseFindFirstArgs>(args?: SelectSubset<T, LawyerExpertiseFindFirstArgs<ExtArgs>>): Prisma__LawyerExpertiseClient<$Result.GetResult<Prisma.$LawyerExpertisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LawyerExpertise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerExpertiseFindFirstOrThrowArgs} args - Arguments to find a LawyerExpertise
     * @example
     * // Get one LawyerExpertise
     * const lawyerExpertise = await prisma.lawyerExpertise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LawyerExpertiseFindFirstOrThrowArgs>(args?: SelectSubset<T, LawyerExpertiseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LawyerExpertiseClient<$Result.GetResult<Prisma.$LawyerExpertisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LawyerExpertises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerExpertiseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LawyerExpertises
     * const lawyerExpertises = await prisma.lawyerExpertise.findMany()
     * 
     * // Get first 10 LawyerExpertises
     * const lawyerExpertises = await prisma.lawyerExpertise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawyerExpertiseWithIdOnly = await prisma.lawyerExpertise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LawyerExpertiseFindManyArgs>(args?: SelectSubset<T, LawyerExpertiseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerExpertisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LawyerExpertise.
     * @param {LawyerExpertiseCreateArgs} args - Arguments to create a LawyerExpertise.
     * @example
     * // Create one LawyerExpertise
     * const LawyerExpertise = await prisma.lawyerExpertise.create({
     *   data: {
     *     // ... data to create a LawyerExpertise
     *   }
     * })
     * 
     */
    create<T extends LawyerExpertiseCreateArgs>(args: SelectSubset<T, LawyerExpertiseCreateArgs<ExtArgs>>): Prisma__LawyerExpertiseClient<$Result.GetResult<Prisma.$LawyerExpertisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LawyerExpertises.
     * @param {LawyerExpertiseCreateManyArgs} args - Arguments to create many LawyerExpertises.
     * @example
     * // Create many LawyerExpertises
     * const lawyerExpertise = await prisma.lawyerExpertise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LawyerExpertiseCreateManyArgs>(args?: SelectSubset<T, LawyerExpertiseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LawyerExpertises and returns the data saved in the database.
     * @param {LawyerExpertiseCreateManyAndReturnArgs} args - Arguments to create many LawyerExpertises.
     * @example
     * // Create many LawyerExpertises
     * const lawyerExpertise = await prisma.lawyerExpertise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LawyerExpertises and only return the `id`
     * const lawyerExpertiseWithIdOnly = await prisma.lawyerExpertise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LawyerExpertiseCreateManyAndReturnArgs>(args?: SelectSubset<T, LawyerExpertiseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerExpertisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LawyerExpertise.
     * @param {LawyerExpertiseDeleteArgs} args - Arguments to delete one LawyerExpertise.
     * @example
     * // Delete one LawyerExpertise
     * const LawyerExpertise = await prisma.lawyerExpertise.delete({
     *   where: {
     *     // ... filter to delete one LawyerExpertise
     *   }
     * })
     * 
     */
    delete<T extends LawyerExpertiseDeleteArgs>(args: SelectSubset<T, LawyerExpertiseDeleteArgs<ExtArgs>>): Prisma__LawyerExpertiseClient<$Result.GetResult<Prisma.$LawyerExpertisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LawyerExpertise.
     * @param {LawyerExpertiseUpdateArgs} args - Arguments to update one LawyerExpertise.
     * @example
     * // Update one LawyerExpertise
     * const lawyerExpertise = await prisma.lawyerExpertise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LawyerExpertiseUpdateArgs>(args: SelectSubset<T, LawyerExpertiseUpdateArgs<ExtArgs>>): Prisma__LawyerExpertiseClient<$Result.GetResult<Prisma.$LawyerExpertisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LawyerExpertises.
     * @param {LawyerExpertiseDeleteManyArgs} args - Arguments to filter LawyerExpertises to delete.
     * @example
     * // Delete a few LawyerExpertises
     * const { count } = await prisma.lawyerExpertise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LawyerExpertiseDeleteManyArgs>(args?: SelectSubset<T, LawyerExpertiseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawyerExpertises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerExpertiseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LawyerExpertises
     * const lawyerExpertise = await prisma.lawyerExpertise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LawyerExpertiseUpdateManyArgs>(args: SelectSubset<T, LawyerExpertiseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawyerExpertises and returns the data updated in the database.
     * @param {LawyerExpertiseUpdateManyAndReturnArgs} args - Arguments to update many LawyerExpertises.
     * @example
     * // Update many LawyerExpertises
     * const lawyerExpertise = await prisma.lawyerExpertise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LawyerExpertises and only return the `id`
     * const lawyerExpertiseWithIdOnly = await prisma.lawyerExpertise.updateManyAndReturn({
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
    updateManyAndReturn<T extends LawyerExpertiseUpdateManyAndReturnArgs>(args: SelectSubset<T, LawyerExpertiseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerExpertisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LawyerExpertise.
     * @param {LawyerExpertiseUpsertArgs} args - Arguments to update or create a LawyerExpertise.
     * @example
     * // Update or create a LawyerExpertise
     * const lawyerExpertise = await prisma.lawyerExpertise.upsert({
     *   create: {
     *     // ... data to create a LawyerExpertise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LawyerExpertise we want to update
     *   }
     * })
     */
    upsert<T extends LawyerExpertiseUpsertArgs>(args: SelectSubset<T, LawyerExpertiseUpsertArgs<ExtArgs>>): Prisma__LawyerExpertiseClient<$Result.GetResult<Prisma.$LawyerExpertisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LawyerExpertises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerExpertiseCountArgs} args - Arguments to filter LawyerExpertises to count.
     * @example
     * // Count the number of LawyerExpertises
     * const count = await prisma.lawyerExpertise.count({
     *   where: {
     *     // ... the filter for the LawyerExpertises we want to count
     *   }
     * })
    **/
    count<T extends LawyerExpertiseCountArgs>(
      args?: Subset<T, LawyerExpertiseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LawyerExpertiseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LawyerExpertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerExpertiseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LawyerExpertiseAggregateArgs>(args: Subset<T, LawyerExpertiseAggregateArgs>): Prisma.PrismaPromise<GetLawyerExpertiseAggregateType<T>>

    /**
     * Group by LawyerExpertise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerExpertiseGroupByArgs} args - Group by arguments.
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
      T extends LawyerExpertiseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LawyerExpertiseGroupByArgs['orderBy'] }
        : { orderBy?: LawyerExpertiseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LawyerExpertiseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawyerExpertiseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LawyerExpertise model
   */
  readonly fields: LawyerExpertiseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LawyerExpertise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LawyerExpertiseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lawyer<T extends LawyerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LawyerDefaultArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LawyerExpertise model
   */
  interface LawyerExpertiseFieldRefs {
    readonly id: FieldRef<"LawyerExpertise", 'Int'>
    readonly lawyerId: FieldRef<"LawyerExpertise", 'Int'>
    readonly expertise: FieldRef<"LawyerExpertise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LawyerExpertise findUnique
   */
  export type LawyerExpertiseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerExpertise
     */
    select?: LawyerExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerExpertise
     */
    omit?: LawyerExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which LawyerExpertise to fetch.
     */
    where: LawyerExpertiseWhereUniqueInput
  }

  /**
   * LawyerExpertise findUniqueOrThrow
   */
  export type LawyerExpertiseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerExpertise
     */
    select?: LawyerExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerExpertise
     */
    omit?: LawyerExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which LawyerExpertise to fetch.
     */
    where: LawyerExpertiseWhereUniqueInput
  }

  /**
   * LawyerExpertise findFirst
   */
  export type LawyerExpertiseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerExpertise
     */
    select?: LawyerExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerExpertise
     */
    omit?: LawyerExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which LawyerExpertise to fetch.
     */
    where?: LawyerExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerExpertises to fetch.
     */
    orderBy?: LawyerExpertiseOrderByWithRelationInput | LawyerExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawyerExpertises.
     */
    cursor?: LawyerExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerExpertises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerExpertises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawyerExpertises.
     */
    distinct?: LawyerExpertiseScalarFieldEnum | LawyerExpertiseScalarFieldEnum[]
  }

  /**
   * LawyerExpertise findFirstOrThrow
   */
  export type LawyerExpertiseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerExpertise
     */
    select?: LawyerExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerExpertise
     */
    omit?: LawyerExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which LawyerExpertise to fetch.
     */
    where?: LawyerExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerExpertises to fetch.
     */
    orderBy?: LawyerExpertiseOrderByWithRelationInput | LawyerExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawyerExpertises.
     */
    cursor?: LawyerExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerExpertises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerExpertises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawyerExpertises.
     */
    distinct?: LawyerExpertiseScalarFieldEnum | LawyerExpertiseScalarFieldEnum[]
  }

  /**
   * LawyerExpertise findMany
   */
  export type LawyerExpertiseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerExpertise
     */
    select?: LawyerExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerExpertise
     */
    omit?: LawyerExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerExpertiseInclude<ExtArgs> | null
    /**
     * Filter, which LawyerExpertises to fetch.
     */
    where?: LawyerExpertiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerExpertises to fetch.
     */
    orderBy?: LawyerExpertiseOrderByWithRelationInput | LawyerExpertiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LawyerExpertises.
     */
    cursor?: LawyerExpertiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerExpertises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerExpertises.
     */
    skip?: number
    distinct?: LawyerExpertiseScalarFieldEnum | LawyerExpertiseScalarFieldEnum[]
  }

  /**
   * LawyerExpertise create
   */
  export type LawyerExpertiseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerExpertise
     */
    select?: LawyerExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerExpertise
     */
    omit?: LawyerExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerExpertiseInclude<ExtArgs> | null
    /**
     * The data needed to create a LawyerExpertise.
     */
    data: XOR<LawyerExpertiseCreateInput, LawyerExpertiseUncheckedCreateInput>
  }

  /**
   * LawyerExpertise createMany
   */
  export type LawyerExpertiseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LawyerExpertises.
     */
    data: LawyerExpertiseCreateManyInput | LawyerExpertiseCreateManyInput[]
  }

  /**
   * LawyerExpertise createManyAndReturn
   */
  export type LawyerExpertiseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerExpertise
     */
    select?: LawyerExpertiseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerExpertise
     */
    omit?: LawyerExpertiseOmit<ExtArgs> | null
    /**
     * The data used to create many LawyerExpertises.
     */
    data: LawyerExpertiseCreateManyInput | LawyerExpertiseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerExpertiseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LawyerExpertise update
   */
  export type LawyerExpertiseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerExpertise
     */
    select?: LawyerExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerExpertise
     */
    omit?: LawyerExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerExpertiseInclude<ExtArgs> | null
    /**
     * The data needed to update a LawyerExpertise.
     */
    data: XOR<LawyerExpertiseUpdateInput, LawyerExpertiseUncheckedUpdateInput>
    /**
     * Choose, which LawyerExpertise to update.
     */
    where: LawyerExpertiseWhereUniqueInput
  }

  /**
   * LawyerExpertise updateMany
   */
  export type LawyerExpertiseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LawyerExpertises.
     */
    data: XOR<LawyerExpertiseUpdateManyMutationInput, LawyerExpertiseUncheckedUpdateManyInput>
    /**
     * Filter which LawyerExpertises to update
     */
    where?: LawyerExpertiseWhereInput
    /**
     * Limit how many LawyerExpertises to update.
     */
    limit?: number
  }

  /**
   * LawyerExpertise updateManyAndReturn
   */
  export type LawyerExpertiseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerExpertise
     */
    select?: LawyerExpertiseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerExpertise
     */
    omit?: LawyerExpertiseOmit<ExtArgs> | null
    /**
     * The data used to update LawyerExpertises.
     */
    data: XOR<LawyerExpertiseUpdateManyMutationInput, LawyerExpertiseUncheckedUpdateManyInput>
    /**
     * Filter which LawyerExpertises to update
     */
    where?: LawyerExpertiseWhereInput
    /**
     * Limit how many LawyerExpertises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerExpertiseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LawyerExpertise upsert
   */
  export type LawyerExpertiseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerExpertise
     */
    select?: LawyerExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerExpertise
     */
    omit?: LawyerExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerExpertiseInclude<ExtArgs> | null
    /**
     * The filter to search for the LawyerExpertise to update in case it exists.
     */
    where: LawyerExpertiseWhereUniqueInput
    /**
     * In case the LawyerExpertise found by the `where` argument doesn't exist, create a new LawyerExpertise with this data.
     */
    create: XOR<LawyerExpertiseCreateInput, LawyerExpertiseUncheckedCreateInput>
    /**
     * In case the LawyerExpertise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LawyerExpertiseUpdateInput, LawyerExpertiseUncheckedUpdateInput>
  }

  /**
   * LawyerExpertise delete
   */
  export type LawyerExpertiseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerExpertise
     */
    select?: LawyerExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerExpertise
     */
    omit?: LawyerExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerExpertiseInclude<ExtArgs> | null
    /**
     * Filter which LawyerExpertise to delete.
     */
    where: LawyerExpertiseWhereUniqueInput
  }

  /**
   * LawyerExpertise deleteMany
   */
  export type LawyerExpertiseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawyerExpertises to delete
     */
    where?: LawyerExpertiseWhereInput
    /**
     * Limit how many LawyerExpertises to delete.
     */
    limit?: number
  }

  /**
   * LawyerExpertise without action
   */
  export type LawyerExpertiseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerExpertise
     */
    select?: LawyerExpertiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerExpertise
     */
    omit?: LawyerExpertiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerExpertiseInclude<ExtArgs> | null
  }


  /**
   * Model LawyerDocument
   */

  export type AggregateLawyerDocument = {
    _count: LawyerDocumentCountAggregateOutputType | null
    _avg: LawyerDocumentAvgAggregateOutputType | null
    _sum: LawyerDocumentSumAggregateOutputType | null
    _min: LawyerDocumentMinAggregateOutputType | null
    _max: LawyerDocumentMaxAggregateOutputType | null
  }

  export type LawyerDocumentAvgAggregateOutputType = {
    id: number | null
    lawyerId: number | null
  }

  export type LawyerDocumentSumAggregateOutputType = {
    id: number | null
    lawyerId: number | null
  }

  export type LawyerDocumentMinAggregateOutputType = {
    id: number | null
    lawyerId: number | null
    name: string | null
    type: string | null
    description: string | null
  }

  export type LawyerDocumentMaxAggregateOutputType = {
    id: number | null
    lawyerId: number | null
    name: string | null
    type: string | null
    description: string | null
  }

  export type LawyerDocumentCountAggregateOutputType = {
    id: number
    lawyerId: number
    name: number
    type: number
    description: number
    _all: number
  }


  export type LawyerDocumentAvgAggregateInputType = {
    id?: true
    lawyerId?: true
  }

  export type LawyerDocumentSumAggregateInputType = {
    id?: true
    lawyerId?: true
  }

  export type LawyerDocumentMinAggregateInputType = {
    id?: true
    lawyerId?: true
    name?: true
    type?: true
    description?: true
  }

  export type LawyerDocumentMaxAggregateInputType = {
    id?: true
    lawyerId?: true
    name?: true
    type?: true
    description?: true
  }

  export type LawyerDocumentCountAggregateInputType = {
    id?: true
    lawyerId?: true
    name?: true
    type?: true
    description?: true
    _all?: true
  }

  export type LawyerDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawyerDocument to aggregate.
     */
    where?: LawyerDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerDocuments to fetch.
     */
    orderBy?: LawyerDocumentOrderByWithRelationInput | LawyerDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LawyerDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LawyerDocuments
    **/
    _count?: true | LawyerDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LawyerDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LawyerDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LawyerDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LawyerDocumentMaxAggregateInputType
  }

  export type GetLawyerDocumentAggregateType<T extends LawyerDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateLawyerDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawyerDocument[P]>
      : GetScalarType<T[P], AggregateLawyerDocument[P]>
  }




  export type LawyerDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawyerDocumentWhereInput
    orderBy?: LawyerDocumentOrderByWithAggregationInput | LawyerDocumentOrderByWithAggregationInput[]
    by: LawyerDocumentScalarFieldEnum[] | LawyerDocumentScalarFieldEnum
    having?: LawyerDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LawyerDocumentCountAggregateInputType | true
    _avg?: LawyerDocumentAvgAggregateInputType
    _sum?: LawyerDocumentSumAggregateInputType
    _min?: LawyerDocumentMinAggregateInputType
    _max?: LawyerDocumentMaxAggregateInputType
  }

  export type LawyerDocumentGroupByOutputType = {
    id: number
    lawyerId: number
    name: string
    type: string
    description: string | null
    _count: LawyerDocumentCountAggregateOutputType | null
    _avg: LawyerDocumentAvgAggregateOutputType | null
    _sum: LawyerDocumentSumAggregateOutputType | null
    _min: LawyerDocumentMinAggregateOutputType | null
    _max: LawyerDocumentMaxAggregateOutputType | null
  }

  type GetLawyerDocumentGroupByPayload<T extends LawyerDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LawyerDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LawyerDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LawyerDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], LawyerDocumentGroupByOutputType[P]>
        }
      >
    >


  export type LawyerDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyerId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerDocument"]>

  export type LawyerDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyerId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerDocument"]>

  export type LawyerDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyerId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerDocument"]>

  export type LawyerDocumentSelectScalar = {
    id?: boolean
    lawyerId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
  }

  export type LawyerDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lawyerId" | "name" | "type" | "description", ExtArgs["result"]["lawyerDocument"]>
  export type LawyerDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }
  export type LawyerDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }
  export type LawyerDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }

  export type $LawyerDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LawyerDocument"
    objects: {
      lawyer: Prisma.$LawyerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lawyerId: number
      name: string
      type: string
      description: string | null
    }, ExtArgs["result"]["lawyerDocument"]>
    composites: {}
  }

  type LawyerDocumentGetPayload<S extends boolean | null | undefined | LawyerDocumentDefaultArgs> = $Result.GetResult<Prisma.$LawyerDocumentPayload, S>

  type LawyerDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LawyerDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LawyerDocumentCountAggregateInputType | true
    }

  export interface LawyerDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LawyerDocument'], meta: { name: 'LawyerDocument' } }
    /**
     * Find zero or one LawyerDocument that matches the filter.
     * @param {LawyerDocumentFindUniqueArgs} args - Arguments to find a LawyerDocument
     * @example
     * // Get one LawyerDocument
     * const lawyerDocument = await prisma.lawyerDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LawyerDocumentFindUniqueArgs>(args: SelectSubset<T, LawyerDocumentFindUniqueArgs<ExtArgs>>): Prisma__LawyerDocumentClient<$Result.GetResult<Prisma.$LawyerDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LawyerDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LawyerDocumentFindUniqueOrThrowArgs} args - Arguments to find a LawyerDocument
     * @example
     * // Get one LawyerDocument
     * const lawyerDocument = await prisma.lawyerDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LawyerDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, LawyerDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LawyerDocumentClient<$Result.GetResult<Prisma.$LawyerDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LawyerDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerDocumentFindFirstArgs} args - Arguments to find a LawyerDocument
     * @example
     * // Get one LawyerDocument
     * const lawyerDocument = await prisma.lawyerDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LawyerDocumentFindFirstArgs>(args?: SelectSubset<T, LawyerDocumentFindFirstArgs<ExtArgs>>): Prisma__LawyerDocumentClient<$Result.GetResult<Prisma.$LawyerDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LawyerDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerDocumentFindFirstOrThrowArgs} args - Arguments to find a LawyerDocument
     * @example
     * // Get one LawyerDocument
     * const lawyerDocument = await prisma.lawyerDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LawyerDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, LawyerDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__LawyerDocumentClient<$Result.GetResult<Prisma.$LawyerDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LawyerDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LawyerDocuments
     * const lawyerDocuments = await prisma.lawyerDocument.findMany()
     * 
     * // Get first 10 LawyerDocuments
     * const lawyerDocuments = await prisma.lawyerDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawyerDocumentWithIdOnly = await prisma.lawyerDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LawyerDocumentFindManyArgs>(args?: SelectSubset<T, LawyerDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LawyerDocument.
     * @param {LawyerDocumentCreateArgs} args - Arguments to create a LawyerDocument.
     * @example
     * // Create one LawyerDocument
     * const LawyerDocument = await prisma.lawyerDocument.create({
     *   data: {
     *     // ... data to create a LawyerDocument
     *   }
     * })
     * 
     */
    create<T extends LawyerDocumentCreateArgs>(args: SelectSubset<T, LawyerDocumentCreateArgs<ExtArgs>>): Prisma__LawyerDocumentClient<$Result.GetResult<Prisma.$LawyerDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LawyerDocuments.
     * @param {LawyerDocumentCreateManyArgs} args - Arguments to create many LawyerDocuments.
     * @example
     * // Create many LawyerDocuments
     * const lawyerDocument = await prisma.lawyerDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LawyerDocumentCreateManyArgs>(args?: SelectSubset<T, LawyerDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LawyerDocuments and returns the data saved in the database.
     * @param {LawyerDocumentCreateManyAndReturnArgs} args - Arguments to create many LawyerDocuments.
     * @example
     * // Create many LawyerDocuments
     * const lawyerDocument = await prisma.lawyerDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LawyerDocuments and only return the `id`
     * const lawyerDocumentWithIdOnly = await prisma.lawyerDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LawyerDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, LawyerDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LawyerDocument.
     * @param {LawyerDocumentDeleteArgs} args - Arguments to delete one LawyerDocument.
     * @example
     * // Delete one LawyerDocument
     * const LawyerDocument = await prisma.lawyerDocument.delete({
     *   where: {
     *     // ... filter to delete one LawyerDocument
     *   }
     * })
     * 
     */
    delete<T extends LawyerDocumentDeleteArgs>(args: SelectSubset<T, LawyerDocumentDeleteArgs<ExtArgs>>): Prisma__LawyerDocumentClient<$Result.GetResult<Prisma.$LawyerDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LawyerDocument.
     * @param {LawyerDocumentUpdateArgs} args - Arguments to update one LawyerDocument.
     * @example
     * // Update one LawyerDocument
     * const lawyerDocument = await prisma.lawyerDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LawyerDocumentUpdateArgs>(args: SelectSubset<T, LawyerDocumentUpdateArgs<ExtArgs>>): Prisma__LawyerDocumentClient<$Result.GetResult<Prisma.$LawyerDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LawyerDocuments.
     * @param {LawyerDocumentDeleteManyArgs} args - Arguments to filter LawyerDocuments to delete.
     * @example
     * // Delete a few LawyerDocuments
     * const { count } = await prisma.lawyerDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LawyerDocumentDeleteManyArgs>(args?: SelectSubset<T, LawyerDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawyerDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LawyerDocuments
     * const lawyerDocument = await prisma.lawyerDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LawyerDocumentUpdateManyArgs>(args: SelectSubset<T, LawyerDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawyerDocuments and returns the data updated in the database.
     * @param {LawyerDocumentUpdateManyAndReturnArgs} args - Arguments to update many LawyerDocuments.
     * @example
     * // Update many LawyerDocuments
     * const lawyerDocument = await prisma.lawyerDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LawyerDocuments and only return the `id`
     * const lawyerDocumentWithIdOnly = await prisma.lawyerDocument.updateManyAndReturn({
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
    updateManyAndReturn<T extends LawyerDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, LawyerDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LawyerDocument.
     * @param {LawyerDocumentUpsertArgs} args - Arguments to update or create a LawyerDocument.
     * @example
     * // Update or create a LawyerDocument
     * const lawyerDocument = await prisma.lawyerDocument.upsert({
     *   create: {
     *     // ... data to create a LawyerDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LawyerDocument we want to update
     *   }
     * })
     */
    upsert<T extends LawyerDocumentUpsertArgs>(args: SelectSubset<T, LawyerDocumentUpsertArgs<ExtArgs>>): Prisma__LawyerDocumentClient<$Result.GetResult<Prisma.$LawyerDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LawyerDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerDocumentCountArgs} args - Arguments to filter LawyerDocuments to count.
     * @example
     * // Count the number of LawyerDocuments
     * const count = await prisma.lawyerDocument.count({
     *   where: {
     *     // ... the filter for the LawyerDocuments we want to count
     *   }
     * })
    **/
    count<T extends LawyerDocumentCountArgs>(
      args?: Subset<T, LawyerDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LawyerDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LawyerDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LawyerDocumentAggregateArgs>(args: Subset<T, LawyerDocumentAggregateArgs>): Prisma.PrismaPromise<GetLawyerDocumentAggregateType<T>>

    /**
     * Group by LawyerDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerDocumentGroupByArgs} args - Group by arguments.
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
      T extends LawyerDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LawyerDocumentGroupByArgs['orderBy'] }
        : { orderBy?: LawyerDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LawyerDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawyerDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LawyerDocument model
   */
  readonly fields: LawyerDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LawyerDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LawyerDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lawyer<T extends LawyerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LawyerDefaultArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LawyerDocument model
   */
  interface LawyerDocumentFieldRefs {
    readonly id: FieldRef<"LawyerDocument", 'Int'>
    readonly lawyerId: FieldRef<"LawyerDocument", 'Int'>
    readonly name: FieldRef<"LawyerDocument", 'String'>
    readonly type: FieldRef<"LawyerDocument", 'String'>
    readonly description: FieldRef<"LawyerDocument", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LawyerDocument findUnique
   */
  export type LawyerDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDocument
     */
    select?: LawyerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDocument
     */
    omit?: LawyerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDocumentInclude<ExtArgs> | null
    /**
     * Filter, which LawyerDocument to fetch.
     */
    where: LawyerDocumentWhereUniqueInput
  }

  /**
   * LawyerDocument findUniqueOrThrow
   */
  export type LawyerDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDocument
     */
    select?: LawyerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDocument
     */
    omit?: LawyerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDocumentInclude<ExtArgs> | null
    /**
     * Filter, which LawyerDocument to fetch.
     */
    where: LawyerDocumentWhereUniqueInput
  }

  /**
   * LawyerDocument findFirst
   */
  export type LawyerDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDocument
     */
    select?: LawyerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDocument
     */
    omit?: LawyerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDocumentInclude<ExtArgs> | null
    /**
     * Filter, which LawyerDocument to fetch.
     */
    where?: LawyerDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerDocuments to fetch.
     */
    orderBy?: LawyerDocumentOrderByWithRelationInput | LawyerDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawyerDocuments.
     */
    cursor?: LawyerDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawyerDocuments.
     */
    distinct?: LawyerDocumentScalarFieldEnum | LawyerDocumentScalarFieldEnum[]
  }

  /**
   * LawyerDocument findFirstOrThrow
   */
  export type LawyerDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDocument
     */
    select?: LawyerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDocument
     */
    omit?: LawyerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDocumentInclude<ExtArgs> | null
    /**
     * Filter, which LawyerDocument to fetch.
     */
    where?: LawyerDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerDocuments to fetch.
     */
    orderBy?: LawyerDocumentOrderByWithRelationInput | LawyerDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawyerDocuments.
     */
    cursor?: LawyerDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawyerDocuments.
     */
    distinct?: LawyerDocumentScalarFieldEnum | LawyerDocumentScalarFieldEnum[]
  }

  /**
   * LawyerDocument findMany
   */
  export type LawyerDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDocument
     */
    select?: LawyerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDocument
     */
    omit?: LawyerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDocumentInclude<ExtArgs> | null
    /**
     * Filter, which LawyerDocuments to fetch.
     */
    where?: LawyerDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerDocuments to fetch.
     */
    orderBy?: LawyerDocumentOrderByWithRelationInput | LawyerDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LawyerDocuments.
     */
    cursor?: LawyerDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerDocuments.
     */
    skip?: number
    distinct?: LawyerDocumentScalarFieldEnum | LawyerDocumentScalarFieldEnum[]
  }

  /**
   * LawyerDocument create
   */
  export type LawyerDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDocument
     */
    select?: LawyerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDocument
     */
    omit?: LawyerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a LawyerDocument.
     */
    data: XOR<LawyerDocumentCreateInput, LawyerDocumentUncheckedCreateInput>
  }

  /**
   * LawyerDocument createMany
   */
  export type LawyerDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LawyerDocuments.
     */
    data: LawyerDocumentCreateManyInput | LawyerDocumentCreateManyInput[]
  }

  /**
   * LawyerDocument createManyAndReturn
   */
  export type LawyerDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDocument
     */
    select?: LawyerDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDocument
     */
    omit?: LawyerDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many LawyerDocuments.
     */
    data: LawyerDocumentCreateManyInput | LawyerDocumentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LawyerDocument update
   */
  export type LawyerDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDocument
     */
    select?: LawyerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDocument
     */
    omit?: LawyerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a LawyerDocument.
     */
    data: XOR<LawyerDocumentUpdateInput, LawyerDocumentUncheckedUpdateInput>
    /**
     * Choose, which LawyerDocument to update.
     */
    where: LawyerDocumentWhereUniqueInput
  }

  /**
   * LawyerDocument updateMany
   */
  export type LawyerDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LawyerDocuments.
     */
    data: XOR<LawyerDocumentUpdateManyMutationInput, LawyerDocumentUncheckedUpdateManyInput>
    /**
     * Filter which LawyerDocuments to update
     */
    where?: LawyerDocumentWhereInput
    /**
     * Limit how many LawyerDocuments to update.
     */
    limit?: number
  }

  /**
   * LawyerDocument updateManyAndReturn
   */
  export type LawyerDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDocument
     */
    select?: LawyerDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDocument
     */
    omit?: LawyerDocumentOmit<ExtArgs> | null
    /**
     * The data used to update LawyerDocuments.
     */
    data: XOR<LawyerDocumentUpdateManyMutationInput, LawyerDocumentUncheckedUpdateManyInput>
    /**
     * Filter which LawyerDocuments to update
     */
    where?: LawyerDocumentWhereInput
    /**
     * Limit how many LawyerDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LawyerDocument upsert
   */
  export type LawyerDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDocument
     */
    select?: LawyerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDocument
     */
    omit?: LawyerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the LawyerDocument to update in case it exists.
     */
    where: LawyerDocumentWhereUniqueInput
    /**
     * In case the LawyerDocument found by the `where` argument doesn't exist, create a new LawyerDocument with this data.
     */
    create: XOR<LawyerDocumentCreateInput, LawyerDocumentUncheckedCreateInput>
    /**
     * In case the LawyerDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LawyerDocumentUpdateInput, LawyerDocumentUncheckedUpdateInput>
  }

  /**
   * LawyerDocument delete
   */
  export type LawyerDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDocument
     */
    select?: LawyerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDocument
     */
    omit?: LawyerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDocumentInclude<ExtArgs> | null
    /**
     * Filter which LawyerDocument to delete.
     */
    where: LawyerDocumentWhereUniqueInput
  }

  /**
   * LawyerDocument deleteMany
   */
  export type LawyerDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawyerDocuments to delete
     */
    where?: LawyerDocumentWhereInput
    /**
     * Limit how many LawyerDocuments to delete.
     */
    limit?: number
  }

  /**
   * LawyerDocument without action
   */
  export type LawyerDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerDocument
     */
    select?: LawyerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerDocument
     */
    omit?: LawyerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerDocumentInclude<ExtArgs> | null
  }


  /**
   * Model LawyerAvailability
   */

  export type AggregateLawyerAvailability = {
    _count: LawyerAvailabilityCountAggregateOutputType | null
    _avg: LawyerAvailabilityAvgAggregateOutputType | null
    _sum: LawyerAvailabilitySumAggregateOutputType | null
    _min: LawyerAvailabilityMinAggregateOutputType | null
    _max: LawyerAvailabilityMaxAggregateOutputType | null
  }

  export type LawyerAvailabilityAvgAggregateOutputType = {
    id: number | null
    lawyerId: number | null
  }

  export type LawyerAvailabilitySumAggregateOutputType = {
    id: number | null
    lawyerId: number | null
  }

  export type LawyerAvailabilityMinAggregateOutputType = {
    id: number | null
    lawyerId: number | null
    date: Date | null
  }

  export type LawyerAvailabilityMaxAggregateOutputType = {
    id: number | null
    lawyerId: number | null
    date: Date | null
  }

  export type LawyerAvailabilityCountAggregateOutputType = {
    id: number
    lawyerId: number
    date: number
    slots: number
    _all: number
  }


  export type LawyerAvailabilityAvgAggregateInputType = {
    id?: true
    lawyerId?: true
  }

  export type LawyerAvailabilitySumAggregateInputType = {
    id?: true
    lawyerId?: true
  }

  export type LawyerAvailabilityMinAggregateInputType = {
    id?: true
    lawyerId?: true
    date?: true
  }

  export type LawyerAvailabilityMaxAggregateInputType = {
    id?: true
    lawyerId?: true
    date?: true
  }

  export type LawyerAvailabilityCountAggregateInputType = {
    id?: true
    lawyerId?: true
    date?: true
    slots?: true
    _all?: true
  }

  export type LawyerAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawyerAvailability to aggregate.
     */
    where?: LawyerAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerAvailabilities to fetch.
     */
    orderBy?: LawyerAvailabilityOrderByWithRelationInput | LawyerAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LawyerAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LawyerAvailabilities
    **/
    _count?: true | LawyerAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LawyerAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LawyerAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LawyerAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LawyerAvailabilityMaxAggregateInputType
  }

  export type GetLawyerAvailabilityAggregateType<T extends LawyerAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateLawyerAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawyerAvailability[P]>
      : GetScalarType<T[P], AggregateLawyerAvailability[P]>
  }




  export type LawyerAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawyerAvailabilityWhereInput
    orderBy?: LawyerAvailabilityOrderByWithAggregationInput | LawyerAvailabilityOrderByWithAggregationInput[]
    by: LawyerAvailabilityScalarFieldEnum[] | LawyerAvailabilityScalarFieldEnum
    having?: LawyerAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LawyerAvailabilityCountAggregateInputType | true
    _avg?: LawyerAvailabilityAvgAggregateInputType
    _sum?: LawyerAvailabilitySumAggregateInputType
    _min?: LawyerAvailabilityMinAggregateInputType
    _max?: LawyerAvailabilityMaxAggregateInputType
  }

  export type LawyerAvailabilityGroupByOutputType = {
    id: number
    lawyerId: number
    date: Date
    slots: JsonValue
    _count: LawyerAvailabilityCountAggregateOutputType | null
    _avg: LawyerAvailabilityAvgAggregateOutputType | null
    _sum: LawyerAvailabilitySumAggregateOutputType | null
    _min: LawyerAvailabilityMinAggregateOutputType | null
    _max: LawyerAvailabilityMaxAggregateOutputType | null
  }

  type GetLawyerAvailabilityGroupByPayload<T extends LawyerAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LawyerAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LawyerAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LawyerAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], LawyerAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type LawyerAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyerId?: boolean
    date?: boolean
    slots?: boolean
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerAvailability"]>

  export type LawyerAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyerId?: boolean
    date?: boolean
    slots?: boolean
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerAvailability"]>

  export type LawyerAvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lawyerId?: boolean
    date?: boolean
    slots?: boolean
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyerAvailability"]>

  export type LawyerAvailabilitySelectScalar = {
    id?: boolean
    lawyerId?: boolean
    date?: boolean
    slots?: boolean
  }

  export type LawyerAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lawyerId" | "date" | "slots", ExtArgs["result"]["lawyerAvailability"]>
  export type LawyerAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }
  export type LawyerAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }
  export type LawyerAvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | LawyerDefaultArgs<ExtArgs>
  }

  export type $LawyerAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LawyerAvailability"
    objects: {
      lawyer: Prisma.$LawyerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lawyerId: number
      date: Date
      slots: Prisma.JsonValue
    }, ExtArgs["result"]["lawyerAvailability"]>
    composites: {}
  }

  type LawyerAvailabilityGetPayload<S extends boolean | null | undefined | LawyerAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$LawyerAvailabilityPayload, S>

  type LawyerAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LawyerAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LawyerAvailabilityCountAggregateInputType | true
    }

  export interface LawyerAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LawyerAvailability'], meta: { name: 'LawyerAvailability' } }
    /**
     * Find zero or one LawyerAvailability that matches the filter.
     * @param {LawyerAvailabilityFindUniqueArgs} args - Arguments to find a LawyerAvailability
     * @example
     * // Get one LawyerAvailability
     * const lawyerAvailability = await prisma.lawyerAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LawyerAvailabilityFindUniqueArgs>(args: SelectSubset<T, LawyerAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__LawyerAvailabilityClient<$Result.GetResult<Prisma.$LawyerAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LawyerAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LawyerAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a LawyerAvailability
     * @example
     * // Get one LawyerAvailability
     * const lawyerAvailability = await prisma.lawyerAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LawyerAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, LawyerAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LawyerAvailabilityClient<$Result.GetResult<Prisma.$LawyerAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LawyerAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerAvailabilityFindFirstArgs} args - Arguments to find a LawyerAvailability
     * @example
     * // Get one LawyerAvailability
     * const lawyerAvailability = await prisma.lawyerAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LawyerAvailabilityFindFirstArgs>(args?: SelectSubset<T, LawyerAvailabilityFindFirstArgs<ExtArgs>>): Prisma__LawyerAvailabilityClient<$Result.GetResult<Prisma.$LawyerAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LawyerAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerAvailabilityFindFirstOrThrowArgs} args - Arguments to find a LawyerAvailability
     * @example
     * // Get one LawyerAvailability
     * const lawyerAvailability = await prisma.lawyerAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LawyerAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, LawyerAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__LawyerAvailabilityClient<$Result.GetResult<Prisma.$LawyerAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LawyerAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LawyerAvailabilities
     * const lawyerAvailabilities = await prisma.lawyerAvailability.findMany()
     * 
     * // Get first 10 LawyerAvailabilities
     * const lawyerAvailabilities = await prisma.lawyerAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawyerAvailabilityWithIdOnly = await prisma.lawyerAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LawyerAvailabilityFindManyArgs>(args?: SelectSubset<T, LawyerAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LawyerAvailability.
     * @param {LawyerAvailabilityCreateArgs} args - Arguments to create a LawyerAvailability.
     * @example
     * // Create one LawyerAvailability
     * const LawyerAvailability = await prisma.lawyerAvailability.create({
     *   data: {
     *     // ... data to create a LawyerAvailability
     *   }
     * })
     * 
     */
    create<T extends LawyerAvailabilityCreateArgs>(args: SelectSubset<T, LawyerAvailabilityCreateArgs<ExtArgs>>): Prisma__LawyerAvailabilityClient<$Result.GetResult<Prisma.$LawyerAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LawyerAvailabilities.
     * @param {LawyerAvailabilityCreateManyArgs} args - Arguments to create many LawyerAvailabilities.
     * @example
     * // Create many LawyerAvailabilities
     * const lawyerAvailability = await prisma.lawyerAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LawyerAvailabilityCreateManyArgs>(args?: SelectSubset<T, LawyerAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LawyerAvailabilities and returns the data saved in the database.
     * @param {LawyerAvailabilityCreateManyAndReturnArgs} args - Arguments to create many LawyerAvailabilities.
     * @example
     * // Create many LawyerAvailabilities
     * const lawyerAvailability = await prisma.lawyerAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LawyerAvailabilities and only return the `id`
     * const lawyerAvailabilityWithIdOnly = await prisma.lawyerAvailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LawyerAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, LawyerAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerAvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LawyerAvailability.
     * @param {LawyerAvailabilityDeleteArgs} args - Arguments to delete one LawyerAvailability.
     * @example
     * // Delete one LawyerAvailability
     * const LawyerAvailability = await prisma.lawyerAvailability.delete({
     *   where: {
     *     // ... filter to delete one LawyerAvailability
     *   }
     * })
     * 
     */
    delete<T extends LawyerAvailabilityDeleteArgs>(args: SelectSubset<T, LawyerAvailabilityDeleteArgs<ExtArgs>>): Prisma__LawyerAvailabilityClient<$Result.GetResult<Prisma.$LawyerAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LawyerAvailability.
     * @param {LawyerAvailabilityUpdateArgs} args - Arguments to update one LawyerAvailability.
     * @example
     * // Update one LawyerAvailability
     * const lawyerAvailability = await prisma.lawyerAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LawyerAvailabilityUpdateArgs>(args: SelectSubset<T, LawyerAvailabilityUpdateArgs<ExtArgs>>): Prisma__LawyerAvailabilityClient<$Result.GetResult<Prisma.$LawyerAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LawyerAvailabilities.
     * @param {LawyerAvailabilityDeleteManyArgs} args - Arguments to filter LawyerAvailabilities to delete.
     * @example
     * // Delete a few LawyerAvailabilities
     * const { count } = await prisma.lawyerAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LawyerAvailabilityDeleteManyArgs>(args?: SelectSubset<T, LawyerAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawyerAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LawyerAvailabilities
     * const lawyerAvailability = await prisma.lawyerAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LawyerAvailabilityUpdateManyArgs>(args: SelectSubset<T, LawyerAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LawyerAvailabilities and returns the data updated in the database.
     * @param {LawyerAvailabilityUpdateManyAndReturnArgs} args - Arguments to update many LawyerAvailabilities.
     * @example
     * // Update many LawyerAvailabilities
     * const lawyerAvailability = await prisma.lawyerAvailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LawyerAvailabilities and only return the `id`
     * const lawyerAvailabilityWithIdOnly = await prisma.lawyerAvailability.updateManyAndReturn({
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
    updateManyAndReturn<T extends LawyerAvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, LawyerAvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerAvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LawyerAvailability.
     * @param {LawyerAvailabilityUpsertArgs} args - Arguments to update or create a LawyerAvailability.
     * @example
     * // Update or create a LawyerAvailability
     * const lawyerAvailability = await prisma.lawyerAvailability.upsert({
     *   create: {
     *     // ... data to create a LawyerAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LawyerAvailability we want to update
     *   }
     * })
     */
    upsert<T extends LawyerAvailabilityUpsertArgs>(args: SelectSubset<T, LawyerAvailabilityUpsertArgs<ExtArgs>>): Prisma__LawyerAvailabilityClient<$Result.GetResult<Prisma.$LawyerAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LawyerAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerAvailabilityCountArgs} args - Arguments to filter LawyerAvailabilities to count.
     * @example
     * // Count the number of LawyerAvailabilities
     * const count = await prisma.lawyerAvailability.count({
     *   where: {
     *     // ... the filter for the LawyerAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends LawyerAvailabilityCountArgs>(
      args?: Subset<T, LawyerAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LawyerAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LawyerAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LawyerAvailabilityAggregateArgs>(args: Subset<T, LawyerAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetLawyerAvailabilityAggregateType<T>>

    /**
     * Group by LawyerAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerAvailabilityGroupByArgs} args - Group by arguments.
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
      T extends LawyerAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LawyerAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: LawyerAvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LawyerAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawyerAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LawyerAvailability model
   */
  readonly fields: LawyerAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LawyerAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LawyerAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lawyer<T extends LawyerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LawyerDefaultArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LawyerAvailability model
   */
  interface LawyerAvailabilityFieldRefs {
    readonly id: FieldRef<"LawyerAvailability", 'Int'>
    readonly lawyerId: FieldRef<"LawyerAvailability", 'Int'>
    readonly date: FieldRef<"LawyerAvailability", 'DateTime'>
    readonly slots: FieldRef<"LawyerAvailability", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * LawyerAvailability findUnique
   */
  export type LawyerAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerAvailability
     */
    select?: LawyerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerAvailability
     */
    omit?: LawyerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which LawyerAvailability to fetch.
     */
    where: LawyerAvailabilityWhereUniqueInput
  }

  /**
   * LawyerAvailability findUniqueOrThrow
   */
  export type LawyerAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerAvailability
     */
    select?: LawyerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerAvailability
     */
    omit?: LawyerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which LawyerAvailability to fetch.
     */
    where: LawyerAvailabilityWhereUniqueInput
  }

  /**
   * LawyerAvailability findFirst
   */
  export type LawyerAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerAvailability
     */
    select?: LawyerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerAvailability
     */
    omit?: LawyerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which LawyerAvailability to fetch.
     */
    where?: LawyerAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerAvailabilities to fetch.
     */
    orderBy?: LawyerAvailabilityOrderByWithRelationInput | LawyerAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawyerAvailabilities.
     */
    cursor?: LawyerAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawyerAvailabilities.
     */
    distinct?: LawyerAvailabilityScalarFieldEnum | LawyerAvailabilityScalarFieldEnum[]
  }

  /**
   * LawyerAvailability findFirstOrThrow
   */
  export type LawyerAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerAvailability
     */
    select?: LawyerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerAvailability
     */
    omit?: LawyerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which LawyerAvailability to fetch.
     */
    where?: LawyerAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerAvailabilities to fetch.
     */
    orderBy?: LawyerAvailabilityOrderByWithRelationInput | LawyerAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LawyerAvailabilities.
     */
    cursor?: LawyerAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LawyerAvailabilities.
     */
    distinct?: LawyerAvailabilityScalarFieldEnum | LawyerAvailabilityScalarFieldEnum[]
  }

  /**
   * LawyerAvailability findMany
   */
  export type LawyerAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerAvailability
     */
    select?: LawyerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerAvailability
     */
    omit?: LawyerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which LawyerAvailabilities to fetch.
     */
    where?: LawyerAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LawyerAvailabilities to fetch.
     */
    orderBy?: LawyerAvailabilityOrderByWithRelationInput | LawyerAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LawyerAvailabilities.
     */
    cursor?: LawyerAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LawyerAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LawyerAvailabilities.
     */
    skip?: number
    distinct?: LawyerAvailabilityScalarFieldEnum | LawyerAvailabilityScalarFieldEnum[]
  }

  /**
   * LawyerAvailability create
   */
  export type LawyerAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerAvailability
     */
    select?: LawyerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerAvailability
     */
    omit?: LawyerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a LawyerAvailability.
     */
    data: XOR<LawyerAvailabilityCreateInput, LawyerAvailabilityUncheckedCreateInput>
  }

  /**
   * LawyerAvailability createMany
   */
  export type LawyerAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LawyerAvailabilities.
     */
    data: LawyerAvailabilityCreateManyInput | LawyerAvailabilityCreateManyInput[]
  }

  /**
   * LawyerAvailability createManyAndReturn
   */
  export type LawyerAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerAvailability
     */
    select?: LawyerAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerAvailability
     */
    omit?: LawyerAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many LawyerAvailabilities.
     */
    data: LawyerAvailabilityCreateManyInput | LawyerAvailabilityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LawyerAvailability update
   */
  export type LawyerAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerAvailability
     */
    select?: LawyerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerAvailability
     */
    omit?: LawyerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a LawyerAvailability.
     */
    data: XOR<LawyerAvailabilityUpdateInput, LawyerAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which LawyerAvailability to update.
     */
    where: LawyerAvailabilityWhereUniqueInput
  }

  /**
   * LawyerAvailability updateMany
   */
  export type LawyerAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LawyerAvailabilities.
     */
    data: XOR<LawyerAvailabilityUpdateManyMutationInput, LawyerAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which LawyerAvailabilities to update
     */
    where?: LawyerAvailabilityWhereInput
    /**
     * Limit how many LawyerAvailabilities to update.
     */
    limit?: number
  }

  /**
   * LawyerAvailability updateManyAndReturn
   */
  export type LawyerAvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerAvailability
     */
    select?: LawyerAvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerAvailability
     */
    omit?: LawyerAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update LawyerAvailabilities.
     */
    data: XOR<LawyerAvailabilityUpdateManyMutationInput, LawyerAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which LawyerAvailabilities to update
     */
    where?: LawyerAvailabilityWhereInput
    /**
     * Limit how many LawyerAvailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerAvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LawyerAvailability upsert
   */
  export type LawyerAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerAvailability
     */
    select?: LawyerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerAvailability
     */
    omit?: LawyerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the LawyerAvailability to update in case it exists.
     */
    where: LawyerAvailabilityWhereUniqueInput
    /**
     * In case the LawyerAvailability found by the `where` argument doesn't exist, create a new LawyerAvailability with this data.
     */
    create: XOR<LawyerAvailabilityCreateInput, LawyerAvailabilityUncheckedCreateInput>
    /**
     * In case the LawyerAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LawyerAvailabilityUpdateInput, LawyerAvailabilityUncheckedUpdateInput>
  }

  /**
   * LawyerAvailability delete
   */
  export type LawyerAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerAvailability
     */
    select?: LawyerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerAvailability
     */
    omit?: LawyerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which LawyerAvailability to delete.
     */
    where: LawyerAvailabilityWhereUniqueInput
  }

  /**
   * LawyerAvailability deleteMany
   */
  export type LawyerAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LawyerAvailabilities to delete
     */
    where?: LawyerAvailabilityWhereInput
    /**
     * Limit how many LawyerAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * LawyerAvailability without action
   */
  export type LawyerAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerAvailability
     */
    select?: LawyerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LawyerAvailability
     */
    omit?: LawyerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Case
   */

  export type AggregateCase = {
    _count: CaseCountAggregateOutputType | null
    _avg: CaseAvgAggregateOutputType | null
    _sum: CaseSumAggregateOutputType | null
    _min: CaseMinAggregateOutputType | null
    _max: CaseMaxAggregateOutputType | null
  }

  export type CaseAvgAggregateOutputType = {
    assignedTo: number | null
  }

  export type CaseSumAggregateOutputType = {
    assignedTo: number | null
  }

  export type CaseMinAggregateOutputType = {
    id: string | null
    reportDate: Date | null
    status: string | null
    severity: string | null
    type: string | null
    location: string | null
    assignedTo: number | null
    clientName: string | null
    clientContact: string | null
    lastUpdated: Date | null
  }

  export type CaseMaxAggregateOutputType = {
    id: string | null
    reportDate: Date | null
    status: string | null
    severity: string | null
    type: string | null
    location: string | null
    assignedTo: number | null
    clientName: string | null
    clientContact: string | null
    lastUpdated: Date | null
  }

  export type CaseCountAggregateOutputType = {
    id: number
    reportDate: number
    status: number
    severity: number
    type: number
    location: number
    assignedTo: number
    clientName: number
    clientContact: number
    lastUpdated: number
    _all: number
  }


  export type CaseAvgAggregateInputType = {
    assignedTo?: true
  }

  export type CaseSumAggregateInputType = {
    assignedTo?: true
  }

  export type CaseMinAggregateInputType = {
    id?: true
    reportDate?: true
    status?: true
    severity?: true
    type?: true
    location?: true
    assignedTo?: true
    clientName?: true
    clientContact?: true
    lastUpdated?: true
  }

  export type CaseMaxAggregateInputType = {
    id?: true
    reportDate?: true
    status?: true
    severity?: true
    type?: true
    location?: true
    assignedTo?: true
    clientName?: true
    clientContact?: true
    lastUpdated?: true
  }

  export type CaseCountAggregateInputType = {
    id?: true
    reportDate?: true
    status?: true
    severity?: true
    type?: true
    location?: true
    assignedTo?: true
    clientName?: true
    clientContact?: true
    lastUpdated?: true
    _all?: true
  }

  export type CaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Case to aggregate.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cases
    **/
    _count?: true | CaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaseMaxAggregateInputType
  }

  export type GetCaseAggregateType<T extends CaseAggregateArgs> = {
        [P in keyof T & keyof AggregateCase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCase[P]>
      : GetScalarType<T[P], AggregateCase[P]>
  }




  export type CaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithAggregationInput | CaseOrderByWithAggregationInput[]
    by: CaseScalarFieldEnum[] | CaseScalarFieldEnum
    having?: CaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaseCountAggregateInputType | true
    _avg?: CaseAvgAggregateInputType
    _sum?: CaseSumAggregateInputType
    _min?: CaseMinAggregateInputType
    _max?: CaseMaxAggregateInputType
  }

  export type CaseGroupByOutputType = {
    id: string
    reportDate: Date
    status: string
    severity: string
    type: string
    location: string
    assignedTo: number | null
    clientName: string
    clientContact: string | null
    lastUpdated: Date
    _count: CaseCountAggregateOutputType | null
    _avg: CaseAvgAggregateOutputType | null
    _sum: CaseSumAggregateOutputType | null
    _min: CaseMinAggregateOutputType | null
    _max: CaseMaxAggregateOutputType | null
  }

  type GetCaseGroupByPayload<T extends CaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaseGroupByOutputType[P]>
            : GetScalarType<T[P], CaseGroupByOutputType[P]>
        }
      >
    >


  export type CaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportDate?: boolean
    status?: boolean
    severity?: boolean
    type?: boolean
    location?: boolean
    assignedTo?: boolean
    clientName?: boolean
    clientContact?: boolean
    lastUpdated?: boolean
    adminUser?: boolean | Case$adminUserArgs<ExtArgs>
    notes?: boolean | Case$notesArgs<ExtArgs>
    actions?: boolean | Case$actionsArgs<ExtArgs>
    _count?: boolean | CaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["case"]>

  export type CaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportDate?: boolean
    status?: boolean
    severity?: boolean
    type?: boolean
    location?: boolean
    assignedTo?: boolean
    clientName?: boolean
    clientContact?: boolean
    lastUpdated?: boolean
    adminUser?: boolean | Case$adminUserArgs<ExtArgs>
  }, ExtArgs["result"]["case"]>

  export type CaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportDate?: boolean
    status?: boolean
    severity?: boolean
    type?: boolean
    location?: boolean
    assignedTo?: boolean
    clientName?: boolean
    clientContact?: boolean
    lastUpdated?: boolean
    adminUser?: boolean | Case$adminUserArgs<ExtArgs>
  }, ExtArgs["result"]["case"]>

  export type CaseSelectScalar = {
    id?: boolean
    reportDate?: boolean
    status?: boolean
    severity?: boolean
    type?: boolean
    location?: boolean
    assignedTo?: boolean
    clientName?: boolean
    clientContact?: boolean
    lastUpdated?: boolean
  }

  export type CaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportDate" | "status" | "severity" | "type" | "location" | "assignedTo" | "clientName" | "clientContact" | "lastUpdated", ExtArgs["result"]["case"]>
  export type CaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminUser?: boolean | Case$adminUserArgs<ExtArgs>
    notes?: boolean | Case$notesArgs<ExtArgs>
    actions?: boolean | Case$actionsArgs<ExtArgs>
    _count?: boolean | CaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminUser?: boolean | Case$adminUserArgs<ExtArgs>
  }
  export type CaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminUser?: boolean | Case$adminUserArgs<ExtArgs>
  }

  export type $CasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Case"
    objects: {
      adminUser: Prisma.$AdminUserPayload<ExtArgs> | null
      notes: Prisma.$CaseNotePayload<ExtArgs>[]
      actions: Prisma.$CaseActionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reportDate: Date
      status: string
      severity: string
      type: string
      location: string
      assignedTo: number | null
      clientName: string
      clientContact: string | null
      lastUpdated: Date
    }, ExtArgs["result"]["case"]>
    composites: {}
  }

  type CaseGetPayload<S extends boolean | null | undefined | CaseDefaultArgs> = $Result.GetResult<Prisma.$CasePayload, S>

  type CaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaseCountAggregateInputType | true
    }

  export interface CaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Case'], meta: { name: 'Case' } }
    /**
     * Find zero or one Case that matches the filter.
     * @param {CaseFindUniqueArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaseFindUniqueArgs>(args: SelectSubset<T, CaseFindUniqueArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Case that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaseFindUniqueOrThrowArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaseFindUniqueOrThrowArgs>(args: SelectSubset<T, CaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Case that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindFirstArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaseFindFirstArgs>(args?: SelectSubset<T, CaseFindFirstArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Case that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindFirstOrThrowArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaseFindFirstOrThrowArgs>(args?: SelectSubset<T, CaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cases
     * const cases = await prisma.case.findMany()
     * 
     * // Get first 10 Cases
     * const cases = await prisma.case.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caseWithIdOnly = await prisma.case.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaseFindManyArgs>(args?: SelectSubset<T, CaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Case.
     * @param {CaseCreateArgs} args - Arguments to create a Case.
     * @example
     * // Create one Case
     * const Case = await prisma.case.create({
     *   data: {
     *     // ... data to create a Case
     *   }
     * })
     * 
     */
    create<T extends CaseCreateArgs>(args: SelectSubset<T, CaseCreateArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cases.
     * @param {CaseCreateManyArgs} args - Arguments to create many Cases.
     * @example
     * // Create many Cases
     * const case = await prisma.case.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaseCreateManyArgs>(args?: SelectSubset<T, CaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cases and returns the data saved in the database.
     * @param {CaseCreateManyAndReturnArgs} args - Arguments to create many Cases.
     * @example
     * // Create many Cases
     * const case = await prisma.case.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cases and only return the `id`
     * const caseWithIdOnly = await prisma.case.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaseCreateManyAndReturnArgs>(args?: SelectSubset<T, CaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Case.
     * @param {CaseDeleteArgs} args - Arguments to delete one Case.
     * @example
     * // Delete one Case
     * const Case = await prisma.case.delete({
     *   where: {
     *     // ... filter to delete one Case
     *   }
     * })
     * 
     */
    delete<T extends CaseDeleteArgs>(args: SelectSubset<T, CaseDeleteArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Case.
     * @param {CaseUpdateArgs} args - Arguments to update one Case.
     * @example
     * // Update one Case
     * const case = await prisma.case.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaseUpdateArgs>(args: SelectSubset<T, CaseUpdateArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cases.
     * @param {CaseDeleteManyArgs} args - Arguments to filter Cases to delete.
     * @example
     * // Delete a few Cases
     * const { count } = await prisma.case.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaseDeleteManyArgs>(args?: SelectSubset<T, CaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cases
     * const case = await prisma.case.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaseUpdateManyArgs>(args: SelectSubset<T, CaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cases and returns the data updated in the database.
     * @param {CaseUpdateManyAndReturnArgs} args - Arguments to update many Cases.
     * @example
     * // Update many Cases
     * const case = await prisma.case.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cases and only return the `id`
     * const caseWithIdOnly = await prisma.case.updateManyAndReturn({
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
    updateManyAndReturn<T extends CaseUpdateManyAndReturnArgs>(args: SelectSubset<T, CaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Case.
     * @param {CaseUpsertArgs} args - Arguments to update or create a Case.
     * @example
     * // Update or create a Case
     * const case = await prisma.case.upsert({
     *   create: {
     *     // ... data to create a Case
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Case we want to update
     *   }
     * })
     */
    upsert<T extends CaseUpsertArgs>(args: SelectSubset<T, CaseUpsertArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseCountArgs} args - Arguments to filter Cases to count.
     * @example
     * // Count the number of Cases
     * const count = await prisma.case.count({
     *   where: {
     *     // ... the filter for the Cases we want to count
     *   }
     * })
    **/
    count<T extends CaseCountArgs>(
      args?: Subset<T, CaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CaseAggregateArgs>(args: Subset<T, CaseAggregateArgs>): Prisma.PrismaPromise<GetCaseAggregateType<T>>

    /**
     * Group by Case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseGroupByArgs} args - Group by arguments.
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
      T extends CaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaseGroupByArgs['orderBy'] }
        : { orderBy?: CaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Case model
   */
  readonly fields: CaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Case.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adminUser<T extends Case$adminUserArgs<ExtArgs> = {}>(args?: Subset<T, Case$adminUserArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notes<T extends Case$notesArgs<ExtArgs> = {}>(args?: Subset<T, Case$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actions<T extends Case$actionsArgs<ExtArgs> = {}>(args?: Subset<T, Case$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Case model
   */
  interface CaseFieldRefs {
    readonly id: FieldRef<"Case", 'String'>
    readonly reportDate: FieldRef<"Case", 'DateTime'>
    readonly status: FieldRef<"Case", 'String'>
    readonly severity: FieldRef<"Case", 'String'>
    readonly type: FieldRef<"Case", 'String'>
    readonly location: FieldRef<"Case", 'String'>
    readonly assignedTo: FieldRef<"Case", 'Int'>
    readonly clientName: FieldRef<"Case", 'String'>
    readonly clientContact: FieldRef<"Case", 'String'>
    readonly lastUpdated: FieldRef<"Case", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Case findUnique
   */
  export type CaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case findUniqueOrThrow
   */
  export type CaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case findFirst
   */
  export type CaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cases.
     */
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case findFirstOrThrow
   */
  export type CaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cases.
     */
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case findMany
   */
  export type CaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Cases to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case create
   */
  export type CaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Case.
     */
    data: XOR<CaseCreateInput, CaseUncheckedCreateInput>
  }

  /**
   * Case createMany
   */
  export type CaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cases.
     */
    data: CaseCreateManyInput | CaseCreateManyInput[]
  }

  /**
   * Case createManyAndReturn
   */
  export type CaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * The data used to create many Cases.
     */
    data: CaseCreateManyInput | CaseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Case update
   */
  export type CaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Case.
     */
    data: XOR<CaseUpdateInput, CaseUncheckedUpdateInput>
    /**
     * Choose, which Case to update.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case updateMany
   */
  export type CaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cases.
     */
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyInput>
    /**
     * Filter which Cases to update
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to update.
     */
    limit?: number
  }

  /**
   * Case updateManyAndReturn
   */
  export type CaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * The data used to update Cases.
     */
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyInput>
    /**
     * Filter which Cases to update
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Case upsert
   */
  export type CaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Case to update in case it exists.
     */
    where: CaseWhereUniqueInput
    /**
     * In case the Case found by the `where` argument doesn't exist, create a new Case with this data.
     */
    create: XOR<CaseCreateInput, CaseUncheckedCreateInput>
    /**
     * In case the Case was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaseUpdateInput, CaseUncheckedUpdateInput>
  }

  /**
   * Case delete
   */
  export type CaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter which Case to delete.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case deleteMany
   */
  export type CaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cases to delete
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to delete.
     */
    limit?: number
  }

  /**
   * Case.adminUser
   */
  export type Case$adminUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    where?: AdminUserWhereInput
  }

  /**
   * Case.notes
   */
  export type Case$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseNote
     */
    select?: CaseNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseNote
     */
    omit?: CaseNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseNoteInclude<ExtArgs> | null
    where?: CaseNoteWhereInput
    orderBy?: CaseNoteOrderByWithRelationInput | CaseNoteOrderByWithRelationInput[]
    cursor?: CaseNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseNoteScalarFieldEnum | CaseNoteScalarFieldEnum[]
  }

  /**
   * Case.actions
   */
  export type Case$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseAction
     */
    select?: CaseActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseAction
     */
    omit?: CaseActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseActionInclude<ExtArgs> | null
    where?: CaseActionWhereInput
    orderBy?: CaseActionOrderByWithRelationInput | CaseActionOrderByWithRelationInput[]
    cursor?: CaseActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseActionScalarFieldEnum | CaseActionScalarFieldEnum[]
  }

  /**
   * Case without action
   */
  export type CaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
  }


  /**
   * Model CaseNote
   */

  export type AggregateCaseNote = {
    _count: CaseNoteCountAggregateOutputType | null
    _avg: CaseNoteAvgAggregateOutputType | null
    _sum: CaseNoteSumAggregateOutputType | null
    _min: CaseNoteMinAggregateOutputType | null
    _max: CaseNoteMaxAggregateOutputType | null
  }

  export type CaseNoteAvgAggregateOutputType = {
    id: number | null
  }

  export type CaseNoteSumAggregateOutputType = {
    id: number | null
  }

  export type CaseNoteMinAggregateOutputType = {
    id: number | null
    caseId: string | null
    date: Date | null
    author: string | null
    content: string | null
  }

  export type CaseNoteMaxAggregateOutputType = {
    id: number | null
    caseId: string | null
    date: Date | null
    author: string | null
    content: string | null
  }

  export type CaseNoteCountAggregateOutputType = {
    id: number
    caseId: number
    date: number
    author: number
    content: number
    _all: number
  }


  export type CaseNoteAvgAggregateInputType = {
    id?: true
  }

  export type CaseNoteSumAggregateInputType = {
    id?: true
  }

  export type CaseNoteMinAggregateInputType = {
    id?: true
    caseId?: true
    date?: true
    author?: true
    content?: true
  }

  export type CaseNoteMaxAggregateInputType = {
    id?: true
    caseId?: true
    date?: true
    author?: true
    content?: true
  }

  export type CaseNoteCountAggregateInputType = {
    id?: true
    caseId?: true
    date?: true
    author?: true
    content?: true
    _all?: true
  }

  export type CaseNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseNote to aggregate.
     */
    where?: CaseNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseNotes to fetch.
     */
    orderBy?: CaseNoteOrderByWithRelationInput | CaseNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaseNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaseNotes
    **/
    _count?: true | CaseNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaseNoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaseNoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaseNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaseNoteMaxAggregateInputType
  }

  export type GetCaseNoteAggregateType<T extends CaseNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateCaseNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaseNote[P]>
      : GetScalarType<T[P], AggregateCaseNote[P]>
  }




  export type CaseNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseNoteWhereInput
    orderBy?: CaseNoteOrderByWithAggregationInput | CaseNoteOrderByWithAggregationInput[]
    by: CaseNoteScalarFieldEnum[] | CaseNoteScalarFieldEnum
    having?: CaseNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaseNoteCountAggregateInputType | true
    _avg?: CaseNoteAvgAggregateInputType
    _sum?: CaseNoteSumAggregateInputType
    _min?: CaseNoteMinAggregateInputType
    _max?: CaseNoteMaxAggregateInputType
  }

  export type CaseNoteGroupByOutputType = {
    id: number
    caseId: string
    date: Date
    author: string
    content: string
    _count: CaseNoteCountAggregateOutputType | null
    _avg: CaseNoteAvgAggregateOutputType | null
    _sum: CaseNoteSumAggregateOutputType | null
    _min: CaseNoteMinAggregateOutputType | null
    _max: CaseNoteMaxAggregateOutputType | null
  }

  type GetCaseNoteGroupByPayload<T extends CaseNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaseNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaseNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaseNoteGroupByOutputType[P]>
            : GetScalarType<T[P], CaseNoteGroupByOutputType[P]>
        }
      >
    >


  export type CaseNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseId?: boolean
    date?: boolean
    author?: boolean
    content?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseNote"]>

  export type CaseNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseId?: boolean
    date?: boolean
    author?: boolean
    content?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseNote"]>

  export type CaseNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseId?: boolean
    date?: boolean
    author?: boolean
    content?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseNote"]>

  export type CaseNoteSelectScalar = {
    id?: boolean
    caseId?: boolean
    date?: boolean
    author?: boolean
    content?: boolean
  }

  export type CaseNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "caseId" | "date" | "author" | "content", ExtArgs["result"]["caseNote"]>
  export type CaseNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type CaseNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type CaseNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }

  export type $CaseNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CaseNote"
    objects: {
      case: Prisma.$CasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      caseId: string
      date: Date
      author: string
      content: string
    }, ExtArgs["result"]["caseNote"]>
    composites: {}
  }

  type CaseNoteGetPayload<S extends boolean | null | undefined | CaseNoteDefaultArgs> = $Result.GetResult<Prisma.$CaseNotePayload, S>

  type CaseNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaseNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaseNoteCountAggregateInputType | true
    }

  export interface CaseNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CaseNote'], meta: { name: 'CaseNote' } }
    /**
     * Find zero or one CaseNote that matches the filter.
     * @param {CaseNoteFindUniqueArgs} args - Arguments to find a CaseNote
     * @example
     * // Get one CaseNote
     * const caseNote = await prisma.caseNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaseNoteFindUniqueArgs>(args: SelectSubset<T, CaseNoteFindUniqueArgs<ExtArgs>>): Prisma__CaseNoteClient<$Result.GetResult<Prisma.$CaseNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CaseNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaseNoteFindUniqueOrThrowArgs} args - Arguments to find a CaseNote
     * @example
     * // Get one CaseNote
     * const caseNote = await prisma.caseNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaseNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, CaseNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaseNoteClient<$Result.GetResult<Prisma.$CaseNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseNoteFindFirstArgs} args - Arguments to find a CaseNote
     * @example
     * // Get one CaseNote
     * const caseNote = await prisma.caseNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaseNoteFindFirstArgs>(args?: SelectSubset<T, CaseNoteFindFirstArgs<ExtArgs>>): Prisma__CaseNoteClient<$Result.GetResult<Prisma.$CaseNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseNoteFindFirstOrThrowArgs} args - Arguments to find a CaseNote
     * @example
     * // Get one CaseNote
     * const caseNote = await prisma.caseNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaseNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, CaseNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaseNoteClient<$Result.GetResult<Prisma.$CaseNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CaseNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaseNotes
     * const caseNotes = await prisma.caseNote.findMany()
     * 
     * // Get first 10 CaseNotes
     * const caseNotes = await prisma.caseNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caseNoteWithIdOnly = await prisma.caseNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaseNoteFindManyArgs>(args?: SelectSubset<T, CaseNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CaseNote.
     * @param {CaseNoteCreateArgs} args - Arguments to create a CaseNote.
     * @example
     * // Create one CaseNote
     * const CaseNote = await prisma.caseNote.create({
     *   data: {
     *     // ... data to create a CaseNote
     *   }
     * })
     * 
     */
    create<T extends CaseNoteCreateArgs>(args: SelectSubset<T, CaseNoteCreateArgs<ExtArgs>>): Prisma__CaseNoteClient<$Result.GetResult<Prisma.$CaseNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CaseNotes.
     * @param {CaseNoteCreateManyArgs} args - Arguments to create many CaseNotes.
     * @example
     * // Create many CaseNotes
     * const caseNote = await prisma.caseNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaseNoteCreateManyArgs>(args?: SelectSubset<T, CaseNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CaseNotes and returns the data saved in the database.
     * @param {CaseNoteCreateManyAndReturnArgs} args - Arguments to create many CaseNotes.
     * @example
     * // Create many CaseNotes
     * const caseNote = await prisma.caseNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CaseNotes and only return the `id`
     * const caseNoteWithIdOnly = await prisma.caseNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaseNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, CaseNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CaseNote.
     * @param {CaseNoteDeleteArgs} args - Arguments to delete one CaseNote.
     * @example
     * // Delete one CaseNote
     * const CaseNote = await prisma.caseNote.delete({
     *   where: {
     *     // ... filter to delete one CaseNote
     *   }
     * })
     * 
     */
    delete<T extends CaseNoteDeleteArgs>(args: SelectSubset<T, CaseNoteDeleteArgs<ExtArgs>>): Prisma__CaseNoteClient<$Result.GetResult<Prisma.$CaseNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CaseNote.
     * @param {CaseNoteUpdateArgs} args - Arguments to update one CaseNote.
     * @example
     * // Update one CaseNote
     * const caseNote = await prisma.caseNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaseNoteUpdateArgs>(args: SelectSubset<T, CaseNoteUpdateArgs<ExtArgs>>): Prisma__CaseNoteClient<$Result.GetResult<Prisma.$CaseNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CaseNotes.
     * @param {CaseNoteDeleteManyArgs} args - Arguments to filter CaseNotes to delete.
     * @example
     * // Delete a few CaseNotes
     * const { count } = await prisma.caseNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaseNoteDeleteManyArgs>(args?: SelectSubset<T, CaseNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaseNotes
     * const caseNote = await prisma.caseNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaseNoteUpdateManyArgs>(args: SelectSubset<T, CaseNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseNotes and returns the data updated in the database.
     * @param {CaseNoteUpdateManyAndReturnArgs} args - Arguments to update many CaseNotes.
     * @example
     * // Update many CaseNotes
     * const caseNote = await prisma.caseNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CaseNotes and only return the `id`
     * const caseNoteWithIdOnly = await prisma.caseNote.updateManyAndReturn({
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
    updateManyAndReturn<T extends CaseNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, CaseNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CaseNote.
     * @param {CaseNoteUpsertArgs} args - Arguments to update or create a CaseNote.
     * @example
     * // Update or create a CaseNote
     * const caseNote = await prisma.caseNote.upsert({
     *   create: {
     *     // ... data to create a CaseNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaseNote we want to update
     *   }
     * })
     */
    upsert<T extends CaseNoteUpsertArgs>(args: SelectSubset<T, CaseNoteUpsertArgs<ExtArgs>>): Prisma__CaseNoteClient<$Result.GetResult<Prisma.$CaseNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CaseNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseNoteCountArgs} args - Arguments to filter CaseNotes to count.
     * @example
     * // Count the number of CaseNotes
     * const count = await prisma.caseNote.count({
     *   where: {
     *     // ... the filter for the CaseNotes we want to count
     *   }
     * })
    **/
    count<T extends CaseNoteCountArgs>(
      args?: Subset<T, CaseNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaseNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaseNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CaseNoteAggregateArgs>(args: Subset<T, CaseNoteAggregateArgs>): Prisma.PrismaPromise<GetCaseNoteAggregateType<T>>

    /**
     * Group by CaseNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseNoteGroupByArgs} args - Group by arguments.
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
      T extends CaseNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaseNoteGroupByArgs['orderBy'] }
        : { orderBy?: CaseNoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CaseNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CaseNote model
   */
  readonly fields: CaseNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CaseNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaseNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    case<T extends CaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaseDefaultArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CaseNote model
   */
  interface CaseNoteFieldRefs {
    readonly id: FieldRef<"CaseNote", 'Int'>
    readonly caseId: FieldRef<"CaseNote", 'String'>
    readonly date: FieldRef<"CaseNote", 'DateTime'>
    readonly author: FieldRef<"CaseNote", 'String'>
    readonly content: FieldRef<"CaseNote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CaseNote findUnique
   */
  export type CaseNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseNote
     */
    select?: CaseNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseNote
     */
    omit?: CaseNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseNoteInclude<ExtArgs> | null
    /**
     * Filter, which CaseNote to fetch.
     */
    where: CaseNoteWhereUniqueInput
  }

  /**
   * CaseNote findUniqueOrThrow
   */
  export type CaseNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseNote
     */
    select?: CaseNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseNote
     */
    omit?: CaseNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseNoteInclude<ExtArgs> | null
    /**
     * Filter, which CaseNote to fetch.
     */
    where: CaseNoteWhereUniqueInput
  }

  /**
   * CaseNote findFirst
   */
  export type CaseNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseNote
     */
    select?: CaseNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseNote
     */
    omit?: CaseNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseNoteInclude<ExtArgs> | null
    /**
     * Filter, which CaseNote to fetch.
     */
    where?: CaseNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseNotes to fetch.
     */
    orderBy?: CaseNoteOrderByWithRelationInput | CaseNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseNotes.
     */
    cursor?: CaseNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseNotes.
     */
    distinct?: CaseNoteScalarFieldEnum | CaseNoteScalarFieldEnum[]
  }

  /**
   * CaseNote findFirstOrThrow
   */
  export type CaseNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseNote
     */
    select?: CaseNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseNote
     */
    omit?: CaseNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseNoteInclude<ExtArgs> | null
    /**
     * Filter, which CaseNote to fetch.
     */
    where?: CaseNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseNotes to fetch.
     */
    orderBy?: CaseNoteOrderByWithRelationInput | CaseNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseNotes.
     */
    cursor?: CaseNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseNotes.
     */
    distinct?: CaseNoteScalarFieldEnum | CaseNoteScalarFieldEnum[]
  }

  /**
   * CaseNote findMany
   */
  export type CaseNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseNote
     */
    select?: CaseNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseNote
     */
    omit?: CaseNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseNoteInclude<ExtArgs> | null
    /**
     * Filter, which CaseNotes to fetch.
     */
    where?: CaseNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseNotes to fetch.
     */
    orderBy?: CaseNoteOrderByWithRelationInput | CaseNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaseNotes.
     */
    cursor?: CaseNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseNotes.
     */
    skip?: number
    distinct?: CaseNoteScalarFieldEnum | CaseNoteScalarFieldEnum[]
  }

  /**
   * CaseNote create
   */
  export type CaseNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseNote
     */
    select?: CaseNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseNote
     */
    omit?: CaseNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a CaseNote.
     */
    data: XOR<CaseNoteCreateInput, CaseNoteUncheckedCreateInput>
  }

  /**
   * CaseNote createMany
   */
  export type CaseNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CaseNotes.
     */
    data: CaseNoteCreateManyInput | CaseNoteCreateManyInput[]
  }

  /**
   * CaseNote createManyAndReturn
   */
  export type CaseNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseNote
     */
    select?: CaseNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaseNote
     */
    omit?: CaseNoteOmit<ExtArgs> | null
    /**
     * The data used to create many CaseNotes.
     */
    data: CaseNoteCreateManyInput | CaseNoteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaseNote update
   */
  export type CaseNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseNote
     */
    select?: CaseNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseNote
     */
    omit?: CaseNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a CaseNote.
     */
    data: XOR<CaseNoteUpdateInput, CaseNoteUncheckedUpdateInput>
    /**
     * Choose, which CaseNote to update.
     */
    where: CaseNoteWhereUniqueInput
  }

  /**
   * CaseNote updateMany
   */
  export type CaseNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CaseNotes.
     */
    data: XOR<CaseNoteUpdateManyMutationInput, CaseNoteUncheckedUpdateManyInput>
    /**
     * Filter which CaseNotes to update
     */
    where?: CaseNoteWhereInput
    /**
     * Limit how many CaseNotes to update.
     */
    limit?: number
  }

  /**
   * CaseNote updateManyAndReturn
   */
  export type CaseNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseNote
     */
    select?: CaseNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaseNote
     */
    omit?: CaseNoteOmit<ExtArgs> | null
    /**
     * The data used to update CaseNotes.
     */
    data: XOR<CaseNoteUpdateManyMutationInput, CaseNoteUncheckedUpdateManyInput>
    /**
     * Filter which CaseNotes to update
     */
    where?: CaseNoteWhereInput
    /**
     * Limit how many CaseNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaseNote upsert
   */
  export type CaseNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseNote
     */
    select?: CaseNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseNote
     */
    omit?: CaseNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the CaseNote to update in case it exists.
     */
    where: CaseNoteWhereUniqueInput
    /**
     * In case the CaseNote found by the `where` argument doesn't exist, create a new CaseNote with this data.
     */
    create: XOR<CaseNoteCreateInput, CaseNoteUncheckedCreateInput>
    /**
     * In case the CaseNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaseNoteUpdateInput, CaseNoteUncheckedUpdateInput>
  }

  /**
   * CaseNote delete
   */
  export type CaseNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseNote
     */
    select?: CaseNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseNote
     */
    omit?: CaseNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseNoteInclude<ExtArgs> | null
    /**
     * Filter which CaseNote to delete.
     */
    where: CaseNoteWhereUniqueInput
  }

  /**
   * CaseNote deleteMany
   */
  export type CaseNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseNotes to delete
     */
    where?: CaseNoteWhereInput
    /**
     * Limit how many CaseNotes to delete.
     */
    limit?: number
  }

  /**
   * CaseNote without action
   */
  export type CaseNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseNote
     */
    select?: CaseNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseNote
     */
    omit?: CaseNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseNoteInclude<ExtArgs> | null
  }


  /**
   * Model CaseAction
   */

  export type AggregateCaseAction = {
    _count: CaseActionCountAggregateOutputType | null
    _avg: CaseActionAvgAggregateOutputType | null
    _sum: CaseActionSumAggregateOutputType | null
    _min: CaseActionMinAggregateOutputType | null
    _max: CaseActionMaxAggregateOutputType | null
  }

  export type CaseActionAvgAggregateOutputType = {
    id: number | null
  }

  export type CaseActionSumAggregateOutputType = {
    id: number | null
  }

  export type CaseActionMinAggregateOutputType = {
    id: number | null
    caseId: string | null
    type: string | null
    status: string | null
    dueDate: Date | null
    assignedTo: string | null
  }

  export type CaseActionMaxAggregateOutputType = {
    id: number | null
    caseId: string | null
    type: string | null
    status: string | null
    dueDate: Date | null
    assignedTo: string | null
  }

  export type CaseActionCountAggregateOutputType = {
    id: number
    caseId: number
    type: number
    status: number
    dueDate: number
    assignedTo: number
    _all: number
  }


  export type CaseActionAvgAggregateInputType = {
    id?: true
  }

  export type CaseActionSumAggregateInputType = {
    id?: true
  }

  export type CaseActionMinAggregateInputType = {
    id?: true
    caseId?: true
    type?: true
    status?: true
    dueDate?: true
    assignedTo?: true
  }

  export type CaseActionMaxAggregateInputType = {
    id?: true
    caseId?: true
    type?: true
    status?: true
    dueDate?: true
    assignedTo?: true
  }

  export type CaseActionCountAggregateInputType = {
    id?: true
    caseId?: true
    type?: true
    status?: true
    dueDate?: true
    assignedTo?: true
    _all?: true
  }

  export type CaseActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseAction to aggregate.
     */
    where?: CaseActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseActions to fetch.
     */
    orderBy?: CaseActionOrderByWithRelationInput | CaseActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaseActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaseActions
    **/
    _count?: true | CaseActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaseActionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaseActionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaseActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaseActionMaxAggregateInputType
  }

  export type GetCaseActionAggregateType<T extends CaseActionAggregateArgs> = {
        [P in keyof T & keyof AggregateCaseAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaseAction[P]>
      : GetScalarType<T[P], AggregateCaseAction[P]>
  }




  export type CaseActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseActionWhereInput
    orderBy?: CaseActionOrderByWithAggregationInput | CaseActionOrderByWithAggregationInput[]
    by: CaseActionScalarFieldEnum[] | CaseActionScalarFieldEnum
    having?: CaseActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaseActionCountAggregateInputType | true
    _avg?: CaseActionAvgAggregateInputType
    _sum?: CaseActionSumAggregateInputType
    _min?: CaseActionMinAggregateInputType
    _max?: CaseActionMaxAggregateInputType
  }

  export type CaseActionGroupByOutputType = {
    id: number
    caseId: string
    type: string
    status: string
    dueDate: Date
    assignedTo: string
    _count: CaseActionCountAggregateOutputType | null
    _avg: CaseActionAvgAggregateOutputType | null
    _sum: CaseActionSumAggregateOutputType | null
    _min: CaseActionMinAggregateOutputType | null
    _max: CaseActionMaxAggregateOutputType | null
  }

  type GetCaseActionGroupByPayload<T extends CaseActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaseActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaseActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaseActionGroupByOutputType[P]>
            : GetScalarType<T[P], CaseActionGroupByOutputType[P]>
        }
      >
    >


  export type CaseActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseId?: boolean
    type?: boolean
    status?: boolean
    dueDate?: boolean
    assignedTo?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseAction"]>

  export type CaseActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseId?: boolean
    type?: boolean
    status?: boolean
    dueDate?: boolean
    assignedTo?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseAction"]>

  export type CaseActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseId?: boolean
    type?: boolean
    status?: boolean
    dueDate?: boolean
    assignedTo?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseAction"]>

  export type CaseActionSelectScalar = {
    id?: boolean
    caseId?: boolean
    type?: boolean
    status?: boolean
    dueDate?: boolean
    assignedTo?: boolean
  }

  export type CaseActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "caseId" | "type" | "status" | "dueDate" | "assignedTo", ExtArgs["result"]["caseAction"]>
  export type CaseActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type CaseActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type CaseActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }

  export type $CaseActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CaseAction"
    objects: {
      case: Prisma.$CasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      caseId: string
      type: string
      status: string
      dueDate: Date
      assignedTo: string
    }, ExtArgs["result"]["caseAction"]>
    composites: {}
  }

  type CaseActionGetPayload<S extends boolean | null | undefined | CaseActionDefaultArgs> = $Result.GetResult<Prisma.$CaseActionPayload, S>

  type CaseActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaseActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaseActionCountAggregateInputType | true
    }

  export interface CaseActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CaseAction'], meta: { name: 'CaseAction' } }
    /**
     * Find zero or one CaseAction that matches the filter.
     * @param {CaseActionFindUniqueArgs} args - Arguments to find a CaseAction
     * @example
     * // Get one CaseAction
     * const caseAction = await prisma.caseAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaseActionFindUniqueArgs>(args: SelectSubset<T, CaseActionFindUniqueArgs<ExtArgs>>): Prisma__CaseActionClient<$Result.GetResult<Prisma.$CaseActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CaseAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaseActionFindUniqueOrThrowArgs} args - Arguments to find a CaseAction
     * @example
     * // Get one CaseAction
     * const caseAction = await prisma.caseAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaseActionFindUniqueOrThrowArgs>(args: SelectSubset<T, CaseActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaseActionClient<$Result.GetResult<Prisma.$CaseActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseActionFindFirstArgs} args - Arguments to find a CaseAction
     * @example
     * // Get one CaseAction
     * const caseAction = await prisma.caseAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaseActionFindFirstArgs>(args?: SelectSubset<T, CaseActionFindFirstArgs<ExtArgs>>): Prisma__CaseActionClient<$Result.GetResult<Prisma.$CaseActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseActionFindFirstOrThrowArgs} args - Arguments to find a CaseAction
     * @example
     * // Get one CaseAction
     * const caseAction = await prisma.caseAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaseActionFindFirstOrThrowArgs>(args?: SelectSubset<T, CaseActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaseActionClient<$Result.GetResult<Prisma.$CaseActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CaseActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaseActions
     * const caseActions = await prisma.caseAction.findMany()
     * 
     * // Get first 10 CaseActions
     * const caseActions = await prisma.caseAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caseActionWithIdOnly = await prisma.caseAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaseActionFindManyArgs>(args?: SelectSubset<T, CaseActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CaseAction.
     * @param {CaseActionCreateArgs} args - Arguments to create a CaseAction.
     * @example
     * // Create one CaseAction
     * const CaseAction = await prisma.caseAction.create({
     *   data: {
     *     // ... data to create a CaseAction
     *   }
     * })
     * 
     */
    create<T extends CaseActionCreateArgs>(args: SelectSubset<T, CaseActionCreateArgs<ExtArgs>>): Prisma__CaseActionClient<$Result.GetResult<Prisma.$CaseActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CaseActions.
     * @param {CaseActionCreateManyArgs} args - Arguments to create many CaseActions.
     * @example
     * // Create many CaseActions
     * const caseAction = await prisma.caseAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaseActionCreateManyArgs>(args?: SelectSubset<T, CaseActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CaseActions and returns the data saved in the database.
     * @param {CaseActionCreateManyAndReturnArgs} args - Arguments to create many CaseActions.
     * @example
     * // Create many CaseActions
     * const caseAction = await prisma.caseAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CaseActions and only return the `id`
     * const caseActionWithIdOnly = await prisma.caseAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaseActionCreateManyAndReturnArgs>(args?: SelectSubset<T, CaseActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CaseAction.
     * @param {CaseActionDeleteArgs} args - Arguments to delete one CaseAction.
     * @example
     * // Delete one CaseAction
     * const CaseAction = await prisma.caseAction.delete({
     *   where: {
     *     // ... filter to delete one CaseAction
     *   }
     * })
     * 
     */
    delete<T extends CaseActionDeleteArgs>(args: SelectSubset<T, CaseActionDeleteArgs<ExtArgs>>): Prisma__CaseActionClient<$Result.GetResult<Prisma.$CaseActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CaseAction.
     * @param {CaseActionUpdateArgs} args - Arguments to update one CaseAction.
     * @example
     * // Update one CaseAction
     * const caseAction = await prisma.caseAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaseActionUpdateArgs>(args: SelectSubset<T, CaseActionUpdateArgs<ExtArgs>>): Prisma__CaseActionClient<$Result.GetResult<Prisma.$CaseActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CaseActions.
     * @param {CaseActionDeleteManyArgs} args - Arguments to filter CaseActions to delete.
     * @example
     * // Delete a few CaseActions
     * const { count } = await prisma.caseAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaseActionDeleteManyArgs>(args?: SelectSubset<T, CaseActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaseActions
     * const caseAction = await prisma.caseAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaseActionUpdateManyArgs>(args: SelectSubset<T, CaseActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseActions and returns the data updated in the database.
     * @param {CaseActionUpdateManyAndReturnArgs} args - Arguments to update many CaseActions.
     * @example
     * // Update many CaseActions
     * const caseAction = await prisma.caseAction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CaseActions and only return the `id`
     * const caseActionWithIdOnly = await prisma.caseAction.updateManyAndReturn({
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
    updateManyAndReturn<T extends CaseActionUpdateManyAndReturnArgs>(args: SelectSubset<T, CaseActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CaseAction.
     * @param {CaseActionUpsertArgs} args - Arguments to update or create a CaseAction.
     * @example
     * // Update or create a CaseAction
     * const caseAction = await prisma.caseAction.upsert({
     *   create: {
     *     // ... data to create a CaseAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaseAction we want to update
     *   }
     * })
     */
    upsert<T extends CaseActionUpsertArgs>(args: SelectSubset<T, CaseActionUpsertArgs<ExtArgs>>): Prisma__CaseActionClient<$Result.GetResult<Prisma.$CaseActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CaseActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseActionCountArgs} args - Arguments to filter CaseActions to count.
     * @example
     * // Count the number of CaseActions
     * const count = await prisma.caseAction.count({
     *   where: {
     *     // ... the filter for the CaseActions we want to count
     *   }
     * })
    **/
    count<T extends CaseActionCountArgs>(
      args?: Subset<T, CaseActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaseActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaseAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CaseActionAggregateArgs>(args: Subset<T, CaseActionAggregateArgs>): Prisma.PrismaPromise<GetCaseActionAggregateType<T>>

    /**
     * Group by CaseAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseActionGroupByArgs} args - Group by arguments.
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
      T extends CaseActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaseActionGroupByArgs['orderBy'] }
        : { orderBy?: CaseActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CaseActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CaseAction model
   */
  readonly fields: CaseActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CaseAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaseActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    case<T extends CaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaseDefaultArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CaseAction model
   */
  interface CaseActionFieldRefs {
    readonly id: FieldRef<"CaseAction", 'Int'>
    readonly caseId: FieldRef<"CaseAction", 'String'>
    readonly type: FieldRef<"CaseAction", 'String'>
    readonly status: FieldRef<"CaseAction", 'String'>
    readonly dueDate: FieldRef<"CaseAction", 'DateTime'>
    readonly assignedTo: FieldRef<"CaseAction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CaseAction findUnique
   */
  export type CaseActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseAction
     */
    select?: CaseActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseAction
     */
    omit?: CaseActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseActionInclude<ExtArgs> | null
    /**
     * Filter, which CaseAction to fetch.
     */
    where: CaseActionWhereUniqueInput
  }

  /**
   * CaseAction findUniqueOrThrow
   */
  export type CaseActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseAction
     */
    select?: CaseActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseAction
     */
    omit?: CaseActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseActionInclude<ExtArgs> | null
    /**
     * Filter, which CaseAction to fetch.
     */
    where: CaseActionWhereUniqueInput
  }

  /**
   * CaseAction findFirst
   */
  export type CaseActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseAction
     */
    select?: CaseActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseAction
     */
    omit?: CaseActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseActionInclude<ExtArgs> | null
    /**
     * Filter, which CaseAction to fetch.
     */
    where?: CaseActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseActions to fetch.
     */
    orderBy?: CaseActionOrderByWithRelationInput | CaseActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseActions.
     */
    cursor?: CaseActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseActions.
     */
    distinct?: CaseActionScalarFieldEnum | CaseActionScalarFieldEnum[]
  }

  /**
   * CaseAction findFirstOrThrow
   */
  export type CaseActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseAction
     */
    select?: CaseActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseAction
     */
    omit?: CaseActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseActionInclude<ExtArgs> | null
    /**
     * Filter, which CaseAction to fetch.
     */
    where?: CaseActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseActions to fetch.
     */
    orderBy?: CaseActionOrderByWithRelationInput | CaseActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseActions.
     */
    cursor?: CaseActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseActions.
     */
    distinct?: CaseActionScalarFieldEnum | CaseActionScalarFieldEnum[]
  }

  /**
   * CaseAction findMany
   */
  export type CaseActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseAction
     */
    select?: CaseActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseAction
     */
    omit?: CaseActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseActionInclude<ExtArgs> | null
    /**
     * Filter, which CaseActions to fetch.
     */
    where?: CaseActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseActions to fetch.
     */
    orderBy?: CaseActionOrderByWithRelationInput | CaseActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaseActions.
     */
    cursor?: CaseActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseActions.
     */
    skip?: number
    distinct?: CaseActionScalarFieldEnum | CaseActionScalarFieldEnum[]
  }

  /**
   * CaseAction create
   */
  export type CaseActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseAction
     */
    select?: CaseActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseAction
     */
    omit?: CaseActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseActionInclude<ExtArgs> | null
    /**
     * The data needed to create a CaseAction.
     */
    data: XOR<CaseActionCreateInput, CaseActionUncheckedCreateInput>
  }

  /**
   * CaseAction createMany
   */
  export type CaseActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CaseActions.
     */
    data: CaseActionCreateManyInput | CaseActionCreateManyInput[]
  }

  /**
   * CaseAction createManyAndReturn
   */
  export type CaseActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseAction
     */
    select?: CaseActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaseAction
     */
    omit?: CaseActionOmit<ExtArgs> | null
    /**
     * The data used to create many CaseActions.
     */
    data: CaseActionCreateManyInput | CaseActionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaseAction update
   */
  export type CaseActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseAction
     */
    select?: CaseActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseAction
     */
    omit?: CaseActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseActionInclude<ExtArgs> | null
    /**
     * The data needed to update a CaseAction.
     */
    data: XOR<CaseActionUpdateInput, CaseActionUncheckedUpdateInput>
    /**
     * Choose, which CaseAction to update.
     */
    where: CaseActionWhereUniqueInput
  }

  /**
   * CaseAction updateMany
   */
  export type CaseActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CaseActions.
     */
    data: XOR<CaseActionUpdateManyMutationInput, CaseActionUncheckedUpdateManyInput>
    /**
     * Filter which CaseActions to update
     */
    where?: CaseActionWhereInput
    /**
     * Limit how many CaseActions to update.
     */
    limit?: number
  }

  /**
   * CaseAction updateManyAndReturn
   */
  export type CaseActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseAction
     */
    select?: CaseActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaseAction
     */
    omit?: CaseActionOmit<ExtArgs> | null
    /**
     * The data used to update CaseActions.
     */
    data: XOR<CaseActionUpdateManyMutationInput, CaseActionUncheckedUpdateManyInput>
    /**
     * Filter which CaseActions to update
     */
    where?: CaseActionWhereInput
    /**
     * Limit how many CaseActions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaseAction upsert
   */
  export type CaseActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseAction
     */
    select?: CaseActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseAction
     */
    omit?: CaseActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseActionInclude<ExtArgs> | null
    /**
     * The filter to search for the CaseAction to update in case it exists.
     */
    where: CaseActionWhereUniqueInput
    /**
     * In case the CaseAction found by the `where` argument doesn't exist, create a new CaseAction with this data.
     */
    create: XOR<CaseActionCreateInput, CaseActionUncheckedCreateInput>
    /**
     * In case the CaseAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaseActionUpdateInput, CaseActionUncheckedUpdateInput>
  }

  /**
   * CaseAction delete
   */
  export type CaseActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseAction
     */
    select?: CaseActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseAction
     */
    omit?: CaseActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseActionInclude<ExtArgs> | null
    /**
     * Filter which CaseAction to delete.
     */
    where: CaseActionWhereUniqueInput
  }

  /**
   * CaseAction deleteMany
   */
  export type CaseActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseActions to delete
     */
    where?: CaseActionWhereInput
    /**
     * Limit how many CaseActions to delete.
     */
    limit?: number
  }

  /**
   * CaseAction without action
   */
  export type CaseActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseAction
     */
    select?: CaseActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseAction
     */
    omit?: CaseActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseActionInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    assignedTo: number | null
  }

  export type ReportSumAggregateOutputType = {
    assignedTo: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    reportDate: Date | null
    reportType: string | null
    incidentType: string | null
    location: string | null
    status: string | null
    severity: string | null
    hasEvidence: boolean | null
    hasWitnesses: boolean | null
    immediateDanger: boolean | null
    clientName: string | null
    clientContact: string | null
    assignedTo: number | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    reportDate: Date | null
    reportType: string | null
    incidentType: string | null
    location: string | null
    status: string | null
    severity: string | null
    hasEvidence: boolean | null
    hasWitnesses: boolean | null
    immediateDanger: boolean | null
    clientName: string | null
    clientContact: string | null
    assignedTo: number | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    reportDate: number
    reportType: number
    incidentType: number
    location: number
    status: number
    severity: number
    hasEvidence: number
    hasWitnesses: number
    immediateDanger: number
    clientName: number
    clientContact: number
    assignedTo: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    assignedTo?: true
  }

  export type ReportSumAggregateInputType = {
    assignedTo?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    reportDate?: true
    reportType?: true
    incidentType?: true
    location?: true
    status?: true
    severity?: true
    hasEvidence?: true
    hasWitnesses?: true
    immediateDanger?: true
    clientName?: true
    clientContact?: true
    assignedTo?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    reportDate?: true
    reportType?: true
    incidentType?: true
    location?: true
    status?: true
    severity?: true
    hasEvidence?: true
    hasWitnesses?: true
    immediateDanger?: true
    clientName?: true
    clientContact?: true
    assignedTo?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    reportDate?: true
    reportType?: true
    incidentType?: true
    location?: true
    status?: true
    severity?: true
    hasEvidence?: true
    hasWitnesses?: true
    immediateDanger?: true
    clientName?: true
    clientContact?: true
    assignedTo?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    reportDate: Date
    reportType: string
    incidentType: string
    location: string
    status: string
    severity: string
    hasEvidence: boolean
    hasWitnesses: boolean
    immediateDanger: boolean
    clientName: string | null
    clientContact: string | null
    assignedTo: number | null
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportDate?: boolean
    reportType?: boolean
    incidentType?: boolean
    location?: boolean
    status?: boolean
    severity?: boolean
    hasEvidence?: boolean
    hasWitnesses?: boolean
    immediateDanger?: boolean
    clientName?: boolean
    clientContact?: boolean
    assignedTo?: boolean
    adminUser?: boolean | Report$adminUserArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportDate?: boolean
    reportType?: boolean
    incidentType?: boolean
    location?: boolean
    status?: boolean
    severity?: boolean
    hasEvidence?: boolean
    hasWitnesses?: boolean
    immediateDanger?: boolean
    clientName?: boolean
    clientContact?: boolean
    assignedTo?: boolean
    adminUser?: boolean | Report$adminUserArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportDate?: boolean
    reportType?: boolean
    incidentType?: boolean
    location?: boolean
    status?: boolean
    severity?: boolean
    hasEvidence?: boolean
    hasWitnesses?: boolean
    immediateDanger?: boolean
    clientName?: boolean
    clientContact?: boolean
    assignedTo?: boolean
    adminUser?: boolean | Report$adminUserArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    reportDate?: boolean
    reportType?: boolean
    incidentType?: boolean
    location?: boolean
    status?: boolean
    severity?: boolean
    hasEvidence?: boolean
    hasWitnesses?: boolean
    immediateDanger?: boolean
    clientName?: boolean
    clientContact?: boolean
    assignedTo?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportDate" | "reportType" | "incidentType" | "location" | "status" | "severity" | "hasEvidence" | "hasWitnesses" | "immediateDanger" | "clientName" | "clientContact" | "assignedTo", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminUser?: boolean | Report$adminUserArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminUser?: boolean | Report$adminUserArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminUser?: boolean | Report$adminUserArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      adminUser: Prisma.$AdminUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reportDate: Date
      reportType: string
      incidentType: string
      location: string
      status: string
      severity: string
      hasEvidence: boolean
      hasWitnesses: boolean
      immediateDanger: boolean
      clientName: string | null
      clientContact: string | null
      assignedTo: number | null
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adminUser<T extends Report$adminUserArgs<ExtArgs> = {}>(args?: Subset<T, Report$adminUserArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly reportDate: FieldRef<"Report", 'DateTime'>
    readonly reportType: FieldRef<"Report", 'String'>
    readonly incidentType: FieldRef<"Report", 'String'>
    readonly location: FieldRef<"Report", 'String'>
    readonly status: FieldRef<"Report", 'String'>
    readonly severity: FieldRef<"Report", 'String'>
    readonly hasEvidence: FieldRef<"Report", 'Boolean'>
    readonly hasWitnesses: FieldRef<"Report", 'Boolean'>
    readonly immediateDanger: FieldRef<"Report", 'Boolean'>
    readonly clientName: FieldRef<"Report", 'String'>
    readonly clientContact: FieldRef<"Report", 'String'>
    readonly assignedTo: FieldRef<"Report", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report.adminUser
   */
  export type Report$adminUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    where?: AdminUserWhereInput
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model EmergencyContact
   */

  export type AggregateEmergencyContact = {
    _count: EmergencyContactCountAggregateOutputType | null
    _avg: EmergencyContactAvgAggregateOutputType | null
    _sum: EmergencyContactSumAggregateOutputType | null
    _min: EmergencyContactMinAggregateOutputType | null
    _max: EmergencyContactMaxAggregateOutputType | null
  }

  export type EmergencyContactAvgAggregateOutputType = {
    id: number | null
  }

  export type EmergencyContactSumAggregateOutputType = {
    id: number | null
  }

  export type EmergencyContactMinAggregateOutputType = {
    id: number | null
    name: string | null
    number: string | null
    category: string | null
    region: string | null
  }

  export type EmergencyContactMaxAggregateOutputType = {
    id: number | null
    name: string | null
    number: string | null
    category: string | null
    region: string | null
  }

  export type EmergencyContactCountAggregateOutputType = {
    id: number
    name: number
    number: number
    category: number
    region: number
    _all: number
  }


  export type EmergencyContactAvgAggregateInputType = {
    id?: true
  }

  export type EmergencyContactSumAggregateInputType = {
    id?: true
  }

  export type EmergencyContactMinAggregateInputType = {
    id?: true
    name?: true
    number?: true
    category?: true
    region?: true
  }

  export type EmergencyContactMaxAggregateInputType = {
    id?: true
    name?: true
    number?: true
    category?: true
    region?: true
  }

  export type EmergencyContactCountAggregateInputType = {
    id?: true
    name?: true
    number?: true
    category?: true
    region?: true
    _all?: true
  }

  export type EmergencyContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyContact to aggregate.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmergencyContacts
    **/
    _count?: true | EmergencyContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmergencyContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmergencyContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmergencyContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmergencyContactMaxAggregateInputType
  }

  export type GetEmergencyContactAggregateType<T extends EmergencyContactAggregateArgs> = {
        [P in keyof T & keyof AggregateEmergencyContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmergencyContact[P]>
      : GetScalarType<T[P], AggregateEmergencyContact[P]>
  }




  export type EmergencyContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyContactWhereInput
    orderBy?: EmergencyContactOrderByWithAggregationInput | EmergencyContactOrderByWithAggregationInput[]
    by: EmergencyContactScalarFieldEnum[] | EmergencyContactScalarFieldEnum
    having?: EmergencyContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmergencyContactCountAggregateInputType | true
    _avg?: EmergencyContactAvgAggregateInputType
    _sum?: EmergencyContactSumAggregateInputType
    _min?: EmergencyContactMinAggregateInputType
    _max?: EmergencyContactMaxAggregateInputType
  }

  export type EmergencyContactGroupByOutputType = {
    id: number
    name: string
    number: string
    category: string
    region: string | null
    _count: EmergencyContactCountAggregateOutputType | null
    _avg: EmergencyContactAvgAggregateOutputType | null
    _sum: EmergencyContactSumAggregateOutputType | null
    _min: EmergencyContactMinAggregateOutputType | null
    _max: EmergencyContactMaxAggregateOutputType | null
  }

  type GetEmergencyContactGroupByPayload<T extends EmergencyContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmergencyContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmergencyContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmergencyContactGroupByOutputType[P]>
            : GetScalarType<T[P], EmergencyContactGroupByOutputType[P]>
        }
      >
    >


  export type EmergencyContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    category?: boolean
    region?: boolean
  }, ExtArgs["result"]["emergencyContact"]>

  export type EmergencyContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    category?: boolean
    region?: boolean
  }, ExtArgs["result"]["emergencyContact"]>

  export type EmergencyContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    category?: boolean
    region?: boolean
  }, ExtArgs["result"]["emergencyContact"]>

  export type EmergencyContactSelectScalar = {
    id?: boolean
    name?: boolean
    number?: boolean
    category?: boolean
    region?: boolean
  }

  export type EmergencyContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "number" | "category" | "region", ExtArgs["result"]["emergencyContact"]>

  export type $EmergencyContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmergencyContact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      number: string
      category: string
      region: string | null
    }, ExtArgs["result"]["emergencyContact"]>
    composites: {}
  }

  type EmergencyContactGetPayload<S extends boolean | null | undefined | EmergencyContactDefaultArgs> = $Result.GetResult<Prisma.$EmergencyContactPayload, S>

  type EmergencyContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmergencyContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmergencyContactCountAggregateInputType | true
    }

  export interface EmergencyContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmergencyContact'], meta: { name: 'EmergencyContact' } }
    /**
     * Find zero or one EmergencyContact that matches the filter.
     * @param {EmergencyContactFindUniqueArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmergencyContactFindUniqueArgs>(args: SelectSubset<T, EmergencyContactFindUniqueArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmergencyContact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmergencyContactFindUniqueOrThrowArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmergencyContactFindUniqueOrThrowArgs>(args: SelectSubset<T, EmergencyContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactFindFirstArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmergencyContactFindFirstArgs>(args?: SelectSubset<T, EmergencyContactFindFirstArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactFindFirstOrThrowArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmergencyContactFindFirstOrThrowArgs>(args?: SelectSubset<T, EmergencyContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmergencyContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmergencyContacts
     * const emergencyContacts = await prisma.emergencyContact.findMany()
     * 
     * // Get first 10 EmergencyContacts
     * const emergencyContacts = await prisma.emergencyContact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emergencyContactWithIdOnly = await prisma.emergencyContact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmergencyContactFindManyArgs>(args?: SelectSubset<T, EmergencyContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmergencyContact.
     * @param {EmergencyContactCreateArgs} args - Arguments to create a EmergencyContact.
     * @example
     * // Create one EmergencyContact
     * const EmergencyContact = await prisma.emergencyContact.create({
     *   data: {
     *     // ... data to create a EmergencyContact
     *   }
     * })
     * 
     */
    create<T extends EmergencyContactCreateArgs>(args: SelectSubset<T, EmergencyContactCreateArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmergencyContacts.
     * @param {EmergencyContactCreateManyArgs} args - Arguments to create many EmergencyContacts.
     * @example
     * // Create many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmergencyContactCreateManyArgs>(args?: SelectSubset<T, EmergencyContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmergencyContacts and returns the data saved in the database.
     * @param {EmergencyContactCreateManyAndReturnArgs} args - Arguments to create many EmergencyContacts.
     * @example
     * // Create many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmergencyContacts and only return the `id`
     * const emergencyContactWithIdOnly = await prisma.emergencyContact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmergencyContactCreateManyAndReturnArgs>(args?: SelectSubset<T, EmergencyContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmergencyContact.
     * @param {EmergencyContactDeleteArgs} args - Arguments to delete one EmergencyContact.
     * @example
     * // Delete one EmergencyContact
     * const EmergencyContact = await prisma.emergencyContact.delete({
     *   where: {
     *     // ... filter to delete one EmergencyContact
     *   }
     * })
     * 
     */
    delete<T extends EmergencyContactDeleteArgs>(args: SelectSubset<T, EmergencyContactDeleteArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmergencyContact.
     * @param {EmergencyContactUpdateArgs} args - Arguments to update one EmergencyContact.
     * @example
     * // Update one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmergencyContactUpdateArgs>(args: SelectSubset<T, EmergencyContactUpdateArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmergencyContacts.
     * @param {EmergencyContactDeleteManyArgs} args - Arguments to filter EmergencyContacts to delete.
     * @example
     * // Delete a few EmergencyContacts
     * const { count } = await prisma.emergencyContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmergencyContactDeleteManyArgs>(args?: SelectSubset<T, EmergencyContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmergencyContactUpdateManyArgs>(args: SelectSubset<T, EmergencyContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyContacts and returns the data updated in the database.
     * @param {EmergencyContactUpdateManyAndReturnArgs} args - Arguments to update many EmergencyContacts.
     * @example
     * // Update many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmergencyContacts and only return the `id`
     * const emergencyContactWithIdOnly = await prisma.emergencyContact.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmergencyContactUpdateManyAndReturnArgs>(args: SelectSubset<T, EmergencyContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmergencyContact.
     * @param {EmergencyContactUpsertArgs} args - Arguments to update or create a EmergencyContact.
     * @example
     * // Update or create a EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.upsert({
     *   create: {
     *     // ... data to create a EmergencyContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmergencyContact we want to update
     *   }
     * })
     */
    upsert<T extends EmergencyContactUpsertArgs>(args: SelectSubset<T, EmergencyContactUpsertArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmergencyContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactCountArgs} args - Arguments to filter EmergencyContacts to count.
     * @example
     * // Count the number of EmergencyContacts
     * const count = await prisma.emergencyContact.count({
     *   where: {
     *     // ... the filter for the EmergencyContacts we want to count
     *   }
     * })
    **/
    count<T extends EmergencyContactCountArgs>(
      args?: Subset<T, EmergencyContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmergencyContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmergencyContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmergencyContactAggregateArgs>(args: Subset<T, EmergencyContactAggregateArgs>): Prisma.PrismaPromise<GetEmergencyContactAggregateType<T>>

    /**
     * Group by EmergencyContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactGroupByArgs} args - Group by arguments.
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
      T extends EmergencyContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmergencyContactGroupByArgs['orderBy'] }
        : { orderBy?: EmergencyContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmergencyContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmergencyContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmergencyContact model
   */
  readonly fields: EmergencyContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmergencyContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmergencyContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the EmergencyContact model
   */
  interface EmergencyContactFieldRefs {
    readonly id: FieldRef<"EmergencyContact", 'Int'>
    readonly name: FieldRef<"EmergencyContact", 'String'>
    readonly number: FieldRef<"EmergencyContact", 'String'>
    readonly category: FieldRef<"EmergencyContact", 'String'>
    readonly region: FieldRef<"EmergencyContact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmergencyContact findUnique
   */
  export type EmergencyContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact findUniqueOrThrow
   */
  export type EmergencyContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact findFirst
   */
  export type EmergencyContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyContacts.
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyContacts.
     */
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * EmergencyContact findFirstOrThrow
   */
  export type EmergencyContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyContacts.
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyContacts.
     */
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * EmergencyContact findMany
   */
  export type EmergencyContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Filter, which EmergencyContacts to fetch.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmergencyContacts.
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * EmergencyContact create
   */
  export type EmergencyContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * The data needed to create a EmergencyContact.
     */
    data: XOR<EmergencyContactCreateInput, EmergencyContactUncheckedCreateInput>
  }

  /**
   * EmergencyContact createMany
   */
  export type EmergencyContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmergencyContacts.
     */
    data: EmergencyContactCreateManyInput | EmergencyContactCreateManyInput[]
  }

  /**
   * EmergencyContact createManyAndReturn
   */
  export type EmergencyContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * The data used to create many EmergencyContacts.
     */
    data: EmergencyContactCreateManyInput | EmergencyContactCreateManyInput[]
  }

  /**
   * EmergencyContact update
   */
  export type EmergencyContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * The data needed to update a EmergencyContact.
     */
    data: XOR<EmergencyContactUpdateInput, EmergencyContactUncheckedUpdateInput>
    /**
     * Choose, which EmergencyContact to update.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact updateMany
   */
  export type EmergencyContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmergencyContacts.
     */
    data: XOR<EmergencyContactUpdateManyMutationInput, EmergencyContactUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyContacts to update
     */
    where?: EmergencyContactWhereInput
    /**
     * Limit how many EmergencyContacts to update.
     */
    limit?: number
  }

  /**
   * EmergencyContact updateManyAndReturn
   */
  export type EmergencyContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * The data used to update EmergencyContacts.
     */
    data: XOR<EmergencyContactUpdateManyMutationInput, EmergencyContactUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyContacts to update
     */
    where?: EmergencyContactWhereInput
    /**
     * Limit how many EmergencyContacts to update.
     */
    limit?: number
  }

  /**
   * EmergencyContact upsert
   */
  export type EmergencyContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * The filter to search for the EmergencyContact to update in case it exists.
     */
    where: EmergencyContactWhereUniqueInput
    /**
     * In case the EmergencyContact found by the `where` argument doesn't exist, create a new EmergencyContact with this data.
     */
    create: XOR<EmergencyContactCreateInput, EmergencyContactUncheckedCreateInput>
    /**
     * In case the EmergencyContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmergencyContactUpdateInput, EmergencyContactUncheckedUpdateInput>
  }

  /**
   * EmergencyContact delete
   */
  export type EmergencyContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Filter which EmergencyContact to delete.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact deleteMany
   */
  export type EmergencyContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyContacts to delete
     */
    where?: EmergencyContactWhereInput
    /**
     * Limit how many EmergencyContacts to delete.
     */
    limit?: number
  }

  /**
   * EmergencyContact without action
   */
  export type EmergencyContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
  }


  /**
   * Model Resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceAvgAggregateOutputType = {
    id: number | null
    pages: number | null
  }

  export type ResourceSumAggregateOutputType = {
    id: number | null
    pages: number | null
  }

  export type ResourceMinAggregateOutputType = {
    id: number | null
    title: string | null
    type: string | null
    category: string | null
    description: string | null
    fileUrl: string | null
    pages: number | null
  }

  export type ResourceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    type: string | null
    category: string | null
    description: string | null
    fileUrl: string | null
    pages: number | null
  }

  export type ResourceCountAggregateOutputType = {
    id: number
    title: number
    type: number
    category: number
    description: number
    fileUrl: number
    pages: number
    _all: number
  }


  export type ResourceAvgAggregateInputType = {
    id?: true
    pages?: true
  }

  export type ResourceSumAggregateInputType = {
    id?: true
    pages?: true
  }

  export type ResourceMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    category?: true
    description?: true
    fileUrl?: true
    pages?: true
  }

  export type ResourceMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    category?: true
    description?: true
    fileUrl?: true
    pages?: true
  }

  export type ResourceCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    category?: true
    description?: true
    fileUrl?: true
    pages?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resource to aggregate.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource[P]>
      : GetScalarType<T[P], AggregateResource[P]>
  }




  export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: ResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _avg?: ResourceAvgAggregateInputType
    _sum?: ResourceSumAggregateInputType
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    id: number
    title: string
    type: string
    category: string
    description: string | null
    fileUrl: string
    pages: number | null
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        }
      >
    >


  export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    fileUrl?: boolean
    pages?: boolean
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    fileUrl?: boolean
    pages?: boolean
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    fileUrl?: boolean
    pages?: boolean
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    fileUrl?: boolean
    pages?: boolean
  }

  export type ResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "category" | "description" | "fileUrl" | "pages", ExtArgs["result"]["resource"]>

  export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resource"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      type: string
      category: string
      description: string | null
      fileUrl: string
      pages: number | null
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }

  type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

  type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export interface ResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resource'], meta: { name: 'Resource' } }
    /**
     * Find zero or one Resource that matches the filter.
     * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceFindUniqueArgs>(args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceFindFirstArgs>(args?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resource.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceFindManyArgs>(args?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resource.
     * @param {ResourceCreateArgs} args - Arguments to create a Resource.
     * @example
     * // Create one Resource
     * const Resource = await prisma.resource.create({
     *   data: {
     *     // ... data to create a Resource
     *   }
     * })
     * 
     */
    create<T extends ResourceCreateArgs>(args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resources.
     * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceCreateManyArgs>(args?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resources and returns the data saved in the database.
     * @param {ResourceCreateManyAndReturnArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resource.
     * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
     * @example
     * // Delete one Resource
     * const Resource = await prisma.resource.delete({
     *   where: {
     *     // ... filter to delete one Resource
     *   }
     * })
     * 
     */
    delete<T extends ResourceDeleteArgs>(args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resource.
     * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
     * @example
     * // Update one Resource
     * const resource = await prisma.resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceUpdateArgs>(args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resources.
     * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceDeleteManyArgs>(args?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceUpdateManyArgs>(args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources and returns the data updated in the database.
     * @param {ResourceUpdateManyAndReturnArgs} args - Arguments to update many Resources.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResourceUpdateManyAndReturnArgs>(args: SelectSubset<T, ResourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resource.
     * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
     * @example
     * // Update or create a Resource
     * const resource = await prisma.resource.upsert({
     *   create: {
     *     // ... data to create a Resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource we want to update
     *   }
     * })
     */
    upsert<T extends ResourceUpsertArgs>(args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resource.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends ResourceCountArgs>(
      args?: Subset<T, ResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

    /**
     * Group by Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupByArgs} args - Group by arguments.
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
      T extends ResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceGroupByArgs['orderBy'] }
        : { orderBy?: ResourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resource model
   */
  readonly fields: ResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Resource model
   */
  interface ResourceFieldRefs {
    readonly id: FieldRef<"Resource", 'Int'>
    readonly title: FieldRef<"Resource", 'String'>
    readonly type: FieldRef<"Resource", 'String'>
    readonly category: FieldRef<"Resource", 'String'>
    readonly description: FieldRef<"Resource", 'String'>
    readonly fileUrl: FieldRef<"Resource", 'String'>
    readonly pages: FieldRef<"Resource", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Resource findUnique
   */
  export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findUniqueOrThrow
   */
  export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findFirst
   */
  export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findFirstOrThrow
   */
  export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findMany
   */
  export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter, which Resources to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource create
   */
  export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data needed to create a Resource.
     */
    data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
  }

  /**
   * Resource createMany
   */
  export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
  }

  /**
   * Resource createManyAndReturn
   */
  export type ResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
  }

  /**
   * Resource update
   */
  export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data needed to update a Resource.
     */
    data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
    /**
     * Choose, which Resource to update.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource updateMany
   */
  export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource updateManyAndReturn
   */
  export type ResourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource upsert
   */
  export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The filter to search for the Resource to update in case it exists.
     */
    where: ResourceWhereUniqueInput
    /**
     * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
     */
    create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
    /**
     * In case the Resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
  }

  /**
   * Resource delete
   */
  export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Filter which Resource to delete.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource deleteMany
   */
  export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resources to delete
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to delete.
     */
    limit?: number
  }

  /**
   * Resource without action
   */
  export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminUserSumAggregateOutputType = {
    id: number | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: string | null
    name: string | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: string | null
    name: string | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    name: number
    _all: number
  }


  export type AdminUserAvgAggregateInputType = {
    id?: true
  }

  export type AdminUserSumAggregateInputType = {
    id?: true
  }

  export type AdminUserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _avg?: AdminUserAvgAggregateInputType
    _sum?: AdminUserSumAggregateInputType
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: string
    name: string
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    cases?: boolean | AdminUser$casesArgs<ExtArgs>
    reports?: boolean | AdminUser$reportsArgs<ExtArgs>
    _count?: boolean | AdminUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "name", ExtArgs["result"]["adminUser"]>
  export type AdminUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | AdminUser$casesArgs<ExtArgs>
    reports?: boolean | AdminUser$reportsArgs<ExtArgs>
    _count?: boolean | AdminUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {
      cases: Prisma.$CasePayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: string
      name: string
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
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
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cases<T extends AdminUser$casesArgs<ExtArgs> = {}>(args?: Subset<T, AdminUser$casesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends AdminUser$reportsArgs<ExtArgs> = {}>(args?: Subset<T, AdminUser$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'Int'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly password: FieldRef<"AdminUser", 'String'>
    readonly role: FieldRef<"AdminUser", 'String'>
    readonly name: FieldRef<"AdminUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser.cases
   */
  export type AdminUser$casesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    cursor?: CaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * AdminUser.reports
   */
  export type AdminUser$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LawyerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    photo: 'photo',
    location: 'location',
    specializations: 'specializations',
    rating: 'rating',
    reviews: 'reviews',
    verified: 'verified',
    active: 'active',
    barNumber: 'barNumber',
    experience: 'experience',
    languages: 'languages',
    availability: 'availability',
    successRate: 'successRate',
    bio: 'bio',
    caseCount: 'caseCount',
    education: 'education',
    contactHours: 'contactHours'
  };

  export type LawyerScalarFieldEnum = (typeof LawyerScalarFieldEnum)[keyof typeof LawyerScalarFieldEnum]


  export const LawyerTestimonialScalarFieldEnum: {
    id: 'id',
    lawyerId: 'lawyerId',
    text: 'text',
    author: 'author'
  };

  export type LawyerTestimonialScalarFieldEnum = (typeof LawyerTestimonialScalarFieldEnum)[keyof typeof LawyerTestimonialScalarFieldEnum]


  export const LawyerExpertiseScalarFieldEnum: {
    id: 'id',
    lawyerId: 'lawyerId',
    expertise: 'expertise'
  };

  export type LawyerExpertiseScalarFieldEnum = (typeof LawyerExpertiseScalarFieldEnum)[keyof typeof LawyerExpertiseScalarFieldEnum]


  export const LawyerDocumentScalarFieldEnum: {
    id: 'id',
    lawyerId: 'lawyerId',
    name: 'name',
    type: 'type',
    description: 'description'
  };

  export type LawyerDocumentScalarFieldEnum = (typeof LawyerDocumentScalarFieldEnum)[keyof typeof LawyerDocumentScalarFieldEnum]


  export const LawyerAvailabilityScalarFieldEnum: {
    id: 'id',
    lawyerId: 'lawyerId',
    date: 'date',
    slots: 'slots'
  };

  export type LawyerAvailabilityScalarFieldEnum = (typeof LawyerAvailabilityScalarFieldEnum)[keyof typeof LawyerAvailabilityScalarFieldEnum]


  export const CaseScalarFieldEnum: {
    id: 'id',
    reportDate: 'reportDate',
    status: 'status',
    severity: 'severity',
    type: 'type',
    location: 'location',
    assignedTo: 'assignedTo',
    clientName: 'clientName',
    clientContact: 'clientContact',
    lastUpdated: 'lastUpdated'
  };

  export type CaseScalarFieldEnum = (typeof CaseScalarFieldEnum)[keyof typeof CaseScalarFieldEnum]


  export const CaseNoteScalarFieldEnum: {
    id: 'id',
    caseId: 'caseId',
    date: 'date',
    author: 'author',
    content: 'content'
  };

  export type CaseNoteScalarFieldEnum = (typeof CaseNoteScalarFieldEnum)[keyof typeof CaseNoteScalarFieldEnum]


  export const CaseActionScalarFieldEnum: {
    id: 'id',
    caseId: 'caseId',
    type: 'type',
    status: 'status',
    dueDate: 'dueDate',
    assignedTo: 'assignedTo'
  };

  export type CaseActionScalarFieldEnum = (typeof CaseActionScalarFieldEnum)[keyof typeof CaseActionScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    reportDate: 'reportDate',
    reportType: 'reportType',
    incidentType: 'incidentType',
    location: 'location',
    status: 'status',
    severity: 'severity',
    hasEvidence: 'hasEvidence',
    hasWitnesses: 'hasWitnesses',
    immediateDanger: 'immediateDanger',
    clientName: 'clientName',
    clientContact: 'clientContact',
    assignedTo: 'assignedTo'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const EmergencyContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    number: 'number',
    category: 'category',
    region: 'region'
  };

  export type EmergencyContactScalarFieldEnum = (typeof EmergencyContactScalarFieldEnum)[keyof typeof EmergencyContactScalarFieldEnum]


  export const ResourceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type',
    category: 'category',
    description: 'description',
    fileUrl: 'fileUrl',
    pages: 'pages'
  };

  export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    name: 'name'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type LawyerWhereInput = {
    AND?: LawyerWhereInput | LawyerWhereInput[]
    OR?: LawyerWhereInput[]
    NOT?: LawyerWhereInput | LawyerWhereInput[]
    id?: IntFilter<"Lawyer"> | number
    name?: StringFilter<"Lawyer"> | string
    photo?: StringNullableFilter<"Lawyer"> | string | null
    location?: StringFilter<"Lawyer"> | string
    specializations?: JsonFilter<"Lawyer">
    rating?: FloatNullableFilter<"Lawyer"> | number | null
    reviews?: IntFilter<"Lawyer"> | number
    verified?: BoolFilter<"Lawyer"> | boolean
    active?: BoolFilter<"Lawyer"> | boolean
    barNumber?: StringFilter<"Lawyer"> | string
    experience?: IntFilter<"Lawyer"> | number
    languages?: JsonFilter<"Lawyer">
    availability?: StringNullableFilter<"Lawyer"> | string | null
    successRate?: StringNullableFilter<"Lawyer"> | string | null
    bio?: StringNullableFilter<"Lawyer"> | string | null
    caseCount?: IntFilter<"Lawyer"> | number
    education?: StringNullableFilter<"Lawyer"> | string | null
    contactHours?: StringNullableFilter<"Lawyer"> | string | null
    testimonials?: LawyerTestimonialListRelationFilter
    expertise?: LawyerExpertiseListRelationFilter
    documents?: LawyerDocumentListRelationFilter
    availabilityCal?: LawyerAvailabilityListRelationFilter
  }

  export type LawyerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrderInput | SortOrder
    location?: SortOrder
    specializations?: SortOrder
    rating?: SortOrderInput | SortOrder
    reviews?: SortOrder
    verified?: SortOrder
    active?: SortOrder
    barNumber?: SortOrder
    experience?: SortOrder
    languages?: SortOrder
    availability?: SortOrderInput | SortOrder
    successRate?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    caseCount?: SortOrder
    education?: SortOrderInput | SortOrder
    contactHours?: SortOrderInput | SortOrder
    testimonials?: LawyerTestimonialOrderByRelationAggregateInput
    expertise?: LawyerExpertiseOrderByRelationAggregateInput
    documents?: LawyerDocumentOrderByRelationAggregateInput
    availabilityCal?: LawyerAvailabilityOrderByRelationAggregateInput
  }

  export type LawyerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    barNumber?: string
    AND?: LawyerWhereInput | LawyerWhereInput[]
    OR?: LawyerWhereInput[]
    NOT?: LawyerWhereInput | LawyerWhereInput[]
    name?: StringFilter<"Lawyer"> | string
    photo?: StringNullableFilter<"Lawyer"> | string | null
    location?: StringFilter<"Lawyer"> | string
    specializations?: JsonFilter<"Lawyer">
    rating?: FloatNullableFilter<"Lawyer"> | number | null
    reviews?: IntFilter<"Lawyer"> | number
    verified?: BoolFilter<"Lawyer"> | boolean
    active?: BoolFilter<"Lawyer"> | boolean
    experience?: IntFilter<"Lawyer"> | number
    languages?: JsonFilter<"Lawyer">
    availability?: StringNullableFilter<"Lawyer"> | string | null
    successRate?: StringNullableFilter<"Lawyer"> | string | null
    bio?: StringNullableFilter<"Lawyer"> | string | null
    caseCount?: IntFilter<"Lawyer"> | number
    education?: StringNullableFilter<"Lawyer"> | string | null
    contactHours?: StringNullableFilter<"Lawyer"> | string | null
    testimonials?: LawyerTestimonialListRelationFilter
    expertise?: LawyerExpertiseListRelationFilter
    documents?: LawyerDocumentListRelationFilter
    availabilityCal?: LawyerAvailabilityListRelationFilter
  }, "id" | "barNumber">

  export type LawyerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrderInput | SortOrder
    location?: SortOrder
    specializations?: SortOrder
    rating?: SortOrderInput | SortOrder
    reviews?: SortOrder
    verified?: SortOrder
    active?: SortOrder
    barNumber?: SortOrder
    experience?: SortOrder
    languages?: SortOrder
    availability?: SortOrderInput | SortOrder
    successRate?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    caseCount?: SortOrder
    education?: SortOrderInput | SortOrder
    contactHours?: SortOrderInput | SortOrder
    _count?: LawyerCountOrderByAggregateInput
    _avg?: LawyerAvgOrderByAggregateInput
    _max?: LawyerMaxOrderByAggregateInput
    _min?: LawyerMinOrderByAggregateInput
    _sum?: LawyerSumOrderByAggregateInput
  }

  export type LawyerScalarWhereWithAggregatesInput = {
    AND?: LawyerScalarWhereWithAggregatesInput | LawyerScalarWhereWithAggregatesInput[]
    OR?: LawyerScalarWhereWithAggregatesInput[]
    NOT?: LawyerScalarWhereWithAggregatesInput | LawyerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lawyer"> | number
    name?: StringWithAggregatesFilter<"Lawyer"> | string
    photo?: StringNullableWithAggregatesFilter<"Lawyer"> | string | null
    location?: StringWithAggregatesFilter<"Lawyer"> | string
    specializations?: JsonWithAggregatesFilter<"Lawyer">
    rating?: FloatNullableWithAggregatesFilter<"Lawyer"> | number | null
    reviews?: IntWithAggregatesFilter<"Lawyer"> | number
    verified?: BoolWithAggregatesFilter<"Lawyer"> | boolean
    active?: BoolWithAggregatesFilter<"Lawyer"> | boolean
    barNumber?: StringWithAggregatesFilter<"Lawyer"> | string
    experience?: IntWithAggregatesFilter<"Lawyer"> | number
    languages?: JsonWithAggregatesFilter<"Lawyer">
    availability?: StringNullableWithAggregatesFilter<"Lawyer"> | string | null
    successRate?: StringNullableWithAggregatesFilter<"Lawyer"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Lawyer"> | string | null
    caseCount?: IntWithAggregatesFilter<"Lawyer"> | number
    education?: StringNullableWithAggregatesFilter<"Lawyer"> | string | null
    contactHours?: StringNullableWithAggregatesFilter<"Lawyer"> | string | null
  }

  export type LawyerTestimonialWhereInput = {
    AND?: LawyerTestimonialWhereInput | LawyerTestimonialWhereInput[]
    OR?: LawyerTestimonialWhereInput[]
    NOT?: LawyerTestimonialWhereInput | LawyerTestimonialWhereInput[]
    id?: IntFilter<"LawyerTestimonial"> | number
    lawyerId?: IntFilter<"LawyerTestimonial"> | number
    text?: StringFilter<"LawyerTestimonial"> | string
    author?: StringFilter<"LawyerTestimonial"> | string
    lawyer?: XOR<LawyerScalarRelationFilter, LawyerWhereInput>
  }

  export type LawyerTestimonialOrderByWithRelationInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    text?: SortOrder
    author?: SortOrder
    lawyer?: LawyerOrderByWithRelationInput
  }

  export type LawyerTestimonialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LawyerTestimonialWhereInput | LawyerTestimonialWhereInput[]
    OR?: LawyerTestimonialWhereInput[]
    NOT?: LawyerTestimonialWhereInput | LawyerTestimonialWhereInput[]
    lawyerId?: IntFilter<"LawyerTestimonial"> | number
    text?: StringFilter<"LawyerTestimonial"> | string
    author?: StringFilter<"LawyerTestimonial"> | string
    lawyer?: XOR<LawyerScalarRelationFilter, LawyerWhereInput>
  }, "id">

  export type LawyerTestimonialOrderByWithAggregationInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    text?: SortOrder
    author?: SortOrder
    _count?: LawyerTestimonialCountOrderByAggregateInput
    _avg?: LawyerTestimonialAvgOrderByAggregateInput
    _max?: LawyerTestimonialMaxOrderByAggregateInput
    _min?: LawyerTestimonialMinOrderByAggregateInput
    _sum?: LawyerTestimonialSumOrderByAggregateInput
  }

  export type LawyerTestimonialScalarWhereWithAggregatesInput = {
    AND?: LawyerTestimonialScalarWhereWithAggregatesInput | LawyerTestimonialScalarWhereWithAggregatesInput[]
    OR?: LawyerTestimonialScalarWhereWithAggregatesInput[]
    NOT?: LawyerTestimonialScalarWhereWithAggregatesInput | LawyerTestimonialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LawyerTestimonial"> | number
    lawyerId?: IntWithAggregatesFilter<"LawyerTestimonial"> | number
    text?: StringWithAggregatesFilter<"LawyerTestimonial"> | string
    author?: StringWithAggregatesFilter<"LawyerTestimonial"> | string
  }

  export type LawyerExpertiseWhereInput = {
    AND?: LawyerExpertiseWhereInput | LawyerExpertiseWhereInput[]
    OR?: LawyerExpertiseWhereInput[]
    NOT?: LawyerExpertiseWhereInput | LawyerExpertiseWhereInput[]
    id?: IntFilter<"LawyerExpertise"> | number
    lawyerId?: IntFilter<"LawyerExpertise"> | number
    expertise?: StringFilter<"LawyerExpertise"> | string
    lawyer?: XOR<LawyerScalarRelationFilter, LawyerWhereInput>
  }

  export type LawyerExpertiseOrderByWithRelationInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    expertise?: SortOrder
    lawyer?: LawyerOrderByWithRelationInput
  }

  export type LawyerExpertiseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LawyerExpertiseWhereInput | LawyerExpertiseWhereInput[]
    OR?: LawyerExpertiseWhereInput[]
    NOT?: LawyerExpertiseWhereInput | LawyerExpertiseWhereInput[]
    lawyerId?: IntFilter<"LawyerExpertise"> | number
    expertise?: StringFilter<"LawyerExpertise"> | string
    lawyer?: XOR<LawyerScalarRelationFilter, LawyerWhereInput>
  }, "id">

  export type LawyerExpertiseOrderByWithAggregationInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    expertise?: SortOrder
    _count?: LawyerExpertiseCountOrderByAggregateInput
    _avg?: LawyerExpertiseAvgOrderByAggregateInput
    _max?: LawyerExpertiseMaxOrderByAggregateInput
    _min?: LawyerExpertiseMinOrderByAggregateInput
    _sum?: LawyerExpertiseSumOrderByAggregateInput
  }

  export type LawyerExpertiseScalarWhereWithAggregatesInput = {
    AND?: LawyerExpertiseScalarWhereWithAggregatesInput | LawyerExpertiseScalarWhereWithAggregatesInput[]
    OR?: LawyerExpertiseScalarWhereWithAggregatesInput[]
    NOT?: LawyerExpertiseScalarWhereWithAggregatesInput | LawyerExpertiseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LawyerExpertise"> | number
    lawyerId?: IntWithAggregatesFilter<"LawyerExpertise"> | number
    expertise?: StringWithAggregatesFilter<"LawyerExpertise"> | string
  }

  export type LawyerDocumentWhereInput = {
    AND?: LawyerDocumentWhereInput | LawyerDocumentWhereInput[]
    OR?: LawyerDocumentWhereInput[]
    NOT?: LawyerDocumentWhereInput | LawyerDocumentWhereInput[]
    id?: IntFilter<"LawyerDocument"> | number
    lawyerId?: IntFilter<"LawyerDocument"> | number
    name?: StringFilter<"LawyerDocument"> | string
    type?: StringFilter<"LawyerDocument"> | string
    description?: StringNullableFilter<"LawyerDocument"> | string | null
    lawyer?: XOR<LawyerScalarRelationFilter, LawyerWhereInput>
  }

  export type LawyerDocumentOrderByWithRelationInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    lawyer?: LawyerOrderByWithRelationInput
  }

  export type LawyerDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LawyerDocumentWhereInput | LawyerDocumentWhereInput[]
    OR?: LawyerDocumentWhereInput[]
    NOT?: LawyerDocumentWhereInput | LawyerDocumentWhereInput[]
    lawyerId?: IntFilter<"LawyerDocument"> | number
    name?: StringFilter<"LawyerDocument"> | string
    type?: StringFilter<"LawyerDocument"> | string
    description?: StringNullableFilter<"LawyerDocument"> | string | null
    lawyer?: XOR<LawyerScalarRelationFilter, LawyerWhereInput>
  }, "id">

  export type LawyerDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: LawyerDocumentCountOrderByAggregateInput
    _avg?: LawyerDocumentAvgOrderByAggregateInput
    _max?: LawyerDocumentMaxOrderByAggregateInput
    _min?: LawyerDocumentMinOrderByAggregateInput
    _sum?: LawyerDocumentSumOrderByAggregateInput
  }

  export type LawyerDocumentScalarWhereWithAggregatesInput = {
    AND?: LawyerDocumentScalarWhereWithAggregatesInput | LawyerDocumentScalarWhereWithAggregatesInput[]
    OR?: LawyerDocumentScalarWhereWithAggregatesInput[]
    NOT?: LawyerDocumentScalarWhereWithAggregatesInput | LawyerDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LawyerDocument"> | number
    lawyerId?: IntWithAggregatesFilter<"LawyerDocument"> | number
    name?: StringWithAggregatesFilter<"LawyerDocument"> | string
    type?: StringWithAggregatesFilter<"LawyerDocument"> | string
    description?: StringNullableWithAggregatesFilter<"LawyerDocument"> | string | null
  }

  export type LawyerAvailabilityWhereInput = {
    AND?: LawyerAvailabilityWhereInput | LawyerAvailabilityWhereInput[]
    OR?: LawyerAvailabilityWhereInput[]
    NOT?: LawyerAvailabilityWhereInput | LawyerAvailabilityWhereInput[]
    id?: IntFilter<"LawyerAvailability"> | number
    lawyerId?: IntFilter<"LawyerAvailability"> | number
    date?: DateTimeFilter<"LawyerAvailability"> | Date | string
    slots?: JsonFilter<"LawyerAvailability">
    lawyer?: XOR<LawyerScalarRelationFilter, LawyerWhereInput>
  }

  export type LawyerAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    date?: SortOrder
    slots?: SortOrder
    lawyer?: LawyerOrderByWithRelationInput
  }

  export type LawyerAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LawyerAvailabilityWhereInput | LawyerAvailabilityWhereInput[]
    OR?: LawyerAvailabilityWhereInput[]
    NOT?: LawyerAvailabilityWhereInput | LawyerAvailabilityWhereInput[]
    lawyerId?: IntFilter<"LawyerAvailability"> | number
    date?: DateTimeFilter<"LawyerAvailability"> | Date | string
    slots?: JsonFilter<"LawyerAvailability">
    lawyer?: XOR<LawyerScalarRelationFilter, LawyerWhereInput>
  }, "id">

  export type LawyerAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    date?: SortOrder
    slots?: SortOrder
    _count?: LawyerAvailabilityCountOrderByAggregateInput
    _avg?: LawyerAvailabilityAvgOrderByAggregateInput
    _max?: LawyerAvailabilityMaxOrderByAggregateInput
    _min?: LawyerAvailabilityMinOrderByAggregateInput
    _sum?: LawyerAvailabilitySumOrderByAggregateInput
  }

  export type LawyerAvailabilityScalarWhereWithAggregatesInput = {
    AND?: LawyerAvailabilityScalarWhereWithAggregatesInput | LawyerAvailabilityScalarWhereWithAggregatesInput[]
    OR?: LawyerAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: LawyerAvailabilityScalarWhereWithAggregatesInput | LawyerAvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LawyerAvailability"> | number
    lawyerId?: IntWithAggregatesFilter<"LawyerAvailability"> | number
    date?: DateTimeWithAggregatesFilter<"LawyerAvailability"> | Date | string
    slots?: JsonWithAggregatesFilter<"LawyerAvailability">
  }

  export type CaseWhereInput = {
    AND?: CaseWhereInput | CaseWhereInput[]
    OR?: CaseWhereInput[]
    NOT?: CaseWhereInput | CaseWhereInput[]
    id?: StringFilter<"Case"> | string
    reportDate?: DateTimeFilter<"Case"> | Date | string
    status?: StringFilter<"Case"> | string
    severity?: StringFilter<"Case"> | string
    type?: StringFilter<"Case"> | string
    location?: StringFilter<"Case"> | string
    assignedTo?: IntNullableFilter<"Case"> | number | null
    clientName?: StringFilter<"Case"> | string
    clientContact?: StringNullableFilter<"Case"> | string | null
    lastUpdated?: DateTimeFilter<"Case"> | Date | string
    adminUser?: XOR<AdminUserNullableScalarRelationFilter, AdminUserWhereInput> | null
    notes?: CaseNoteListRelationFilter
    actions?: CaseActionListRelationFilter
  }

  export type CaseOrderByWithRelationInput = {
    id?: SortOrder
    reportDate?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    type?: SortOrder
    location?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    clientName?: SortOrder
    clientContact?: SortOrderInput | SortOrder
    lastUpdated?: SortOrder
    adminUser?: AdminUserOrderByWithRelationInput
    notes?: CaseNoteOrderByRelationAggregateInput
    actions?: CaseActionOrderByRelationAggregateInput
  }

  export type CaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CaseWhereInput | CaseWhereInput[]
    OR?: CaseWhereInput[]
    NOT?: CaseWhereInput | CaseWhereInput[]
    reportDate?: DateTimeFilter<"Case"> | Date | string
    status?: StringFilter<"Case"> | string
    severity?: StringFilter<"Case"> | string
    type?: StringFilter<"Case"> | string
    location?: StringFilter<"Case"> | string
    assignedTo?: IntNullableFilter<"Case"> | number | null
    clientName?: StringFilter<"Case"> | string
    clientContact?: StringNullableFilter<"Case"> | string | null
    lastUpdated?: DateTimeFilter<"Case"> | Date | string
    adminUser?: XOR<AdminUserNullableScalarRelationFilter, AdminUserWhereInput> | null
    notes?: CaseNoteListRelationFilter
    actions?: CaseActionListRelationFilter
  }, "id">

  export type CaseOrderByWithAggregationInput = {
    id?: SortOrder
    reportDate?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    type?: SortOrder
    location?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    clientName?: SortOrder
    clientContact?: SortOrderInput | SortOrder
    lastUpdated?: SortOrder
    _count?: CaseCountOrderByAggregateInput
    _avg?: CaseAvgOrderByAggregateInput
    _max?: CaseMaxOrderByAggregateInput
    _min?: CaseMinOrderByAggregateInput
    _sum?: CaseSumOrderByAggregateInput
  }

  export type CaseScalarWhereWithAggregatesInput = {
    AND?: CaseScalarWhereWithAggregatesInput | CaseScalarWhereWithAggregatesInput[]
    OR?: CaseScalarWhereWithAggregatesInput[]
    NOT?: CaseScalarWhereWithAggregatesInput | CaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Case"> | string
    reportDate?: DateTimeWithAggregatesFilter<"Case"> | Date | string
    status?: StringWithAggregatesFilter<"Case"> | string
    severity?: StringWithAggregatesFilter<"Case"> | string
    type?: StringWithAggregatesFilter<"Case"> | string
    location?: StringWithAggregatesFilter<"Case"> | string
    assignedTo?: IntNullableWithAggregatesFilter<"Case"> | number | null
    clientName?: StringWithAggregatesFilter<"Case"> | string
    clientContact?: StringNullableWithAggregatesFilter<"Case"> | string | null
    lastUpdated?: DateTimeWithAggregatesFilter<"Case"> | Date | string
  }

  export type CaseNoteWhereInput = {
    AND?: CaseNoteWhereInput | CaseNoteWhereInput[]
    OR?: CaseNoteWhereInput[]
    NOT?: CaseNoteWhereInput | CaseNoteWhereInput[]
    id?: IntFilter<"CaseNote"> | number
    caseId?: StringFilter<"CaseNote"> | string
    date?: DateTimeFilter<"CaseNote"> | Date | string
    author?: StringFilter<"CaseNote"> | string
    content?: StringFilter<"CaseNote"> | string
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }

  export type CaseNoteOrderByWithRelationInput = {
    id?: SortOrder
    caseId?: SortOrder
    date?: SortOrder
    author?: SortOrder
    content?: SortOrder
    case?: CaseOrderByWithRelationInput
  }

  export type CaseNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CaseNoteWhereInput | CaseNoteWhereInput[]
    OR?: CaseNoteWhereInput[]
    NOT?: CaseNoteWhereInput | CaseNoteWhereInput[]
    caseId?: StringFilter<"CaseNote"> | string
    date?: DateTimeFilter<"CaseNote"> | Date | string
    author?: StringFilter<"CaseNote"> | string
    content?: StringFilter<"CaseNote"> | string
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }, "id">

  export type CaseNoteOrderByWithAggregationInput = {
    id?: SortOrder
    caseId?: SortOrder
    date?: SortOrder
    author?: SortOrder
    content?: SortOrder
    _count?: CaseNoteCountOrderByAggregateInput
    _avg?: CaseNoteAvgOrderByAggregateInput
    _max?: CaseNoteMaxOrderByAggregateInput
    _min?: CaseNoteMinOrderByAggregateInput
    _sum?: CaseNoteSumOrderByAggregateInput
  }

  export type CaseNoteScalarWhereWithAggregatesInput = {
    AND?: CaseNoteScalarWhereWithAggregatesInput | CaseNoteScalarWhereWithAggregatesInput[]
    OR?: CaseNoteScalarWhereWithAggregatesInput[]
    NOT?: CaseNoteScalarWhereWithAggregatesInput | CaseNoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CaseNote"> | number
    caseId?: StringWithAggregatesFilter<"CaseNote"> | string
    date?: DateTimeWithAggregatesFilter<"CaseNote"> | Date | string
    author?: StringWithAggregatesFilter<"CaseNote"> | string
    content?: StringWithAggregatesFilter<"CaseNote"> | string
  }

  export type CaseActionWhereInput = {
    AND?: CaseActionWhereInput | CaseActionWhereInput[]
    OR?: CaseActionWhereInput[]
    NOT?: CaseActionWhereInput | CaseActionWhereInput[]
    id?: IntFilter<"CaseAction"> | number
    caseId?: StringFilter<"CaseAction"> | string
    type?: StringFilter<"CaseAction"> | string
    status?: StringFilter<"CaseAction"> | string
    dueDate?: DateTimeFilter<"CaseAction"> | Date | string
    assignedTo?: StringFilter<"CaseAction"> | string
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }

  export type CaseActionOrderByWithRelationInput = {
    id?: SortOrder
    caseId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    assignedTo?: SortOrder
    case?: CaseOrderByWithRelationInput
  }

  export type CaseActionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CaseActionWhereInput | CaseActionWhereInput[]
    OR?: CaseActionWhereInput[]
    NOT?: CaseActionWhereInput | CaseActionWhereInput[]
    caseId?: StringFilter<"CaseAction"> | string
    type?: StringFilter<"CaseAction"> | string
    status?: StringFilter<"CaseAction"> | string
    dueDate?: DateTimeFilter<"CaseAction"> | Date | string
    assignedTo?: StringFilter<"CaseAction"> | string
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }, "id">

  export type CaseActionOrderByWithAggregationInput = {
    id?: SortOrder
    caseId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    assignedTo?: SortOrder
    _count?: CaseActionCountOrderByAggregateInput
    _avg?: CaseActionAvgOrderByAggregateInput
    _max?: CaseActionMaxOrderByAggregateInput
    _min?: CaseActionMinOrderByAggregateInput
    _sum?: CaseActionSumOrderByAggregateInput
  }

  export type CaseActionScalarWhereWithAggregatesInput = {
    AND?: CaseActionScalarWhereWithAggregatesInput | CaseActionScalarWhereWithAggregatesInput[]
    OR?: CaseActionScalarWhereWithAggregatesInput[]
    NOT?: CaseActionScalarWhereWithAggregatesInput | CaseActionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CaseAction"> | number
    caseId?: StringWithAggregatesFilter<"CaseAction"> | string
    type?: StringWithAggregatesFilter<"CaseAction"> | string
    status?: StringWithAggregatesFilter<"CaseAction"> | string
    dueDate?: DateTimeWithAggregatesFilter<"CaseAction"> | Date | string
    assignedTo?: StringWithAggregatesFilter<"CaseAction"> | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    reportDate?: DateTimeFilter<"Report"> | Date | string
    reportType?: StringFilter<"Report"> | string
    incidentType?: StringFilter<"Report"> | string
    location?: StringFilter<"Report"> | string
    status?: StringFilter<"Report"> | string
    severity?: StringFilter<"Report"> | string
    hasEvidence?: BoolFilter<"Report"> | boolean
    hasWitnesses?: BoolFilter<"Report"> | boolean
    immediateDanger?: BoolFilter<"Report"> | boolean
    clientName?: StringNullableFilter<"Report"> | string | null
    clientContact?: StringNullableFilter<"Report"> | string | null
    assignedTo?: IntNullableFilter<"Report"> | number | null
    adminUser?: XOR<AdminUserNullableScalarRelationFilter, AdminUserWhereInput> | null
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    reportDate?: SortOrder
    reportType?: SortOrder
    incidentType?: SortOrder
    location?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    hasEvidence?: SortOrder
    hasWitnesses?: SortOrder
    immediateDanger?: SortOrder
    clientName?: SortOrderInput | SortOrder
    clientContact?: SortOrderInput | SortOrder
    assignedTo?: SortOrderInput | SortOrder
    adminUser?: AdminUserOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    reportDate?: DateTimeFilter<"Report"> | Date | string
    reportType?: StringFilter<"Report"> | string
    incidentType?: StringFilter<"Report"> | string
    location?: StringFilter<"Report"> | string
    status?: StringFilter<"Report"> | string
    severity?: StringFilter<"Report"> | string
    hasEvidence?: BoolFilter<"Report"> | boolean
    hasWitnesses?: BoolFilter<"Report"> | boolean
    immediateDanger?: BoolFilter<"Report"> | boolean
    clientName?: StringNullableFilter<"Report"> | string | null
    clientContact?: StringNullableFilter<"Report"> | string | null
    assignedTo?: IntNullableFilter<"Report"> | number | null
    adminUser?: XOR<AdminUserNullableScalarRelationFilter, AdminUserWhereInput> | null
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    reportDate?: SortOrder
    reportType?: SortOrder
    incidentType?: SortOrder
    location?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    hasEvidence?: SortOrder
    hasWitnesses?: SortOrder
    immediateDanger?: SortOrder
    clientName?: SortOrderInput | SortOrder
    clientContact?: SortOrderInput | SortOrder
    assignedTo?: SortOrderInput | SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    reportDate?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    reportType?: StringWithAggregatesFilter<"Report"> | string
    incidentType?: StringWithAggregatesFilter<"Report"> | string
    location?: StringWithAggregatesFilter<"Report"> | string
    status?: StringWithAggregatesFilter<"Report"> | string
    severity?: StringWithAggregatesFilter<"Report"> | string
    hasEvidence?: BoolWithAggregatesFilter<"Report"> | boolean
    hasWitnesses?: BoolWithAggregatesFilter<"Report"> | boolean
    immediateDanger?: BoolWithAggregatesFilter<"Report"> | boolean
    clientName?: StringNullableWithAggregatesFilter<"Report"> | string | null
    clientContact?: StringNullableWithAggregatesFilter<"Report"> | string | null
    assignedTo?: IntNullableWithAggregatesFilter<"Report"> | number | null
  }

  export type EmergencyContactWhereInput = {
    AND?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    OR?: EmergencyContactWhereInput[]
    NOT?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    id?: IntFilter<"EmergencyContact"> | number
    name?: StringFilter<"EmergencyContact"> | string
    number?: StringFilter<"EmergencyContact"> | string
    category?: StringFilter<"EmergencyContact"> | string
    region?: StringNullableFilter<"EmergencyContact"> | string | null
  }

  export type EmergencyContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    category?: SortOrder
    region?: SortOrderInput | SortOrder
  }

  export type EmergencyContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    OR?: EmergencyContactWhereInput[]
    NOT?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    name?: StringFilter<"EmergencyContact"> | string
    number?: StringFilter<"EmergencyContact"> | string
    category?: StringFilter<"EmergencyContact"> | string
    region?: StringNullableFilter<"EmergencyContact"> | string | null
  }, "id">

  export type EmergencyContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    category?: SortOrder
    region?: SortOrderInput | SortOrder
    _count?: EmergencyContactCountOrderByAggregateInput
    _avg?: EmergencyContactAvgOrderByAggregateInput
    _max?: EmergencyContactMaxOrderByAggregateInput
    _min?: EmergencyContactMinOrderByAggregateInput
    _sum?: EmergencyContactSumOrderByAggregateInput
  }

  export type EmergencyContactScalarWhereWithAggregatesInput = {
    AND?: EmergencyContactScalarWhereWithAggregatesInput | EmergencyContactScalarWhereWithAggregatesInput[]
    OR?: EmergencyContactScalarWhereWithAggregatesInput[]
    NOT?: EmergencyContactScalarWhereWithAggregatesInput | EmergencyContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmergencyContact"> | number
    name?: StringWithAggregatesFilter<"EmergencyContact"> | string
    number?: StringWithAggregatesFilter<"EmergencyContact"> | string
    category?: StringWithAggregatesFilter<"EmergencyContact"> | string
    region?: StringNullableWithAggregatesFilter<"EmergencyContact"> | string | null
  }

  export type ResourceWhereInput = {
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    id?: IntFilter<"Resource"> | number
    title?: StringFilter<"Resource"> | string
    type?: StringFilter<"Resource"> | string
    category?: StringFilter<"Resource"> | string
    description?: StringNullableFilter<"Resource"> | string | null
    fileUrl?: StringFilter<"Resource"> | string
    pages?: IntNullableFilter<"Resource"> | number | null
  }

  export type ResourceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    pages?: SortOrderInput | SortOrder
  }

  export type ResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    title?: StringFilter<"Resource"> | string
    type?: StringFilter<"Resource"> | string
    category?: StringFilter<"Resource"> | string
    description?: StringNullableFilter<"Resource"> | string | null
    fileUrl?: StringFilter<"Resource"> | string
    pages?: IntNullableFilter<"Resource"> | number | null
  }, "id">

  export type ResourceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    pages?: SortOrderInput | SortOrder
    _count?: ResourceCountOrderByAggregateInput
    _avg?: ResourceAvgOrderByAggregateInput
    _max?: ResourceMaxOrderByAggregateInput
    _min?: ResourceMinOrderByAggregateInput
    _sum?: ResourceSumOrderByAggregateInput
  }

  export type ResourceScalarWhereWithAggregatesInput = {
    AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    OR?: ResourceScalarWhereWithAggregatesInput[]
    NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resource"> | number
    title?: StringWithAggregatesFilter<"Resource"> | string
    type?: StringWithAggregatesFilter<"Resource"> | string
    category?: StringWithAggregatesFilter<"Resource"> | string
    description?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    fileUrl?: StringWithAggregatesFilter<"Resource"> | string
    pages?: IntNullableWithAggregatesFilter<"Resource"> | number | null
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: IntFilter<"AdminUser"> | number
    email?: StringFilter<"AdminUser"> | string
    password?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    cases?: CaseListRelationFilter
    reports?: ReportListRelationFilter
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    cases?: CaseOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    password?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    cases?: CaseListRelationFilter
    reports?: ReportListRelationFilter
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _avg?: AdminUserAvgOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
    _sum?: AdminUserSumOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminUser"> | number
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    password?: StringWithAggregatesFilter<"AdminUser"> | string
    role?: StringWithAggregatesFilter<"AdminUser"> | string
    name?: StringWithAggregatesFilter<"AdminUser"> | string
  }

  export type LawyerCreateInput = {
    name: string
    photo?: string | null
    location: string
    specializations: JsonNullValueInput | InputJsonValue
    rating?: number | null
    reviews?: number
    verified?: boolean
    active?: boolean
    barNumber: string
    experience: number
    languages: JsonNullValueInput | InputJsonValue
    availability?: string | null
    successRate?: string | null
    bio?: string | null
    caseCount?: number
    education?: string | null
    contactHours?: string | null
    testimonials?: LawyerTestimonialCreateNestedManyWithoutLawyerInput
    expertise?: LawyerExpertiseCreateNestedManyWithoutLawyerInput
    documents?: LawyerDocumentCreateNestedManyWithoutLawyerInput
    availabilityCal?: LawyerAvailabilityCreateNestedManyWithoutLawyerInput
  }

  export type LawyerUncheckedCreateInput = {
    id?: number
    name: string
    photo?: string | null
    location: string
    specializations: JsonNullValueInput | InputJsonValue
    rating?: number | null
    reviews?: number
    verified?: boolean
    active?: boolean
    barNumber: string
    experience: number
    languages: JsonNullValueInput | InputJsonValue
    availability?: string | null
    successRate?: string | null
    bio?: string | null
    caseCount?: number
    education?: string | null
    contactHours?: string | null
    testimonials?: LawyerTestimonialUncheckedCreateNestedManyWithoutLawyerInput
    expertise?: LawyerExpertiseUncheckedCreateNestedManyWithoutLawyerInput
    documents?: LawyerDocumentUncheckedCreateNestedManyWithoutLawyerInput
    availabilityCal?: LawyerAvailabilityUncheckedCreateNestedManyWithoutLawyerInput
  }

  export type LawyerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    specializations?: JsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    barNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    languages?: JsonNullValueInput | InputJsonValue
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    successRate?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    caseCount?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    contactHours?: NullableStringFieldUpdateOperationsInput | string | null
    testimonials?: LawyerTestimonialUpdateManyWithoutLawyerNestedInput
    expertise?: LawyerExpertiseUpdateManyWithoutLawyerNestedInput
    documents?: LawyerDocumentUpdateManyWithoutLawyerNestedInput
    availabilityCal?: LawyerAvailabilityUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    specializations?: JsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    barNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    languages?: JsonNullValueInput | InputJsonValue
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    successRate?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    caseCount?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    contactHours?: NullableStringFieldUpdateOperationsInput | string | null
    testimonials?: LawyerTestimonialUncheckedUpdateManyWithoutLawyerNestedInput
    expertise?: LawyerExpertiseUncheckedUpdateManyWithoutLawyerNestedInput
    documents?: LawyerDocumentUncheckedUpdateManyWithoutLawyerNestedInput
    availabilityCal?: LawyerAvailabilityUncheckedUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerCreateManyInput = {
    id?: number
    name: string
    photo?: string | null
    location: string
    specializations: JsonNullValueInput | InputJsonValue
    rating?: number | null
    reviews?: number
    verified?: boolean
    active?: boolean
    barNumber: string
    experience: number
    languages: JsonNullValueInput | InputJsonValue
    availability?: string | null
    successRate?: string | null
    bio?: string | null
    caseCount?: number
    education?: string | null
    contactHours?: string | null
  }

  export type LawyerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    specializations?: JsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    barNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    languages?: JsonNullValueInput | InputJsonValue
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    successRate?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    caseCount?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    contactHours?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LawyerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    specializations?: JsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    barNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    languages?: JsonNullValueInput | InputJsonValue
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    successRate?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    caseCount?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    contactHours?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LawyerTestimonialCreateInput = {
    text: string
    author: string
    lawyer: LawyerCreateNestedOneWithoutTestimonialsInput
  }

  export type LawyerTestimonialUncheckedCreateInput = {
    id?: number
    lawyerId: number
    text: string
    author: string
  }

  export type LawyerTestimonialUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    lawyer?: LawyerUpdateOneRequiredWithoutTestimonialsNestedInput
  }

  export type LawyerTestimonialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type LawyerTestimonialCreateManyInput = {
    id?: number
    lawyerId: number
    text: string
    author: string
  }

  export type LawyerTestimonialUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type LawyerTestimonialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type LawyerExpertiseCreateInput = {
    expertise: string
    lawyer: LawyerCreateNestedOneWithoutExpertiseInput
  }

  export type LawyerExpertiseUncheckedCreateInput = {
    id?: number
    lawyerId: number
    expertise: string
  }

  export type LawyerExpertiseUpdateInput = {
    expertise?: StringFieldUpdateOperationsInput | string
    lawyer?: LawyerUpdateOneRequiredWithoutExpertiseNestedInput
  }

  export type LawyerExpertiseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    expertise?: StringFieldUpdateOperationsInput | string
  }

  export type LawyerExpertiseCreateManyInput = {
    id?: number
    lawyerId: number
    expertise: string
  }

  export type LawyerExpertiseUpdateManyMutationInput = {
    expertise?: StringFieldUpdateOperationsInput | string
  }

  export type LawyerExpertiseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    expertise?: StringFieldUpdateOperationsInput | string
  }

  export type LawyerDocumentCreateInput = {
    name: string
    type: string
    description?: string | null
    lawyer: LawyerCreateNestedOneWithoutDocumentsInput
  }

  export type LawyerDocumentUncheckedCreateInput = {
    id?: number
    lawyerId: number
    name: string
    type: string
    description?: string | null
  }

  export type LawyerDocumentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lawyer?: LawyerUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type LawyerDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LawyerDocumentCreateManyInput = {
    id?: number
    lawyerId: number
    name: string
    type: string
    description?: string | null
  }

  export type LawyerDocumentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LawyerDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LawyerAvailabilityCreateInput = {
    date: Date | string
    slots: JsonNullValueInput | InputJsonValue
    lawyer: LawyerCreateNestedOneWithoutAvailabilityCalInput
  }

  export type LawyerAvailabilityUncheckedCreateInput = {
    id?: number
    lawyerId: number
    date: Date | string
    slots: JsonNullValueInput | InputJsonValue
  }

  export type LawyerAvailabilityUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: JsonNullValueInput | InputJsonValue
    lawyer?: LawyerUpdateOneRequiredWithoutAvailabilityCalNestedInput
  }

  export type LawyerAvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: JsonNullValueInput | InputJsonValue
  }

  export type LawyerAvailabilityCreateManyInput = {
    id?: number
    lawyerId: number
    date: Date | string
    slots: JsonNullValueInput | InputJsonValue
  }

  export type LawyerAvailabilityUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: JsonNullValueInput | InputJsonValue
  }

  export type LawyerAvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lawyerId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: JsonNullValueInput | InputJsonValue
  }

  export type CaseCreateInput = {
    id: string
    reportDate: Date | string
    status: string
    severity: string
    type: string
    location: string
    clientName: string
    clientContact?: string | null
    lastUpdated: Date | string
    adminUser?: AdminUserCreateNestedOneWithoutCasesInput
    notes?: CaseNoteCreateNestedManyWithoutCaseInput
    actions?: CaseActionCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateInput = {
    id: string
    reportDate: Date | string
    status: string
    severity: string
    type: string
    location: string
    assignedTo?: number | null
    clientName: string
    clientContact?: string | null
    lastUpdated: Date | string
    notes?: CaseNoteUncheckedCreateNestedManyWithoutCaseInput
    actions?: CaseActionUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    adminUser?: AdminUserUpdateOneWithoutCasesNestedInput
    notes?: CaseNoteUpdateManyWithoutCaseNestedInput
    actions?: CaseActionUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableIntFieldUpdateOperationsInput | number | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: CaseNoteUncheckedUpdateManyWithoutCaseNestedInput
    actions?: CaseActionUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseCreateManyInput = {
    id: string
    reportDate: Date | string
    status: string
    severity: string
    type: string
    location: string
    assignedTo?: number | null
    clientName: string
    clientContact?: string | null
    lastUpdated: Date | string
  }

  export type CaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableIntFieldUpdateOperationsInput | number | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseNoteCreateInput = {
    date: Date | string
    author: string
    content: string
    case: CaseCreateNestedOneWithoutNotesInput
  }

  export type CaseNoteUncheckedCreateInput = {
    id?: number
    caseId: string
    date: Date | string
    author: string
    content: string
  }

  export type CaseNoteUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    case?: CaseUpdateOneRequiredWithoutNotesNestedInput
  }

  export type CaseNoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CaseNoteCreateManyInput = {
    id?: number
    caseId: string
    date: Date | string
    author: string
    content: string
  }

  export type CaseNoteUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CaseNoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CaseActionCreateInput = {
    type: string
    status: string
    dueDate: Date | string
    assignedTo: string
    case: CaseCreateNestedOneWithoutActionsInput
  }

  export type CaseActionUncheckedCreateInput = {
    id?: number
    caseId: string
    type: string
    status: string
    dueDate: Date | string
    assignedTo: string
  }

  export type CaseActionUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: StringFieldUpdateOperationsInput | string
    case?: CaseUpdateOneRequiredWithoutActionsNestedInput
  }

  export type CaseActionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: StringFieldUpdateOperationsInput | string
  }

  export type CaseActionCreateManyInput = {
    id?: number
    caseId: string
    type: string
    status: string
    dueDate: Date | string
    assignedTo: string
  }

  export type CaseActionUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: StringFieldUpdateOperationsInput | string
  }

  export type CaseActionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    caseId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: StringFieldUpdateOperationsInput | string
  }

  export type ReportCreateInput = {
    id: string
    reportDate: Date | string
    reportType: string
    incidentType: string
    location: string
    status: string
    severity: string
    hasEvidence?: boolean
    hasWitnesses?: boolean
    immediateDanger?: boolean
    clientName?: string | null
    clientContact?: string | null
    adminUser?: AdminUserCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateInput = {
    id: string
    reportDate: Date | string
    reportType: string
    incidentType: string
    location: string
    status: string
    severity: string
    hasEvidence?: boolean
    hasWitnesses?: boolean
    immediateDanger?: boolean
    clientName?: string | null
    clientContact?: string | null
    assignedTo?: number | null
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportType?: StringFieldUpdateOperationsInput | string
    incidentType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    hasEvidence?: BoolFieldUpdateOperationsInput | boolean
    hasWitnesses?: BoolFieldUpdateOperationsInput | boolean
    immediateDanger?: BoolFieldUpdateOperationsInput | boolean
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    adminUser?: AdminUserUpdateOneWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportType?: StringFieldUpdateOperationsInput | string
    incidentType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    hasEvidence?: BoolFieldUpdateOperationsInput | boolean
    hasWitnesses?: BoolFieldUpdateOperationsInput | boolean
    immediateDanger?: BoolFieldUpdateOperationsInput | boolean
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReportCreateManyInput = {
    id: string
    reportDate: Date | string
    reportType: string
    incidentType: string
    location: string
    status: string
    severity: string
    hasEvidence?: boolean
    hasWitnesses?: boolean
    immediateDanger?: boolean
    clientName?: string | null
    clientContact?: string | null
    assignedTo?: number | null
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportType?: StringFieldUpdateOperationsInput | string
    incidentType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    hasEvidence?: BoolFieldUpdateOperationsInput | boolean
    hasWitnesses?: BoolFieldUpdateOperationsInput | boolean
    immediateDanger?: BoolFieldUpdateOperationsInput | boolean
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportType?: StringFieldUpdateOperationsInput | string
    incidentType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    hasEvidence?: BoolFieldUpdateOperationsInput | boolean
    hasWitnesses?: BoolFieldUpdateOperationsInput | boolean
    immediateDanger?: BoolFieldUpdateOperationsInput | boolean
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmergencyContactCreateInput = {
    name: string
    number: string
    category: string
    region?: string | null
  }

  export type EmergencyContactUncheckedCreateInput = {
    id?: number
    name: string
    number: string
    category: string
    region?: string | null
  }

  export type EmergencyContactUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmergencyContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmergencyContactCreateManyInput = {
    id?: number
    name: string
    number: string
    category: string
    region?: string | null
  }

  export type EmergencyContactUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmergencyContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResourceCreateInput = {
    title: string
    type: string
    category: string
    description?: string | null
    fileUrl: string
    pages?: number | null
  }

  export type ResourceUncheckedCreateInput = {
    id?: number
    title: string
    type: string
    category: string
    description?: string | null
    fileUrl: string
    pages?: number | null
  }

  export type ResourceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ResourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ResourceCreateManyInput = {
    id?: number
    title: string
    type: string
    category: string
    description?: string | null
    fileUrl: string
    pages?: number | null
  }

  export type ResourceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ResourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdminUserCreateInput = {
    email: string
    password: string
    role: string
    name: string
    cases?: CaseCreateNestedManyWithoutAdminUserInput
    reports?: ReportCreateNestedManyWithoutAdminUserInput
  }

  export type AdminUserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role: string
    name: string
    cases?: CaseUncheckedCreateNestedManyWithoutAdminUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutAdminUserInput
  }

  export type AdminUserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cases?: CaseUpdateManyWithoutAdminUserNestedInput
    reports?: ReportUpdateManyWithoutAdminUserNestedInput
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cases?: CaseUncheckedUpdateManyWithoutAdminUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutAdminUserNestedInput
  }

  export type AdminUserCreateManyInput = {
    id?: number
    email: string
    password: string
    role: string
    name: string
  }

  export type AdminUserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LawyerTestimonialListRelationFilter = {
    every?: LawyerTestimonialWhereInput
    some?: LawyerTestimonialWhereInput
    none?: LawyerTestimonialWhereInput
  }

  export type LawyerExpertiseListRelationFilter = {
    every?: LawyerExpertiseWhereInput
    some?: LawyerExpertiseWhereInput
    none?: LawyerExpertiseWhereInput
  }

  export type LawyerDocumentListRelationFilter = {
    every?: LawyerDocumentWhereInput
    some?: LawyerDocumentWhereInput
    none?: LawyerDocumentWhereInput
  }

  export type LawyerAvailabilityListRelationFilter = {
    every?: LawyerAvailabilityWhereInput
    some?: LawyerAvailabilityWhereInput
    none?: LawyerAvailabilityWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LawyerTestimonialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LawyerExpertiseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LawyerDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LawyerAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LawyerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    location?: SortOrder
    specializations?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    verified?: SortOrder
    active?: SortOrder
    barNumber?: SortOrder
    experience?: SortOrder
    languages?: SortOrder
    availability?: SortOrder
    successRate?: SortOrder
    bio?: SortOrder
    caseCount?: SortOrder
    education?: SortOrder
    contactHours?: SortOrder
  }

  export type LawyerAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    experience?: SortOrder
    caseCount?: SortOrder
  }

  export type LawyerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    location?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    verified?: SortOrder
    active?: SortOrder
    barNumber?: SortOrder
    experience?: SortOrder
    availability?: SortOrder
    successRate?: SortOrder
    bio?: SortOrder
    caseCount?: SortOrder
    education?: SortOrder
    contactHours?: SortOrder
  }

  export type LawyerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    location?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    verified?: SortOrder
    active?: SortOrder
    barNumber?: SortOrder
    experience?: SortOrder
    availability?: SortOrder
    successRate?: SortOrder
    bio?: SortOrder
    caseCount?: SortOrder
    education?: SortOrder
    contactHours?: SortOrder
  }

  export type LawyerSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    experience?: SortOrder
    caseCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LawyerScalarRelationFilter = {
    is?: LawyerWhereInput
    isNot?: LawyerWhereInput
  }

  export type LawyerTestimonialCountOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    text?: SortOrder
    author?: SortOrder
  }

  export type LawyerTestimonialAvgOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
  }

  export type LawyerTestimonialMaxOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    text?: SortOrder
    author?: SortOrder
  }

  export type LawyerTestimonialMinOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    text?: SortOrder
    author?: SortOrder
  }

  export type LawyerTestimonialSumOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
  }

  export type LawyerExpertiseCountOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    expertise?: SortOrder
  }

  export type LawyerExpertiseAvgOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
  }

  export type LawyerExpertiseMaxOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    expertise?: SortOrder
  }

  export type LawyerExpertiseMinOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    expertise?: SortOrder
  }

  export type LawyerExpertiseSumOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
  }

  export type LawyerDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
  }

  export type LawyerDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
  }

  export type LawyerDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
  }

  export type LawyerDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
  }

  export type LawyerDocumentSumOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LawyerAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    date?: SortOrder
    slots?: SortOrder
  }

  export type LawyerAvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
  }

  export type LawyerAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    date?: SortOrder
  }

  export type LawyerAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
    date?: SortOrder
  }

  export type LawyerAvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    lawyerId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AdminUserNullableScalarRelationFilter = {
    is?: AdminUserWhereInput | null
    isNot?: AdminUserWhereInput | null
  }

  export type CaseNoteListRelationFilter = {
    every?: CaseNoteWhereInput
    some?: CaseNoteWhereInput
    none?: CaseNoteWhereInput
  }

  export type CaseActionListRelationFilter = {
    every?: CaseActionWhereInput
    some?: CaseActionWhereInput
    none?: CaseActionWhereInput
  }

  export type CaseNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaseActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaseCountOrderByAggregateInput = {
    id?: SortOrder
    reportDate?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    type?: SortOrder
    location?: SortOrder
    assignedTo?: SortOrder
    clientName?: SortOrder
    clientContact?: SortOrder
    lastUpdated?: SortOrder
  }

  export type CaseAvgOrderByAggregateInput = {
    assignedTo?: SortOrder
  }

  export type CaseMaxOrderByAggregateInput = {
    id?: SortOrder
    reportDate?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    type?: SortOrder
    location?: SortOrder
    assignedTo?: SortOrder
    clientName?: SortOrder
    clientContact?: SortOrder
    lastUpdated?: SortOrder
  }

  export type CaseMinOrderByAggregateInput = {
    id?: SortOrder
    reportDate?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    type?: SortOrder
    location?: SortOrder
    assignedTo?: SortOrder
    clientName?: SortOrder
    clientContact?: SortOrder
    lastUpdated?: SortOrder
  }

  export type CaseSumOrderByAggregateInput = {
    assignedTo?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CaseScalarRelationFilter = {
    is?: CaseWhereInput
    isNot?: CaseWhereInput
  }

  export type CaseNoteCountOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    date?: SortOrder
    author?: SortOrder
    content?: SortOrder
  }

  export type CaseNoteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CaseNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    date?: SortOrder
    author?: SortOrder
    content?: SortOrder
  }

  export type CaseNoteMinOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    date?: SortOrder
    author?: SortOrder
    content?: SortOrder
  }

  export type CaseNoteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CaseActionCountOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    assignedTo?: SortOrder
  }

  export type CaseActionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CaseActionMaxOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    assignedTo?: SortOrder
  }

  export type CaseActionMinOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    assignedTo?: SortOrder
  }

  export type CaseActionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    reportDate?: SortOrder
    reportType?: SortOrder
    incidentType?: SortOrder
    location?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    hasEvidence?: SortOrder
    hasWitnesses?: SortOrder
    immediateDanger?: SortOrder
    clientName?: SortOrder
    clientContact?: SortOrder
    assignedTo?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    assignedTo?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    reportDate?: SortOrder
    reportType?: SortOrder
    incidentType?: SortOrder
    location?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    hasEvidence?: SortOrder
    hasWitnesses?: SortOrder
    immediateDanger?: SortOrder
    clientName?: SortOrder
    clientContact?: SortOrder
    assignedTo?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    reportDate?: SortOrder
    reportType?: SortOrder
    incidentType?: SortOrder
    location?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    hasEvidence?: SortOrder
    hasWitnesses?: SortOrder
    immediateDanger?: SortOrder
    clientName?: SortOrder
    clientContact?: SortOrder
    assignedTo?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    assignedTo?: SortOrder
  }

  export type EmergencyContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    category?: SortOrder
    region?: SortOrder
  }

  export type EmergencyContactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmergencyContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    category?: SortOrder
    region?: SortOrder
  }

  export type EmergencyContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    category?: SortOrder
    region?: SortOrder
  }

  export type EmergencyContactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResourceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    pages?: SortOrder
  }

  export type ResourceAvgOrderByAggregateInput = {
    id?: SortOrder
    pages?: SortOrder
  }

  export type ResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    pages?: SortOrder
  }

  export type ResourceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    pages?: SortOrder
  }

  export type ResourceSumOrderByAggregateInput = {
    id?: SortOrder
    pages?: SortOrder
  }

  export type CaseListRelationFilter = {
    every?: CaseWhereInput
    some?: CaseWhereInput
    none?: CaseWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type CaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
  }

  export type AdminUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
  }

  export type AdminUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LawyerTestimonialCreateNestedManyWithoutLawyerInput = {
    create?: XOR<LawyerTestimonialCreateWithoutLawyerInput, LawyerTestimonialUncheckedCreateWithoutLawyerInput> | LawyerTestimonialCreateWithoutLawyerInput[] | LawyerTestimonialUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawyerTestimonialCreateOrConnectWithoutLawyerInput | LawyerTestimonialCreateOrConnectWithoutLawyerInput[]
    createMany?: LawyerTestimonialCreateManyLawyerInputEnvelope
    connect?: LawyerTestimonialWhereUniqueInput | LawyerTestimonialWhereUniqueInput[]
  }

  export type LawyerExpertiseCreateNestedManyWithoutLawyerInput = {
    create?: XOR<LawyerExpertiseCreateWithoutLawyerInput, LawyerExpertiseUncheckedCreateWithoutLawyerInput> | LawyerExpertiseCreateWithoutLawyerInput[] | LawyerExpertiseUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawyerExpertiseCreateOrConnectWithoutLawyerInput | LawyerExpertiseCreateOrConnectWithoutLawyerInput[]
    createMany?: LawyerExpertiseCreateManyLawyerInputEnvelope
    connect?: LawyerExpertiseWhereUniqueInput | LawyerExpertiseWhereUniqueInput[]
  }

  export type LawyerDocumentCreateNestedManyWithoutLawyerInput = {
    create?: XOR<LawyerDocumentCreateWithoutLawyerInput, LawyerDocumentUncheckedCreateWithoutLawyerInput> | LawyerDocumentCreateWithoutLawyerInput[] | LawyerDocumentUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawyerDocumentCreateOrConnectWithoutLawyerInput | LawyerDocumentCreateOrConnectWithoutLawyerInput[]
    createMany?: LawyerDocumentCreateManyLawyerInputEnvelope
    connect?: LawyerDocumentWhereUniqueInput | LawyerDocumentWhereUniqueInput[]
  }

  export type LawyerAvailabilityCreateNestedManyWithoutLawyerInput = {
    create?: XOR<LawyerAvailabilityCreateWithoutLawyerInput, LawyerAvailabilityUncheckedCreateWithoutLawyerInput> | LawyerAvailabilityCreateWithoutLawyerInput[] | LawyerAvailabilityUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawyerAvailabilityCreateOrConnectWithoutLawyerInput | LawyerAvailabilityCreateOrConnectWithoutLawyerInput[]
    createMany?: LawyerAvailabilityCreateManyLawyerInputEnvelope
    connect?: LawyerAvailabilityWhereUniqueInput | LawyerAvailabilityWhereUniqueInput[]
  }

  export type LawyerTestimonialUncheckedCreateNestedManyWithoutLawyerInput = {
    create?: XOR<LawyerTestimonialCreateWithoutLawyerInput, LawyerTestimonialUncheckedCreateWithoutLawyerInput> | LawyerTestimonialCreateWithoutLawyerInput[] | LawyerTestimonialUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawyerTestimonialCreateOrConnectWithoutLawyerInput | LawyerTestimonialCreateOrConnectWithoutLawyerInput[]
    createMany?: LawyerTestimonialCreateManyLawyerInputEnvelope
    connect?: LawyerTestimonialWhereUniqueInput | LawyerTestimonialWhereUniqueInput[]
  }

  export type LawyerExpertiseUncheckedCreateNestedManyWithoutLawyerInput = {
    create?: XOR<LawyerExpertiseCreateWithoutLawyerInput, LawyerExpertiseUncheckedCreateWithoutLawyerInput> | LawyerExpertiseCreateWithoutLawyerInput[] | LawyerExpertiseUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawyerExpertiseCreateOrConnectWithoutLawyerInput | LawyerExpertiseCreateOrConnectWithoutLawyerInput[]
    createMany?: LawyerExpertiseCreateManyLawyerInputEnvelope
    connect?: LawyerExpertiseWhereUniqueInput | LawyerExpertiseWhereUniqueInput[]
  }

  export type LawyerDocumentUncheckedCreateNestedManyWithoutLawyerInput = {
    create?: XOR<LawyerDocumentCreateWithoutLawyerInput, LawyerDocumentUncheckedCreateWithoutLawyerInput> | LawyerDocumentCreateWithoutLawyerInput[] | LawyerDocumentUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawyerDocumentCreateOrConnectWithoutLawyerInput | LawyerDocumentCreateOrConnectWithoutLawyerInput[]
    createMany?: LawyerDocumentCreateManyLawyerInputEnvelope
    connect?: LawyerDocumentWhereUniqueInput | LawyerDocumentWhereUniqueInput[]
  }

  export type LawyerAvailabilityUncheckedCreateNestedManyWithoutLawyerInput = {
    create?: XOR<LawyerAvailabilityCreateWithoutLawyerInput, LawyerAvailabilityUncheckedCreateWithoutLawyerInput> | LawyerAvailabilityCreateWithoutLawyerInput[] | LawyerAvailabilityUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawyerAvailabilityCreateOrConnectWithoutLawyerInput | LawyerAvailabilityCreateOrConnectWithoutLawyerInput[]
    createMany?: LawyerAvailabilityCreateManyLawyerInputEnvelope
    connect?: LawyerAvailabilityWhereUniqueInput | LawyerAvailabilityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LawyerTestimonialUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<LawyerTestimonialCreateWithoutLawyerInput, LawyerTestimonialUncheckedCreateWithoutLawyerInput> | LawyerTestimonialCreateWithoutLawyerInput[] | LawyerTestimonialUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawyerTestimonialCreateOrConnectWithoutLawyerInput | LawyerTestimonialCreateOrConnectWithoutLawyerInput[]
    upsert?: LawyerTestimonialUpsertWithWhereUniqueWithoutLawyerInput | LawyerTestimonialUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: LawyerTestimonialCreateManyLawyerInputEnvelope
    set?: LawyerTestimonialWhereUniqueInput | LawyerTestimonialWhereUniqueInput[]
    disconnect?: LawyerTestimonialWhereUniqueInput | LawyerTestimonialWhereUniqueInput[]
    delete?: LawyerTestimonialWhereUniqueInput | LawyerTestimonialWhereUniqueInput[]
    connect?: LawyerTestimonialWhereUniqueInput | LawyerTestimonialWhereUniqueInput[]
    update?: LawyerTestimonialUpdateWithWhereUniqueWithoutLawyerInput | LawyerTestimonialUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: LawyerTestimonialUpdateManyWithWhereWithoutLawyerInput | LawyerTestimonialUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: LawyerTestimonialScalarWhereInput | LawyerTestimonialScalarWhereInput[]
  }

  export type LawyerExpertiseUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<LawyerExpertiseCreateWithoutLawyerInput, LawyerExpertiseUncheckedCreateWithoutLawyerInput> | LawyerExpertiseCreateWithoutLawyerInput[] | LawyerExpertiseUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawyerExpertiseCreateOrConnectWithoutLawyerInput | LawyerExpertiseCreateOrConnectWithoutLawyerInput[]
    upsert?: LawyerExpertiseUpsertWithWhereUniqueWithoutLawyerInput | LawyerExpertiseUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: LawyerExpertiseCreateManyLawyerInputEnvelope
    set?: LawyerExpertiseWhereUniqueInput | LawyerExpertiseWhereUniqueInput[]
    disconnect?: LawyerExpertiseWhereUniqueInput | LawyerExpertiseWhereUniqueInput[]
    delete?: LawyerExpertiseWhereUniqueInput | LawyerExpertiseWhereUniqueInput[]
    connect?: LawyerExpertiseWhereUniqueInput | LawyerExpertiseWhereUniqueInput[]
    update?: LawyerExpertiseUpdateWithWhereUniqueWithoutLawyerInput | LawyerExpertiseUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: LawyerExpertiseUpdateManyWithWhereWithoutLawyerInput | LawyerExpertiseUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: LawyerExpertiseScalarWhereInput | LawyerExpertiseScalarWhereInput[]
  }

  export type LawyerDocumentUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<LawyerDocumentCreateWithoutLawyerInput, LawyerDocumentUncheckedCreateWithoutLawyerInput> | LawyerDocumentCreateWithoutLawyerInput[] | LawyerDocumentUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawyerDocumentCreateOrConnectWithoutLawyerInput | LawyerDocumentCreateOrConnectWithoutLawyerInput[]
    upsert?: LawyerDocumentUpsertWithWhereUniqueWithoutLawyerInput | LawyerDocumentUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: LawyerDocumentCreateManyLawyerInputEnvelope
    set?: LawyerDocumentWhereUniqueInput | LawyerDocumentWhereUniqueInput[]
    disconnect?: LawyerDocumentWhereUniqueInput | LawyerDocumentWhereUniqueInput[]
    delete?: LawyerDocumentWhereUniqueInput | LawyerDocumentWhereUniqueInput[]
    connect?: LawyerDocumentWhereUniqueInput | LawyerDocumentWhereUniqueInput[]
    update?: LawyerDocumentUpdateWithWhereUniqueWithoutLawyerInput | LawyerDocumentUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: LawyerDocumentUpdateManyWithWhereWithoutLawyerInput | LawyerDocumentUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: LawyerDocumentScalarWhereInput | LawyerDocumentScalarWhereInput[]
  }

  export type LawyerAvailabilityUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<LawyerAvailabilityCreateWithoutLawyerInput, LawyerAvailabilityUncheckedCreateWithoutLawyerInput> | LawyerAvailabilityCreateWithoutLawyerInput[] | LawyerAvailabilityUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawyerAvailabilityCreateOrConnectWithoutLawyerInput | LawyerAvailabilityCreateOrConnectWithoutLawyerInput[]
    upsert?: LawyerAvailabilityUpsertWithWhereUniqueWithoutLawyerInput | LawyerAvailabilityUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: LawyerAvailabilityCreateManyLawyerInputEnvelope
    set?: LawyerAvailabilityWhereUniqueInput | LawyerAvailabilityWhereUniqueInput[]
    disconnect?: LawyerAvailabilityWhereUniqueInput | LawyerAvailabilityWhereUniqueInput[]
    delete?: LawyerAvailabilityWhereUniqueInput | LawyerAvailabilityWhereUniqueInput[]
    connect?: LawyerAvailabilityWhereUniqueInput | LawyerAvailabilityWhereUniqueInput[]
    update?: LawyerAvailabilityUpdateWithWhereUniqueWithoutLawyerInput | LawyerAvailabilityUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: LawyerAvailabilityUpdateManyWithWhereWithoutLawyerInput | LawyerAvailabilityUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: LawyerAvailabilityScalarWhereInput | LawyerAvailabilityScalarWhereInput[]
  }

  export type LawyerTestimonialUncheckedUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<LawyerTestimonialCreateWithoutLawyerInput, LawyerTestimonialUncheckedCreateWithoutLawyerInput> | LawyerTestimonialCreateWithoutLawyerInput[] | LawyerTestimonialUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawyerTestimonialCreateOrConnectWithoutLawyerInput | LawyerTestimonialCreateOrConnectWithoutLawyerInput[]
    upsert?: LawyerTestimonialUpsertWithWhereUniqueWithoutLawyerInput | LawyerTestimonialUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: LawyerTestimonialCreateManyLawyerInputEnvelope
    set?: LawyerTestimonialWhereUniqueInput | LawyerTestimonialWhereUniqueInput[]
    disconnect?: LawyerTestimonialWhereUniqueInput | LawyerTestimonialWhereUniqueInput[]
    delete?: LawyerTestimonialWhereUniqueInput | LawyerTestimonialWhereUniqueInput[]
    connect?: LawyerTestimonialWhereUniqueInput | LawyerTestimonialWhereUniqueInput[]
    update?: LawyerTestimonialUpdateWithWhereUniqueWithoutLawyerInput | LawyerTestimonialUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: LawyerTestimonialUpdateManyWithWhereWithoutLawyerInput | LawyerTestimonialUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: LawyerTestimonialScalarWhereInput | LawyerTestimonialScalarWhereInput[]
  }

  export type LawyerExpertiseUncheckedUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<LawyerExpertiseCreateWithoutLawyerInput, LawyerExpertiseUncheckedCreateWithoutLawyerInput> | LawyerExpertiseCreateWithoutLawyerInput[] | LawyerExpertiseUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawyerExpertiseCreateOrConnectWithoutLawyerInput | LawyerExpertiseCreateOrConnectWithoutLawyerInput[]
    upsert?: LawyerExpertiseUpsertWithWhereUniqueWithoutLawyerInput | LawyerExpertiseUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: LawyerExpertiseCreateManyLawyerInputEnvelope
    set?: LawyerExpertiseWhereUniqueInput | LawyerExpertiseWhereUniqueInput[]
    disconnect?: LawyerExpertiseWhereUniqueInput | LawyerExpertiseWhereUniqueInput[]
    delete?: LawyerExpertiseWhereUniqueInput | LawyerExpertiseWhereUniqueInput[]
    connect?: LawyerExpertiseWhereUniqueInput | LawyerExpertiseWhereUniqueInput[]
    update?: LawyerExpertiseUpdateWithWhereUniqueWithoutLawyerInput | LawyerExpertiseUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: LawyerExpertiseUpdateManyWithWhereWithoutLawyerInput | LawyerExpertiseUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: LawyerExpertiseScalarWhereInput | LawyerExpertiseScalarWhereInput[]
  }

  export type LawyerDocumentUncheckedUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<LawyerDocumentCreateWithoutLawyerInput, LawyerDocumentUncheckedCreateWithoutLawyerInput> | LawyerDocumentCreateWithoutLawyerInput[] | LawyerDocumentUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawyerDocumentCreateOrConnectWithoutLawyerInput | LawyerDocumentCreateOrConnectWithoutLawyerInput[]
    upsert?: LawyerDocumentUpsertWithWhereUniqueWithoutLawyerInput | LawyerDocumentUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: LawyerDocumentCreateManyLawyerInputEnvelope
    set?: LawyerDocumentWhereUniqueInput | LawyerDocumentWhereUniqueInput[]
    disconnect?: LawyerDocumentWhereUniqueInput | LawyerDocumentWhereUniqueInput[]
    delete?: LawyerDocumentWhereUniqueInput | LawyerDocumentWhereUniqueInput[]
    connect?: LawyerDocumentWhereUniqueInput | LawyerDocumentWhereUniqueInput[]
    update?: LawyerDocumentUpdateWithWhereUniqueWithoutLawyerInput | LawyerDocumentUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: LawyerDocumentUpdateManyWithWhereWithoutLawyerInput | LawyerDocumentUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: LawyerDocumentScalarWhereInput | LawyerDocumentScalarWhereInput[]
  }

  export type LawyerAvailabilityUncheckedUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<LawyerAvailabilityCreateWithoutLawyerInput, LawyerAvailabilityUncheckedCreateWithoutLawyerInput> | LawyerAvailabilityCreateWithoutLawyerInput[] | LawyerAvailabilityUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: LawyerAvailabilityCreateOrConnectWithoutLawyerInput | LawyerAvailabilityCreateOrConnectWithoutLawyerInput[]
    upsert?: LawyerAvailabilityUpsertWithWhereUniqueWithoutLawyerInput | LawyerAvailabilityUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: LawyerAvailabilityCreateManyLawyerInputEnvelope
    set?: LawyerAvailabilityWhereUniqueInput | LawyerAvailabilityWhereUniqueInput[]
    disconnect?: LawyerAvailabilityWhereUniqueInput | LawyerAvailabilityWhereUniqueInput[]
    delete?: LawyerAvailabilityWhereUniqueInput | LawyerAvailabilityWhereUniqueInput[]
    connect?: LawyerAvailabilityWhereUniqueInput | LawyerAvailabilityWhereUniqueInput[]
    update?: LawyerAvailabilityUpdateWithWhereUniqueWithoutLawyerInput | LawyerAvailabilityUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: LawyerAvailabilityUpdateManyWithWhereWithoutLawyerInput | LawyerAvailabilityUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: LawyerAvailabilityScalarWhereInput | LawyerAvailabilityScalarWhereInput[]
  }

  export type LawyerCreateNestedOneWithoutTestimonialsInput = {
    create?: XOR<LawyerCreateWithoutTestimonialsInput, LawyerUncheckedCreateWithoutTestimonialsInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutTestimonialsInput
    connect?: LawyerWhereUniqueInput
  }

  export type LawyerUpdateOneRequiredWithoutTestimonialsNestedInput = {
    create?: XOR<LawyerCreateWithoutTestimonialsInput, LawyerUncheckedCreateWithoutTestimonialsInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutTestimonialsInput
    upsert?: LawyerUpsertWithoutTestimonialsInput
    connect?: LawyerWhereUniqueInput
    update?: XOR<XOR<LawyerUpdateToOneWithWhereWithoutTestimonialsInput, LawyerUpdateWithoutTestimonialsInput>, LawyerUncheckedUpdateWithoutTestimonialsInput>
  }

  export type LawyerCreateNestedOneWithoutExpertiseInput = {
    create?: XOR<LawyerCreateWithoutExpertiseInput, LawyerUncheckedCreateWithoutExpertiseInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutExpertiseInput
    connect?: LawyerWhereUniqueInput
  }

  export type LawyerUpdateOneRequiredWithoutExpertiseNestedInput = {
    create?: XOR<LawyerCreateWithoutExpertiseInput, LawyerUncheckedCreateWithoutExpertiseInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutExpertiseInput
    upsert?: LawyerUpsertWithoutExpertiseInput
    connect?: LawyerWhereUniqueInput
    update?: XOR<XOR<LawyerUpdateToOneWithWhereWithoutExpertiseInput, LawyerUpdateWithoutExpertiseInput>, LawyerUncheckedUpdateWithoutExpertiseInput>
  }

  export type LawyerCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<LawyerCreateWithoutDocumentsInput, LawyerUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutDocumentsInput
    connect?: LawyerWhereUniqueInput
  }

  export type LawyerUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<LawyerCreateWithoutDocumentsInput, LawyerUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutDocumentsInput
    upsert?: LawyerUpsertWithoutDocumentsInput
    connect?: LawyerWhereUniqueInput
    update?: XOR<XOR<LawyerUpdateToOneWithWhereWithoutDocumentsInput, LawyerUpdateWithoutDocumentsInput>, LawyerUncheckedUpdateWithoutDocumentsInput>
  }

  export type LawyerCreateNestedOneWithoutAvailabilityCalInput = {
    create?: XOR<LawyerCreateWithoutAvailabilityCalInput, LawyerUncheckedCreateWithoutAvailabilityCalInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutAvailabilityCalInput
    connect?: LawyerWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LawyerUpdateOneRequiredWithoutAvailabilityCalNestedInput = {
    create?: XOR<LawyerCreateWithoutAvailabilityCalInput, LawyerUncheckedCreateWithoutAvailabilityCalInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutAvailabilityCalInput
    upsert?: LawyerUpsertWithoutAvailabilityCalInput
    connect?: LawyerWhereUniqueInput
    update?: XOR<XOR<LawyerUpdateToOneWithWhereWithoutAvailabilityCalInput, LawyerUpdateWithoutAvailabilityCalInput>, LawyerUncheckedUpdateWithoutAvailabilityCalInput>
  }

  export type AdminUserCreateNestedOneWithoutCasesInput = {
    create?: XOR<AdminUserCreateWithoutCasesInput, AdminUserUncheckedCreateWithoutCasesInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutCasesInput
    connect?: AdminUserWhereUniqueInput
  }

  export type CaseNoteCreateNestedManyWithoutCaseInput = {
    create?: XOR<CaseNoteCreateWithoutCaseInput, CaseNoteUncheckedCreateWithoutCaseInput> | CaseNoteCreateWithoutCaseInput[] | CaseNoteUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: CaseNoteCreateOrConnectWithoutCaseInput | CaseNoteCreateOrConnectWithoutCaseInput[]
    createMany?: CaseNoteCreateManyCaseInputEnvelope
    connect?: CaseNoteWhereUniqueInput | CaseNoteWhereUniqueInput[]
  }

  export type CaseActionCreateNestedManyWithoutCaseInput = {
    create?: XOR<CaseActionCreateWithoutCaseInput, CaseActionUncheckedCreateWithoutCaseInput> | CaseActionCreateWithoutCaseInput[] | CaseActionUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: CaseActionCreateOrConnectWithoutCaseInput | CaseActionCreateOrConnectWithoutCaseInput[]
    createMany?: CaseActionCreateManyCaseInputEnvelope
    connect?: CaseActionWhereUniqueInput | CaseActionWhereUniqueInput[]
  }

  export type CaseNoteUncheckedCreateNestedManyWithoutCaseInput = {
    create?: XOR<CaseNoteCreateWithoutCaseInput, CaseNoteUncheckedCreateWithoutCaseInput> | CaseNoteCreateWithoutCaseInput[] | CaseNoteUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: CaseNoteCreateOrConnectWithoutCaseInput | CaseNoteCreateOrConnectWithoutCaseInput[]
    createMany?: CaseNoteCreateManyCaseInputEnvelope
    connect?: CaseNoteWhereUniqueInput | CaseNoteWhereUniqueInput[]
  }

  export type CaseActionUncheckedCreateNestedManyWithoutCaseInput = {
    create?: XOR<CaseActionCreateWithoutCaseInput, CaseActionUncheckedCreateWithoutCaseInput> | CaseActionCreateWithoutCaseInput[] | CaseActionUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: CaseActionCreateOrConnectWithoutCaseInput | CaseActionCreateOrConnectWithoutCaseInput[]
    createMany?: CaseActionCreateManyCaseInputEnvelope
    connect?: CaseActionWhereUniqueInput | CaseActionWhereUniqueInput[]
  }

  export type AdminUserUpdateOneWithoutCasesNestedInput = {
    create?: XOR<AdminUserCreateWithoutCasesInput, AdminUserUncheckedCreateWithoutCasesInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutCasesInput
    upsert?: AdminUserUpsertWithoutCasesInput
    disconnect?: AdminUserWhereInput | boolean
    delete?: AdminUserWhereInput | boolean
    connect?: AdminUserWhereUniqueInput
    update?: XOR<XOR<AdminUserUpdateToOneWithWhereWithoutCasesInput, AdminUserUpdateWithoutCasesInput>, AdminUserUncheckedUpdateWithoutCasesInput>
  }

  export type CaseNoteUpdateManyWithoutCaseNestedInput = {
    create?: XOR<CaseNoteCreateWithoutCaseInput, CaseNoteUncheckedCreateWithoutCaseInput> | CaseNoteCreateWithoutCaseInput[] | CaseNoteUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: CaseNoteCreateOrConnectWithoutCaseInput | CaseNoteCreateOrConnectWithoutCaseInput[]
    upsert?: CaseNoteUpsertWithWhereUniqueWithoutCaseInput | CaseNoteUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: CaseNoteCreateManyCaseInputEnvelope
    set?: CaseNoteWhereUniqueInput | CaseNoteWhereUniqueInput[]
    disconnect?: CaseNoteWhereUniqueInput | CaseNoteWhereUniqueInput[]
    delete?: CaseNoteWhereUniqueInput | CaseNoteWhereUniqueInput[]
    connect?: CaseNoteWhereUniqueInput | CaseNoteWhereUniqueInput[]
    update?: CaseNoteUpdateWithWhereUniqueWithoutCaseInput | CaseNoteUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: CaseNoteUpdateManyWithWhereWithoutCaseInput | CaseNoteUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: CaseNoteScalarWhereInput | CaseNoteScalarWhereInput[]
  }

  export type CaseActionUpdateManyWithoutCaseNestedInput = {
    create?: XOR<CaseActionCreateWithoutCaseInput, CaseActionUncheckedCreateWithoutCaseInput> | CaseActionCreateWithoutCaseInput[] | CaseActionUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: CaseActionCreateOrConnectWithoutCaseInput | CaseActionCreateOrConnectWithoutCaseInput[]
    upsert?: CaseActionUpsertWithWhereUniqueWithoutCaseInput | CaseActionUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: CaseActionCreateManyCaseInputEnvelope
    set?: CaseActionWhereUniqueInput | CaseActionWhereUniqueInput[]
    disconnect?: CaseActionWhereUniqueInput | CaseActionWhereUniqueInput[]
    delete?: CaseActionWhereUniqueInput | CaseActionWhereUniqueInput[]
    connect?: CaseActionWhereUniqueInput | CaseActionWhereUniqueInput[]
    update?: CaseActionUpdateWithWhereUniqueWithoutCaseInput | CaseActionUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: CaseActionUpdateManyWithWhereWithoutCaseInput | CaseActionUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: CaseActionScalarWhereInput | CaseActionScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CaseNoteUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: XOR<CaseNoteCreateWithoutCaseInput, CaseNoteUncheckedCreateWithoutCaseInput> | CaseNoteCreateWithoutCaseInput[] | CaseNoteUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: CaseNoteCreateOrConnectWithoutCaseInput | CaseNoteCreateOrConnectWithoutCaseInput[]
    upsert?: CaseNoteUpsertWithWhereUniqueWithoutCaseInput | CaseNoteUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: CaseNoteCreateManyCaseInputEnvelope
    set?: CaseNoteWhereUniqueInput | CaseNoteWhereUniqueInput[]
    disconnect?: CaseNoteWhereUniqueInput | CaseNoteWhereUniqueInput[]
    delete?: CaseNoteWhereUniqueInput | CaseNoteWhereUniqueInput[]
    connect?: CaseNoteWhereUniqueInput | CaseNoteWhereUniqueInput[]
    update?: CaseNoteUpdateWithWhereUniqueWithoutCaseInput | CaseNoteUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: CaseNoteUpdateManyWithWhereWithoutCaseInput | CaseNoteUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: CaseNoteScalarWhereInput | CaseNoteScalarWhereInput[]
  }

  export type CaseActionUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: XOR<CaseActionCreateWithoutCaseInput, CaseActionUncheckedCreateWithoutCaseInput> | CaseActionCreateWithoutCaseInput[] | CaseActionUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: CaseActionCreateOrConnectWithoutCaseInput | CaseActionCreateOrConnectWithoutCaseInput[]
    upsert?: CaseActionUpsertWithWhereUniqueWithoutCaseInput | CaseActionUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: CaseActionCreateManyCaseInputEnvelope
    set?: CaseActionWhereUniqueInput | CaseActionWhereUniqueInput[]
    disconnect?: CaseActionWhereUniqueInput | CaseActionWhereUniqueInput[]
    delete?: CaseActionWhereUniqueInput | CaseActionWhereUniqueInput[]
    connect?: CaseActionWhereUniqueInput | CaseActionWhereUniqueInput[]
    update?: CaseActionUpdateWithWhereUniqueWithoutCaseInput | CaseActionUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: CaseActionUpdateManyWithWhereWithoutCaseInput | CaseActionUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: CaseActionScalarWhereInput | CaseActionScalarWhereInput[]
  }

  export type CaseCreateNestedOneWithoutNotesInput = {
    create?: XOR<CaseCreateWithoutNotesInput, CaseUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CaseCreateOrConnectWithoutNotesInput
    connect?: CaseWhereUniqueInput
  }

  export type CaseUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<CaseCreateWithoutNotesInput, CaseUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CaseCreateOrConnectWithoutNotesInput
    upsert?: CaseUpsertWithoutNotesInput
    connect?: CaseWhereUniqueInput
    update?: XOR<XOR<CaseUpdateToOneWithWhereWithoutNotesInput, CaseUpdateWithoutNotesInput>, CaseUncheckedUpdateWithoutNotesInput>
  }

  export type CaseCreateNestedOneWithoutActionsInput = {
    create?: XOR<CaseCreateWithoutActionsInput, CaseUncheckedCreateWithoutActionsInput>
    connectOrCreate?: CaseCreateOrConnectWithoutActionsInput
    connect?: CaseWhereUniqueInput
  }

  export type CaseUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<CaseCreateWithoutActionsInput, CaseUncheckedCreateWithoutActionsInput>
    connectOrCreate?: CaseCreateOrConnectWithoutActionsInput
    upsert?: CaseUpsertWithoutActionsInput
    connect?: CaseWhereUniqueInput
    update?: XOR<XOR<CaseUpdateToOneWithWhereWithoutActionsInput, CaseUpdateWithoutActionsInput>, CaseUncheckedUpdateWithoutActionsInput>
  }

  export type AdminUserCreateNestedOneWithoutReportsInput = {
    create?: XOR<AdminUserCreateWithoutReportsInput, AdminUserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutReportsInput
    connect?: AdminUserWhereUniqueInput
  }

  export type AdminUserUpdateOneWithoutReportsNestedInput = {
    create?: XOR<AdminUserCreateWithoutReportsInput, AdminUserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutReportsInput
    upsert?: AdminUserUpsertWithoutReportsInput
    disconnect?: AdminUserWhereInput | boolean
    delete?: AdminUserWhereInput | boolean
    connect?: AdminUserWhereUniqueInput
    update?: XOR<XOR<AdminUserUpdateToOneWithWhereWithoutReportsInput, AdminUserUpdateWithoutReportsInput>, AdminUserUncheckedUpdateWithoutReportsInput>
  }

  export type CaseCreateNestedManyWithoutAdminUserInput = {
    create?: XOR<CaseCreateWithoutAdminUserInput, CaseUncheckedCreateWithoutAdminUserInput> | CaseCreateWithoutAdminUserInput[] | CaseUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutAdminUserInput | CaseCreateOrConnectWithoutAdminUserInput[]
    createMany?: CaseCreateManyAdminUserInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutAdminUserInput = {
    create?: XOR<ReportCreateWithoutAdminUserInput, ReportUncheckedCreateWithoutAdminUserInput> | ReportCreateWithoutAdminUserInput[] | ReportUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutAdminUserInput | ReportCreateOrConnectWithoutAdminUserInput[]
    createMany?: ReportCreateManyAdminUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type CaseUncheckedCreateNestedManyWithoutAdminUserInput = {
    create?: XOR<CaseCreateWithoutAdminUserInput, CaseUncheckedCreateWithoutAdminUserInput> | CaseCreateWithoutAdminUserInput[] | CaseUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutAdminUserInput | CaseCreateOrConnectWithoutAdminUserInput[]
    createMany?: CaseCreateManyAdminUserInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutAdminUserInput = {
    create?: XOR<ReportCreateWithoutAdminUserInput, ReportUncheckedCreateWithoutAdminUserInput> | ReportCreateWithoutAdminUserInput[] | ReportUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutAdminUserInput | ReportCreateOrConnectWithoutAdminUserInput[]
    createMany?: ReportCreateManyAdminUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type CaseUpdateManyWithoutAdminUserNestedInput = {
    create?: XOR<CaseCreateWithoutAdminUserInput, CaseUncheckedCreateWithoutAdminUserInput> | CaseCreateWithoutAdminUserInput[] | CaseUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutAdminUserInput | CaseCreateOrConnectWithoutAdminUserInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutAdminUserInput | CaseUpsertWithWhereUniqueWithoutAdminUserInput[]
    createMany?: CaseCreateManyAdminUserInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutAdminUserInput | CaseUpdateWithWhereUniqueWithoutAdminUserInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutAdminUserInput | CaseUpdateManyWithWhereWithoutAdminUserInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutAdminUserNestedInput = {
    create?: XOR<ReportCreateWithoutAdminUserInput, ReportUncheckedCreateWithoutAdminUserInput> | ReportCreateWithoutAdminUserInput[] | ReportUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutAdminUserInput | ReportCreateOrConnectWithoutAdminUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutAdminUserInput | ReportUpsertWithWhereUniqueWithoutAdminUserInput[]
    createMany?: ReportCreateManyAdminUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutAdminUserInput | ReportUpdateWithWhereUniqueWithoutAdminUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutAdminUserInput | ReportUpdateManyWithWhereWithoutAdminUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type CaseUncheckedUpdateManyWithoutAdminUserNestedInput = {
    create?: XOR<CaseCreateWithoutAdminUserInput, CaseUncheckedCreateWithoutAdminUserInput> | CaseCreateWithoutAdminUserInput[] | CaseUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutAdminUserInput | CaseCreateOrConnectWithoutAdminUserInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutAdminUserInput | CaseUpsertWithWhereUniqueWithoutAdminUserInput[]
    createMany?: CaseCreateManyAdminUserInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutAdminUserInput | CaseUpdateWithWhereUniqueWithoutAdminUserInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutAdminUserInput | CaseUpdateManyWithWhereWithoutAdminUserInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutAdminUserNestedInput = {
    create?: XOR<ReportCreateWithoutAdminUserInput, ReportUncheckedCreateWithoutAdminUserInput> | ReportCreateWithoutAdminUserInput[] | ReportUncheckedCreateWithoutAdminUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutAdminUserInput | ReportCreateOrConnectWithoutAdminUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutAdminUserInput | ReportUpsertWithWhereUniqueWithoutAdminUserInput[]
    createMany?: ReportCreateManyAdminUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutAdminUserInput | ReportUpdateWithWhereUniqueWithoutAdminUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutAdminUserInput | ReportUpdateManyWithWhereWithoutAdminUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type LawyerTestimonialCreateWithoutLawyerInput = {
    text: string
    author: string
  }

  export type LawyerTestimonialUncheckedCreateWithoutLawyerInput = {
    id?: number
    text: string
    author: string
  }

  export type LawyerTestimonialCreateOrConnectWithoutLawyerInput = {
    where: LawyerTestimonialWhereUniqueInput
    create: XOR<LawyerTestimonialCreateWithoutLawyerInput, LawyerTestimonialUncheckedCreateWithoutLawyerInput>
  }

  export type LawyerTestimonialCreateManyLawyerInputEnvelope = {
    data: LawyerTestimonialCreateManyLawyerInput | LawyerTestimonialCreateManyLawyerInput[]
  }

  export type LawyerExpertiseCreateWithoutLawyerInput = {
    expertise: string
  }

  export type LawyerExpertiseUncheckedCreateWithoutLawyerInput = {
    id?: number
    expertise: string
  }

  export type LawyerExpertiseCreateOrConnectWithoutLawyerInput = {
    where: LawyerExpertiseWhereUniqueInput
    create: XOR<LawyerExpertiseCreateWithoutLawyerInput, LawyerExpertiseUncheckedCreateWithoutLawyerInput>
  }

  export type LawyerExpertiseCreateManyLawyerInputEnvelope = {
    data: LawyerExpertiseCreateManyLawyerInput | LawyerExpertiseCreateManyLawyerInput[]
  }

  export type LawyerDocumentCreateWithoutLawyerInput = {
    name: string
    type: string
    description?: string | null
  }

  export type LawyerDocumentUncheckedCreateWithoutLawyerInput = {
    id?: number
    name: string
    type: string
    description?: string | null
  }

  export type LawyerDocumentCreateOrConnectWithoutLawyerInput = {
    where: LawyerDocumentWhereUniqueInput
    create: XOR<LawyerDocumentCreateWithoutLawyerInput, LawyerDocumentUncheckedCreateWithoutLawyerInput>
  }

  export type LawyerDocumentCreateManyLawyerInputEnvelope = {
    data: LawyerDocumentCreateManyLawyerInput | LawyerDocumentCreateManyLawyerInput[]
  }

  export type LawyerAvailabilityCreateWithoutLawyerInput = {
    date: Date | string
    slots: JsonNullValueInput | InputJsonValue
  }

  export type LawyerAvailabilityUncheckedCreateWithoutLawyerInput = {
    id?: number
    date: Date | string
    slots: JsonNullValueInput | InputJsonValue
  }

  export type LawyerAvailabilityCreateOrConnectWithoutLawyerInput = {
    where: LawyerAvailabilityWhereUniqueInput
    create: XOR<LawyerAvailabilityCreateWithoutLawyerInput, LawyerAvailabilityUncheckedCreateWithoutLawyerInput>
  }

  export type LawyerAvailabilityCreateManyLawyerInputEnvelope = {
    data: LawyerAvailabilityCreateManyLawyerInput | LawyerAvailabilityCreateManyLawyerInput[]
  }

  export type LawyerTestimonialUpsertWithWhereUniqueWithoutLawyerInput = {
    where: LawyerTestimonialWhereUniqueInput
    update: XOR<LawyerTestimonialUpdateWithoutLawyerInput, LawyerTestimonialUncheckedUpdateWithoutLawyerInput>
    create: XOR<LawyerTestimonialCreateWithoutLawyerInput, LawyerTestimonialUncheckedCreateWithoutLawyerInput>
  }

  export type LawyerTestimonialUpdateWithWhereUniqueWithoutLawyerInput = {
    where: LawyerTestimonialWhereUniqueInput
    data: XOR<LawyerTestimonialUpdateWithoutLawyerInput, LawyerTestimonialUncheckedUpdateWithoutLawyerInput>
  }

  export type LawyerTestimonialUpdateManyWithWhereWithoutLawyerInput = {
    where: LawyerTestimonialScalarWhereInput
    data: XOR<LawyerTestimonialUpdateManyMutationInput, LawyerTestimonialUncheckedUpdateManyWithoutLawyerInput>
  }

  export type LawyerTestimonialScalarWhereInput = {
    AND?: LawyerTestimonialScalarWhereInput | LawyerTestimonialScalarWhereInput[]
    OR?: LawyerTestimonialScalarWhereInput[]
    NOT?: LawyerTestimonialScalarWhereInput | LawyerTestimonialScalarWhereInput[]
    id?: IntFilter<"LawyerTestimonial"> | number
    lawyerId?: IntFilter<"LawyerTestimonial"> | number
    text?: StringFilter<"LawyerTestimonial"> | string
    author?: StringFilter<"LawyerTestimonial"> | string
  }

  export type LawyerExpertiseUpsertWithWhereUniqueWithoutLawyerInput = {
    where: LawyerExpertiseWhereUniqueInput
    update: XOR<LawyerExpertiseUpdateWithoutLawyerInput, LawyerExpertiseUncheckedUpdateWithoutLawyerInput>
    create: XOR<LawyerExpertiseCreateWithoutLawyerInput, LawyerExpertiseUncheckedCreateWithoutLawyerInput>
  }

  export type LawyerExpertiseUpdateWithWhereUniqueWithoutLawyerInput = {
    where: LawyerExpertiseWhereUniqueInput
    data: XOR<LawyerExpertiseUpdateWithoutLawyerInput, LawyerExpertiseUncheckedUpdateWithoutLawyerInput>
  }

  export type LawyerExpertiseUpdateManyWithWhereWithoutLawyerInput = {
    where: LawyerExpertiseScalarWhereInput
    data: XOR<LawyerExpertiseUpdateManyMutationInput, LawyerExpertiseUncheckedUpdateManyWithoutLawyerInput>
  }

  export type LawyerExpertiseScalarWhereInput = {
    AND?: LawyerExpertiseScalarWhereInput | LawyerExpertiseScalarWhereInput[]
    OR?: LawyerExpertiseScalarWhereInput[]
    NOT?: LawyerExpertiseScalarWhereInput | LawyerExpertiseScalarWhereInput[]
    id?: IntFilter<"LawyerExpertise"> | number
    lawyerId?: IntFilter<"LawyerExpertise"> | number
    expertise?: StringFilter<"LawyerExpertise"> | string
  }

  export type LawyerDocumentUpsertWithWhereUniqueWithoutLawyerInput = {
    where: LawyerDocumentWhereUniqueInput
    update: XOR<LawyerDocumentUpdateWithoutLawyerInput, LawyerDocumentUncheckedUpdateWithoutLawyerInput>
    create: XOR<LawyerDocumentCreateWithoutLawyerInput, LawyerDocumentUncheckedCreateWithoutLawyerInput>
  }

  export type LawyerDocumentUpdateWithWhereUniqueWithoutLawyerInput = {
    where: LawyerDocumentWhereUniqueInput
    data: XOR<LawyerDocumentUpdateWithoutLawyerInput, LawyerDocumentUncheckedUpdateWithoutLawyerInput>
  }

  export type LawyerDocumentUpdateManyWithWhereWithoutLawyerInput = {
    where: LawyerDocumentScalarWhereInput
    data: XOR<LawyerDocumentUpdateManyMutationInput, LawyerDocumentUncheckedUpdateManyWithoutLawyerInput>
  }

  export type LawyerDocumentScalarWhereInput = {
    AND?: LawyerDocumentScalarWhereInput | LawyerDocumentScalarWhereInput[]
    OR?: LawyerDocumentScalarWhereInput[]
    NOT?: LawyerDocumentScalarWhereInput | LawyerDocumentScalarWhereInput[]
    id?: IntFilter<"LawyerDocument"> | number
    lawyerId?: IntFilter<"LawyerDocument"> | number
    name?: StringFilter<"LawyerDocument"> | string
    type?: StringFilter<"LawyerDocument"> | string
    description?: StringNullableFilter<"LawyerDocument"> | string | null
  }

  export type LawyerAvailabilityUpsertWithWhereUniqueWithoutLawyerInput = {
    where: LawyerAvailabilityWhereUniqueInput
    update: XOR<LawyerAvailabilityUpdateWithoutLawyerInput, LawyerAvailabilityUncheckedUpdateWithoutLawyerInput>
    create: XOR<LawyerAvailabilityCreateWithoutLawyerInput, LawyerAvailabilityUncheckedCreateWithoutLawyerInput>
  }

  export type LawyerAvailabilityUpdateWithWhereUniqueWithoutLawyerInput = {
    where: LawyerAvailabilityWhereUniqueInput
    data: XOR<LawyerAvailabilityUpdateWithoutLawyerInput, LawyerAvailabilityUncheckedUpdateWithoutLawyerInput>
  }

  export type LawyerAvailabilityUpdateManyWithWhereWithoutLawyerInput = {
    where: LawyerAvailabilityScalarWhereInput
    data: XOR<LawyerAvailabilityUpdateManyMutationInput, LawyerAvailabilityUncheckedUpdateManyWithoutLawyerInput>
  }

  export type LawyerAvailabilityScalarWhereInput = {
    AND?: LawyerAvailabilityScalarWhereInput | LawyerAvailabilityScalarWhereInput[]
    OR?: LawyerAvailabilityScalarWhereInput[]
    NOT?: LawyerAvailabilityScalarWhereInput | LawyerAvailabilityScalarWhereInput[]
    id?: IntFilter<"LawyerAvailability"> | number
    lawyerId?: IntFilter<"LawyerAvailability"> | number
    date?: DateTimeFilter<"LawyerAvailability"> | Date | string
    slots?: JsonFilter<"LawyerAvailability">
  }

  export type LawyerCreateWithoutTestimonialsInput = {
    name: string
    photo?: string | null
    location: string
    specializations: JsonNullValueInput | InputJsonValue
    rating?: number | null
    reviews?: number
    verified?: boolean
    active?: boolean
    barNumber: string
    experience: number
    languages: JsonNullValueInput | InputJsonValue
    availability?: string | null
    successRate?: string | null
    bio?: string | null
    caseCount?: number
    education?: string | null
    contactHours?: string | null
    expertise?: LawyerExpertiseCreateNestedManyWithoutLawyerInput
    documents?: LawyerDocumentCreateNestedManyWithoutLawyerInput
    availabilityCal?: LawyerAvailabilityCreateNestedManyWithoutLawyerInput
  }

  export type LawyerUncheckedCreateWithoutTestimonialsInput = {
    id?: number
    name: string
    photo?: string | null
    location: string
    specializations: JsonNullValueInput | InputJsonValue
    rating?: number | null
    reviews?: number
    verified?: boolean
    active?: boolean
    barNumber: string
    experience: number
    languages: JsonNullValueInput | InputJsonValue
    availability?: string | null
    successRate?: string | null
    bio?: string | null
    caseCount?: number
    education?: string | null
    contactHours?: string | null
    expertise?: LawyerExpertiseUncheckedCreateNestedManyWithoutLawyerInput
    documents?: LawyerDocumentUncheckedCreateNestedManyWithoutLawyerInput
    availabilityCal?: LawyerAvailabilityUncheckedCreateNestedManyWithoutLawyerInput
  }

  export type LawyerCreateOrConnectWithoutTestimonialsInput = {
    where: LawyerWhereUniqueInput
    create: XOR<LawyerCreateWithoutTestimonialsInput, LawyerUncheckedCreateWithoutTestimonialsInput>
  }

  export type LawyerUpsertWithoutTestimonialsInput = {
    update: XOR<LawyerUpdateWithoutTestimonialsInput, LawyerUncheckedUpdateWithoutTestimonialsInput>
    create: XOR<LawyerCreateWithoutTestimonialsInput, LawyerUncheckedCreateWithoutTestimonialsInput>
    where?: LawyerWhereInput
  }

  export type LawyerUpdateToOneWithWhereWithoutTestimonialsInput = {
    where?: LawyerWhereInput
    data: XOR<LawyerUpdateWithoutTestimonialsInput, LawyerUncheckedUpdateWithoutTestimonialsInput>
  }

  export type LawyerUpdateWithoutTestimonialsInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    specializations?: JsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    barNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    languages?: JsonNullValueInput | InputJsonValue
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    successRate?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    caseCount?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    contactHours?: NullableStringFieldUpdateOperationsInput | string | null
    expertise?: LawyerExpertiseUpdateManyWithoutLawyerNestedInput
    documents?: LawyerDocumentUpdateManyWithoutLawyerNestedInput
    availabilityCal?: LawyerAvailabilityUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerUncheckedUpdateWithoutTestimonialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    specializations?: JsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    barNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    languages?: JsonNullValueInput | InputJsonValue
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    successRate?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    caseCount?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    contactHours?: NullableStringFieldUpdateOperationsInput | string | null
    expertise?: LawyerExpertiseUncheckedUpdateManyWithoutLawyerNestedInput
    documents?: LawyerDocumentUncheckedUpdateManyWithoutLawyerNestedInput
    availabilityCal?: LawyerAvailabilityUncheckedUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerCreateWithoutExpertiseInput = {
    name: string
    photo?: string | null
    location: string
    specializations: JsonNullValueInput | InputJsonValue
    rating?: number | null
    reviews?: number
    verified?: boolean
    active?: boolean
    barNumber: string
    experience: number
    languages: JsonNullValueInput | InputJsonValue
    availability?: string | null
    successRate?: string | null
    bio?: string | null
    caseCount?: number
    education?: string | null
    contactHours?: string | null
    testimonials?: LawyerTestimonialCreateNestedManyWithoutLawyerInput
    documents?: LawyerDocumentCreateNestedManyWithoutLawyerInput
    availabilityCal?: LawyerAvailabilityCreateNestedManyWithoutLawyerInput
  }

  export type LawyerUncheckedCreateWithoutExpertiseInput = {
    id?: number
    name: string
    photo?: string | null
    location: string
    specializations: JsonNullValueInput | InputJsonValue
    rating?: number | null
    reviews?: number
    verified?: boolean
    active?: boolean
    barNumber: string
    experience: number
    languages: JsonNullValueInput | InputJsonValue
    availability?: string | null
    successRate?: string | null
    bio?: string | null
    caseCount?: number
    education?: string | null
    contactHours?: string | null
    testimonials?: LawyerTestimonialUncheckedCreateNestedManyWithoutLawyerInput
    documents?: LawyerDocumentUncheckedCreateNestedManyWithoutLawyerInput
    availabilityCal?: LawyerAvailabilityUncheckedCreateNestedManyWithoutLawyerInput
  }

  export type LawyerCreateOrConnectWithoutExpertiseInput = {
    where: LawyerWhereUniqueInput
    create: XOR<LawyerCreateWithoutExpertiseInput, LawyerUncheckedCreateWithoutExpertiseInput>
  }

  export type LawyerUpsertWithoutExpertiseInput = {
    update: XOR<LawyerUpdateWithoutExpertiseInput, LawyerUncheckedUpdateWithoutExpertiseInput>
    create: XOR<LawyerCreateWithoutExpertiseInput, LawyerUncheckedCreateWithoutExpertiseInput>
    where?: LawyerWhereInput
  }

  export type LawyerUpdateToOneWithWhereWithoutExpertiseInput = {
    where?: LawyerWhereInput
    data: XOR<LawyerUpdateWithoutExpertiseInput, LawyerUncheckedUpdateWithoutExpertiseInput>
  }

  export type LawyerUpdateWithoutExpertiseInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    specializations?: JsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    barNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    languages?: JsonNullValueInput | InputJsonValue
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    successRate?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    caseCount?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    contactHours?: NullableStringFieldUpdateOperationsInput | string | null
    testimonials?: LawyerTestimonialUpdateManyWithoutLawyerNestedInput
    documents?: LawyerDocumentUpdateManyWithoutLawyerNestedInput
    availabilityCal?: LawyerAvailabilityUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerUncheckedUpdateWithoutExpertiseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    specializations?: JsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    barNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    languages?: JsonNullValueInput | InputJsonValue
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    successRate?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    caseCount?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    contactHours?: NullableStringFieldUpdateOperationsInput | string | null
    testimonials?: LawyerTestimonialUncheckedUpdateManyWithoutLawyerNestedInput
    documents?: LawyerDocumentUncheckedUpdateManyWithoutLawyerNestedInput
    availabilityCal?: LawyerAvailabilityUncheckedUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerCreateWithoutDocumentsInput = {
    name: string
    photo?: string | null
    location: string
    specializations: JsonNullValueInput | InputJsonValue
    rating?: number | null
    reviews?: number
    verified?: boolean
    active?: boolean
    barNumber: string
    experience: number
    languages: JsonNullValueInput | InputJsonValue
    availability?: string | null
    successRate?: string | null
    bio?: string | null
    caseCount?: number
    education?: string | null
    contactHours?: string | null
    testimonials?: LawyerTestimonialCreateNestedManyWithoutLawyerInput
    expertise?: LawyerExpertiseCreateNestedManyWithoutLawyerInput
    availabilityCal?: LawyerAvailabilityCreateNestedManyWithoutLawyerInput
  }

  export type LawyerUncheckedCreateWithoutDocumentsInput = {
    id?: number
    name: string
    photo?: string | null
    location: string
    specializations: JsonNullValueInput | InputJsonValue
    rating?: number | null
    reviews?: number
    verified?: boolean
    active?: boolean
    barNumber: string
    experience: number
    languages: JsonNullValueInput | InputJsonValue
    availability?: string | null
    successRate?: string | null
    bio?: string | null
    caseCount?: number
    education?: string | null
    contactHours?: string | null
    testimonials?: LawyerTestimonialUncheckedCreateNestedManyWithoutLawyerInput
    expertise?: LawyerExpertiseUncheckedCreateNestedManyWithoutLawyerInput
    availabilityCal?: LawyerAvailabilityUncheckedCreateNestedManyWithoutLawyerInput
  }

  export type LawyerCreateOrConnectWithoutDocumentsInput = {
    where: LawyerWhereUniqueInput
    create: XOR<LawyerCreateWithoutDocumentsInput, LawyerUncheckedCreateWithoutDocumentsInput>
  }

  export type LawyerUpsertWithoutDocumentsInput = {
    update: XOR<LawyerUpdateWithoutDocumentsInput, LawyerUncheckedUpdateWithoutDocumentsInput>
    create: XOR<LawyerCreateWithoutDocumentsInput, LawyerUncheckedCreateWithoutDocumentsInput>
    where?: LawyerWhereInput
  }

  export type LawyerUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: LawyerWhereInput
    data: XOR<LawyerUpdateWithoutDocumentsInput, LawyerUncheckedUpdateWithoutDocumentsInput>
  }

  export type LawyerUpdateWithoutDocumentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    specializations?: JsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    barNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    languages?: JsonNullValueInput | InputJsonValue
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    successRate?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    caseCount?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    contactHours?: NullableStringFieldUpdateOperationsInput | string | null
    testimonials?: LawyerTestimonialUpdateManyWithoutLawyerNestedInput
    expertise?: LawyerExpertiseUpdateManyWithoutLawyerNestedInput
    availabilityCal?: LawyerAvailabilityUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    specializations?: JsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    barNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    languages?: JsonNullValueInput | InputJsonValue
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    successRate?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    caseCount?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    contactHours?: NullableStringFieldUpdateOperationsInput | string | null
    testimonials?: LawyerTestimonialUncheckedUpdateManyWithoutLawyerNestedInput
    expertise?: LawyerExpertiseUncheckedUpdateManyWithoutLawyerNestedInput
    availabilityCal?: LawyerAvailabilityUncheckedUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerCreateWithoutAvailabilityCalInput = {
    name: string
    photo?: string | null
    location: string
    specializations: JsonNullValueInput | InputJsonValue
    rating?: number | null
    reviews?: number
    verified?: boolean
    active?: boolean
    barNumber: string
    experience: number
    languages: JsonNullValueInput | InputJsonValue
    availability?: string | null
    successRate?: string | null
    bio?: string | null
    caseCount?: number
    education?: string | null
    contactHours?: string | null
    testimonials?: LawyerTestimonialCreateNestedManyWithoutLawyerInput
    expertise?: LawyerExpertiseCreateNestedManyWithoutLawyerInput
    documents?: LawyerDocumentCreateNestedManyWithoutLawyerInput
  }

  export type LawyerUncheckedCreateWithoutAvailabilityCalInput = {
    id?: number
    name: string
    photo?: string | null
    location: string
    specializations: JsonNullValueInput | InputJsonValue
    rating?: number | null
    reviews?: number
    verified?: boolean
    active?: boolean
    barNumber: string
    experience: number
    languages: JsonNullValueInput | InputJsonValue
    availability?: string | null
    successRate?: string | null
    bio?: string | null
    caseCount?: number
    education?: string | null
    contactHours?: string | null
    testimonials?: LawyerTestimonialUncheckedCreateNestedManyWithoutLawyerInput
    expertise?: LawyerExpertiseUncheckedCreateNestedManyWithoutLawyerInput
    documents?: LawyerDocumentUncheckedCreateNestedManyWithoutLawyerInput
  }

  export type LawyerCreateOrConnectWithoutAvailabilityCalInput = {
    where: LawyerWhereUniqueInput
    create: XOR<LawyerCreateWithoutAvailabilityCalInput, LawyerUncheckedCreateWithoutAvailabilityCalInput>
  }

  export type LawyerUpsertWithoutAvailabilityCalInput = {
    update: XOR<LawyerUpdateWithoutAvailabilityCalInput, LawyerUncheckedUpdateWithoutAvailabilityCalInput>
    create: XOR<LawyerCreateWithoutAvailabilityCalInput, LawyerUncheckedCreateWithoutAvailabilityCalInput>
    where?: LawyerWhereInput
  }

  export type LawyerUpdateToOneWithWhereWithoutAvailabilityCalInput = {
    where?: LawyerWhereInput
    data: XOR<LawyerUpdateWithoutAvailabilityCalInput, LawyerUncheckedUpdateWithoutAvailabilityCalInput>
  }

  export type LawyerUpdateWithoutAvailabilityCalInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    specializations?: JsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    barNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    languages?: JsonNullValueInput | InputJsonValue
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    successRate?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    caseCount?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    contactHours?: NullableStringFieldUpdateOperationsInput | string | null
    testimonials?: LawyerTestimonialUpdateManyWithoutLawyerNestedInput
    expertise?: LawyerExpertiseUpdateManyWithoutLawyerNestedInput
    documents?: LawyerDocumentUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerUncheckedUpdateWithoutAvailabilityCalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    specializations?: JsonNullValueInput | InputJsonValue
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviews?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    barNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    languages?: JsonNullValueInput | InputJsonValue
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    successRate?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    caseCount?: IntFieldUpdateOperationsInput | number
    education?: NullableStringFieldUpdateOperationsInput | string | null
    contactHours?: NullableStringFieldUpdateOperationsInput | string | null
    testimonials?: LawyerTestimonialUncheckedUpdateManyWithoutLawyerNestedInput
    expertise?: LawyerExpertiseUncheckedUpdateManyWithoutLawyerNestedInput
    documents?: LawyerDocumentUncheckedUpdateManyWithoutLawyerNestedInput
  }

  export type AdminUserCreateWithoutCasesInput = {
    email: string
    password: string
    role: string
    name: string
    reports?: ReportCreateNestedManyWithoutAdminUserInput
  }

  export type AdminUserUncheckedCreateWithoutCasesInput = {
    id?: number
    email: string
    password: string
    role: string
    name: string
    reports?: ReportUncheckedCreateNestedManyWithoutAdminUserInput
  }

  export type AdminUserCreateOrConnectWithoutCasesInput = {
    where: AdminUserWhereUniqueInput
    create: XOR<AdminUserCreateWithoutCasesInput, AdminUserUncheckedCreateWithoutCasesInput>
  }

  export type CaseNoteCreateWithoutCaseInput = {
    date: Date | string
    author: string
    content: string
  }

  export type CaseNoteUncheckedCreateWithoutCaseInput = {
    id?: number
    date: Date | string
    author: string
    content: string
  }

  export type CaseNoteCreateOrConnectWithoutCaseInput = {
    where: CaseNoteWhereUniqueInput
    create: XOR<CaseNoteCreateWithoutCaseInput, CaseNoteUncheckedCreateWithoutCaseInput>
  }

  export type CaseNoteCreateManyCaseInputEnvelope = {
    data: CaseNoteCreateManyCaseInput | CaseNoteCreateManyCaseInput[]
  }

  export type CaseActionCreateWithoutCaseInput = {
    type: string
    status: string
    dueDate: Date | string
    assignedTo: string
  }

  export type CaseActionUncheckedCreateWithoutCaseInput = {
    id?: number
    type: string
    status: string
    dueDate: Date | string
    assignedTo: string
  }

  export type CaseActionCreateOrConnectWithoutCaseInput = {
    where: CaseActionWhereUniqueInput
    create: XOR<CaseActionCreateWithoutCaseInput, CaseActionUncheckedCreateWithoutCaseInput>
  }

  export type CaseActionCreateManyCaseInputEnvelope = {
    data: CaseActionCreateManyCaseInput | CaseActionCreateManyCaseInput[]
  }

  export type AdminUserUpsertWithoutCasesInput = {
    update: XOR<AdminUserUpdateWithoutCasesInput, AdminUserUncheckedUpdateWithoutCasesInput>
    create: XOR<AdminUserCreateWithoutCasesInput, AdminUserUncheckedCreateWithoutCasesInput>
    where?: AdminUserWhereInput
  }

  export type AdminUserUpdateToOneWithWhereWithoutCasesInput = {
    where?: AdminUserWhereInput
    data: XOR<AdminUserUpdateWithoutCasesInput, AdminUserUncheckedUpdateWithoutCasesInput>
  }

  export type AdminUserUpdateWithoutCasesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    reports?: ReportUpdateManyWithoutAdminUserNestedInput
  }

  export type AdminUserUncheckedUpdateWithoutCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    reports?: ReportUncheckedUpdateManyWithoutAdminUserNestedInput
  }

  export type CaseNoteUpsertWithWhereUniqueWithoutCaseInput = {
    where: CaseNoteWhereUniqueInput
    update: XOR<CaseNoteUpdateWithoutCaseInput, CaseNoteUncheckedUpdateWithoutCaseInput>
    create: XOR<CaseNoteCreateWithoutCaseInput, CaseNoteUncheckedCreateWithoutCaseInput>
  }

  export type CaseNoteUpdateWithWhereUniqueWithoutCaseInput = {
    where: CaseNoteWhereUniqueInput
    data: XOR<CaseNoteUpdateWithoutCaseInput, CaseNoteUncheckedUpdateWithoutCaseInput>
  }

  export type CaseNoteUpdateManyWithWhereWithoutCaseInput = {
    where: CaseNoteScalarWhereInput
    data: XOR<CaseNoteUpdateManyMutationInput, CaseNoteUncheckedUpdateManyWithoutCaseInput>
  }

  export type CaseNoteScalarWhereInput = {
    AND?: CaseNoteScalarWhereInput | CaseNoteScalarWhereInput[]
    OR?: CaseNoteScalarWhereInput[]
    NOT?: CaseNoteScalarWhereInput | CaseNoteScalarWhereInput[]
    id?: IntFilter<"CaseNote"> | number
    caseId?: StringFilter<"CaseNote"> | string
    date?: DateTimeFilter<"CaseNote"> | Date | string
    author?: StringFilter<"CaseNote"> | string
    content?: StringFilter<"CaseNote"> | string
  }

  export type CaseActionUpsertWithWhereUniqueWithoutCaseInput = {
    where: CaseActionWhereUniqueInput
    update: XOR<CaseActionUpdateWithoutCaseInput, CaseActionUncheckedUpdateWithoutCaseInput>
    create: XOR<CaseActionCreateWithoutCaseInput, CaseActionUncheckedCreateWithoutCaseInput>
  }

  export type CaseActionUpdateWithWhereUniqueWithoutCaseInput = {
    where: CaseActionWhereUniqueInput
    data: XOR<CaseActionUpdateWithoutCaseInput, CaseActionUncheckedUpdateWithoutCaseInput>
  }

  export type CaseActionUpdateManyWithWhereWithoutCaseInput = {
    where: CaseActionScalarWhereInput
    data: XOR<CaseActionUpdateManyMutationInput, CaseActionUncheckedUpdateManyWithoutCaseInput>
  }

  export type CaseActionScalarWhereInput = {
    AND?: CaseActionScalarWhereInput | CaseActionScalarWhereInput[]
    OR?: CaseActionScalarWhereInput[]
    NOT?: CaseActionScalarWhereInput | CaseActionScalarWhereInput[]
    id?: IntFilter<"CaseAction"> | number
    caseId?: StringFilter<"CaseAction"> | string
    type?: StringFilter<"CaseAction"> | string
    status?: StringFilter<"CaseAction"> | string
    dueDate?: DateTimeFilter<"CaseAction"> | Date | string
    assignedTo?: StringFilter<"CaseAction"> | string
  }

  export type CaseCreateWithoutNotesInput = {
    id: string
    reportDate: Date | string
    status: string
    severity: string
    type: string
    location: string
    clientName: string
    clientContact?: string | null
    lastUpdated: Date | string
    adminUser?: AdminUserCreateNestedOneWithoutCasesInput
    actions?: CaseActionCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutNotesInput = {
    id: string
    reportDate: Date | string
    status: string
    severity: string
    type: string
    location: string
    assignedTo?: number | null
    clientName: string
    clientContact?: string | null
    lastUpdated: Date | string
    actions?: CaseActionUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutNotesInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutNotesInput, CaseUncheckedCreateWithoutNotesInput>
  }

  export type CaseUpsertWithoutNotesInput = {
    update: XOR<CaseUpdateWithoutNotesInput, CaseUncheckedUpdateWithoutNotesInput>
    create: XOR<CaseCreateWithoutNotesInput, CaseUncheckedCreateWithoutNotesInput>
    where?: CaseWhereInput
  }

  export type CaseUpdateToOneWithWhereWithoutNotesInput = {
    where?: CaseWhereInput
    data: XOR<CaseUpdateWithoutNotesInput, CaseUncheckedUpdateWithoutNotesInput>
  }

  export type CaseUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    adminUser?: AdminUserUpdateOneWithoutCasesNestedInput
    actions?: CaseActionUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableIntFieldUpdateOperationsInput | number | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    actions?: CaseActionUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseCreateWithoutActionsInput = {
    id: string
    reportDate: Date | string
    status: string
    severity: string
    type: string
    location: string
    clientName: string
    clientContact?: string | null
    lastUpdated: Date | string
    adminUser?: AdminUserCreateNestedOneWithoutCasesInput
    notes?: CaseNoteCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutActionsInput = {
    id: string
    reportDate: Date | string
    status: string
    severity: string
    type: string
    location: string
    assignedTo?: number | null
    clientName: string
    clientContact?: string | null
    lastUpdated: Date | string
    notes?: CaseNoteUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutActionsInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutActionsInput, CaseUncheckedCreateWithoutActionsInput>
  }

  export type CaseUpsertWithoutActionsInput = {
    update: XOR<CaseUpdateWithoutActionsInput, CaseUncheckedUpdateWithoutActionsInput>
    create: XOR<CaseCreateWithoutActionsInput, CaseUncheckedCreateWithoutActionsInput>
    where?: CaseWhereInput
  }

  export type CaseUpdateToOneWithWhereWithoutActionsInput = {
    where?: CaseWhereInput
    data: XOR<CaseUpdateWithoutActionsInput, CaseUncheckedUpdateWithoutActionsInput>
  }

  export type CaseUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    adminUser?: AdminUserUpdateOneWithoutCasesNestedInput
    notes?: CaseNoteUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableIntFieldUpdateOperationsInput | number | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: CaseNoteUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type AdminUserCreateWithoutReportsInput = {
    email: string
    password: string
    role: string
    name: string
    cases?: CaseCreateNestedManyWithoutAdminUserInput
  }

  export type AdminUserUncheckedCreateWithoutReportsInput = {
    id?: number
    email: string
    password: string
    role: string
    name: string
    cases?: CaseUncheckedCreateNestedManyWithoutAdminUserInput
  }

  export type AdminUserCreateOrConnectWithoutReportsInput = {
    where: AdminUserWhereUniqueInput
    create: XOR<AdminUserCreateWithoutReportsInput, AdminUserUncheckedCreateWithoutReportsInput>
  }

  export type AdminUserUpsertWithoutReportsInput = {
    update: XOR<AdminUserUpdateWithoutReportsInput, AdminUserUncheckedUpdateWithoutReportsInput>
    create: XOR<AdminUserCreateWithoutReportsInput, AdminUserUncheckedCreateWithoutReportsInput>
    where?: AdminUserWhereInput
  }

  export type AdminUserUpdateToOneWithWhereWithoutReportsInput = {
    where?: AdminUserWhereInput
    data: XOR<AdminUserUpdateWithoutReportsInput, AdminUserUncheckedUpdateWithoutReportsInput>
  }

  export type AdminUserUpdateWithoutReportsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cases?: CaseUpdateManyWithoutAdminUserNestedInput
  }

  export type AdminUserUncheckedUpdateWithoutReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cases?: CaseUncheckedUpdateManyWithoutAdminUserNestedInput
  }

  export type CaseCreateWithoutAdminUserInput = {
    id: string
    reportDate: Date | string
    status: string
    severity: string
    type: string
    location: string
    clientName: string
    clientContact?: string | null
    lastUpdated: Date | string
    notes?: CaseNoteCreateNestedManyWithoutCaseInput
    actions?: CaseActionCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutAdminUserInput = {
    id: string
    reportDate: Date | string
    status: string
    severity: string
    type: string
    location: string
    clientName: string
    clientContact?: string | null
    lastUpdated: Date | string
    notes?: CaseNoteUncheckedCreateNestedManyWithoutCaseInput
    actions?: CaseActionUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutAdminUserInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutAdminUserInput, CaseUncheckedCreateWithoutAdminUserInput>
  }

  export type CaseCreateManyAdminUserInputEnvelope = {
    data: CaseCreateManyAdminUserInput | CaseCreateManyAdminUserInput[]
  }

  export type ReportCreateWithoutAdminUserInput = {
    id: string
    reportDate: Date | string
    reportType: string
    incidentType: string
    location: string
    status: string
    severity: string
    hasEvidence?: boolean
    hasWitnesses?: boolean
    immediateDanger?: boolean
    clientName?: string | null
    clientContact?: string | null
  }

  export type ReportUncheckedCreateWithoutAdminUserInput = {
    id: string
    reportDate: Date | string
    reportType: string
    incidentType: string
    location: string
    status: string
    severity: string
    hasEvidence?: boolean
    hasWitnesses?: boolean
    immediateDanger?: boolean
    clientName?: string | null
    clientContact?: string | null
  }

  export type ReportCreateOrConnectWithoutAdminUserInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutAdminUserInput, ReportUncheckedCreateWithoutAdminUserInput>
  }

  export type ReportCreateManyAdminUserInputEnvelope = {
    data: ReportCreateManyAdminUserInput | ReportCreateManyAdminUserInput[]
  }

  export type CaseUpsertWithWhereUniqueWithoutAdminUserInput = {
    where: CaseWhereUniqueInput
    update: XOR<CaseUpdateWithoutAdminUserInput, CaseUncheckedUpdateWithoutAdminUserInput>
    create: XOR<CaseCreateWithoutAdminUserInput, CaseUncheckedCreateWithoutAdminUserInput>
  }

  export type CaseUpdateWithWhereUniqueWithoutAdminUserInput = {
    where: CaseWhereUniqueInput
    data: XOR<CaseUpdateWithoutAdminUserInput, CaseUncheckedUpdateWithoutAdminUserInput>
  }

  export type CaseUpdateManyWithWhereWithoutAdminUserInput = {
    where: CaseScalarWhereInput
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyWithoutAdminUserInput>
  }

  export type CaseScalarWhereInput = {
    AND?: CaseScalarWhereInput | CaseScalarWhereInput[]
    OR?: CaseScalarWhereInput[]
    NOT?: CaseScalarWhereInput | CaseScalarWhereInput[]
    id?: StringFilter<"Case"> | string
    reportDate?: DateTimeFilter<"Case"> | Date | string
    status?: StringFilter<"Case"> | string
    severity?: StringFilter<"Case"> | string
    type?: StringFilter<"Case"> | string
    location?: StringFilter<"Case"> | string
    assignedTo?: IntNullableFilter<"Case"> | number | null
    clientName?: StringFilter<"Case"> | string
    clientContact?: StringNullableFilter<"Case"> | string | null
    lastUpdated?: DateTimeFilter<"Case"> | Date | string
  }

  export type ReportUpsertWithWhereUniqueWithoutAdminUserInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutAdminUserInput, ReportUncheckedUpdateWithoutAdminUserInput>
    create: XOR<ReportCreateWithoutAdminUserInput, ReportUncheckedCreateWithoutAdminUserInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutAdminUserInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutAdminUserInput, ReportUncheckedUpdateWithoutAdminUserInput>
  }

  export type ReportUpdateManyWithWhereWithoutAdminUserInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutAdminUserInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    reportDate?: DateTimeFilter<"Report"> | Date | string
    reportType?: StringFilter<"Report"> | string
    incidentType?: StringFilter<"Report"> | string
    location?: StringFilter<"Report"> | string
    status?: StringFilter<"Report"> | string
    severity?: StringFilter<"Report"> | string
    hasEvidence?: BoolFilter<"Report"> | boolean
    hasWitnesses?: BoolFilter<"Report"> | boolean
    immediateDanger?: BoolFilter<"Report"> | boolean
    clientName?: StringNullableFilter<"Report"> | string | null
    clientContact?: StringNullableFilter<"Report"> | string | null
    assignedTo?: IntNullableFilter<"Report"> | number | null
  }

  export type LawyerTestimonialCreateManyLawyerInput = {
    id?: number
    text: string
    author: string
  }

  export type LawyerExpertiseCreateManyLawyerInput = {
    id?: number
    expertise: string
  }

  export type LawyerDocumentCreateManyLawyerInput = {
    id?: number
    name: string
    type: string
    description?: string | null
  }

  export type LawyerAvailabilityCreateManyLawyerInput = {
    id?: number
    date: Date | string
    slots: JsonNullValueInput | InputJsonValue
  }

  export type LawyerTestimonialUpdateWithoutLawyerInput = {
    text?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type LawyerTestimonialUncheckedUpdateWithoutLawyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type LawyerTestimonialUncheckedUpdateManyWithoutLawyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type LawyerExpertiseUpdateWithoutLawyerInput = {
    expertise?: StringFieldUpdateOperationsInput | string
  }

  export type LawyerExpertiseUncheckedUpdateWithoutLawyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    expertise?: StringFieldUpdateOperationsInput | string
  }

  export type LawyerExpertiseUncheckedUpdateManyWithoutLawyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    expertise?: StringFieldUpdateOperationsInput | string
  }

  export type LawyerDocumentUpdateWithoutLawyerInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LawyerDocumentUncheckedUpdateWithoutLawyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LawyerDocumentUncheckedUpdateManyWithoutLawyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LawyerAvailabilityUpdateWithoutLawyerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: JsonNullValueInput | InputJsonValue
  }

  export type LawyerAvailabilityUncheckedUpdateWithoutLawyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: JsonNullValueInput | InputJsonValue
  }

  export type LawyerAvailabilityUncheckedUpdateManyWithoutLawyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: JsonNullValueInput | InputJsonValue
  }

  export type CaseNoteCreateManyCaseInput = {
    id?: number
    date: Date | string
    author: string
    content: string
  }

  export type CaseActionCreateManyCaseInput = {
    id?: number
    type: string
    status: string
    dueDate: Date | string
    assignedTo: string
  }

  export type CaseNoteUpdateWithoutCaseInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CaseNoteUncheckedUpdateWithoutCaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CaseNoteUncheckedUpdateManyWithoutCaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type CaseActionUpdateWithoutCaseInput = {
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: StringFieldUpdateOperationsInput | string
  }

  export type CaseActionUncheckedUpdateWithoutCaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: StringFieldUpdateOperationsInput | string
  }

  export type CaseActionUncheckedUpdateManyWithoutCaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: StringFieldUpdateOperationsInput | string
  }

  export type CaseCreateManyAdminUserInput = {
    id: string
    reportDate: Date | string
    status: string
    severity: string
    type: string
    location: string
    clientName: string
    clientContact?: string | null
    lastUpdated: Date | string
  }

  export type ReportCreateManyAdminUserInput = {
    id: string
    reportDate: Date | string
    reportType: string
    incidentType: string
    location: string
    status: string
    severity: string
    hasEvidence?: boolean
    hasWitnesses?: boolean
    immediateDanger?: boolean
    clientName?: string | null
    clientContact?: string | null
  }

  export type CaseUpdateWithoutAdminUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: CaseNoteUpdateManyWithoutCaseNestedInput
    actions?: CaseActionUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutAdminUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: CaseNoteUncheckedUpdateManyWithoutCaseNestedInput
    actions?: CaseActionUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateManyWithoutAdminUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutAdminUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportType?: StringFieldUpdateOperationsInput | string
    incidentType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    hasEvidence?: BoolFieldUpdateOperationsInput | boolean
    hasWitnesses?: BoolFieldUpdateOperationsInput | boolean
    immediateDanger?: BoolFieldUpdateOperationsInput | boolean
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportUncheckedUpdateWithoutAdminUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportType?: StringFieldUpdateOperationsInput | string
    incidentType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    hasEvidence?: BoolFieldUpdateOperationsInput | boolean
    hasWitnesses?: BoolFieldUpdateOperationsInput | boolean
    immediateDanger?: BoolFieldUpdateOperationsInput | boolean
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportUncheckedUpdateManyWithoutAdminUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportType?: StringFieldUpdateOperationsInput | string
    incidentType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    hasEvidence?: BoolFieldUpdateOperationsInput | boolean
    hasWitnesses?: BoolFieldUpdateOperationsInput | boolean
    immediateDanger?: BoolFieldUpdateOperationsInput | boolean
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientContact?: NullableStringFieldUpdateOperationsInput | string | null
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