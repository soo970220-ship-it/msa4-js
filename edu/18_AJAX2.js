const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
    e.preventDefault(); //기존 이벤트 취소

    const baseUrl = "https://picsum.photos/v2/list";
    const page = document.querySelector("#page").Value;
    const limit = document.querySelector("#limit").value;
    const url = `${baseUrl}?page=${page}&limit=${limit}`;

    try {
        const response = await axios.get(url);

        const container = document.querySelector(".container");
        container.textContent = "";
        response.data.forEach((item) => {
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
    } catch (error) {
        console.log(error);
    }
});
