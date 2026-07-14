export interface CppConcept {
  keywords: string[];
  topic: string;
  coreDefinition: string;
  whyItWorks: string;
  mentalModel: string;
  codeExample: string;
  thinkAboutThis: string;
  followUps: string[];
}
export const cppConcepts: CppConcept[] = [
  // 8 Main concepts
  {
    keywords: [
      'welcome to c++',
      'c++ introduction',
      'what is c++',
      'programming language',
      'giới thiệu về c++',
      'c++ là gì',
      'chào mừng đến với c++',
      'ngôn ngữ lập trình',
      'tổng quan c++',
      'giới thiệu c++',
    ],
    topic: 'Welcome to C++',
    coreDefinition:
      'C++ là một ngôn ngữ lập trình hiệu năng cao được sử dụng để xây dựng phần mềm hệ thống, trò chơi, hệ thống nhúng và các ứng dụng đòi hỏi quyền kiểm soát trực tiếp tài nguyên phần cứng.',
    whyItWorks:
      'C++ cung cấp khả năng kiểm soát phần cứng ở mức thấp nhưng vẫn giữ được các tính năng hiện đại như lớp (class), khuôn mẫu (template) và thư viện chuẩn (Standard Library).',
    mentalModel:
      'C++ giống như một hộp công cụ cơ khí khổng lồ: nó cung cấp cho bạn nhiều công cụ cực kỳ mạnh mẽ, nhưng bạn phải biết cách sử dụng chúng một cách cẩn thận.',
    codeExample: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello, C++!";
  return 0;
}`,
    thinkAboutThis:
      'Tại sao việc quản lý tài nguyên bộ nhớ trực tiếp lại cực kỳ hữu ích cho lập trình trò chơi và hệ thống?',
    followUps: [
      'Hàm main có vai trò gì trong chương trình C++?',
      'C++ khác biệt như thế nào so với Python?',
    ],
  },
  {
    keywords: [
      'c++ basics',
      'basic syntax',
      'cout',
      'cin',
      'comment',
      'include iostream',
      'semicolon',
      'cơ bản',
      'cú pháp cơ bản',
      'nhập xuất',
      'chú thích',
      'dấu chấm phẩy',
      'hàm main',
      'main function',
      'hàm main là gì',
      'vai trò hàm main',
    ],
    topic: 'C++ Basics',
    coreDefinition:
      'Một chương trình C++ cơ bản thường chứa các thư viện được nhúng, một hàm chính main() và các câu lệnh kết thúc bằng dấu chấm phẩy.',
    whyItWorks:
      'Trình biên dịch cần biết chương trình bắt đầu từ đâu, những thư viện nào khả dụng và mỗi câu lệnh kết thúc ở điểm nào để biên dịch chính xác.',
    mentalModel:
      'Một chương trình C++ giống như một công thức nấu ăn: khai báo thư viện là chuẩn bị dụng cụ, hàm main là bắt đầu chế biến, và các câu lệnh là từng bước thực hiện.',
    codeExample: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello";
  return 0;
}`,
    thinkAboutThis:
      'Điều gì sẽ xảy ra nếu bạn quên dấu chấm phẩy sau một câu lệnh trong C++?',
    followUps: [
      'Thư viện iostream cung cấp các chức năng gì?',
      'Sự khác biệt giữa cout và cin là gì?',
    ],
  },
  {
    keywords: [
      'variables',
      'variable',
      'data types',
      'data type',
      'int',
      'double',
      'char',
      'bool',
      'string',
      'biến',
      'kiểu dữ liệu',
      'khai báo biến',
      'biến là gì',
    ],
    topic: 'Variables & Data Types',
    coreDefinition:
      'Biến là một vùng nhớ được đặt tên để lưu trữ dữ liệu, còn kiểu dữ liệu định nghĩa loại giá trị mà biến đó có thể nắm giữ.',
    whyItWorks:
      'Máy tính cần biết dữ liệu là số nguyên, số thập phân, ký tự hay giá trị đúng/sai để có thể cấp phát bộ nhớ và xử lý một cách chính xác.',
    mentalModel:
      'Biến giống như một chiếc hộp được dán nhãn: hộp int lưu trữ số nguyên, hộp string lưu trữ văn bản.',
    codeExample: `int age = 20;
double score = 8.5;
string name = "Alex";
bool isPassed = true;`,
    thinkAboutThis:
      'Tại sao bạn không nên lưu trữ điểm thi thập phân vào một biến kiểu int?',
    followUps: [
      'Sự khác biệt giữa int và double là gì?',
      'Khi nào ta nên sử dụng kiểu dữ liệu bool?',
    ],
  },
  {
    keywords: [
      'conditionals',
      'conditional',
      'if',
      'else',
      'else if',
      'switch',
      'comparison',
      'decision making',
      'điều kiện',
      'cấu trúc rẽ nhánh',
      'rẽ nhánh',
      'so sánh',
    ],
    topic: 'Conditionals',
    coreDefinition:
      'Câu lệnh điều kiện cho phép chương trình đưa ra các quyết định thực thi khác nhau tùy thuộc vào điều kiện truyền vào là đúng (true) hay sai (false).',
    whyItWorks:
      'Chương trình cần có khả năng phản hồi khác nhau với các đầu vào khác nhau, ví dụ quyết định học sinh đỗ hay trượt dựa trên điểm số.',
    mentalModel:
      'Điều kiện giống như một ngã rẽ trên đường: nếu trời mưa thì đi lối có mái che; nếu không thì cứ đi đường thẳng.',
    codeExample: `int score = 8;

if (score >= 5) {
  cout << "Passed";
} else {
  cout << "Failed";
}`,
    thinkAboutThis:
      'Thứ tự sắp xếp các điều kiện else-if có thể thay đổi kết quả đầu ra như thế nào?',
    followUps: [
      'Khi nào nên dùng cấu trúc if-else?',
      'Khi nào switch-case là lựa chọn tốt hơn if-else?',
    ],
  },
  {
    keywords: [
      'loops',
      'loop',
      'for',
      'while',
      'do while',
      'iteration',
      'infinite loop',
      'vòng lặp',
      'vòng lặp vô hạn',
      'lặp',
      'lặp lại',
    ],
    topic: 'Loops',
    coreDefinition:
      'Vòng lặp thực thi một khối mã liên tục miễn là điều kiện kiểm tra là đúng hoặc cho đến khi đạt được số lần lặp định trước.',
    whyItWorks:
      'Vòng lặp giúp lập trình viên tránh lặp lại cùng một đoạn mã nhiều lần khi cần xử lý các tác vụ lặp đi lặp lại hoặc duyệt qua danh sách.',
    mentalModel:
      'Vòng lặp giống như việc kiểm tra danh sách học sinh: xử lý từng học sinh một, chuyển sang người tiếp theo và dừng lại khi hết danh sách.',
    codeExample: `for (int i = 0; i < 3; i++) {
  cout << i << endl;
}`,
    thinkAboutThis:
      'Điều gì xảy ra nếu biến điều khiển vòng lặp không bao giờ thay đổi giá trị?',
    followUps: [
      'Sự khác biệt giữa vòng lặp for và while là gì?',
      'Làm thế nào để tránh gặp lỗi vòng lặp vô hạn?',
    ],
  },
  {
    keywords: [
      'functions',
      'function',
      'parameter',
      'parameters',
      'argument',
      'arguments',
      'return',
      'void',
      'hàm',
      'tham số',
      'đối số',
      'trả về',
      'khai báo hàm',
    ],
    topic: 'Functions',
    coreDefinition:
      'Hàm là một khối lệnh được đặt tên và thực hiện một nhiệm vụ cụ thể, có thể được gọi và tái sử dụng nhiều lần ở nhiều nơi.',
    whyItWorks:
      'Hàm giúp phân rã chương trình lớn thành các phần nhỏ hơn độc lập, giúp mã nguồn dễ đọc hơn, dễ kiểm thử và bảo trì.',
    mentalModel:
      'Hàm giống như một chiếc máy bán nước tự động: bạn đưa tiền/chọn nước (đầu vào), máy xử lý bên trong và trả ra lon nước cho bạn.',
    codeExample: `int add(int a, int b) {
  return a + b;
}

int total = add(2, 3);`,
    thinkAboutThis:
      'Khi nào một hàm nên nhận các tham số thay vì sử dụng trực tiếp biến toàn cục?',
    followUps: [
      'Sự khác biệt giữa tham số (parameter) và đối số (argument) là gì?',
      'Khi nào ta nên khai báo một hàm với kiểu trả về là void?',
    ],
  },
  {
    keywords: [
      'arrays',
      'array',
      'index',
      'array index',
      'array bounds',
      'out of bounds',
      'mạng',
      'mảng',
      'chỉ số',
      'chỉ số mảng',
      'phần tử',
    ],
    topic: 'Arrays',
    coreDefinition:
      'Mảng là một tập hợp tuần tự các giá trị có cùng kiểu dữ liệu, được lưu trữ liên tiếp nhau trong bộ nhớ và truy cập thông qua chỉ số (index).',
    whyItWorks:
      'Mảng giúp lưu trữ danh sách các dữ liệu liên quan mà không cần khai báo hàng chục biến đơn lẻ, rất dễ kết hợp với vòng lặp.',
    mentalModel:
      'Mảng giống như một dãy tủ khóa được đánh số liên tiếp bắt đầu từ 0. Bạn dùng số tủ để lấy đồ đạc bên trong.',
    codeExample: `int scores[3] = {8, 9, 10};

cout << scores[0]; // 8
cout << scores[2]; // 10`,
    thinkAboutThis:
      'Tại sao phần tử đầu tiên của mảng luôn luôn sử dụng chỉ số là 0?',
    followUps: [
      'Điều gì xảy ra khi bạn truy cập phần tử ngoài phạm vi khai báo của mảng?',
      'Sự khác biệt giữa mảng tĩnh (array) và vector trong C++ là gì?',
    ],
  },
  {
    keywords: [
      'pointers',
      'pointer',
      'address',
      'memory address',
      'dereference',
      'nullptr',
      'pointer variable',
      'con trỏ',
      'địa chỉ',
      'địa chỉ bộ nhớ',
      'giải tham chiếu',
      'con trỏ null',
    ],
    topic: 'Pointers',
    coreDefinition:
      'Con trỏ là một loại biến đặc biệt dùng để lưu trữ địa chỉ bộ nhớ của một biến khác làm giá trị của nó.',
    whyItWorks:
      'Mỗi biến đều nằm tại một ô nhớ vật lý nhất định trong RAM. Con trỏ cho phép chương trình tham chiếu và thao tác trực tiếp trên ô nhớ đó.',
    mentalModel:
      'Giá trị là ngôi nhà, còn con trỏ là địa chỉ nhà. Địa chỉ giúp bạn tìm đến ngôi nhà nhưng bản thân địa chỉ không phải ngôi nhà.',
    codeExample: `int number = 10;
int* numberPointer = &number;

cout << *numberPointer; // 10`,
    thinkAboutThis:
      'Điều gì sẽ xảy ra nếu bạn cố gắng giải tham chiếu một con trỏ không trỏ đến một vùng nhớ hợp lệ?',
    followUps: [
      'Ý nghĩa của các toán tử & và * khi làm việc với con trỏ là gì?',
      'Sự khác biệt giữa con trỏ (pointer) và tham chiếu (reference) là gì?',
    ],
  },

  // 16 Follow-up concepts (sub-concepts) to handle specific questions directly and focused
  {
    keywords: [
      'vai trò gì trong chương trình c++',
      'vai trò của hàm main',
      'hàm main có vai trò gì',
      'hàm main đóng vai trò gì',
    ],
    topic: 'Hàm main',
    coreDefinition:
      'Hàm main() là điểm khởi đầu (entry point) bắt buộc của mọi chương trình C++. Khi bạn chạy chương trình, hệ điều hành sẽ tìm và bắt đầu thực thi từ đây.',
    whyItWorks:
      'Hệ điều hành và trình biên dịch cần một điểm bắt đầu cố định theo quy chuẩn chung để khởi chạy tiến trình và thực thi các câu lệnh.',
    mentalModel:
      'Hàm main giống như cánh cổng chính của một tòa nhà: bạn phải đi qua cổng này để vào tham quan bên trong.',
    codeExample: `int main() {
  // Điểm bắt đầu của mọi thứ
  cout << "Chương trình khởi chạy!";
  return 0;
}`,
    thinkAboutThis:
      'Nếu chương trình C++ của bạn không khai báo hàm main() thì quá trình biên dịch có thành công hay không?',
    followUps: ['C++ khác biệt như thế nào so với Python?'],
  },
  {
    keywords: [
      'c++ khác biệt như thế nào so với python',
      'c++ khác gì python',
      'so sánh c++ và python',
      'sự khác biệt giữa c++ và python',
    ],
    topic: 'C++ vs Python',
    coreDefinition:
      'C++ là ngôn ngữ lập trình biên dịch (Compiled), quản lý bộ nhớ trực tiếp nên chạy rất nhanh. Python là ngôn ngữ thông dịch (Interpreted), tự động quản lý bộ nhớ, dễ học và viết code ngắn hơn.',
    whyItWorks:
      'C++ biên dịch trực tiếp ra mã máy (Assembly/Machine Code), trong khi Python cần một phần mềm trung gian để dịch từng dòng lệnh khi chạy.',
    mentalModel:
      'C++ giống như một chiếc xe đua số sàn (tốc độ tối đa, đòi hỏi kỹ năng cao), còn Python là xe số tự động (dễ điều khiển, di chuyển êm ái).',
    codeExample: `// C++
#include <iostream>
int main() {
  int a = 5;
  std::cout << a;
}

# Python
# a = 5
# print(a)`,
    thinkAboutThis:
      'Khi nào bạn nên ưu tiên chọn C++ thay vì Python cho dự án phần mềm?',
    followUps: ['Hàm main có vai trò gì trong chương trình C++?'],
  },
  {
    keywords: [
      'thư viện iostream cung cấp các chức năng gì',
      'iostream cung cấp chức năng gì',
      'chức năng của iostream',
      'thư viện iostream là gì',
    ],
    topic: 'iostream',
    coreDefinition:
      'iostream (Input/Output Stream) là thư viện chuẩn trong C++ cung cấp các công cụ và luồng để thực hiện việc nhập dữ liệu từ bàn phím và xuất dữ liệu ra màn hình.',
    whyItWorks:
      'Nó định nghĩa các luồng stream tiêu chuẩn như std::cout (đầu ra) và std::cin (đầu vào) kết nối chương trình với thiết bị ngoại vi.',
    mentalModel:
      'iostream giống như một hệ thống đường ống nước: cout đẩy nước (dữ liệu) ra ngoài, còn cin hút nước vào trong.',
    codeExample: `#include <iostream>
using namespace std;
// Cho phép sử dụng cin và cout ở dưới`,
    thinkAboutThis:
      'Nếu không khai báo #include <iostream>, bạn có thể xuất dòng chữ ra màn hình được không?',
    followUps: ['Sự khác biệt giữa cout và cin là gì?'],
  },
  {
    keywords: [
      'sự khác biệt giữa cout và cin',
      'cout và cin khác nhau thế nào',
      'phân biệt cout và cin',
    ],
    topic: 'cout vs cin',
    coreDefinition:
      'std::cout được dùng để xuất dữ liệu từ chương trình ra ngoài màn hình console (dùng toán tử <<). std::cin được dùng để nhập dữ liệu từ bàn phím vào biến trong chương trình (dùng toán tử >>).',
    whyItWorks:
      'cout truyền dữ liệu đến luồng xuất chuẩn (stdout), còn cin lấy dữ liệu từ luồng nhập chuẩn (stdin).',
    mentalModel:
      'cout giống như một chiếc loa phóng thanh phát tin tức ra ngoài, còn cin giống như chiếc tai nghe thu nhận âm thanh vào.',
    codeExample: `int number;
cin >> number; // Nhập dữ liệu vào biến number
cout << "Giá trị vừa nhập: " << number; // Xuất dữ liệu`,
    thinkAboutThis:
      'Tại sao toán tử của cin lại chỉ vào biến (>>), còn toán tử của cout lại chỉ ra ngoài (<<)?',
    followUps: ['Thư viện iostream cung cấp các chức năng gì?'],
  },
  {
    keywords: [
      'sự khác biệt giữa int và double',
      'int và double khác nhau thế nào',
      'phân biệt int và double',
    ],
    topic: 'int vs double',
    coreDefinition:
      'int là kiểu dữ liệu dùng để lưu trữ số nguyên (không có phần thập phân, chiếm 4 bytes). double dùng để lưu trữ số thực (có phần thập phân, chiếm 8 bytes và độ chính xác cao).',
    whyItWorks:
      'Máy tính lưu số nguyên và số thực dưới dạng nhị phân theo các quy chuẩn khác nhau (số thực sử dụng chuẩn dấu phẩy động IEEE 754).',
    mentalModel:
      'int là chiếc hộp đựng các quả táo nguyên vẹn, còn double là chiếc hộp có thể đựng được cả những quả táo đã cắt lát nhỏ.',
    codeExample: `int count = 10;      // Số nguyên
double price = 19.99; // Số thập phân`,
    thinkAboutThis:
      'Điều gì xảy ra khi bạn gán một giá trị số thực (ví dụ 5.9) vào một biến kiểu int?',
    followUps: ['Khi nào ta nên sử dụng kiểu dữ liệu bool?'],
  },
  {
    keywords: [
      'khi nào ta nên sử dụng kiểu dữ liệu bool',
      'khi nào nên dùng bool',
      'kiểu dữ liệu bool dùng làm gì',
    ],
    topic: 'bool',
    coreDefinition:
      'bool (boolean) là kiểu dữ liệu logic chỉ có thể nhận một trong hai giá trị: true (đúng, tương ứng với số 1) hoặc false (sai, tương ứng với số 0).',
    whyItWorks:
      'Kiểu bool chiếm ít bộ nhớ (1 byte) và được sử dụng làm cơ sở để đánh giá các biểu thức điều kiện trong cấu trúc rẽ nhánh.',
    mentalModel:
      'bool giống như công tắc đèn trong nhà: chỉ có hai trạng thái là Bật (true) hoặc Tắt (false).',
    codeExample: `bool isSunny = true;
if (isSunny) {
  cout << "Trời nắng, mang mũ nhé!";
}`,
    thinkAboutThis:
      'Trong C++, bất kỳ số nào khác 0 có được coi là giá trị true hay không?',
    followUps: ['Sự khác biệt giữa int và double là gì?'],
  },
  {
    keywords: [
      'khi nào nên dùng cấu trúc if-else',
      'khi nào nên dùng if else',
      'tại sao dùng if else',
    ],
    topic: 'if-else',
    coreDefinition:
      'Cấu trúc if-else được sử dụng khi bạn cần đưa ra quyết định rẽ nhánh chương trình dựa trên một hoặc một vài điều kiện logic có tính chất loại trừ nhau hoặc phức tạp.',
    whyItWorks:
      'Trình biên dịch sẽ kiểm tra biểu thức điều kiện trong ngoặc tròn, nếu đúng sẽ chạy khối lệnh của if, ngược lại sẽ chuyển xuống else.',
    mentalModel:
      'Giống như ngã rẽ cuộc đời: NẾU đi học bài thì đỗ kỳ thi, NGƯỢC LẠI thì trượt.',
    codeExample: `int score = 4;
if (score >= 5) {
  cout << "Qua môn";
} else {
  cout << "Học lại";
}`,
    thinkAboutThis:
      'Có bắt buộc phải đi kèm khối lệnh else sau mỗi câu lệnh if hay không?',
    followUps: ['Khi nào switch-case là lựa chọn tốt hơn if-else?'],
  },
  {
    keywords: [
      'khi nào switch-case là lựa chọn tốt hơn if-else',
      'khi nào nên dùng switch case',
      'switch case và if else',
    ],
    topic: 'switch-case',
    coreDefinition:
      'switch-case tốt hơn if-else khi bạn cần kiểm tra một biến đơn lẻ so với nhiều giá trị hằng số nguyên hoặc ký tự cụ thể, giúp mã nguồn rõ ràng và tối ưu hơn.',
    whyItWorks:
      'Trình biên dịch có thể tạo ra bảng tra cứu (jump table) cho switch-case giúp tốc độ nhảy nhánh nhanh hơn nhiều so với việc duyệt chuỗi if-else dài.',
    mentalModel:
      'switch-case giống như phím chọn tầng trong thang máy: bạn nhấn nút tầng 3, thang máy sẽ đi thẳng đến tầng 3 mà không cần kiểm tra xem có phải tầng 1, 2 không.',
    codeExample: `int option = 2;
switch(option) {
  case 1: cout << "Lựa chọn 1"; break;
  case 2: cout << "Lựa chọn 2"; break; // Chạy thẳng vào đây
  default: cout << "Mặc định";
}`,
    thinkAboutThis:
      'Điều gì xảy ra nếu bạn quên câu lệnh break ở cuối mỗi case trong switch-case?',
    followUps: ['Khi nào nên dùng cấu trúc if-else?'],
  },
  {
    keywords: [
      'sự khác biệt giữa vòng lặp for và while',
      'phân biệt for và while',
      'for và while khác gì nhau',
    ],
    topic: 'for vs while',
    coreDefinition:
      'Vòng lặp for thường dùng khi biết trước số lần lặp xác định (duyệt chỉ số). Vòng lặp while dùng khi số lần lặp không cố định và phụ thuộc vào một điều kiện thay đổi trong quá trình chạy.',
    whyItWorks:
      'Vòng lặp for tích hợp sẵn ba bước: khởi tạo, điều kiện dừng và cập nhật biến lặp. Vòng lặp while chỉ nhận vào biểu thức điều kiện dừng.',
    mentalModel:
      'Vòng lặp for giống như chống đẩy 10 cái (số lần biết trước). Vòng lặp while giống như chống đẩy cho đến khi nào mệt thì nghỉ (chưa biết trước số cái).',
    codeExample: `// Dùng for (biết trước chạy 3 lần)
for (int i = 0; i < 3; i++) { cout << i; }

// Dùng while (chạy đến khi biến x giảm về 0)
int x = 3;
while (x > 0) { cout << x; x--; }`,
    thinkAboutThis:
      'Có thể biến đổi bất kỳ vòng lặp for nào thành vòng lặp while tương đương được không?',
    followUps: ['Làm thế nào để tránh gặp lỗi vòng lặp vô hạn?'],
  },
  {
    keywords: [
      'làm thế nào để tránh gặp lỗi vòng lặp vô hạn',
      'tránh vòng lặp vô hạn',
      'lỗi vòng lặp vô hạn là gì',
    ],
    topic: 'Vòng lặp vô hạn',
    coreDefinition:
      'Vòng lặp vô hạn xảy ra khi điều kiện dừng của vòng lặp luôn có giá trị đúng (true). Để tránh lỗi này, bạn phải đảm bảo biến điều khiển điều kiện lặp luôn được cập nhật hướng tới việc làm sai điều kiện dừng.',
    whyItWorks:
      'Trình biên dịch tiếp tục chạy khối lệnh bên trong vòng lặp liên tục vì không có tín hiệu thay đổi giá trị điều kiện để thoát ra.',
    mentalModel:
      'Giống như việc đi bộ trên máy chạy bộ: nếu bạn không bấm nút tắt (điều kiện dừng thành false), bạn sẽ phải đi mãi mãi không dừng.',
    codeExample: `// Vòng lặp lỗi (biến i luôn bằng 0)
// for (int i = 0; i < 5; ) { cout << i; }

// Vòng lặp đúng (i tăng dần để lớn hơn 5 và thoát)
for (int i = 0; i < 5; i++) { cout << i; }`,
    thinkAboutThis:
      'Trong thực tế, có khi nào lập trình viên cố tình tạo ra một vòng lặp vô hạn hay không?',
    followUps: ['Sự khác biệt giữa vòng lặp for và while là gì?'],
  },
  {
    keywords: [
      'sự khác biệt giữa tham số và đối số',
      'tham số và đối số khác gì nhau',
      'phân biệt tham số và đối số',
    ],
    topic: 'Parameter vs Argument',
    coreDefinition:
      'Tham số (Parameter) là biến được khai báo trong định nghĩa của hàm (đóng vai trò giữ chỗ). Đối số (Argument) là giá trị thực tế truyền vào hàm khi ta thực hiện gọi hàm đó.',
    whyItWorks:
      'Khi gọi hàm, trình biên dịch sẽ sao chép giá trị của đối số vào vùng nhớ của tham số tương ứng của hàm để thực thi.',
    mentalModel:
      'Tham số là các khay đựng tiền xu thiết kế sẵn trên máy nước tự động. Đối số là đồng xu thật mà bạn nhét vào máy.',
    codeExample: `void hello(string name) { // name là Tham số (Parameter)
  cout << "Xin chào " << name;
}

int main() {
  hello("Minh"); // "Minh" là Đối số (Argument)
}`,
    thinkAboutThis:
      'Điều gì xảy ra nếu kiểu dữ liệu của đối số không tương thích với kiểu của tham số?',
    followUps: ['Khi nào ta nên khai báo một hàm với kiểu trả về là void?'],
  },
  {
    keywords: [
      'khi nào ta nên khai báo một hàm với kiểu trả về là void',
      'khi nào dùng void',
      'hàm void là gì',
    ],
    topic: 'Hàm void',
    coreDefinition:
      'Hàm có kiểu trả về là void được sử dụng khi hàm đó chỉ thực hiện các hành động (như in ấn, thay đổi trạng thái) mà không cần tính toán và trả về bất kỳ kết quả nào cho nơi gọi nó.',
    whyItWorks:
      'Từ khóa void báo cho trình biên dịch biết rằng không có dữ liệu nào được đẩy lên ngăn xếp bộ nhớ (call stack) làm giá trị trả về khi hàm kết thúc.',
    mentalModel:
      'Hàm void giống như người đưa thư: họ mang thư đến trao cho bạn rồi đi, không cần phải lấy lại gì từ bạn.',
    codeExample: `void printGreeting() {
  cout << "Chúc bạn ngày mới tốt lành!";
  // Không có lệnh return giá trị
}`,
    thinkAboutThis:
      'Bạn có thể sử dụng từ khóa return không có giá trị đi kèm bên trong hàm void hay không?',
    followUps: [
      'Sự khác biệt giữa tham số (parameter) và đối số (argument) là gì?',
    ],
  },
  {
    keywords: [
      'điều gì xảy ra khi bạn truy cập phần tử ngoài phạm vi khai báo của mảng',
      'truy cập ngoài mảng',
      'lỗi vượt quá chỉ số mảng',
    ],
    topic: 'Mảng vượt biên',
    coreDefinition:
      'Truy cập phần tử ngoài chỉ số khai báo của mảng dẫn đến hành vi không xác định (Undefined Behavior). Chương trình có thể bị tắt đột ngột (Segmentation Fault) hoặc đọc nhầm giá trị rác ở vùng nhớ kế cận.',
    whyItWorks:
      'C++ không tự động kiểm tra biên chỉ số mảng lúc chạy để tối ưu hiệu năng. Nó truy cập trực tiếp ô nhớ bằng công thức: địa chỉ gốc + (chỉ số * kích thước phần tử).',
    mentalModel:
      'Giống như việc bạn được cấp phép sử dụng 3 ngăn tủ 0, 1, 2, nhưng lại tò mò mở ngăn tủ số 5 của người khác bên cạnh.',
    codeExample: `int arr[3] = {1, 2, 3};
cout << arr[5]; // Lỗi! Truy cập vùng nhớ bất hợp pháp`,
    thinkAboutThis:
      'Làm thế nào để bảo vệ chương trình không bị lỗi truy cập ngoài phạm vi mảng?',
    followUps: [
      'Sự khác biệt giữa mảng tĩnh (array) và vector trong C++ là gì?',
    ],
  },
  {
    keywords: [
      'sự khác biệt giữa mảng tĩnh và vector trong c++',
      'mảng tĩnh và vector khác gì nhau',
      'phân biệt mảng tĩnh và vector',
    ],
    topic: 'Array vs Vector',
    coreDefinition:
      'Mảng tĩnh có kích thước cố định từ lúc biên dịch và lưu trên ngăn xếp (stack). Vector (mảng động) có thể tự động thay đổi kích thước khi thêm phần tử và lưu trên vùng nhớ Heap.',
    whyItWorks:
      'Vector tự quản lý bộ nhớ động bên trong. Khi vượt quá dung lượng hiện tại, nó sẽ tự cấp phát một vùng nhớ mới lớn gấp đôi và sao chép dữ liệu sang.',
    mentalModel:
      'Mảng tĩnh giống như phòng khách sạn đã đặt số giường cố định. Vector giống như chiếc lều cắm trại có khóa kéo co giãn, chứa bao nhiêu người cũng được.',
    codeExample: `#include <vector>
std::vector<int> vec = {1, 2};
vec.push_back(3); // Kích thước tự tăng lên 3`,
    thinkAboutThis:
      'Tại sao vector lại tốn tài nguyên bộ nhớ hơn một chút so với mảng tĩnh truyền thống?',
    followUps: [
      'Điều gì xảy ra khi bạn truy cập phần tử ngoài phạm vi khai báo của mảng?',
    ],
  },
  {
    keywords: [
      'ý nghĩa của các toán tử & và * khi làm việc với con trỏ là gì',
      'toán tử & và *',
      'ý nghĩa toán tử & và *',
      'toán tử và & toán tử *',
    ],
    topic: 'Toán tử & và *',
    coreDefinition:
      'Toán tử lấy địa chỉ (&) được dùng để lấy địa chỉ bộ nhớ của một biến thông thường. Toán tử giải tham chiếu (*) dùng để truy cập hoặc thay đổi giá trị nằm tại địa chỉ bộ nhớ mà con trỏ đang trỏ tới.',
    whyItWorks:
      '& trả về số hex biểu thị vị trí vật lý của biến trên RAM. * đi đến ô nhớ có địa chỉ đó để lấy/ghi dữ liệu trực tiếp.',
    mentalModel:
      '& giống như việc bạn hỏi xin số nhà của một người bạn. * giống như việc bạn tìm theo số nhà đó, gõ cửa và đi vào nhà để nói chuyện.',
    codeExample: `int a = 5;
int* ptr = &a; // ptr lưu địa chỉ của a (dùng toán tử &)
cout << *ptr;   // In ra giá trị 5 (giải tham chiếu dùng toán tử *)`,
    thinkAboutThis:
      'Nếu bạn thay đổi giá trị của *ptr thì biến a gốc có bị thay đổi theo hay không?',
    followUps: [
      'Sự khác biệt giữa con trỏ (pointer) và tham chiếu (reference) là gì?',
    ],
  },
  {
    keywords: [
      'sự khác biệt giữa con trỏ và tham chiếu là gì',
      'con trỏ và tham chiếu khác nhau thế nào',
      'phân biệt con trỏ và tham chiếu',
    ],
    topic: 'Pointer vs Reference',
    coreDefinition:
      'Con trỏ (Pointer) có thể trỏ sang biến khác hoặc nhận giá trị nullptr, cần giải tham chiếu bằng toán tử *. Tham chiếu (Reference) là một bí danh khác của biến, bắt buộc phải khởi tạo ngay và không thể thay đổi đối tượng tham chiếu.',
    whyItWorks:
      'Con trỏ là một biến độc lập lưu địa chỉ. Tham chiếu thực chất là một hằng con trỏ được trình biên dịch tự động giải tham chiếu giúp người dùng.',
    mentalModel:
      'Con trỏ là tấm danh thiếp ghi địa chỉ (có thể viết đè địa chỉ mới). Tham chiếu là biệt danh ở nhà của bạn (bạn và biệt danh là cùng một người).',
    codeExample: `int a = 10;
int& ref = a; // Tham chiếu (Reference)
int* ptr = &a; // Con trỏ (Pointer)`,
    thinkAboutThis:
      'Trong trường hợp nào sử dụng tham chiếu sẽ an toàn và sạch sẽ hơn sử dụng con trỏ?',
    followUps: [
      'Ý nghĩa của các toán tử & và * khi làm việc với con trỏ là gì?',
    ],
  },
];
