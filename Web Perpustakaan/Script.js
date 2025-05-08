const bukuList = [
    { judul: "Laskar Pelangi", penulis: "Andrea Hirata" },
    { judul: "Bumi Manusia", penulis: "Pramoedya Ananta Toer" },
    { judul: "Negeri 5 Menara", penulis: "Ahmad Fuadi" },
    { judul: "Filosofi Teras", penulis: "Henry Manampiring" },
  ];
  
  const container = document.getElementById("bukuList");
  const inputCari = document.getElementById("cariBuku");
  
  function tampilkanBuku(list) {
    container.innerHTML = "";
    list.forEach(buku => {
      const div = document.createElement("div");
      div.className = "buku";
      div.innerHTML = `<h3>${buku.judul}</h3><p><em>${buku.penulis}</em></p>`;
      container.appendChild(div);
    });
  }
  
  inputCari.addEventListener("input", () => {
    const keyword = inputCari.value.toLowerCase();
    const hasil = bukuList.filter(b => 
      b.judul.toLowerCase().includes(keyword) ||
      b.penulis.toLowerCase().includes(keyword)
    );
    tampilkanBuku(hasil);
  });
  
  tampilkanBuku(bukuList);
  