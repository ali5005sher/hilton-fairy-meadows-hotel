const images = [];

for (let i = 1; i <= 30; i++) {
  images.push(`../images/c${i}.jpeg`);
}

const imageContainer = document.querySelector(".image-container");

images.forEach((src) => {
  const a = document.createElement("a");

  a.className = "fh5co-listing-item";

  a.innerHTML = `

							<img src="${src}" alt="" class="img-responsive">
							
					
  `;
  imageContainer.appendChild(a);
});
{
  /* <div class="fh5co-listing-copy">
								<h2>Paris</h2>
								<span class="icon">
									<i class="icon-chevron-right"></i>
								</span>
							</div> */
}
