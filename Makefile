PROJECTNAME="GIF playmate"

all: prelogue copy archive epilogue

prelogue:
	@echo ""
	@echo ">>> $(PROJECTNAME) build started"
	@echo ""

./build:
	@rm -rf build
	@mkdir -p build

copy: ./build
	@cp content.js ./build
	@cp manifest.json ./build

archive: ./build
	@zip gif-playmate.zip -r ./build

epilogue:
	@echo ""
	@echo ">>> $(PROJECTNAME) build has successfully finished"
	@echo ""

.PHONY: prelogue build archive epilogue
