local colorscheme = "catppuccin"

local status_ok, _ = pcall(vim.cmd, "colorscheme " .. colorscheme)
if not status_ok then
  return
end

require("catppuccin").setup({
  flavour = "mocha",
  transparent_background = true,  
})
