export {};

// EXAMPLE 1 - Allow only specific string values with TypeScript type

// ✅ with an interface
interface Person {
  name: 'Alice' | 'Bob' | 'Carl';
}

const p: Person = {
  name: 'Alice',
};

// ✅ with a Type Alias
type Sizes = 'small' | 'medium' | 'large';

const s: Sizes = 'small';
console.log(s);

// ---------------------------------------------------

// // Example 2 - two more examples

// // ✅ inline
// const str: 'draft' | 'sent' = 'draft';

// // ✅ for function parameters
// function logMessage(message: 'hello world' | 'howdy world') {
//   console.log(message);
// }

// logMessage('hello world');

// ---------------------------------------------------

// // EXAMPLE 3 - Allow only specific string values with TypeScript type using an enum

// enum EmailStatus {
//   Read = 'READ',
//   Unread = 'UNREAD',
//   Draft = 'DRAFT',
// }

// // ✅ using interfaces
// interface JobEmails {
//   status: EmailStatus;
// }

// const obj: JobEmails = {
//   status: EmailStatus.Read,
// };

// // ✅ inline assignment
// const emailStatus: EmailStatus = EmailStatus.Read;
