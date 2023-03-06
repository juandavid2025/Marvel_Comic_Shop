// class Comic {
//   id: number;
//   title: string;
//   imagePath: string;
//   issueNumber: number;
//   creators: string;
//   saleDate: string;
//   focDate: string;
//   price: number;
//   description: string;

//   constructor(
//     id: number,
//     title: string,
//     imagePath: string,
//     issueNumber: number,
//     creators: string,
//     saleDate: string,
//     focDate: string,
//     price: number,
//     description: string = ""
//   ) {
//     this.id = id;
//     this.title = title;
//     this.imagePath = imagePath;
//     this.issueNumber = issueNumber;
//     this.creators = creators;
//     this.saleDate = saleDate;
//     this.focDate = focDate;
//     this.price = price;
//     this.description = description;
//   }
// }

// export default Comic;
export interface Comic {
  id: number;
  title: string;
  imagePath: string;
  issueNumber: number;
  creators: string;
  saleDate: string;
  focDate: string;
  price: number;
  description: string;
}
