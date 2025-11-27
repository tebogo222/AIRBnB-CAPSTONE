const axios = require('axios');

const BASE_URL = 'http://localhost:5002';

async function testEndpoints() {
  console.log('🧪 Testing backend endpoints...\n');

  try {
    // Test listings endpoint
    console.log('1. Testing /api/listings...');
    const listingsResponse = await axios.get(`${BASE_URL}/api/listings`);
    console.log('✅ Listings endpoint working');
    console.log(`   Found ${listingsResponse.data.listings?.length || 0} listings\n`);

    // Test cities endpoint
    console.log('2. Testing /api/cities...');
    const citiesResponse = await axios.get(`${BASE_URL}/api/cities`);
    console.log('✅ Cities endpoint working');
    console.log(`   Found ${citiesResponse.data?.length || 0} cities\n`);

    // Test server health
    console.log('3. Testing server health...');
    const healthResponse = await axios.get(`${BASE_URL}/api/listings?limit=1`);
    console.log('✅ Server is healthy and responding\n');

    console.log('🎉 All tests passed! Your backend is ready for Railway deployment.');
    console.log('\n📝 Next steps:');
    console.log('   1. Push your code to GitHub');
    console.log('   2. Follow the Railway deployment guide');
    console.log('   3. Set environment variables in Railway dashboard');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('   1. Make sure your backend is running: npm run server');
    console.log('   2. Check that MongoDB is connected');
    console.log('   3. Verify the server is running on port 5002');
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  testEndpoints();
}

module.exports = testEndpoints; 