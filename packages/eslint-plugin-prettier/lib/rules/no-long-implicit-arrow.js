"use strict";

function breakingOnNodeArgumentWouldReduceLength(maxArrowLength) {
  return function (currentLineLength, firstArgumentNode) {
    return currentLineLength > maxArrowLength && firstArgumentNode.loc.start.column < maxArrowLength;
  };
}

function breakOnMethodArguments(methodNode) {
  const methodArguments = methodNode.arguments;
  return function(fixer) {
    return [fixer.insertTextBefore(methodArguments[0], "\n"), fixer.insertTextAfter(methodArguments[methodArguments.length - 1], "\n")]
  }
}

module.exports = {
  meta: {
    fixable: "code",
    messages: {
      arrowTooLong: "Expected implicit arrow function return to respect max-length"
    }
  },

  create(context) {
    const maxArrowLength = (context.settings && context.settings.maxLength) || context.options[0];
    const breakingWouldReduceMaxArrowLength = breakingOnNodeArgumentWouldReduceLength(maxArrowLength);
    const sourceCode = context.getSourceCode();

    function validate(node) {
      const arrowBody = node.body;
      if (arrowBody.type !== "CallExpression") {
        return;
      }

      const methodArguments = arrowBody.arguments;
      if (methodArguments.length === 0) {
        return;
      }

      const firstArgumentStartColumn = methodArguments[0];
      const currentLineLength = Array.from(sourceCode.lines[node.loc.start.line - 1]).length;

      if (breakingWouldReduceMaxArrowLength(currentLineLength, firstArgumentStartColumn)) {
        context.report({
          node,
          loc: arrowBody.loc.start,
          messageId: "arrowTooLong",
          fix: breakOnMethodArguments(arrowBody)
        });
      }
    }

    return {
      "ArrowFunctionExpression:exit": validate
    };
  }
};

