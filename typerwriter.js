const sentence = "hello there from lighthouse";

const typeWriter = sentence => {
  for (const char in sentence) {
    let letter = sentence[char];
    setTimeout(() => {
      process.stdout.write(letter);
    }, char * 50)
  }
  setTimeout(() =>{
    process.stdout.write('\n');
  }, sentence.length * 50)
};



typeWriter(sentence)


