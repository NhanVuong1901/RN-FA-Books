import { ImageSourcePropType } from "react-native";

export type Book = {
  id: string;
  title: string;
  author: string;
  image: ImageSourcePropType;
  description: string;
};

export const books: Book[] = [
  {
    id: "1",
    title: "Dế Mèn Phiêu Lưu Ký",
    author: "Tô Hoài",
    image: require("../assets/images/books/de-men-phieu-luu-ky.png"),
    description:
      "Một câu chuyện nổi tiếng về hành trình trưởng thành của Dế Mèn. Tác phẩm mang nhiều bài học sâu sắc về tính cách, trách nhiệm và tình bạn.",
  },
  {
    id: "2",
    title: "Lão Hạc",
    author: "Nam Cao",
    image: require("../assets/images/books/lao-hac.jpg"),
    description:
      "Tác phẩm phản ánh số phận đầy đau khổ của người nông dân trong xã hội cũ, đồng thời thể hiện lòng tự trọng và tình thương con sâu sắc.",
  },
  {
    id: "3",
    title: "Tắt Đèn",
    author: "Ngô Tất Tố",
    image: require("../assets/images/books/tat-den.png"),
    description:
      "Câu chuyện tái hiện cuộc sống cơ cực của người nông dân trước Cách mạng, đặc biệt là hình tượng chị Dậu giàu sức sống và nghị lực.",
  },
  {
    id: "4",
    title: "Chiếc Lược Ngà",
    author: "Nguyễn Quang Sáng",
    image: require("../assets/images/books/chiec-luoc-nga.jpg"),
    description:
      "Một câu chuyện cảm động về tình cha con trong hoàn cảnh chiến tranh. Tác phẩm để lại nhiều xúc động sâu sắc cho người đọc.",
  },
  {
    id: "5",
    title: "Tuổi Thơ Dữ Dội",
    author: "Phùng Quán",
    image: require("../assets/images/books/tuoi-tho-du-doi.png"),
    description:
      "Tác phẩm kể về những thiếu niên dũng cảm trong thời chiến, giàu lòng yêu nước và tinh thần hy sinh vì lý tưởng lớn lao.",
  },
];
