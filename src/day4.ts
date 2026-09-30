
async function delay(ms: number): Promise<void> {
    await new Promise<void>(resolve => setTimeout(resolve, ms));
}



 function fetchScore(studentId: number): Promise<number> {
      return new Promise(resolve => setTimeout(() => resolve(studentId * 10), 100));
  }

async function getTotalScore(studentIds: number[]): Promise<number> {
    const promises = studentIds.map(fetchScore);
    return (await Promise.all(promises)).reduce((total,score)=> total + score, 0);
}

function readFile(path: string): Promise<string> {                                           
      return new Promise((resolve, reject) => {
          if (path === "bad.txt") reject(new Error("파일 없음"));
          else resolve("파일 내용");
      });
  }

  async function safeReadFile(path: string): Promise<string>{
        try {
            return await readFile(path);
        } catch (error) {
            return "파일 읽기 실패: " + error;
        }
  }

  interface User {                                                                             
      id: number;
      name: string;                                                                            
  }

  function fetchUser(id: number): Promise<User> {
      return new Promise((resolve, reject) => {
          if (id === 2) reject(new Error("유저 없음"));
          else resolve({ id, name: `User${id}` });
      });
  }

  async function fetchAll(ids: number[]): Promise<(User | null)[]>{
    const promises = ids.map(id => fetchUser(id).catch(() => null)); 
    return Promise.all(promises);
  }

   interface ApiUser {                                       
      id: number;
      name: string;
      email: string;
  }

  async function getUser(id: number): Promise<ApiUser>{
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(url);
    return await response.json() as ApiUser;
  }
