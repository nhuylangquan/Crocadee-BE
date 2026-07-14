export interface ErrorPattern {
  pattern: RegExp;
  errorType: 'Compilation Error' | 'Runtime Error' | 'Logic Error';
  diagnosis: string;
  fixHint: string;
  explanation: string;
}

export const errorPatterns: ErrorPattern[] = [
  {
    pattern:
      /undeclared identifier|was not declared in this scope|use of undeclared identifier/i,
    errorType: 'Compilation Error',
    diagnosis:
      'Bạn đang sử dụng một biến, một hàm hoặc một đối tượng chưa được khai báo trong phạm vi (scope) hiện tại.',
    fixHint:
      'Hãy kiểm tra lại chính tả hoặc khai báo biến trước khi sử dụng. Nếu bạn đang sử dụng cout hoặc cin, hãy chắc chắn đã include <iostream> và khai báo không gian tên std (using namespace std; hoặc dùng std::cout).',
    explanation:
      'C++ yêu cầu mọi định danh phải được khai báo trước khi sử dụng để trình biên dịch hiểu được kiểu dữ liệu và ý nghĩa của nó.',
  },
  {
    pattern: /expected ';'|expected ';' before/i,
    errorType: 'Compilation Error',
    diagnosis: 'Thiếu dấu chấm phẩy (;) ở cuối câu lệnh.',
    fixHint:
      'Thêm dấu chấm phẩy vào cuối câu lệnh ngay phía trước vị trí được báo lỗi.',
    explanation:
      'Hầu hết các câu lệnh trong C++ bắt buộc phải kết thúc bằng dấu chấm phẩy để trình biên dịch nhận biết điểm kết thúc của câu lệnh.',
  },
  {
    pattern: /cout.*not declared|cout.*undeclared|cout is not a member of std/i,
    errorType: 'Compilation Error',
    diagnosis: 'Chương trình không tìm thấy câu lệnh xuất "cout".',
    fixHint:
      'Thêm #include <iostream> ở đầu tệp tin. Sau đó sử dụng std::cout hoặc thêm dòng "using namespace std;".',
    explanation:
      'cout là đối tượng thuộc thư viện iostream và nằm trong không gian tên (namespace) std.',
  },
  {
    pattern: /cin.*not declared|cin.*undeclared|cin is not a member of std/i,
    errorType: 'Compilation Error',
    diagnosis: 'Chương trình không tìm thấy câu lệnh nhập "cin".',
    fixHint:
      'Thêm #include <iostream> ở đầu tệp tin. Sau đó sử dụng std::cin hoặc thêm dòng "using namespace std;".',
    explanation:
      'cin là đối tượng thuộc thư viện iostream và nằm trong không gian tên (namespace) std.',
  },
  {
    pattern:
      /cannot convert|invalid conversion|incompatible type|type mismatch/i,
    errorType: 'Compilation Error',
    diagnosis:
      'Giá trị được gán hoặc truyền vào không khớp với kiểu dữ liệu được mong đợi.',
    fixHint:
      'Kiểm tra kiểu dữ liệu của biến, tham số hàm và kiểu dữ liệu của giá trị thực tế. Hãy thực hiện chuyển đổi kiểu dữ liệu (casting) nếu hợp lệ.',
    explanation:
      'C++ là ngôn ngữ kiểm soát kiểu dữ liệu nghiêm ngặt, nó sẽ kiểm tra xem một giá trị có thể chuyển đổi an toàn sang kiểu dữ liệu đích hay không.',
  },
  {
    pattern:
      /control reaches end of non-void function|missing return statement/i,
    errorType: 'Compilation Error',
    diagnosis:
      'Một hàm được khai báo có giá trị trả về (non-void) nhưng kết thúc mà không trả về kết quả.',
    fixHint:
      'Thêm câu lệnh return ở tất cả các nhánh điều kiện có thể xảy ra của hàm.',
    explanation:
      'Hàm không có kiểu void bắt buộc phải trả về một giá trị có kiểu tương thích với kiểu dữ liệu được khai báo.',
  },
  {
    pattern: /segmentation fault|segfault|access violation/i,
    errorType: 'Runtime Error',
    diagnosis: 'Chương trình cố gắng truy cập vào một vùng nhớ không hợp lệ.',
    fixHint:
      'Kiểm tra lại các con trỏ (có bị null không), chỉ số mảng (có vượt quá kích thước không), hoặc các đối tượng chưa được khởi tạo/đã bị giải phóng.',
    explanation:
      'Lỗi phân đoạn (Segmentation fault) xảy ra khi chương trình đọc hoặc ghi vào vùng nhớ RAM mà hệ điều hành không cho phép truy cập.',
  },
  {
    pattern:
      /index .* out of bounds|array index out of bounds|stack-buffer-overflow/i,
    errorType: 'Runtime Error',
    diagnosis:
      'Chương trình cố gắng truy cập phần tử của mảng ngoài phạm vi chỉ số hợp lệ.',
    fixHint:
      'Đảm bảo rằng mọi chỉ số truy cập mảng phải lớn hơn hoặc bằng 0 và nhỏ hơn kích thước khai báo của mảng.',
    explanation:
      'Với mảng có kích thước n, chỉ số hợp lệ chỉ nằm trong khoảng từ 0 đến n - 1.',
  },
  {
    pattern: /division by zero|divide by zero|floating point exception/i,
    errorType: 'Runtime Error',
    diagnosis: 'Chương trình thực hiện phép chia cho số 0.',
    fixHint:
      'Hãy kiểm tra xem số chia có bằng 0 hay không trước khi thực hiện phép chia.',
    explanation:
      'Chia cho 0 là phép toán không xác định trong toán học và tin học, gây ra lỗi thực thi nghiêm trọng làm dừng chương trình.',
  },
  {
    pattern: /stack overflow/i,
    errorType: 'Runtime Error',
    diagnosis:
      'Chương trình sử dụng vượt quá dung lượng bộ nhớ ngăn xếp (stack) cho phép.',
    fixHint:
      'Kiểm tra các hàm đệ quy xem đã có điều kiện dừng đúng chưa, hoặc giảm bớt kích thước của các biến cục bộ quá lớn.',
    explanation:
      'Mỗi lượt gọi hàm sẽ chiếm một phần bộ nhớ stack. Đệ quy vô hạn sẽ nhanh chóng làm cạn kiệt bộ nhớ stack.',
  },
  {
    pattern: /use after free|heap-use-after-free/i,
    errorType: 'Runtime Error',
    diagnosis:
      'Chương trình cố gắng sử dụng vùng nhớ sau khi nó đã bị giải phóng.',
    fixHint:
      'Không truy cập vào con trỏ sau khi đã thực hiện delete. Hãy gán con trỏ bằng nullptr ngay sau khi giải phóng nếu cần.',
    explanation:
      'Sau khi bộ nhớ được giải phóng, con trỏ đó không còn tham chiếu tới đối tượng hợp lệ nào nữa.',
  },
  {
    pattern: /time limit exceeded|execution timed out/i,
    errorType: 'Logic Error',
    diagnosis:
      'Chương trình chạy quá thời gian giới hạn cho phép, có thể do vòng lặp vô hạn hoặc giải thuật chưa tối ưu.',
    fixHint:
      'Kiểm tra các điều kiện dừng vòng lặp, bước tăng/giảm biến lặp và điều kiện dừng đệ quy để đảm bảo chương trình kết thúc.',
    explanation:
      'Một vòng lặp hoặc đệ quy không bao giờ kết thúc sẽ treo chương trình và dẫn đến lỗi hết thời gian thực thi.',
  },
];
