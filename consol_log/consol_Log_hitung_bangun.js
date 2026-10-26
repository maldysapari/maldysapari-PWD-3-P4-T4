
// a. Segitiga (siku-siku: alas & tinggi)
function segitiga(alas, tinggi) {
  const sisiMiring = Math.sqrt(alas ** 2 + tinggi ** 2);
  const luas = 0.5 * alas * tinggi;
  const keliling = alas + tinggi + sisiMiring;

  console.log("=== a. SEGITIGA (siku-siku) ===");
  console.log(`Alas = ${alas}, Tinggi = ${tinggi}, Sisi miring = ${sisiMiring.toFixed(2)}`);
  console.log(`Luas     = ${luas}`);
  console.log(`Keliling = ${keliling.toFixed(2)}`);
  console.log("");
}

// b. Persegi panjang
function persegiPanjang(panjang, lebar) {
  const luas = panjang * lebar;
  const keliling = 2 * (panjang + lebar);

  console.log("=== b. PERSEGI PANJANG ===");
  console.log(`Panjang = ${panjang}, Lebar = ${lebar}`);
  console.log(`Luas     = ${luas}`);
  console.log(`Keliling = ${keliling}`);
  console.log("");
}

// c. Prisma segitiga (alas segitiga siku-siku)
function prisma(alasSegitiga, tinggiSegitiga, tinggiPrisma) {
  const sisiMiring = Math.sqrt(alasSegitiga ** 2 + tinggiSegitiga ** 2);
  const luasAlas = 0.5 * alasSegitiga * tinggiSegitiga;
  const kelilingAlas = alasSegitiga + tinggiSegitiga + sisiMiring;
  const luasPermukaan = 2 * luasAlas + kelilingAlas * tinggiPrisma;
  const volume = luasAlas * tinggiPrisma;

  console.log("=== c. PRISMA SEGITIGA ===");
  console.log(`Alas segitiga = ${alasSegitiga}, Tinggi segitiga = ${tinggiSegitiga}, Tinggi prisma = ${tinggiPrisma}`);
  console.log(`Luas alas        = ${luasAlas}`);
  console.log(`Keliling alas    = ${kelilingAlas.toFixed(2)}`);
  console.log(`Luas permukaan   = ${luasPermukaan.toFixed(2)}`);
  console.log(`Volume           = ${volume}`);
  console.log("");
}

// d. Limas segiempat (alas persegi)
function limas(sisiAlas, tinggiLimas) {
  const tinggiSisiTegak = Math.sqrt(tinggiLimas ** 2 + (sisiAlas / 2) ** 2);
  const luasAlas = sisiAlas ** 2;
  const kelilingAlas = 4 * sisiAlas;
  const luasSelimut = 4 * (0.5 * sisiAlas * tinggiSisiTegak);
  const luasPermukaan = luasAlas + luasSelimut;
  const volume = (1 / 3) * luasAlas * tinggiLimas;

  console.log("=== d. LIMAS SEGIEMPAT ===");
  console.log(`Sisi alas = ${sisiAlas}, Tinggi limas = ${tinggiLimas}`);
  console.log(`Tinggi sisi tegak = ${tinggiSisiTegak.toFixed(2)}`);
  console.log(`Luas alas         = ${luasAlas}`);
  console.log(`Keliling alas     = ${kelilingAlas}`);
  console.log(`Luas permukaan    = ${luasPermukaan.toFixed(2)}`);
  console.log(`Volume            = ${volume.toFixed(2)}`);
  console.log("");
}

// e. Segitiga sembarang (tiga sisi, rumus Heron)
function segitigaSembarang(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("=== e. SEGITIGA SEMBARANG ===");
    console.log("Sisi-sisi tersebut tidak dapat membentuk segitiga!");
    console.log("");
    return;
  }

  const keliling = a + b + c;
  const s = keliling / 2;
  const luas = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  console.log("=== e. SEGITIGA SEMBARANG ===");
  console.log(`Sisi a = ${a}, b = ${b}, c = ${c}`);
  console.log(`Keliling = ${keliling}`);
  console.log(`Luas (Heron) = ${luas.toFixed(2)}`);
  console.log("");
}

// ======== Pemanggilan fungsi ========
segitiga(3, 4);
persegiPanjang(8, 5);
prisma(3, 6, 10); 
prisma(4, 6, 10); 
prisma(5, 6, 10); 
prisma(6, 6, 10); 
limas(6, 4);
segitigaSembarang(7, 10, 9);
