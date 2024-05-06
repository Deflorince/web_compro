document.addEventListener("DOMContentLoaded", function() {
    console.log("Halaman sudah dimuat sepenuhnya.");
    // tambahkan kode JavaScript tambahan di sini
<<<<<<< HEAD
=======

    // 21112564
    function changeBackgroundColor() {
        document.body.style.backgroundColor = "#e6e6e6";
        console.log("Warna latar belakang telah diubah.");
    }

    document.addEventListener("click", changeBackgroundColor);

    function hideParagraph() {
        this.style.display = "none";
        console.log("Paragraf disembunyikan.");
    }

    var paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(function(paragraph) {
        paragraph.addEventListener("mouseover", hideParagraph);
    });
>>>>>>> 6757fb6 (setelah melakukan perubahan pada index css dan js)
});
