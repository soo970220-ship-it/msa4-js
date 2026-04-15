const url = "https://picsum.photos/v2/list?page=2&limit=10";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const baseUrl = "https://picsum.photos/v2/list";
    const page = document.querySelector("#page").Value;
    const limit = document.querySelector("#limit").value;
    const url = `${baseUrl}?page=${page}&limit=${limit}`;

    //    axios.get(url) 엑시오스
    //     .then((response) => {
    //     요청이 성공 했을때, 처리 작성 부분
    //       })
    //     .catch((error) => {
    //       처리중 예외가 발생 했을때, 처리 작성 부분
    //       })
    //     .finally(() => {
    //      성공여부와 관계없이 필요한 처리 작성 부분(finally는 생략가능)
    //       });

    axios
        .get(url)
        .then((Response) => {
            console.log(Response);
            //카드들 넣을 컨테이너

            const container = document.querySelector(".container");
            container.textContent = "";
            // Response.data : 서버가 보내온 데이터가 저장된 프로퍼티

            Response.data.forEach((item) => {
                //   카드이미지요소생성
                const newCardimg = document.createElement("div");
                newCardimg.style.backgroundImage = `url('${item.download_url}')`;
                newCardimg.classList.add("card-img");

                // 카드저작권자 요소 생성
                const newAuthor = document.createElement("span");
                newAuthor.textContent = `${item.id}:${item.author}`;

                // 카드요소생성
                const newCard = document.createElement("span");
                newAuthor.textContent = `${item.id}:${item.author}`;
                newCard.appendChild(newCardimg);
                newCard.appendChild(newAuthor);

                //컨테이너에 카드삽입
                container.appendChild(newCard);
            });
        })
        .catch((error) => {
            console.error(error);
        });
});
