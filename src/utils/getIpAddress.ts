export async function getIpAddress() {
  const response = await fetch("https://api.ipify.org?format=json");
  if (response.ok) {
    return await response.json();
  }
}
