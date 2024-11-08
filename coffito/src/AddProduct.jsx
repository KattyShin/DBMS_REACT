import { IoSearch } from "react-icons/io5";
import { BiExport } from "react-icons/bi";

function AddProduct() {
  return (
    <div class="main">
      <div className="topbar-con">
        <h2>Add Product</h2>
        <label htmlFor="">Sunday, 02 November 2024 at 9:46 AM</label>
      </div>

      <div class="details">
        <div class="flex flex-col ">
          <div class="flex justify-between mt-2 mb-3 items-center ">
            {/* Search Bar */}
            <div class="search w-[250px]">
              <label>
                <IoSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search the web"  
                />
              </label>
            </div>

            {/* Export Button */}
            <button class="button">
                  Export <BiExport />
            </button>
          </div>

          {/* Table Section */}
          <div className="con-table daily-table p-2 rounded-lg bg-border-color w-full overflow-hidden h-full">
            <div className="table-con bg-card-bg border border-border-color">
              {/* --Table Ari */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
