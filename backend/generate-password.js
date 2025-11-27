const bcrypt = require('bcrypt');

const password = 'password123';

bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error('Error generating hash:', err);
    process.exit(1);
  }
  console.log('\n✅ Password hash generated successfully!\n');
  console.log('Password:', password);
  console.log('Hash:', hash);
  console.log('\n📋 Copy this hash and update the "password" field in MongoDB:\n');
  console.log(hash);
  console.log('\n');
  process.exit(0);
});
