"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/APPEND.js
var require_APPEND = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/APPEND.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, value) {
      return ["APPEND", key, value];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BITCOUNT.js
var require_BITCOUNT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BITCOUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, range) {
      const args = ["BITCOUNT", key];
      if (range) {
        args.push(range.start.toString(), range.end.toString());
        if (range.mode) {
          args.push(range.mode);
        }
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BITFIELD_RO.js
var require_BITFIELD_RO = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BITFIELD_RO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, operations) {
      const args = ["BITFIELD_RO", key];
      for (const operation of operations) {
        args.push("GET", operation.encoding, operation.offset.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BITFIELD.js
var require_BITFIELD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BITFIELD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, operations) {
      const args = ["BITFIELD", key];
      for (const options of operations) {
        switch (options.operation) {
          case "GET":
            args.push("GET", options.encoding, options.offset.toString());
            break;
          case "SET":
            args.push("SET", options.encoding, options.offset.toString(), options.value.toString());
            break;
          case "INCRBY":
            args.push("INCRBY", options.encoding, options.offset.toString(), options.increment.toString());
            break;
          case "OVERFLOW":
            args.push("OVERFLOW", options.behavior);
            break;
        }
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/generic-transformers.js
var require_generic_transformers = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/generic-transformers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformRangeReply = exports2.pushSlotRangesArguments = exports2.pushSortArguments = exports2.transformFunctionListItemReply = exports2.RedisFunctionFlags = exports2.transformCommandReply = exports2.CommandCategories = exports2.CommandFlags = exports2.pushOptionalVerdictArgument = exports2.pushVerdictArgument = exports2.pushVerdictNumberArguments = exports2.pushVerdictArguments = exports2.pushEvalArguments = exports2.evalFirstKeyIndex = exports2.transformPXAT = exports2.transformEXAT = exports2.transformGeoMembersWithReply = exports2.GeoReplyWith = exports2.pushGeoRadiusStoreArguments = exports2.pushGeoRadiusArguments = exports2.pushGeoSearchArguments = exports2.pushGeoCountArgument = exports2.transformLMPopArguments = exports2.transformZMPopArguments = exports2.transformSortedSetWithScoresReply = exports2.transformSortedSetMemberReply = exports2.transformSortedSetMemberNullReply = exports2.transformStreamsMessagesReply = exports2.transformStreamMessagesNullReply = exports2.transformStreamMessagesReply = exports2.transformStreamMessageNullReply = exports2.transformStreamMessageReply = exports2.transformTuplesReply = exports2.transformStringNumberInfinityArgument = exports2.transformNumberInfinityArgument = exports2.transformNumberInfinityNullArrayReply = exports2.transformNumberInfinityNullReply = exports2.transformNumberInfinityReply = exports2.pushScanArguments = exports2.transformBooleanArrayReply = exports2.transformBooleanReply = void 0;
    function transformBooleanReply(reply) {
      return reply === 1;
    }
    exports2.transformBooleanReply = transformBooleanReply;
    function transformBooleanArrayReply(reply) {
      return reply.map(transformBooleanReply);
    }
    exports2.transformBooleanArrayReply = transformBooleanArrayReply;
    function pushScanArguments(args, cursor, options) {
      args.push(cursor.toString());
      if (options?.MATCH) {
        args.push("MATCH", options.MATCH);
      }
      if (options?.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      return args;
    }
    exports2.pushScanArguments = pushScanArguments;
    function transformNumberInfinityReply(reply) {
      switch (reply.toString()) {
        case "+inf":
          return Infinity;
        case "-inf":
          return -Infinity;
        default:
          return Number(reply);
      }
    }
    exports2.transformNumberInfinityReply = transformNumberInfinityReply;
    function transformNumberInfinityNullReply(reply) {
      if (reply === null)
        return null;
      return transformNumberInfinityReply(reply);
    }
    exports2.transformNumberInfinityNullReply = transformNumberInfinityNullReply;
    function transformNumberInfinityNullArrayReply(reply) {
      return reply.map(transformNumberInfinityNullReply);
    }
    exports2.transformNumberInfinityNullArrayReply = transformNumberInfinityNullArrayReply;
    function transformNumberInfinityArgument(num) {
      switch (num) {
        case Infinity:
          return "+inf";
        case -Infinity:
          return "-inf";
        default:
          return num.toString();
      }
    }
    exports2.transformNumberInfinityArgument = transformNumberInfinityArgument;
    function transformStringNumberInfinityArgument(num) {
      if (typeof num !== "number")
        return num;
      return transformNumberInfinityArgument(num);
    }
    exports2.transformStringNumberInfinityArgument = transformStringNumberInfinityArgument;
    function transformTuplesReply(reply) {
      const message = /* @__PURE__ */ Object.create(null);
      for (let i = 0; i < reply.length; i += 2) {
        message[reply[i].toString()] = reply[i + 1];
      }
      return message;
    }
    exports2.transformTuplesReply = transformTuplesReply;
    function transformStreamMessageReply([id, message]) {
      return {
        id,
        message: transformTuplesReply(message)
      };
    }
    exports2.transformStreamMessageReply = transformStreamMessageReply;
    function transformStreamMessageNullReply(reply) {
      if (reply === null)
        return null;
      return transformStreamMessageReply(reply);
    }
    exports2.transformStreamMessageNullReply = transformStreamMessageNullReply;
    function transformStreamMessagesReply(reply) {
      return reply.map(transformStreamMessageReply);
    }
    exports2.transformStreamMessagesReply = transformStreamMessagesReply;
    function transformStreamMessagesNullReply(reply) {
      return reply.map(transformStreamMessageNullReply);
    }
    exports2.transformStreamMessagesNullReply = transformStreamMessagesNullReply;
    function transformStreamsMessagesReply(reply) {
      if (reply === null)
        return null;
      return reply.map(([name, rawMessages]) => ({
        name,
        messages: transformStreamMessagesReply(rawMessages)
      }));
    }
    exports2.transformStreamsMessagesReply = transformStreamsMessagesReply;
    function transformSortedSetMemberNullReply(reply) {
      if (!reply.length)
        return null;
      return transformSortedSetMemberReply(reply);
    }
    exports2.transformSortedSetMemberNullReply = transformSortedSetMemberNullReply;
    function transformSortedSetMemberReply(reply) {
      return {
        value: reply[0],
        score: transformNumberInfinityReply(reply[1])
      };
    }
    exports2.transformSortedSetMemberReply = transformSortedSetMemberReply;
    function transformSortedSetWithScoresReply(reply) {
      const members = [];
      for (let i = 0; i < reply.length; i += 2) {
        members.push({
          value: reply[i],
          score: transformNumberInfinityReply(reply[i + 1])
        });
      }
      return members;
    }
    exports2.transformSortedSetWithScoresReply = transformSortedSetWithScoresReply;
    function transformZMPopArguments(args, keys, side, options) {
      pushVerdictArgument(args, keys);
      args.push(side);
      if (options?.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      return args;
    }
    exports2.transformZMPopArguments = transformZMPopArguments;
    function transformLMPopArguments(args, keys, side, options) {
      pushVerdictArgument(args, keys);
      args.push(side);
      if (options?.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      return args;
    }
    exports2.transformLMPopArguments = transformLMPopArguments;
    function pushGeoCountArgument(args, count) {
      if (typeof count === "number") {
        args.push("COUNT", count.toString());
      } else if (count) {
        args.push("COUNT", count.value.toString());
        if (count.ANY) {
          args.push("ANY");
        }
      }
      return args;
    }
    exports2.pushGeoCountArgument = pushGeoCountArgument;
    function pushGeoSearchArguments(args, key, from, by, options) {
      args.push(key);
      if (typeof from === "string") {
        args.push("FROMMEMBER", from);
      } else {
        args.push("FROMLONLAT", from.longitude.toString(), from.latitude.toString());
      }
      if ("radius" in by) {
        args.push("BYRADIUS", by.radius.toString());
      } else {
        args.push("BYBOX", by.width.toString(), by.height.toString());
      }
      args.push(by.unit);
      if (options?.SORT) {
        args.push(options.SORT);
      }
      pushGeoCountArgument(args, options?.COUNT);
      return args;
    }
    exports2.pushGeoSearchArguments = pushGeoSearchArguments;
    function pushGeoRadiusArguments(args, key, from, radius, unit, options) {
      args.push(key);
      if (typeof from === "string") {
        args.push(from);
      } else {
        args.push(from.longitude.toString(), from.latitude.toString());
      }
      args.push(radius.toString(), unit);
      if (options?.SORT) {
        args.push(options.SORT);
      }
      pushGeoCountArgument(args, options?.COUNT);
      return args;
    }
    exports2.pushGeoRadiusArguments = pushGeoRadiusArguments;
    function pushGeoRadiusStoreArguments(args, key, from, radius, unit, destination, options) {
      pushGeoRadiusArguments(args, key, from, radius, unit, options);
      if (options?.STOREDIST) {
        args.push("STOREDIST", destination);
      } else {
        args.push("STORE", destination);
      }
      return args;
    }
    exports2.pushGeoRadiusStoreArguments = pushGeoRadiusStoreArguments;
    var GeoReplyWith;
    (function(GeoReplyWith2) {
      GeoReplyWith2["DISTANCE"] = "WITHDIST";
      GeoReplyWith2["HASH"] = "WITHHASH";
      GeoReplyWith2["COORDINATES"] = "WITHCOORD";
    })(GeoReplyWith = exports2.GeoReplyWith || (exports2.GeoReplyWith = {}));
    function transformGeoMembersWithReply(reply, replyWith) {
      const replyWithSet = new Set(replyWith);
      let index = 0;
      const distanceIndex = replyWithSet.has(GeoReplyWith.DISTANCE) && ++index, hashIndex = replyWithSet.has(GeoReplyWith.HASH) && ++index, coordinatesIndex = replyWithSet.has(GeoReplyWith.COORDINATES) && ++index;
      return reply.map((member) => {
        const transformedMember = {
          member: member[0]
        };
        if (distanceIndex) {
          transformedMember.distance = member[distanceIndex];
        }
        if (hashIndex) {
          transformedMember.hash = member[hashIndex];
        }
        if (coordinatesIndex) {
          const [longitude, latitude] = member[coordinatesIndex];
          transformedMember.coordinates = {
            longitude,
            latitude
          };
        }
        return transformedMember;
      });
    }
    exports2.transformGeoMembersWithReply = transformGeoMembersWithReply;
    function transformEXAT(EXAT) {
      return (typeof EXAT === "number" ? EXAT : Math.floor(EXAT.getTime() / 1e3)).toString();
    }
    exports2.transformEXAT = transformEXAT;
    function transformPXAT(PXAT) {
      return (typeof PXAT === "number" ? PXAT : PXAT.getTime()).toString();
    }
    exports2.transformPXAT = transformPXAT;
    function evalFirstKeyIndex(options) {
      return options?.keys?.[0];
    }
    exports2.evalFirstKeyIndex = evalFirstKeyIndex;
    function pushEvalArguments(args, options) {
      if (options?.keys) {
        args.push(options.keys.length.toString(), ...options.keys);
      } else {
        args.push("0");
      }
      if (options?.arguments) {
        args.push(...options.arguments);
      }
      return args;
    }
    exports2.pushEvalArguments = pushEvalArguments;
    function pushVerdictArguments(args, value) {
      if (Array.isArray(value)) {
        args = args.concat(value);
      } else {
        args.push(value);
      }
      return args;
    }
    exports2.pushVerdictArguments = pushVerdictArguments;
    function pushVerdictNumberArguments(args, value) {
      if (Array.isArray(value)) {
        for (const item of value) {
          args.push(item.toString());
        }
      } else {
        args.push(value.toString());
      }
      return args;
    }
    exports2.pushVerdictNumberArguments = pushVerdictNumberArguments;
    function pushVerdictArgument(args, value) {
      if (Array.isArray(value)) {
        args.push(value.length.toString(), ...value);
      } else {
        args.push("1", value);
      }
      return args;
    }
    exports2.pushVerdictArgument = pushVerdictArgument;
    function pushOptionalVerdictArgument(args, name, value) {
      if (value === void 0)
        return args;
      args.push(name);
      return pushVerdictArgument(args, value);
    }
    exports2.pushOptionalVerdictArgument = pushOptionalVerdictArgument;
    var CommandFlags;
    (function(CommandFlags2) {
      CommandFlags2["WRITE"] = "write";
      CommandFlags2["READONLY"] = "readonly";
      CommandFlags2["DENYOOM"] = "denyoom";
      CommandFlags2["ADMIN"] = "admin";
      CommandFlags2["PUBSUB"] = "pubsub";
      CommandFlags2["NOSCRIPT"] = "noscript";
      CommandFlags2["RANDOM"] = "random";
      CommandFlags2["SORT_FOR_SCRIPT"] = "sort_for_script";
      CommandFlags2["LOADING"] = "loading";
      CommandFlags2["STALE"] = "stale";
      CommandFlags2["SKIP_MONITOR"] = "skip_monitor";
      CommandFlags2["ASKING"] = "asking";
      CommandFlags2["FAST"] = "fast";
      CommandFlags2["MOVABLEKEYS"] = "movablekeys";
    })(CommandFlags = exports2.CommandFlags || (exports2.CommandFlags = {}));
    var CommandCategories;
    (function(CommandCategories2) {
      CommandCategories2["KEYSPACE"] = "@keyspace";
      CommandCategories2["READ"] = "@read";
      CommandCategories2["WRITE"] = "@write";
      CommandCategories2["SET"] = "@set";
      CommandCategories2["SORTEDSET"] = "@sortedset";
      CommandCategories2["LIST"] = "@list";
      CommandCategories2["HASH"] = "@hash";
      CommandCategories2["STRING"] = "@string";
      CommandCategories2["BITMAP"] = "@bitmap";
      CommandCategories2["HYPERLOGLOG"] = "@hyperloglog";
      CommandCategories2["GEO"] = "@geo";
      CommandCategories2["STREAM"] = "@stream";
      CommandCategories2["PUBSUB"] = "@pubsub";
      CommandCategories2["ADMIN"] = "@admin";
      CommandCategories2["FAST"] = "@fast";
      CommandCategories2["SLOW"] = "@slow";
      CommandCategories2["BLOCKING"] = "@blocking";
      CommandCategories2["DANGEROUS"] = "@dangerous";
      CommandCategories2["CONNECTION"] = "@connection";
      CommandCategories2["TRANSACTION"] = "@transaction";
      CommandCategories2["SCRIPTING"] = "@scripting";
    })(CommandCategories = exports2.CommandCategories || (exports2.CommandCategories = {}));
    function transformCommandReply([name, arity, flags, firstKeyIndex, lastKeyIndex, step, categories]) {
      return {
        name,
        arity,
        flags: new Set(flags),
        firstKeyIndex,
        lastKeyIndex,
        step,
        categories: new Set(categories)
      };
    }
    exports2.transformCommandReply = transformCommandReply;
    var RedisFunctionFlags;
    (function(RedisFunctionFlags2) {
      RedisFunctionFlags2["NO_WRITES"] = "no-writes";
      RedisFunctionFlags2["ALLOW_OOM"] = "allow-oom";
      RedisFunctionFlags2["ALLOW_STALE"] = "allow-stale";
      RedisFunctionFlags2["NO_CLUSTER"] = "no-cluster";
    })(RedisFunctionFlags = exports2.RedisFunctionFlags || (exports2.RedisFunctionFlags = {}));
    function transformFunctionListItemReply(reply) {
      return {
        libraryName: reply[1],
        engine: reply[3],
        functions: reply[5].map((fn) => ({
          name: fn[1],
          description: fn[3],
          flags: fn[5]
        }))
      };
    }
    exports2.transformFunctionListItemReply = transformFunctionListItemReply;
    function pushSortArguments(args, options) {
      if (options?.BY) {
        args.push("BY", options.BY);
      }
      if (options?.LIMIT) {
        args.push("LIMIT", options.LIMIT.offset.toString(), options.LIMIT.count.toString());
      }
      if (options?.GET) {
        for (const pattern of typeof options.GET === "string" ? [options.GET] : options.GET) {
          args.push("GET", pattern);
        }
      }
      if (options?.DIRECTION) {
        args.push(options.DIRECTION);
      }
      if (options?.ALPHA) {
        args.push("ALPHA");
      }
      return args;
    }
    exports2.pushSortArguments = pushSortArguments;
    function pushSlotRangeArguments(args, range) {
      args.push(range.start.toString(), range.end.toString());
    }
    function pushSlotRangesArguments(args, ranges) {
      if (Array.isArray(ranges)) {
        for (const range of ranges) {
          pushSlotRangeArguments(args, range);
        }
      } else {
        pushSlotRangeArguments(args, ranges);
      }
      return args;
    }
    exports2.pushSlotRangesArguments = pushSlotRangesArguments;
    function transformRangeReply([start, end]) {
      return {
        start,
        end
      };
    }
    exports2.transformRangeReply = transformRangeReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BITOP.js
var require_BITOP = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BITOP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 2;
    function transformArguments(operation, destKey, key) {
      return (0, generic_transformers_1.pushVerdictArguments)(["BITOP", operation, destKey], key);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BITPOS.js
var require_BITPOS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BITPOS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, bit, start, end, mode) {
      const args = ["BITPOS", key, bit.toString()];
      if (typeof start === "number") {
        args.push(start.toString());
      }
      if (typeof end === "number") {
        args.push(end.toString());
      }
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BLMOVE.js
var require_BLMOVE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BLMOVE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(source, destination, sourceDirection, destinationDirection, timeout) {
      return [
        "BLMOVE",
        source,
        destination,
        sourceDirection,
        destinationDirection,
        timeout.toString()
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LMPOP.js
var require_LMPOP = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LMPOP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 2;
    function transformArguments(keys, side, options) {
      return (0, generic_transformers_1.transformLMPopArguments)(["LMPOP"], keys, side, options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BLMPOP.js
var require_BLMPOP = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BLMPOP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 3;
    function transformArguments(timeout, keys, side, options) {
      return (0, generic_transformers_1.transformLMPopArguments)(["BLMPOP", timeout.toString()], keys, side, options);
    }
    exports2.transformArguments = transformArguments;
    var LMPOP_1 = require_LMPOP();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return LMPOP_1.transformReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BLPOP.js
var require_BLPOP = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BLPOP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(keys, timeout) {
      const args = (0, generic_transformers_1.pushVerdictArguments)(["BLPOP"], keys);
      args.push(timeout.toString());
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      if (reply === null)
        return null;
      return {
        key: reply[0],
        element: reply[1]
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BRPOP.js
var require_BRPOP = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BRPOP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, timeout) {
      const args = (0, generic_transformers_1.pushVerdictArguments)(["BRPOP"], key);
      args.push(timeout.toString());
      return args;
    }
    exports2.transformArguments = transformArguments;
    var BLPOP_1 = require_BLPOP();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return BLPOP_1.transformReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BRPOPLPUSH.js
var require_BRPOPLPUSH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BRPOPLPUSH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(source, destination, timeout) {
      return ["BRPOPLPUSH", source, destination, timeout.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZMPOP.js
var require_ZMPOP = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZMPOP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 2;
    function transformArguments(keys, side, options) {
      return (0, generic_transformers_1.transformZMPopArguments)(["ZMPOP"], keys, side, options);
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply === null ? null : {
        key: reply[0],
        elements: reply[1].map(generic_transformers_1.transformSortedSetMemberReply)
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BZMPOP.js
var require_BZMPOP = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BZMPOP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 3;
    function transformArguments(timeout, keys, side, options) {
      return (0, generic_transformers_1.transformZMPopArguments)(["BZMPOP", timeout.toString()], keys, side, options);
    }
    exports2.transformArguments = transformArguments;
    var ZMPOP_1 = require_ZMPOP();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return ZMPOP_1.transformReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BZPOPMAX.js
var require_BZPOPMAX = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BZPOPMAX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, timeout) {
      const args = (0, generic_transformers_1.pushVerdictArguments)(["BZPOPMAX"], key);
      args.push(timeout.toString());
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      if (!reply)
        return null;
      return {
        key: reply[0],
        value: reply[1],
        score: (0, generic_transformers_1.transformNumberInfinityReply)(reply[2])
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BZPOPMIN.js
var require_BZPOPMIN = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BZPOPMIN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, timeout) {
      const args = (0, generic_transformers_1.pushVerdictArguments)(["BZPOPMIN"], key);
      args.push(timeout.toString());
      return args;
    }
    exports2.transformArguments = transformArguments;
    var BZPOPMAX_1 = require_BZPOPMAX();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return BZPOPMAX_1.transformReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/COPY.js
var require_COPY = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/COPY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(source, destination, options) {
      const args = ["COPY", source, destination];
      if (options?.destinationDb) {
        args.push("DB", options.destinationDb.toString());
      }
      if (options?.replace) {
        args.push("REPLACE");
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/DECR.js
var require_DECR = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/DECR.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["DECR", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/DECRBY.js
var require_DECRBY = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/DECRBY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, decrement) {
      return ["DECRBY", key, decrement.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/DEL.js
var require_DEL = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/DEL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(keys) {
      return (0, generic_transformers_1.pushVerdictArguments)(["DEL"], keys);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/DUMP.js
var require_DUMP = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/DUMP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["DUMP", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/EVAL_RO.js
var require_EVAL_RO = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/EVAL_RO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
    exports2.IS_READ_ONLY = true;
    function transformArguments(script, options) {
      return (0, generic_transformers_1.pushEvalArguments)(["EVAL_RO", script], options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/EVAL.js
var require_EVAL = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/EVAL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
    function transformArguments(script, options) {
      return (0, generic_transformers_1.pushEvalArguments)(["EVAL", script], options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/EVALSHA_RO.js
var require_EVALSHA_RO = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/EVALSHA_RO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
    exports2.IS_READ_ONLY = true;
    function transformArguments(sha1, options) {
      return (0, generic_transformers_1.pushEvalArguments)(["EVALSHA_RO", sha1], options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/EVALSHA.js
var require_EVALSHA = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/EVALSHA.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
    function transformArguments(sha1, options) {
      return (0, generic_transformers_1.pushEvalArguments)(["EVALSHA", sha1], options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/EXISTS.js
var require_EXISTS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/EXISTS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(keys) {
      return (0, generic_transformers_1.pushVerdictArguments)(["EXISTS"], keys);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/EXPIRE.js
var require_EXPIRE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/EXPIRE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, seconds, mode) {
      const args = ["EXPIRE", key, seconds.toString()];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/EXPIREAT.js
var require_EXPIREAT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/EXPIREAT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, timestamp, mode) {
      const args = [
        "EXPIREAT",
        key,
        (0, generic_transformers_1.transformEXAT)(timestamp)
      ];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/EXPIRETIME.js
var require_EXPIRETIME = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/EXPIRETIME.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["EXPIRETIME", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FCALL_RO.js
var require_FCALL_RO = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FCALL_RO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
    exports2.IS_READ_ONLY = true;
    function transformArguments(fn, options) {
      return (0, generic_transformers_1.pushEvalArguments)(["FCALL_RO", fn], options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FCALL.js
var require_FCALL = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FCALL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = generic_transformers_1.evalFirstKeyIndex;
    function transformArguments(fn, options) {
      return (0, generic_transformers_1.pushEvalArguments)(["FCALL", fn], options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEOADD.js
var require_GEOADD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEOADD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, toAdd, options) {
      const args = ["GEOADD", key];
      if (options?.NX) {
        args.push("NX");
      } else if (options?.XX) {
        args.push("XX");
      }
      if (options?.CH) {
        args.push("CH");
      }
      for (const { longitude, latitude, member } of Array.isArray(toAdd) ? toAdd : [toAdd]) {
        args.push(longitude.toString(), latitude.toString(), member);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEODIST.js
var require_GEODIST = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEODIST.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, member1, member2, unit) {
      const args = ["GEODIST", key, member1, member2];
      if (unit) {
        args.push(unit);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply === null ? null : Number(reply);
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEOHASH.js
var require_GEOHASH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEOHASH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, member) {
      return (0, generic_transformers_1.pushVerdictArguments)(["GEOHASH", key], member);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEOPOS.js
var require_GEOPOS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEOPOS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, member) {
      return (0, generic_transformers_1.pushVerdictArguments)(["GEOPOS", key], member);
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map((coordinates) => coordinates === null ? null : {
        longitude: coordinates[0],
        latitude: coordinates[1]
      });
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUS_RO.js
var require_GEORADIUS_RO = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUS_RO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, coordinates, radius, unit, options) {
      return (0, generic_transformers_1.pushGeoRadiusArguments)(["GEORADIUS_RO"], key, coordinates, radius, unit, options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUS_RO_WITH.js
var require_GEORADIUS_RO_WITH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUS_RO_WITH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var GEORADIUS_RO_1 = require_GEORADIUS_RO();
    var GEORADIUS_RO_2 = require_GEORADIUS_RO();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return GEORADIUS_RO_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return GEORADIUS_RO_2.IS_READ_ONLY;
    } });
    function transformArguments(key, coordinates, radius, unit, replyWith, options) {
      const args = (0, GEORADIUS_RO_1.transformArguments)(key, coordinates, radius, unit, options);
      args.push(...replyWith);
      args.preserve = replyWith;
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformGeoMembersWithReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUS.js
var require_GEORADIUS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, coordinates, radius, unit, options) {
      return (0, generic_transformers_1.pushGeoRadiusArguments)(["GEORADIUS"], key, coordinates, radius, unit, options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUS_WITH.js
var require_GEORADIUS_WITH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUS_WITH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var GEORADIUS_1 = require_GEORADIUS();
    var GEORADIUS_2 = require_GEORADIUS();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return GEORADIUS_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return GEORADIUS_2.IS_READ_ONLY;
    } });
    function transformArguments(key, coordinates, radius, unit, replyWith, options) {
      const args = (0, GEORADIUS_1.transformArguments)(key, coordinates, radius, unit, options);
      args.push(...replyWith);
      args.preserve = replyWith;
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformGeoMembersWithReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_RO.js
var require_GEORADIUSBYMEMBER_RO = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_RO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, member, radius, unit, options) {
      return (0, generic_transformers_1.pushGeoRadiusArguments)(["GEORADIUSBYMEMBER_RO"], key, member, radius, unit, options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_RO_WITH.js
var require_GEORADIUSBYMEMBER_RO_WITH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_RO_WITH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var GEORADIUSBYMEMBER_RO_1 = require_GEORADIUSBYMEMBER_RO();
    var GEORADIUSBYMEMBER_RO_2 = require_GEORADIUSBYMEMBER_RO();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return GEORADIUSBYMEMBER_RO_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return GEORADIUSBYMEMBER_RO_2.IS_READ_ONLY;
    } });
    function transformArguments(key, member, radius, unit, replyWith, options) {
      const args = (0, GEORADIUSBYMEMBER_RO_1.transformArguments)(key, member, radius, unit, options);
      args.push(...replyWith);
      args.preserve = replyWith;
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformGeoMembersWithReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER.js
var require_GEORADIUSBYMEMBER = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, member, radius, unit, options) {
      return (0, generic_transformers_1.pushGeoRadiusArguments)(["GEORADIUSBYMEMBER"], key, member, radius, unit, options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_WITH.js
var require_GEORADIUSBYMEMBER_WITH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBER_WITH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var GEORADIUSBYMEMBER_1 = require_GEORADIUSBYMEMBER();
    var GEORADIUSBYMEMBER_2 = require_GEORADIUSBYMEMBER();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return GEORADIUSBYMEMBER_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return GEORADIUSBYMEMBER_2.IS_READ_ONLY;
    } });
    function transformArguments(key, member, radius, unit, replyWith, options) {
      const args = (0, GEORADIUSBYMEMBER_1.transformArguments)(key, member, radius, unit, options);
      args.push(...replyWith);
      args.preserve = replyWith;
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformGeoMembersWithReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBERSTORE.js
var require_GEORADIUSBYMEMBERSTORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUSBYMEMBERSTORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var GEORADIUSBYMEMBER_1 = require_GEORADIUSBYMEMBER();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return GEORADIUSBYMEMBER_1.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return GEORADIUSBYMEMBER_1.IS_READ_ONLY;
    } });
    function transformArguments(key, member, radius, unit, destination, options) {
      return (0, generic_transformers_1.pushGeoRadiusStoreArguments)(["GEORADIUSBYMEMBER"], key, member, radius, unit, destination, options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUSSTORE.js
var require_GEORADIUSSTORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEORADIUSSTORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var GEORADIUS_1 = require_GEORADIUS();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return GEORADIUS_1.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return GEORADIUS_1.IS_READ_ONLY;
    } });
    function transformArguments(key, coordinates, radius, unit, destination, options) {
      return (0, generic_transformers_1.pushGeoRadiusStoreArguments)(["GEORADIUS"], key, coordinates, radius, unit, destination, options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEOSEARCH.js
var require_GEOSEARCH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEOSEARCH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, from, by, options) {
      return (0, generic_transformers_1.pushGeoSearchArguments)(["GEOSEARCH"], key, from, by, options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEOSEARCH_WITH.js
var require_GEOSEARCH_WITH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEOSEARCH_WITH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var GEOSEARCH_1 = require_GEOSEARCH();
    var GEOSEARCH_2 = require_GEOSEARCH();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return GEOSEARCH_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return GEOSEARCH_2.IS_READ_ONLY;
    } });
    function transformArguments(key, from, by, replyWith, options) {
      const args = (0, GEOSEARCH_1.transformArguments)(key, from, by, options);
      args.push(...replyWith);
      args.preserve = replyWith;
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformGeoMembersWithReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEOSEARCHSTORE.js
var require_GEOSEARCHSTORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GEOSEARCHSTORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var GEOSEARCH_1 = require_GEOSEARCH();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return GEOSEARCH_1.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return GEOSEARCH_1.IS_READ_ONLY;
    } });
    function transformArguments(destination, source, from, by, options) {
      const args = (0, generic_transformers_1.pushGeoSearchArguments)(["GEOSEARCHSTORE", destination], source, from, by, options);
      if (options?.STOREDIST) {
        args.push("STOREDIST");
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      if (typeof reply !== "number") {
        throw new TypeError(`https://github.com/redis/redis/issues/9261`);
      }
      return reply;
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GET.js
var require_GET = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["GET", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GETBIT.js
var require_GETBIT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GETBIT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, offset) {
      return ["GETBIT", key, offset.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GETDEL.js
var require_GETDEL = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GETDEL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["GETDEL", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GETEX.js
var require_GETEX = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GETEX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, mode) {
      const args = ["GETEX", key];
      if ("EX" in mode) {
        args.push("EX", mode.EX.toString());
      } else if ("PX" in mode) {
        args.push("PX", mode.PX.toString());
      } else if ("EXAT" in mode) {
        args.push("EXAT", (0, generic_transformers_1.transformEXAT)(mode.EXAT));
      } else if ("PXAT" in mode) {
        args.push("PXAT", (0, generic_transformers_1.transformPXAT)(mode.PXAT));
      } else {
        args.push("PERSIST");
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GETRANGE.js
var require_GETRANGE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GETRANGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, start, end) {
      return ["GETRANGE", key, start.toString(), end.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GETSET.js
var require_GETSET = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/GETSET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, value) {
      return ["GETSET", key, value];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HDEL.js
var require_HDEL = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HDEL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, field) {
      return (0, generic_transformers_1.pushVerdictArguments)(["HDEL", key], field);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HEXISTS.js
var require_HEXISTS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HEXISTS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, field) {
      return ["HEXISTS", key, field];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HGET.js
var require_HGET = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HGET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, field) {
      return ["HGET", key, field];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HGETALL.js
var require_HGETALL = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HGETALL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.TRANSFORM_LEGACY_REPLY = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    exports2.TRANSFORM_LEGACY_REPLY = true;
    function transformArguments(key) {
      return ["HGETALL", key];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformTuplesReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HINCRBY.js
var require_HINCRBY = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HINCRBY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, field, increment) {
      return ["HINCRBY", key, field, increment.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HINCRBYFLOAT.js
var require_HINCRBYFLOAT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HINCRBYFLOAT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, field, increment) {
      return ["HINCRBYFLOAT", key, field, increment.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HKEYS.js
var require_HKEYS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HKEYS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["HKEYS", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HLEN.js
var require_HLEN = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HLEN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["HLEN", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HMGET.js
var require_HMGET = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HMGET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, fields) {
      return (0, generic_transformers_1.pushVerdictArguments)(["HMGET", key], fields);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HRANDFIELD.js
var require_HRANDFIELD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HRANDFIELD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["HRANDFIELD", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HRANDFIELD_COUNT.js
var require_HRANDFIELD_COUNT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HRANDFIELD_COUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var HRANDFIELD_1 = require_HRANDFIELD();
    var HRANDFIELD_2 = require_HRANDFIELD();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return HRANDFIELD_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return HRANDFIELD_2.IS_READ_ONLY;
    } });
    function transformArguments(key, count) {
      return [
        ...(0, HRANDFIELD_1.transformArguments)(key),
        count.toString()
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HRANDFIELD_COUNT_WITHVALUES.js
var require_HRANDFIELD_COUNT_WITHVALUES = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HRANDFIELD_COUNT_WITHVALUES.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var HRANDFIELD_COUNT_1 = require_HRANDFIELD_COUNT();
    var HRANDFIELD_COUNT_2 = require_HRANDFIELD_COUNT();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return HRANDFIELD_COUNT_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return HRANDFIELD_COUNT_2.IS_READ_ONLY;
    } });
    function transformArguments(key, count) {
      return [
        ...(0, HRANDFIELD_COUNT_1.transformArguments)(key, count),
        "WITHVALUES"
      ];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformTuplesReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HSCAN.js
var require_HSCAN = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HSCAN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, cursor, options) {
      return (0, generic_transformers_1.pushScanArguments)([
        "HSCAN",
        key
      ], cursor, options);
    }
    exports2.transformArguments = transformArguments;
    function transformReply([cursor, rawTuples]) {
      const parsedTuples = [];
      for (let i = 0; i < rawTuples.length; i += 2) {
        parsedTuples.push({
          field: rawTuples[i],
          value: rawTuples[i + 1]
        });
      }
      return {
        cursor: Number(cursor),
        tuples: parsedTuples
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HSET.js
var require_HSET = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HSET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(...[key, value, fieldValue]) {
      const args = ["HSET", key];
      if (typeof value === "string" || typeof value === "number" || Buffer.isBuffer(value)) {
        args.push(convertValue(value), convertValue(fieldValue));
      } else if (value instanceof Map) {
        pushMap(args, value);
      } else if (Array.isArray(value)) {
        pushTuples(args, value);
      } else {
        pushObject(args, value);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function pushMap(args, map) {
      for (const [key, value] of map.entries()) {
        args.push(convertValue(key), convertValue(value));
      }
    }
    function pushTuples(args, tuples) {
      for (const tuple of tuples) {
        if (Array.isArray(tuple)) {
          pushTuples(args, tuple);
          continue;
        }
        args.push(convertValue(tuple));
      }
    }
    function pushObject(args, object) {
      for (const key of Object.keys(object)) {
        args.push(convertValue(key), convertValue(object[key]));
      }
    }
    function convertValue(value) {
      return typeof value === "number" ? value.toString() : value;
    }
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HSETNX.js
var require_HSETNX = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HSETNX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, field, value) {
      return ["HSETNX", key, field, value];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HSTRLEN.js
var require_HSTRLEN = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HSTRLEN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, field) {
      return ["HSTRLEN", key, field];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HVALS.js
var require_HVALS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HVALS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["HVALS", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/INCR.js
var require_INCR = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/INCR.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["INCR", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/INCRBY.js
var require_INCRBY = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/INCRBY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, increment) {
      return ["INCRBY", key, increment.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/INCRBYFLOAT.js
var require_INCRBYFLOAT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/INCRBYFLOAT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, increment) {
      return ["INCRBYFLOAT", key, increment.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LCS.js
var require_LCS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LCS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key1, key2) {
      return [
        "LCS",
        key1,
        key2
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LCS_IDX_WITHMATCHLEN.js
var require_LCS_IDX_WITHMATCHLEN = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LCS_IDX_WITHMATCHLEN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var LCS_1 = require_LCS();
    var LCS_2 = require_LCS();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return LCS_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return LCS_2.IS_READ_ONLY;
    } });
    function transformArguments(key1, key2) {
      const args = (0, LCS_1.transformArguments)(key1, key2);
      args.push("IDX", "WITHMATCHLEN");
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        matches: reply[1].map(([key1, key2, length]) => ({
          key1: (0, generic_transformers_1.transformRangeReply)(key1),
          key2: (0, generic_transformers_1.transformRangeReply)(key2),
          length
        })),
        length: reply[3]
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LCS_IDX.js
var require_LCS_IDX = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LCS_IDX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var LCS_1 = require_LCS();
    var LCS_2 = require_LCS();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return LCS_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return LCS_2.IS_READ_ONLY;
    } });
    function transformArguments(key1, key2) {
      const args = (0, LCS_1.transformArguments)(key1, key2);
      args.push("IDX");
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        matches: reply[1].map(([key1, key2]) => ({
          key1: (0, generic_transformers_1.transformRangeReply)(key1),
          key2: (0, generic_transformers_1.transformRangeReply)(key2)
        })),
        length: reply[3]
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LCS_LEN.js
var require_LCS_LEN = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LCS_LEN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var LCS_1 = require_LCS();
    var LCS_2 = require_LCS();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return LCS_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return LCS_2.IS_READ_ONLY;
    } });
    function transformArguments(key1, key2) {
      const args = (0, LCS_1.transformArguments)(key1, key2);
      args.push("LEN");
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LINDEX.js
var require_LINDEX = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LINDEX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, index) {
      return ["LINDEX", key, index.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LINSERT.js
var require_LINSERT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LINSERT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, position, pivot, element) {
      return [
        "LINSERT",
        key,
        position,
        pivot,
        element
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LLEN.js
var require_LLEN = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LLEN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["LLEN", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LMOVE.js
var require_LMOVE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LMOVE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(source, destination, sourceSide, destinationSide) {
      return [
        "LMOVE",
        source,
        destination,
        sourceSide,
        destinationSide
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LPOP_COUNT.js
var require_LPOP_COUNT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LPOP_COUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, count) {
      return ["LPOP", key, count.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LPOP.js
var require_LPOP = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LPOP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["LPOP", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LPOS.js
var require_LPOS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LPOS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, element, options) {
      const args = ["LPOS", key, element];
      if (typeof options?.RANK === "number") {
        args.push("RANK", options.RANK.toString());
      }
      if (typeof options?.MAXLEN === "number") {
        args.push("MAXLEN", options.MAXLEN.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LPOS_COUNT.js
var require_LPOS_COUNT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LPOS_COUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var LPOS_1 = require_LPOS();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return LPOS_1.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return LPOS_1.IS_READ_ONLY;
    } });
    function transformArguments(key, element, count, options) {
      const args = ["LPOS", key, element];
      if (typeof options?.RANK === "number") {
        args.push("RANK", options.RANK.toString());
      }
      args.push("COUNT", count.toString());
      if (typeof options?.MAXLEN === "number") {
        args.push("MAXLEN", options.MAXLEN.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LPUSH.js
var require_LPUSH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LPUSH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, elements) {
      return (0, generic_transformers_1.pushVerdictArguments)(["LPUSH", key], elements);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LPUSHX.js
var require_LPUSHX = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LPUSHX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, element) {
      return (0, generic_transformers_1.pushVerdictArguments)(["LPUSHX", key], element);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LRANGE.js
var require_LRANGE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LRANGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, start, stop) {
      return [
        "LRANGE",
        key,
        start.toString(),
        stop.toString()
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LREM.js
var require_LREM = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LREM.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, count, element) {
      return [
        "LREM",
        key,
        count.toString(),
        element
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LSET.js
var require_LSET = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LSET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, index, element) {
      return [
        "LSET",
        key,
        index.toString(),
        element
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LTRIM.js
var require_LTRIM = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LTRIM.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, start, stop) {
      return [
        "LTRIM",
        key,
        start.toString(),
        stop.toString()
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MGET.js
var require_MGET = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MGET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(keys) {
      return ["MGET", ...keys];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MIGRATE.js
var require_MIGRATE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MIGRATE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(host, port, key, destinationDb, timeout, options) {
      const args = ["MIGRATE", host, port.toString()], isKeyArray = Array.isArray(key);
      if (isKeyArray) {
        args.push("");
      } else {
        args.push(key);
      }
      args.push(destinationDb.toString(), timeout.toString());
      if (options?.COPY) {
        args.push("COPY");
      }
      if (options?.REPLACE) {
        args.push("REPLACE");
      }
      if (options?.AUTH) {
        if (options.AUTH.username) {
          args.push("AUTH2", options.AUTH.username, options.AUTH.password);
        } else {
          args.push("AUTH", options.AUTH.password);
        }
      }
      if (isKeyArray) {
        args.push("KEYS", ...key);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MSET.js
var require_MSET = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MSET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(toSet) {
      const args = ["MSET"];
      if (Array.isArray(toSet)) {
        args.push(...toSet.flat());
      } else {
        for (const key of Object.keys(toSet)) {
          args.push(key, toSet[key]);
        }
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MSETNX.js
var require_MSETNX = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MSETNX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(toSet) {
      const args = ["MSETNX"];
      if (Array.isArray(toSet)) {
        args.push(...toSet.flat());
      } else {
        for (const key of Object.keys(toSet)) {
          args.push(key, toSet[key]);
        }
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/OBJECT_ENCODING.js
var require_OBJECT_ENCODING = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/OBJECT_ENCODING.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 2;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["OBJECT", "ENCODING", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/OBJECT_FREQ.js
var require_OBJECT_FREQ = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/OBJECT_FREQ.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 2;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["OBJECT", "FREQ", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/OBJECT_IDLETIME.js
var require_OBJECT_IDLETIME = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/OBJECT_IDLETIME.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 2;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["OBJECT", "IDLETIME", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/OBJECT_REFCOUNT.js
var require_OBJECT_REFCOUNT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/OBJECT_REFCOUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 2;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["OBJECT", "REFCOUNT", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PERSIST.js
var require_PERSIST = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PERSIST.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["PERSIST", key];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PEXPIRE.js
var require_PEXPIRE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PEXPIRE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, milliseconds, mode) {
      const args = ["PEXPIRE", key, milliseconds.toString()];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PEXPIREAT.js
var require_PEXPIREAT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PEXPIREAT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, millisecondsTimestamp, mode) {
      const args = [
        "PEXPIREAT",
        key,
        (0, generic_transformers_1.transformPXAT)(millisecondsTimestamp)
      ];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PEXPIRETIME.js
var require_PEXPIRETIME = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PEXPIRETIME.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["PEXPIRETIME", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PFADD.js
var require_PFADD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PFADD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, element) {
      return (0, generic_transformers_1.pushVerdictArguments)(["PFADD", key], element);
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PFCOUNT.js
var require_PFCOUNT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PFCOUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return (0, generic_transformers_1.pushVerdictArguments)(["PFCOUNT"], key);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PFMERGE.js
var require_PFMERGE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PFMERGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(destination, source) {
      return (0, generic_transformers_1.pushVerdictArguments)(["PFMERGE", destination], source);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PSETEX.js
var require_PSETEX = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PSETEX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, milliseconds, value) {
      return [
        "PSETEX",
        key,
        milliseconds.toString(),
        value
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PTTL.js
var require_PTTL = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PTTL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["PTTL", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PUBLISH.js
var require_PUBLISH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PUBLISH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments(channel, message) {
      return ["PUBLISH", channel, message];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RENAME.js
var require_RENAME = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RENAME.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, newKey) {
      return ["RENAME", key, newKey];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RENAMENX.js
var require_RENAMENX = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RENAMENX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, newKey) {
      return ["RENAMENX", key, newKey];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RESTORE.js
var require_RESTORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RESTORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, ttl, serializedValue, options) {
      const args = ["RESTORE", key, ttl.toString(), serializedValue];
      if (options?.REPLACE) {
        args.push("REPLACE");
      }
      if (options?.ABSTTL) {
        args.push("ABSTTL");
      }
      if (options?.IDLETIME) {
        args.push("IDLETIME", options.IDLETIME.toString());
      }
      if (options?.FREQ) {
        args.push("FREQ", options.FREQ.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RPOP_COUNT.js
var require_RPOP_COUNT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RPOP_COUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, count) {
      return ["RPOP", key, count.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RPOP.js
var require_RPOP = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RPOP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["RPOP", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RPOPLPUSH.js
var require_RPOPLPUSH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RPOPLPUSH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(source, destination) {
      return ["RPOPLPUSH", source, destination];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RPUSH.js
var require_RPUSH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RPUSH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, element) {
      return (0, generic_transformers_1.pushVerdictArguments)(["RPUSH", key], element);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RPUSHX.js
var require_RPUSHX = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RPUSHX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, element) {
      return (0, generic_transformers_1.pushVerdictArguments)(["RPUSHX", key], element);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SADD.js
var require_SADD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SADD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, members) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SADD", key], members);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SCARD.js
var require_SCARD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SCARD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["SCARD", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SDIFF.js
var require_SDIFF = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SDIFF.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(keys) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SDIFF"], keys);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SDIFFSTORE.js
var require_SDIFFSTORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SDIFFSTORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(destination, keys) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SDIFFSTORE", destination], keys);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SET.js
var require_SET = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, value, options) {
      const args = [
        "SET",
        key,
        typeof value === "number" ? value.toString() : value
      ];
      if (options?.EX !== void 0) {
        args.push("EX", options.EX.toString());
      } else if (options?.PX !== void 0) {
        args.push("PX", options.PX.toString());
      } else if (options?.EXAT !== void 0) {
        args.push("EXAT", options.EXAT.toString());
      } else if (options?.PXAT !== void 0) {
        args.push("PXAT", options.PXAT.toString());
      } else if (options?.KEEPTTL) {
        args.push("KEEPTTL");
      }
      if (options?.NX) {
        args.push("NX");
      } else if (options?.XX) {
        args.push("XX");
      }
      if (options?.GET) {
        args.push("GET");
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SETBIT.js
var require_SETBIT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SETBIT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, offset, value) {
      return ["SETBIT", key, offset.toString(), value.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SETEX.js
var require_SETEX = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SETEX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, seconds, value) {
      return [
        "SETEX",
        key,
        seconds.toString(),
        value
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SETNX.js
var require_SETNX = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SETNX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, value) {
      return ["SETNX", key, value];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SETRANGE.js
var require_SETRANGE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SETRANGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, offset, value) {
      return ["SETRANGE", key, offset.toString(), value];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SINTER.js
var require_SINTER = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SINTER.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(keys) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SINTER"], keys);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SINTERCARD.js
var require_SINTERCARD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SINTERCARD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 2;
    exports2.IS_READ_ONLY = true;
    function transformArguments(keys, limit) {
      const args = (0, generic_transformers_1.pushVerdictArgument)(["SINTERCARD"], keys);
      if (limit) {
        args.push("LIMIT", limit.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SINTERSTORE.js
var require_SINTERSTORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SINTERSTORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(destination, keys) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SINTERSTORE", destination], keys);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SISMEMBER.js
var require_SISMEMBER = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SISMEMBER.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, member) {
      return ["SISMEMBER", key, member];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SMEMBERS.js
var require_SMEMBERS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SMEMBERS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["SMEMBERS", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SMISMEMBER.js
var require_SMISMEMBER = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SMISMEMBER.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, members) {
      return ["SMISMEMBER", key, ...members];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanArrayReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SMOVE.js
var require_SMOVE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SMOVE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(source, destination, member) {
      return ["SMOVE", source, destination, member];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SORT_RO.js
var require_SORT_RO = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SORT_RO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, options) {
      return (0, generic_transformers_1.pushSortArguments)(["SORT_RO", key], options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SORT.js
var require_SORT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SORT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, options) {
      return (0, generic_transformers_1.pushSortArguments)(["SORT", key], options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SORT_STORE.js
var require_SORT_STORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SORT_STORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var SORT_1 = require_SORT();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(source, destination, options) {
      const args = (0, SORT_1.transformArguments)(source, options);
      args.push("STORE", destination);
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SPOP.js
var require_SPOP = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SPOP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, count) {
      const args = ["SPOP", key];
      if (typeof count === "number") {
        args.push(count.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SPUBLISH.js
var require_SPUBLISH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SPUBLISH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(channel, message) {
      return ["SPUBLISH", channel, message];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SRANDMEMBER.js
var require_SRANDMEMBER = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SRANDMEMBER.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["SRANDMEMBER", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SRANDMEMBER_COUNT.js
var require_SRANDMEMBER_COUNT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SRANDMEMBER_COUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var SRANDMEMBER_1 = require_SRANDMEMBER();
    var SRANDMEMBER_2 = require_SRANDMEMBER();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return SRANDMEMBER_2.FIRST_KEY_INDEX;
    } });
    function transformArguments(key, count) {
      return [
        ...(0, SRANDMEMBER_1.transformArguments)(key),
        count.toString()
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SREM.js
var require_SREM = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SREM.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, members) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SREM", key], members);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SSCAN.js
var require_SSCAN = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SSCAN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, cursor, options) {
      return (0, generic_transformers_1.pushScanArguments)([
        "SSCAN",
        key
      ], cursor, options);
    }
    exports2.transformArguments = transformArguments;
    function transformReply([cursor, members]) {
      return {
        cursor: Number(cursor),
        members
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/STRLEN.js
var require_STRLEN = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/STRLEN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["STRLEN", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SUNION.js
var require_SUNION = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SUNION.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(keys) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SUNION"], keys);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SUNIONSTORE.js
var require_SUNIONSTORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SUNIONSTORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(destination, keys) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SUNIONSTORE", destination], keys);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/TOUCH.js
var require_TOUCH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/TOUCH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return (0, generic_transformers_1.pushVerdictArguments)(["TOUCH"], key);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/TTL.js
var require_TTL = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/TTL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["TTL", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/TYPE.js
var require_TYPE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/TYPE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["TYPE", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/UNLINK.js
var require_UNLINK = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/UNLINK.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return (0, generic_transformers_1.pushVerdictArguments)(["UNLINK"], key);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/WATCH.js
var require_WATCH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/WATCH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return (0, generic_transformers_1.pushVerdictArguments)(["WATCH"], key);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XACK.js
var require_XACK = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XACK.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, group, id) {
      return (0, generic_transformers_1.pushVerdictArguments)(["XACK", key, group], id);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XADD.js
var require_XADD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XADD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, id, message, options) {
      const args = ["XADD", key];
      if (options?.NOMKSTREAM) {
        args.push("NOMKSTREAM");
      }
      if (options?.TRIM) {
        if (options.TRIM.strategy) {
          args.push(options.TRIM.strategy);
        }
        if (options.TRIM.strategyModifier) {
          args.push(options.TRIM.strategyModifier);
        }
        args.push(options.TRIM.threshold.toString());
        if (options.TRIM.limit) {
          args.push("LIMIT", options.TRIM.limit.toString());
        }
      }
      args.push(id);
      for (const [key2, value] of Object.entries(message)) {
        args.push(key2, value);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XAUTOCLAIM.js
var require_XAUTOCLAIM = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XAUTOCLAIM.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, group, consumer, minIdleTime, start, options) {
      const args = ["XAUTOCLAIM", key, group, consumer, minIdleTime.toString(), start];
      if (options?.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        nextId: reply[0],
        messages: (0, generic_transformers_1.transformStreamMessagesNullReply)(reply[1])
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XAUTOCLAIM_JUSTID.js
var require_XAUTOCLAIM_JUSTID = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XAUTOCLAIM_JUSTID.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var XAUTOCLAIM_1 = require_XAUTOCLAIM();
    var XAUTOCLAIM_2 = require_XAUTOCLAIM();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return XAUTOCLAIM_2.FIRST_KEY_INDEX;
    } });
    function transformArguments(...args) {
      return [
        ...(0, XAUTOCLAIM_1.transformArguments)(...args),
        "JUSTID"
      ];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        nextId: reply[0],
        messages: reply[1]
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XCLAIM.js
var require_XCLAIM = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XCLAIM.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, group, consumer, minIdleTime, id, options) {
      const args = (0, generic_transformers_1.pushVerdictArguments)(["XCLAIM", key, group, consumer, minIdleTime.toString()], id);
      if (options?.IDLE) {
        args.push("IDLE", options.IDLE.toString());
      }
      if (options?.TIME) {
        args.push("TIME", (typeof options.TIME === "number" ? options.TIME : options.TIME.getTime()).toString());
      }
      if (options?.RETRYCOUNT) {
        args.push("RETRYCOUNT", options.RETRYCOUNT.toString());
      }
      if (options?.FORCE) {
        args.push("FORCE");
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformStreamMessagesNullReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XCLAIM_JUSTID.js
var require_XCLAIM_JUSTID = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XCLAIM_JUSTID.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var XCLAIM_1 = require_XCLAIM();
    var XCLAIM_2 = require_XCLAIM();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return XCLAIM_2.FIRST_KEY_INDEX;
    } });
    function transformArguments(...args) {
      return [
        ...(0, XCLAIM_1.transformArguments)(...args),
        "JUSTID"
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XDEL.js
var require_XDEL = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XDEL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, id) {
      return (0, generic_transformers_1.pushVerdictArguments)(["XDEL", key], id);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XGROUP_CREATE.js
var require_XGROUP_CREATE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XGROUP_CREATE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 2;
    function transformArguments(key, group, id, options) {
      const args = ["XGROUP", "CREATE", key, group, id];
      if (options?.MKSTREAM) {
        args.push("MKSTREAM");
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XGROUP_CREATECONSUMER.js
var require_XGROUP_CREATECONSUMER = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XGROUP_CREATECONSUMER.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 2;
    function transformArguments(key, group, consumer) {
      return ["XGROUP", "CREATECONSUMER", key, group, consumer];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XGROUP_DELCONSUMER.js
var require_XGROUP_DELCONSUMER = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XGROUP_DELCONSUMER.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 2;
    function transformArguments(key, group, consumer) {
      return ["XGROUP", "DELCONSUMER", key, group, consumer];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XGROUP_DESTROY.js
var require_XGROUP_DESTROY = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XGROUP_DESTROY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 2;
    function transformArguments(key, group) {
      return ["XGROUP", "DESTROY", key, group];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XGROUP_SETID.js
var require_XGROUP_SETID = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XGROUP_SETID.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 2;
    function transformArguments(key, group, id) {
      return ["XGROUP", "SETID", key, group, id];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XINFO_CONSUMERS.js
var require_XINFO_CONSUMERS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XINFO_CONSUMERS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 2;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, group) {
      return ["XINFO", "CONSUMERS", key, group];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(rawReply) {
      return rawReply.map((consumer) => ({
        name: consumer[1],
        pending: consumer[3],
        idle: consumer[5],
        inactive: consumer[7]
      }));
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XINFO_GROUPS.js
var require_XINFO_GROUPS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XINFO_GROUPS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 2;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["XINFO", "GROUPS", key];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(rawReply) {
      return rawReply.map((group) => ({
        name: group[1],
        consumers: group[3],
        pending: group[5],
        lastDeliveredId: group[7]
      }));
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XINFO_STREAM.js
var require_XINFO_STREAM = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XINFO_STREAM.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 2;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["XINFO", "STREAM", key];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(rawReply) {
      const parsedReply = {};
      for (let i = 0; i < rawReply.length; i += 2) {
        switch (rawReply[i]) {
          case "length":
            parsedReply.length = rawReply[i + 1];
            break;
          case "radix-tree-keys":
            parsedReply.radixTreeKeys = rawReply[i + 1];
            break;
          case "radix-tree-nodes":
            parsedReply.radixTreeNodes = rawReply[i + 1];
            break;
          case "groups":
            parsedReply.groups = rawReply[i + 1];
            break;
          case "last-generated-id":
            parsedReply.lastGeneratedId = rawReply[i + 1];
            break;
          case "first-entry":
            parsedReply.firstEntry = rawReply[i + 1] ? {
              id: rawReply[i + 1][0],
              message: (0, generic_transformers_1.transformTuplesReply)(rawReply[i + 1][1])
            } : null;
            break;
          case "last-entry":
            parsedReply.lastEntry = rawReply[i + 1] ? {
              id: rawReply[i + 1][0],
              message: (0, generic_transformers_1.transformTuplesReply)(rawReply[i + 1][1])
            } : null;
            break;
        }
      }
      return parsedReply;
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XLEN.js
var require_XLEN = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XLEN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["XLEN", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XPENDING_RANGE.js
var require_XPENDING_RANGE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XPENDING_RANGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, group, start, end, count, options) {
      const args = ["XPENDING", key, group];
      if (options?.IDLE) {
        args.push("IDLE", options.IDLE.toString());
      }
      args.push(start, end, count.toString());
      if (options?.consumer) {
        args.push(options.consumer);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map(([id, owner, millisecondsSinceLastDelivery, deliveriesCounter]) => ({
        id,
        owner,
        millisecondsSinceLastDelivery,
        deliveriesCounter
      }));
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XPENDING.js
var require_XPENDING = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XPENDING.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, group) {
      return ["XPENDING", key, group];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        pending: reply[0],
        firstId: reply[1],
        lastId: reply[2],
        consumers: reply[3] === null ? null : reply[3].map(([name, deliveriesCounter]) => ({
          name,
          deliveriesCounter: Number(deliveriesCounter)
        }))
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XRANGE.js
var require_XRANGE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XRANGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, start, end, options) {
      const args = ["XRANGE", key, start, end];
      if (options?.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformStreamMessagesReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XREAD.js
var require_XREAD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XREAD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var FIRST_KEY_INDEX = (streams) => {
      return Array.isArray(streams) ? streams[0].key : streams.key;
    };
    exports2.FIRST_KEY_INDEX = FIRST_KEY_INDEX;
    exports2.IS_READ_ONLY = true;
    function transformArguments(streams, options) {
      const args = ["XREAD"];
      if (options?.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      if (typeof options?.BLOCK === "number") {
        args.push("BLOCK", options.BLOCK.toString());
      }
      args.push("STREAMS");
      const streamsArray = Array.isArray(streams) ? streams : [streams], argsLength = args.length;
      for (let i = 0; i < streamsArray.length; i++) {
        const stream = streamsArray[i];
        args[argsLength + i] = stream.key;
        args[argsLength + streamsArray.length + i] = stream.id;
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformStreamsMessagesReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XREADGROUP.js
var require_XREADGROUP = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XREADGROUP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var FIRST_KEY_INDEX = (_group, _consumer, streams) => {
      return Array.isArray(streams) ? streams[0].key : streams.key;
    };
    exports2.FIRST_KEY_INDEX = FIRST_KEY_INDEX;
    exports2.IS_READ_ONLY = true;
    function transformArguments(group, consumer, streams, options) {
      const args = ["XREADGROUP", "GROUP", group, consumer];
      if (options?.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      if (typeof options?.BLOCK === "number") {
        args.push("BLOCK", options.BLOCK.toString());
      }
      if (options?.NOACK) {
        args.push("NOACK");
      }
      args.push("STREAMS");
      const streamsArray = Array.isArray(streams) ? streams : [streams], argsLength = args.length;
      for (let i = 0; i < streamsArray.length; i++) {
        const stream = streamsArray[i];
        args[argsLength + i] = stream.key;
        args[argsLength + streamsArray.length + i] = stream.id;
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformStreamsMessagesReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XREVRANGE.js
var require_XREVRANGE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XREVRANGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, start, end, options) {
      const args = ["XREVRANGE", key, start, end];
      if (options?.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformStreamMessagesReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XSETID.js
var require_XSETID = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XSETID.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, lastId, options) {
      const args = ["XSETID", key, lastId];
      if (options?.ENTRIESADDED) {
        args.push("ENTRIESADDED", options.ENTRIESADDED.toString());
      }
      if (options?.MAXDELETEDID) {
        args.push("MAXDELETEDID", options.MAXDELETEDID);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XTRIM.js
var require_XTRIM = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/XTRIM.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, strategy, threshold, options) {
      const args = ["XTRIM", key, strategy];
      if (options?.strategyModifier) {
        args.push(options.strategyModifier);
      }
      args.push(threshold.toString());
      if (options?.LIMIT) {
        args.push("LIMIT", options.LIMIT.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZADD.js
var require_ZADD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZADD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, members, options) {
      const args = ["ZADD", key];
      if (options?.NX) {
        args.push("NX");
      } else {
        if (options?.XX) {
          args.push("XX");
        }
        if (options?.GT) {
          args.push("GT");
        } else if (options?.LT) {
          args.push("LT");
        }
      }
      if (options?.CH) {
        args.push("CH");
      }
      if (options?.INCR) {
        args.push("INCR");
      }
      for (const { score, value } of Array.isArray(members) ? members : [members]) {
        args.push((0, generic_transformers_1.transformNumberInfinityArgument)(score), value);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformNumberInfinityReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZCARD.js
var require_ZCARD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZCARD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["ZCARD", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZCOUNT.js
var require_ZCOUNT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZCOUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, min, max) {
      return [
        "ZCOUNT",
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZDIFF.js
var require_ZDIFF = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZDIFF.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 2;
    exports2.IS_READ_ONLY = true;
    function transformArguments(keys) {
      return (0, generic_transformers_1.pushVerdictArgument)(["ZDIFF"], keys);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZDIFF_WITHSCORES.js
var require_ZDIFF_WITHSCORES = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZDIFF_WITHSCORES.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var ZDIFF_1 = require_ZDIFF();
    var ZDIFF_2 = require_ZDIFF();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZDIFF_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return ZDIFF_2.IS_READ_ONLY;
    } });
    function transformArguments(...args) {
      return [
        ...(0, ZDIFF_1.transformArguments)(...args),
        "WITHSCORES"
      ];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZDIFFSTORE.js
var require_ZDIFFSTORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZDIFFSTORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(destination, keys) {
      return (0, generic_transformers_1.pushVerdictArgument)(["ZDIFFSTORE", destination], keys);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZINCRBY.js
var require_ZINCRBY = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZINCRBY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, increment, member) {
      return [
        "ZINCRBY",
        key,
        (0, generic_transformers_1.transformNumberInfinityArgument)(increment),
        member
      ];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformNumberInfinityReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZINTER.js
var require_ZINTER = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZINTER.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 2;
    exports2.IS_READ_ONLY = true;
    function transformArguments(keys, options) {
      const args = (0, generic_transformers_1.pushVerdictArgument)(["ZINTER"], keys);
      if (options?.WEIGHTS) {
        args.push("WEIGHTS", ...options.WEIGHTS.map((weight) => weight.toString()));
      }
      if (options?.AGGREGATE) {
        args.push("AGGREGATE", options.AGGREGATE);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZINTER_WITHSCORES.js
var require_ZINTER_WITHSCORES = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZINTER_WITHSCORES.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var ZINTER_1 = require_ZINTER();
    var ZINTER_2 = require_ZINTER();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZINTER_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return ZINTER_2.IS_READ_ONLY;
    } });
    function transformArguments(...args) {
      return [
        ...(0, ZINTER_1.transformArguments)(...args),
        "WITHSCORES"
      ];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZINTERCARD.js
var require_ZINTERCARD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZINTERCARD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 2;
    exports2.IS_READ_ONLY = true;
    function transformArguments(keys, limit) {
      const args = (0, generic_transformers_1.pushVerdictArgument)(["ZINTERCARD"], keys);
      if (limit) {
        args.push("LIMIT", limit.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZINTERSTORE.js
var require_ZINTERSTORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZINTERSTORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(destination, keys, options) {
      const args = (0, generic_transformers_1.pushVerdictArgument)(["ZINTERSTORE", destination], keys);
      if (options?.WEIGHTS) {
        args.push("WEIGHTS", ...options.WEIGHTS.map((weight) => weight.toString()));
      }
      if (options?.AGGREGATE) {
        args.push("AGGREGATE", options.AGGREGATE);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZLEXCOUNT.js
var require_ZLEXCOUNT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZLEXCOUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, min, max) {
      return [
        "ZLEXCOUNT",
        key,
        min,
        max
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZMSCORE.js
var require_ZMSCORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZMSCORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, member) {
      return (0, generic_transformers_1.pushVerdictArguments)(["ZMSCORE", key], member);
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformNumberInfinityNullArrayReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZPOPMAX.js
var require_ZPOPMAX = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZPOPMAX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return [
        "ZPOPMAX",
        key
      ];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetMemberNullReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZPOPMAX_COUNT.js
var require_ZPOPMAX_COUNT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZPOPMAX_COUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var ZPOPMAX_1 = require_ZPOPMAX();
    var ZPOPMAX_2 = require_ZPOPMAX();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZPOPMAX_2.FIRST_KEY_INDEX;
    } });
    function transformArguments(key, count) {
      return [
        ...(0, ZPOPMAX_1.transformArguments)(key),
        count.toString()
      ];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZPOPMIN.js
var require_ZPOPMIN = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZPOPMIN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return [
        "ZPOPMIN",
        key
      ];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetMemberNullReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZPOPMIN_COUNT.js
var require_ZPOPMIN_COUNT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZPOPMIN_COUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var ZPOPMIN_1 = require_ZPOPMIN();
    var ZPOPMIN_2 = require_ZPOPMIN();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZPOPMIN_2.FIRST_KEY_INDEX;
    } });
    function transformArguments(key, count) {
      return [
        ...(0, ZPOPMIN_1.transformArguments)(key),
        count.toString()
      ];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER.js
var require_ZRANDMEMBER = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["ZRANDMEMBER", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER_COUNT.js
var require_ZRANDMEMBER_COUNT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER_COUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var ZRANDMEMBER_1 = require_ZRANDMEMBER();
    var ZRANDMEMBER_2 = require_ZRANDMEMBER();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZRANDMEMBER_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return ZRANDMEMBER_2.IS_READ_ONLY;
    } });
    function transformArguments(key, count) {
      return [
        ...(0, ZRANDMEMBER_1.transformArguments)(key),
        count.toString()
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER_COUNT_WITHSCORES.js
var require_ZRANDMEMBER_COUNT_WITHSCORES = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANDMEMBER_COUNT_WITHSCORES.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var ZRANDMEMBER_COUNT_1 = require_ZRANDMEMBER_COUNT();
    var ZRANDMEMBER_COUNT_2 = require_ZRANDMEMBER_COUNT();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZRANDMEMBER_COUNT_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return ZRANDMEMBER_COUNT_2.IS_READ_ONLY;
    } });
    function transformArguments(...args) {
      return [
        ...(0, ZRANDMEMBER_COUNT_1.transformArguments)(...args),
        "WITHSCORES"
      ];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANGE.js
var require_ZRANGE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, min, max, options) {
      const args = [
        "ZRANGE",
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
      ];
      switch (options?.BY) {
        case "SCORE":
          args.push("BYSCORE");
          break;
        case "LEX":
          args.push("BYLEX");
          break;
      }
      if (options?.REV) {
        args.push("REV");
      }
      if (options?.LIMIT) {
        args.push("LIMIT", options.LIMIT.offset.toString(), options.LIMIT.count.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANGE_WITHSCORES.js
var require_ZRANGE_WITHSCORES = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANGE_WITHSCORES.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var ZRANGE_1 = require_ZRANGE();
    var ZRANGE_2 = require_ZRANGE();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZRANGE_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return ZRANGE_2.IS_READ_ONLY;
    } });
    function transformArguments(...args) {
      return [
        ...(0, ZRANGE_1.transformArguments)(...args),
        "WITHSCORES"
      ];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANGEBYLEX.js
var require_ZRANGEBYLEX = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANGEBYLEX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, min, max, options) {
      const args = [
        "ZRANGEBYLEX",
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
      ];
      if (options?.LIMIT) {
        args.push("LIMIT", options.LIMIT.offset.toString(), options.LIMIT.count.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANGEBYSCORE.js
var require_ZRANGEBYSCORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANGEBYSCORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, min, max, options) {
      const args = [
        "ZRANGEBYSCORE",
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
      ];
      if (options?.LIMIT) {
        args.push("LIMIT", options.LIMIT.offset.toString(), options.LIMIT.count.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANGEBYSCORE_WITHSCORES.js
var require_ZRANGEBYSCORE_WITHSCORES = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANGEBYSCORE_WITHSCORES.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var ZRANGEBYSCORE_1 = require_ZRANGEBYSCORE();
    var ZRANGEBYSCORE_2 = require_ZRANGEBYSCORE();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZRANGEBYSCORE_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return ZRANGEBYSCORE_2.IS_READ_ONLY;
    } });
    function transformArguments(key, min, max, options) {
      return [
        ...(0, ZRANGEBYSCORE_1.transformArguments)(key, min, max, options),
        "WITHSCORES"
      ];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANGESTORE.js
var require_ZRANGESTORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANGESTORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(dst, src, min, max, options) {
      const args = [
        "ZRANGESTORE",
        dst,
        src,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
      ];
      switch (options?.BY) {
        case "SCORE":
          args.push("BYSCORE");
          break;
        case "LEX":
          args.push("BYLEX");
          break;
      }
      if (options?.REV) {
        args.push("REV");
      }
      if (options?.LIMIT) {
        args.push("LIMIT", options.LIMIT.offset.toString(), options.LIMIT.count.toString());
      }
      if (options?.WITHSCORES) {
        args.push("WITHSCORES");
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      if (typeof reply !== "number") {
        throw new TypeError(`Upgrade to Redis 6.2.5 and up (https://github.com/redis/redis/pull/9089)`);
      }
      return reply;
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANK.js
var require_ZRANK = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZRANK.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, member) {
      return ["ZRANK", key, member];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZREM.js
var require_ZREM = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZREM.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, member) {
      return (0, generic_transformers_1.pushVerdictArguments)(["ZREM", key], member);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYLEX.js
var require_ZREMRANGEBYLEX = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYLEX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, min, max) {
      return [
        "ZREMRANGEBYLEX",
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYRANK.js
var require_ZREMRANGEBYRANK = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYRANK.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, start, stop) {
      return ["ZREMRANGEBYRANK", key, start.toString(), stop.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYSCORE.js
var require_ZREMRANGEBYSCORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZREMRANGEBYSCORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, min, max) {
      return [
        "ZREMRANGEBYSCORE",
        key,
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(min),
        (0, generic_transformers_1.transformStringNumberInfinityArgument)(max)
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZREVRANK.js
var require_ZREVRANK = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZREVRANK.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, member) {
      return ["ZREVRANK", key, member];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZSCAN.js
var require_ZSCAN = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZSCAN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, cursor, options) {
      return (0, generic_transformers_1.pushScanArguments)([
        "ZSCAN",
        key
      ], cursor, options);
    }
    exports2.transformArguments = transformArguments;
    function transformReply([cursor, rawMembers]) {
      const parsedMembers = [];
      for (let i = 0; i < rawMembers.length; i += 2) {
        parsedMembers.push({
          value: rawMembers[i],
          score: (0, generic_transformers_1.transformNumberInfinityReply)(rawMembers[i + 1])
        });
      }
      return {
        cursor: Number(cursor),
        members: parsedMembers
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZSCORE.js
var require_ZSCORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZSCORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, member) {
      return ["ZSCORE", key, member];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformNumberInfinityNullReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZUNION.js
var require_ZUNION = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZUNION.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 2;
    exports2.IS_READ_ONLY = true;
    function transformArguments(keys, options) {
      const args = (0, generic_transformers_1.pushVerdictArgument)(["ZUNION"], keys);
      if (options?.WEIGHTS) {
        args.push("WEIGHTS", ...options.WEIGHTS.map((weight) => weight.toString()));
      }
      if (options?.AGGREGATE) {
        args.push("AGGREGATE", options.AGGREGATE);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZUNION_WITHSCORES.js
var require_ZUNION_WITHSCORES = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZUNION_WITHSCORES.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var ZUNION_1 = require_ZUNION();
    var ZUNION_2 = require_ZUNION();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return ZUNION_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return ZUNION_2.IS_READ_ONLY;
    } });
    function transformArguments(...args) {
      return [
        ...(0, ZUNION_1.transformArguments)(...args),
        "WITHSCORES"
      ];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformSortedSetWithScoresReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZUNIONSTORE.js
var require_ZUNIONSTORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ZUNIONSTORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(destination, keys, options) {
      const args = (0, generic_transformers_1.pushVerdictArgument)(["ZUNIONSTORE", destination], keys);
      if (options?.WEIGHTS) {
        args.push("WEIGHTS", ...options.WEIGHTS.map((weight) => weight.toString()));
      }
      if (options?.AGGREGATE) {
        args.push("AGGREGATE", options.AGGREGATE);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/cluster/commands.js
var require_commands = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/cluster/commands.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var APPEND = require_APPEND();
    var BITCOUNT = require_BITCOUNT();
    var BITFIELD_RO = require_BITFIELD_RO();
    var BITFIELD = require_BITFIELD();
    var BITOP = require_BITOP();
    var BITPOS = require_BITPOS();
    var BLMOVE = require_BLMOVE();
    var BLMPOP = require_BLMPOP();
    var BLPOP = require_BLPOP();
    var BRPOP = require_BRPOP();
    var BRPOPLPUSH = require_BRPOPLPUSH();
    var BZMPOP = require_BZMPOP();
    var BZPOPMAX = require_BZPOPMAX();
    var BZPOPMIN = require_BZPOPMIN();
    var COPY = require_COPY();
    var DECR = require_DECR();
    var DECRBY = require_DECRBY();
    var DEL = require_DEL();
    var DUMP = require_DUMP();
    var EVAL_RO = require_EVAL_RO();
    var EVAL = require_EVAL();
    var EVALSHA_RO = require_EVALSHA_RO();
    var EVALSHA = require_EVALSHA();
    var EXISTS = require_EXISTS();
    var EXPIRE = require_EXPIRE();
    var EXPIREAT = require_EXPIREAT();
    var EXPIRETIME = require_EXPIRETIME();
    var FCALL_RO = require_FCALL_RO();
    var FCALL = require_FCALL();
    var GEOADD = require_GEOADD();
    var GEODIST = require_GEODIST();
    var GEOHASH = require_GEOHASH();
    var GEOPOS = require_GEOPOS();
    var GEORADIUS_RO_WITH = require_GEORADIUS_RO_WITH();
    var GEORADIUS_RO = require_GEORADIUS_RO();
    var GEORADIUS_WITH = require_GEORADIUS_WITH();
    var GEORADIUS = require_GEORADIUS();
    var GEORADIUSBYMEMBER_RO_WITH = require_GEORADIUSBYMEMBER_RO_WITH();
    var GEORADIUSBYMEMBER_RO = require_GEORADIUSBYMEMBER_RO();
    var GEORADIUSBYMEMBER_WITH = require_GEORADIUSBYMEMBER_WITH();
    var GEORADIUSBYMEMBER = require_GEORADIUSBYMEMBER();
    var GEORADIUSBYMEMBERSTORE = require_GEORADIUSBYMEMBERSTORE();
    var GEORADIUSSTORE = require_GEORADIUSSTORE();
    var GEOSEARCH_WITH = require_GEOSEARCH_WITH();
    var GEOSEARCH = require_GEOSEARCH();
    var GEOSEARCHSTORE = require_GEOSEARCHSTORE();
    var GET = require_GET();
    var GETBIT = require_GETBIT();
    var GETDEL = require_GETDEL();
    var GETEX = require_GETEX();
    var GETRANGE = require_GETRANGE();
    var GETSET = require_GETSET();
    var HDEL = require_HDEL();
    var HEXISTS = require_HEXISTS();
    var HGET = require_HGET();
    var HGETALL = require_HGETALL();
    var HINCRBY = require_HINCRBY();
    var HINCRBYFLOAT = require_HINCRBYFLOAT();
    var HKEYS = require_HKEYS();
    var HLEN = require_HLEN();
    var HMGET = require_HMGET();
    var HRANDFIELD_COUNT_WITHVALUES = require_HRANDFIELD_COUNT_WITHVALUES();
    var HRANDFIELD_COUNT = require_HRANDFIELD_COUNT();
    var HRANDFIELD = require_HRANDFIELD();
    var HSCAN = require_HSCAN();
    var HSET = require_HSET();
    var HSETNX = require_HSETNX();
    var HSTRLEN = require_HSTRLEN();
    var HVALS = require_HVALS();
    var INCR = require_INCR();
    var INCRBY = require_INCRBY();
    var INCRBYFLOAT = require_INCRBYFLOAT();
    var LCS_IDX_WITHMATCHLEN = require_LCS_IDX_WITHMATCHLEN();
    var LCS_IDX = require_LCS_IDX();
    var LCS_LEN = require_LCS_LEN();
    var LCS = require_LCS();
    var LINDEX = require_LINDEX();
    var LINSERT = require_LINSERT();
    var LLEN = require_LLEN();
    var LMOVE = require_LMOVE();
    var LMPOP = require_LMPOP();
    var LPOP_COUNT = require_LPOP_COUNT();
    var LPOP = require_LPOP();
    var LPOS_COUNT = require_LPOS_COUNT();
    var LPOS = require_LPOS();
    var LPUSH = require_LPUSH();
    var LPUSHX = require_LPUSHX();
    var LRANGE = require_LRANGE();
    var LREM = require_LREM();
    var LSET = require_LSET();
    var LTRIM = require_LTRIM();
    var MGET = require_MGET();
    var MIGRATE = require_MIGRATE();
    var MSET = require_MSET();
    var MSETNX = require_MSETNX();
    var OBJECT_ENCODING = require_OBJECT_ENCODING();
    var OBJECT_FREQ = require_OBJECT_FREQ();
    var OBJECT_IDLETIME = require_OBJECT_IDLETIME();
    var OBJECT_REFCOUNT = require_OBJECT_REFCOUNT();
    var PERSIST = require_PERSIST();
    var PEXPIRE = require_PEXPIRE();
    var PEXPIREAT = require_PEXPIREAT();
    var PEXPIRETIME = require_PEXPIRETIME();
    var PFADD = require_PFADD();
    var PFCOUNT = require_PFCOUNT();
    var PFMERGE = require_PFMERGE();
    var PSETEX = require_PSETEX();
    var PTTL = require_PTTL();
    var PUBLISH = require_PUBLISH();
    var RENAME = require_RENAME();
    var RENAMENX = require_RENAMENX();
    var RESTORE = require_RESTORE();
    var RPOP_COUNT = require_RPOP_COUNT();
    var RPOP = require_RPOP();
    var RPOPLPUSH = require_RPOPLPUSH();
    var RPUSH = require_RPUSH();
    var RPUSHX = require_RPUSHX();
    var SADD = require_SADD();
    var SCARD = require_SCARD();
    var SDIFF = require_SDIFF();
    var SDIFFSTORE = require_SDIFFSTORE();
    var SET = require_SET();
    var SETBIT = require_SETBIT();
    var SETEX = require_SETEX();
    var SETNX = require_SETNX();
    var SETRANGE = require_SETRANGE();
    var SINTER = require_SINTER();
    var SINTERCARD = require_SINTERCARD();
    var SINTERSTORE = require_SINTERSTORE();
    var SISMEMBER = require_SISMEMBER();
    var SMEMBERS = require_SMEMBERS();
    var SMISMEMBER = require_SMISMEMBER();
    var SMOVE = require_SMOVE();
    var SORT_RO = require_SORT_RO();
    var SORT_STORE = require_SORT_STORE();
    var SORT = require_SORT();
    var SPOP = require_SPOP();
    var SPUBLISH = require_SPUBLISH();
    var SRANDMEMBER_COUNT = require_SRANDMEMBER_COUNT();
    var SRANDMEMBER = require_SRANDMEMBER();
    var SREM = require_SREM();
    var SSCAN = require_SSCAN();
    var STRLEN = require_STRLEN();
    var SUNION = require_SUNION();
    var SUNIONSTORE = require_SUNIONSTORE();
    var TOUCH = require_TOUCH();
    var TTL = require_TTL();
    var TYPE = require_TYPE();
    var UNLINK = require_UNLINK();
    var WATCH = require_WATCH();
    var XACK = require_XACK();
    var XADD = require_XADD();
    var XAUTOCLAIM_JUSTID = require_XAUTOCLAIM_JUSTID();
    var XAUTOCLAIM = require_XAUTOCLAIM();
    var XCLAIM_JUSTID = require_XCLAIM_JUSTID();
    var XCLAIM = require_XCLAIM();
    var XDEL = require_XDEL();
    var XGROUP_CREATE = require_XGROUP_CREATE();
    var XGROUP_CREATECONSUMER = require_XGROUP_CREATECONSUMER();
    var XGROUP_DELCONSUMER = require_XGROUP_DELCONSUMER();
    var XGROUP_DESTROY = require_XGROUP_DESTROY();
    var XGROUP_SETID = require_XGROUP_SETID();
    var XINFO_CONSUMERS = require_XINFO_CONSUMERS();
    var XINFO_GROUPS = require_XINFO_GROUPS();
    var XINFO_STREAM = require_XINFO_STREAM();
    var XLEN = require_XLEN();
    var XPENDING_RANGE = require_XPENDING_RANGE();
    var XPENDING = require_XPENDING();
    var XRANGE = require_XRANGE();
    var XREAD = require_XREAD();
    var XREADGROUP = require_XREADGROUP();
    var XREVRANGE = require_XREVRANGE();
    var XSETID = require_XSETID();
    var XTRIM = require_XTRIM();
    var ZADD = require_ZADD();
    var ZCARD = require_ZCARD();
    var ZCOUNT = require_ZCOUNT();
    var ZDIFF_WITHSCORES = require_ZDIFF_WITHSCORES();
    var ZDIFF = require_ZDIFF();
    var ZDIFFSTORE = require_ZDIFFSTORE();
    var ZINCRBY = require_ZINCRBY();
    var ZINTER_WITHSCORES = require_ZINTER_WITHSCORES();
    var ZINTER = require_ZINTER();
    var ZINTERCARD = require_ZINTERCARD();
    var ZINTERSTORE = require_ZINTERSTORE();
    var ZLEXCOUNT = require_ZLEXCOUNT();
    var ZMPOP = require_ZMPOP();
    var ZMSCORE = require_ZMSCORE();
    var ZPOPMAX_COUNT = require_ZPOPMAX_COUNT();
    var ZPOPMAX = require_ZPOPMAX();
    var ZPOPMIN_COUNT = require_ZPOPMIN_COUNT();
    var ZPOPMIN = require_ZPOPMIN();
    var ZRANDMEMBER_COUNT_WITHSCORES = require_ZRANDMEMBER_COUNT_WITHSCORES();
    var ZRANDMEMBER_COUNT = require_ZRANDMEMBER_COUNT();
    var ZRANDMEMBER = require_ZRANDMEMBER();
    var ZRANGE_WITHSCORES = require_ZRANGE_WITHSCORES();
    var ZRANGE = require_ZRANGE();
    var ZRANGEBYLEX = require_ZRANGEBYLEX();
    var ZRANGEBYSCORE_WITHSCORES = require_ZRANGEBYSCORE_WITHSCORES();
    var ZRANGEBYSCORE = require_ZRANGEBYSCORE();
    var ZRANGESTORE = require_ZRANGESTORE();
    var ZRANK = require_ZRANK();
    var ZREM = require_ZREM();
    var ZREMRANGEBYLEX = require_ZREMRANGEBYLEX();
    var ZREMRANGEBYRANK = require_ZREMRANGEBYRANK();
    var ZREMRANGEBYSCORE = require_ZREMRANGEBYSCORE();
    var ZREVRANK = require_ZREVRANK();
    var ZSCAN = require_ZSCAN();
    var ZSCORE = require_ZSCORE();
    var ZUNION_WITHSCORES = require_ZUNION_WITHSCORES();
    var ZUNION = require_ZUNION();
    var ZUNIONSTORE = require_ZUNIONSTORE();
    exports2.default = {
      APPEND,
      append: APPEND,
      BITCOUNT,
      bitCount: BITCOUNT,
      BITFIELD_RO,
      bitFieldRo: BITFIELD_RO,
      BITFIELD,
      bitField: BITFIELD,
      BITOP,
      bitOp: BITOP,
      BITPOS,
      bitPos: BITPOS,
      BLMOVE,
      blMove: BLMOVE,
      BLMPOP,
      blmPop: BLMPOP,
      BLPOP,
      blPop: BLPOP,
      BRPOP,
      brPop: BRPOP,
      BRPOPLPUSH,
      brPopLPush: BRPOPLPUSH,
      BZMPOP,
      bzmPop: BZMPOP,
      BZPOPMAX,
      bzPopMax: BZPOPMAX,
      BZPOPMIN,
      bzPopMin: BZPOPMIN,
      COPY,
      copy: COPY,
      DECR,
      decr: DECR,
      DECRBY,
      decrBy: DECRBY,
      DEL,
      del: DEL,
      DUMP,
      dump: DUMP,
      EVAL_RO,
      evalRo: EVAL_RO,
      EVAL,
      eval: EVAL,
      EVALSHA,
      evalSha: EVALSHA,
      EVALSHA_RO,
      evalShaRo: EVALSHA_RO,
      EXISTS,
      exists: EXISTS,
      EXPIRE,
      expire: EXPIRE,
      EXPIREAT,
      expireAt: EXPIREAT,
      EXPIRETIME,
      expireTime: EXPIRETIME,
      FCALL_RO,
      fCallRo: FCALL_RO,
      FCALL,
      fCall: FCALL,
      GEOADD,
      geoAdd: GEOADD,
      GEODIST,
      geoDist: GEODIST,
      GEOHASH,
      geoHash: GEOHASH,
      GEOPOS,
      geoPos: GEOPOS,
      GEORADIUS_RO_WITH,
      geoRadiusRoWith: GEORADIUS_RO_WITH,
      GEORADIUS_RO,
      geoRadiusRo: GEORADIUS_RO,
      GEORADIUS_WITH,
      geoRadiusWith: GEORADIUS_WITH,
      GEORADIUS,
      geoRadius: GEORADIUS,
      GEORADIUSBYMEMBER_RO_WITH,
      geoRadiusByMemberRoWith: GEORADIUSBYMEMBER_RO_WITH,
      GEORADIUSBYMEMBER_RO,
      geoRadiusByMemberRo: GEORADIUSBYMEMBER_RO,
      GEORADIUSBYMEMBER_WITH,
      geoRadiusByMemberWith: GEORADIUSBYMEMBER_WITH,
      GEORADIUSBYMEMBER,
      geoRadiusByMember: GEORADIUSBYMEMBER,
      GEORADIUSBYMEMBERSTORE,
      geoRadiusByMemberStore: GEORADIUSBYMEMBERSTORE,
      GEORADIUSSTORE,
      geoRadiusStore: GEORADIUSSTORE,
      GEOSEARCH_WITH,
      geoSearchWith: GEOSEARCH_WITH,
      GEOSEARCH,
      geoSearch: GEOSEARCH,
      GEOSEARCHSTORE,
      geoSearchStore: GEOSEARCHSTORE,
      GET,
      get: GET,
      GETBIT,
      getBit: GETBIT,
      GETDEL,
      getDel: GETDEL,
      GETEX,
      getEx: GETEX,
      GETRANGE,
      getRange: GETRANGE,
      GETSET,
      getSet: GETSET,
      HDEL,
      hDel: HDEL,
      HEXISTS,
      hExists: HEXISTS,
      HGET,
      hGet: HGET,
      HGETALL,
      hGetAll: HGETALL,
      HINCRBY,
      hIncrBy: HINCRBY,
      HINCRBYFLOAT,
      hIncrByFloat: HINCRBYFLOAT,
      HKEYS,
      hKeys: HKEYS,
      HLEN,
      hLen: HLEN,
      HMGET,
      hmGet: HMGET,
      HRANDFIELD_COUNT_WITHVALUES,
      hRandFieldCountWithValues: HRANDFIELD_COUNT_WITHVALUES,
      HRANDFIELD_COUNT,
      hRandFieldCount: HRANDFIELD_COUNT,
      HRANDFIELD,
      hRandField: HRANDFIELD,
      HSCAN,
      hScan: HSCAN,
      HSET,
      hSet: HSET,
      HSETNX,
      hSetNX: HSETNX,
      HSTRLEN,
      hStrLen: HSTRLEN,
      HVALS,
      hVals: HVALS,
      INCR,
      incr: INCR,
      INCRBY,
      incrBy: INCRBY,
      INCRBYFLOAT,
      incrByFloat: INCRBYFLOAT,
      LCS_IDX_WITHMATCHLEN,
      lcsIdxWithMatchLen: LCS_IDX_WITHMATCHLEN,
      LCS_IDX,
      lcsIdx: LCS_IDX,
      LCS_LEN,
      lcsLen: LCS_LEN,
      LCS,
      lcs: LCS,
      LINDEX,
      lIndex: LINDEX,
      LINSERT,
      lInsert: LINSERT,
      LLEN,
      lLen: LLEN,
      LMOVE,
      lMove: LMOVE,
      LMPOP,
      lmPop: LMPOP,
      LPOP_COUNT,
      lPopCount: LPOP_COUNT,
      LPOP,
      lPop: LPOP,
      LPOS_COUNT,
      lPosCount: LPOS_COUNT,
      LPOS,
      lPos: LPOS,
      LPUSH,
      lPush: LPUSH,
      LPUSHX,
      lPushX: LPUSHX,
      LRANGE,
      lRange: LRANGE,
      LREM,
      lRem: LREM,
      LSET,
      lSet: LSET,
      LTRIM,
      lTrim: LTRIM,
      MGET,
      mGet: MGET,
      MIGRATE,
      migrate: MIGRATE,
      MSET,
      mSet: MSET,
      MSETNX,
      mSetNX: MSETNX,
      OBJECT_ENCODING,
      objectEncoding: OBJECT_ENCODING,
      OBJECT_FREQ,
      objectFreq: OBJECT_FREQ,
      OBJECT_IDLETIME,
      objectIdleTime: OBJECT_IDLETIME,
      OBJECT_REFCOUNT,
      objectRefCount: OBJECT_REFCOUNT,
      PERSIST,
      persist: PERSIST,
      PEXPIRE,
      pExpire: PEXPIRE,
      PEXPIREAT,
      pExpireAt: PEXPIREAT,
      PEXPIRETIME,
      pExpireTime: PEXPIRETIME,
      PFADD,
      pfAdd: PFADD,
      PFCOUNT,
      pfCount: PFCOUNT,
      PFMERGE,
      pfMerge: PFMERGE,
      PSETEX,
      pSetEx: PSETEX,
      PTTL,
      pTTL: PTTL,
      PUBLISH,
      publish: PUBLISH,
      RENAME,
      rename: RENAME,
      RENAMENX,
      renameNX: RENAMENX,
      RESTORE,
      restore: RESTORE,
      RPOP_COUNT,
      rPopCount: RPOP_COUNT,
      RPOP,
      rPop: RPOP,
      RPOPLPUSH,
      rPopLPush: RPOPLPUSH,
      RPUSH,
      rPush: RPUSH,
      RPUSHX,
      rPushX: RPUSHX,
      SADD,
      sAdd: SADD,
      SCARD,
      sCard: SCARD,
      SDIFF,
      sDiff: SDIFF,
      SDIFFSTORE,
      sDiffStore: SDIFFSTORE,
      SINTER,
      sInter: SINTER,
      SINTERCARD,
      sInterCard: SINTERCARD,
      SINTERSTORE,
      sInterStore: SINTERSTORE,
      SET,
      set: SET,
      SETBIT,
      setBit: SETBIT,
      SETEX,
      setEx: SETEX,
      SETNX,
      setNX: SETNX,
      SETRANGE,
      setRange: SETRANGE,
      SISMEMBER,
      sIsMember: SISMEMBER,
      SMEMBERS,
      sMembers: SMEMBERS,
      SMISMEMBER,
      smIsMember: SMISMEMBER,
      SMOVE,
      sMove: SMOVE,
      SORT_RO,
      sortRo: SORT_RO,
      SORT_STORE,
      sortStore: SORT_STORE,
      SORT,
      sort: SORT,
      SPOP,
      sPop: SPOP,
      SPUBLISH,
      sPublish: SPUBLISH,
      SRANDMEMBER_COUNT,
      sRandMemberCount: SRANDMEMBER_COUNT,
      SRANDMEMBER,
      sRandMember: SRANDMEMBER,
      SREM,
      sRem: SREM,
      SSCAN,
      sScan: SSCAN,
      STRLEN,
      strLen: STRLEN,
      SUNION,
      sUnion: SUNION,
      SUNIONSTORE,
      sUnionStore: SUNIONSTORE,
      TOUCH,
      touch: TOUCH,
      TTL,
      ttl: TTL,
      TYPE,
      type: TYPE,
      UNLINK,
      unlink: UNLINK,
      WATCH,
      watch: WATCH,
      XACK,
      xAck: XACK,
      XADD,
      xAdd: XADD,
      XAUTOCLAIM_JUSTID,
      xAutoClaimJustId: XAUTOCLAIM_JUSTID,
      XAUTOCLAIM,
      xAutoClaim: XAUTOCLAIM,
      XCLAIM,
      xClaim: XCLAIM,
      XCLAIM_JUSTID,
      xClaimJustId: XCLAIM_JUSTID,
      XDEL,
      xDel: XDEL,
      XGROUP_CREATE,
      xGroupCreate: XGROUP_CREATE,
      XGROUP_CREATECONSUMER,
      xGroupCreateConsumer: XGROUP_CREATECONSUMER,
      XGROUP_DELCONSUMER,
      xGroupDelConsumer: XGROUP_DELCONSUMER,
      XGROUP_DESTROY,
      xGroupDestroy: XGROUP_DESTROY,
      XGROUP_SETID,
      xGroupSetId: XGROUP_SETID,
      XINFO_CONSUMERS,
      xInfoConsumers: XINFO_CONSUMERS,
      XINFO_GROUPS,
      xInfoGroups: XINFO_GROUPS,
      XINFO_STREAM,
      xInfoStream: XINFO_STREAM,
      XLEN,
      xLen: XLEN,
      XPENDING_RANGE,
      xPendingRange: XPENDING_RANGE,
      XPENDING,
      xPending: XPENDING,
      XRANGE,
      xRange: XRANGE,
      XREAD,
      xRead: XREAD,
      XREADGROUP,
      xReadGroup: XREADGROUP,
      XREVRANGE,
      xRevRange: XREVRANGE,
      XSETID,
      xSetId: XSETID,
      XTRIM,
      xTrim: XTRIM,
      ZADD,
      zAdd: ZADD,
      ZCARD,
      zCard: ZCARD,
      ZCOUNT,
      zCount: ZCOUNT,
      ZDIFF_WITHSCORES,
      zDiffWithScores: ZDIFF_WITHSCORES,
      ZDIFF,
      zDiff: ZDIFF,
      ZDIFFSTORE,
      zDiffStore: ZDIFFSTORE,
      ZINCRBY,
      zIncrBy: ZINCRBY,
      ZINTER_WITHSCORES,
      zInterWithScores: ZINTER_WITHSCORES,
      ZINTER,
      zInter: ZINTER,
      ZINTERCARD,
      zInterCard: ZINTERCARD,
      ZINTERSTORE,
      zInterStore: ZINTERSTORE,
      ZLEXCOUNT,
      zLexCount: ZLEXCOUNT,
      ZMPOP,
      zmPop: ZMPOP,
      ZMSCORE,
      zmScore: ZMSCORE,
      ZPOPMAX_COUNT,
      zPopMaxCount: ZPOPMAX_COUNT,
      ZPOPMAX,
      zPopMax: ZPOPMAX,
      ZPOPMIN_COUNT,
      zPopMinCount: ZPOPMIN_COUNT,
      ZPOPMIN,
      zPopMin: ZPOPMIN,
      ZRANDMEMBER_COUNT_WITHSCORES,
      zRandMemberCountWithScores: ZRANDMEMBER_COUNT_WITHSCORES,
      ZRANDMEMBER_COUNT,
      zRandMemberCount: ZRANDMEMBER_COUNT,
      ZRANDMEMBER,
      zRandMember: ZRANDMEMBER,
      ZRANGE_WITHSCORES,
      zRangeWithScores: ZRANGE_WITHSCORES,
      ZRANGE,
      zRange: ZRANGE,
      ZRANGEBYLEX,
      zRangeByLex: ZRANGEBYLEX,
      ZRANGEBYSCORE_WITHSCORES,
      zRangeByScoreWithScores: ZRANGEBYSCORE_WITHSCORES,
      ZRANGEBYSCORE,
      zRangeByScore: ZRANGEBYSCORE,
      ZRANGESTORE,
      zRangeStore: ZRANGESTORE,
      ZRANK,
      zRank: ZRANK,
      ZREM,
      zRem: ZREM,
      ZREMRANGEBYLEX,
      zRemRangeByLex: ZREMRANGEBYLEX,
      ZREMRANGEBYRANK,
      zRemRangeByRank: ZREMRANGEBYRANK,
      ZREMRANGEBYSCORE,
      zRemRangeByScore: ZREMRANGEBYSCORE,
      ZREVRANK,
      zRevRank: ZREVRANK,
      ZSCAN,
      zScan: ZSCAN,
      ZSCORE,
      zScore: ZSCORE,
      ZUNION_WITHSCORES,
      zUnionWithScores: ZUNION_WITHSCORES,
      ZUNION,
      zUnion: ZUNION,
      ZUNIONSTORE,
      zUnionStore: ZUNIONSTORE
    };
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_CAT.js
var require_ACL_CAT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_CAT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(categoryName) {
      const args = ["ACL", "CAT"];
      if (categoryName) {
        args.push(categoryName);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_DELUSER.js
var require_ACL_DELUSER = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_DELUSER.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(username) {
      return (0, generic_transformers_1.pushVerdictArguments)(["ACL", "DELUSER"], username);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_DRYRUN.js
var require_ACL_DRYRUN = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_DRYRUN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments(username, command) {
      return [
        "ACL",
        "DRYRUN",
        username,
        ...command
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_GENPASS.js
var require_ACL_GENPASS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_GENPASS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(bits) {
      const args = ["ACL", "GENPASS"];
      if (bits) {
        args.push(bits.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_GETUSER.js
var require_ACL_GETUSER = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_GETUSER.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    function transformArguments(username) {
      return ["ACL", "GETUSER", username];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        flags: reply[1],
        passwords: reply[3],
        commands: reply[5],
        keys: reply[7],
        channels: reply[9],
        selectors: reply[11]
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_LIST.js
var require_ACL_LIST = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_LIST.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["ACL", "LIST"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_LOAD.js
var require_ACL_LOAD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_LOAD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["ACL", "LOAD"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_LOG_RESET.js
var require_ACL_LOG_RESET = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_LOG_RESET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["ACL", "LOG", "RESET"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_LOG.js
var require_ACL_LOG = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_LOG.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    function transformArguments(count) {
      const args = ["ACL", "LOG"];
      if (count) {
        args.push(count.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map((log) => ({
        count: log[1],
        reason: log[3],
        context: log[5],
        object: log[7],
        username: log[9],
        ageSeconds: Number(log[11]),
        clientInfo: log[13]
      }));
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_SAVE.js
var require_ACL_SAVE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_SAVE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["ACL", "SAVE"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_SETUSER.js
var require_ACL_SETUSER = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_SETUSER.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(username, rule) {
      return (0, generic_transformers_1.pushVerdictArguments)(["ACL", "SETUSER", username], rule);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_USERS.js
var require_ACL_USERS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_USERS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["ACL", "USERS"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_WHOAMI.js
var require_ACL_WHOAMI = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ACL_WHOAMI.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["ACL", "WHOAMI"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ASKING.js
var require_ASKING = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ASKING.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["ASKING"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/AUTH.js
var require_AUTH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/AUTH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments({ username, password }) {
      if (!username) {
        return ["AUTH", password];
      }
      return ["AUTH", username, password];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BGREWRITEAOF.js
var require_BGREWRITEAOF = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BGREWRITEAOF.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["BGREWRITEAOF"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BGSAVE.js
var require_BGSAVE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/BGSAVE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(options) {
      const args = ["BGSAVE"];
      if (options?.SCHEDULE) {
        args.push("SCHEDULE");
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_CACHING.js
var require_CLIENT_CACHING = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_CACHING.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(value) {
      return [
        "CLIENT",
        "CACHING",
        value ? "YES" : "NO"
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_GETNAME.js
var require_CLIENT_GETNAME = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_GETNAME.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["CLIENT", "GETNAME"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_GETREDIR.js
var require_CLIENT_GETREDIR = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_GETREDIR.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["CLIENT", "GETREDIR"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_ID.js
var require_CLIENT_ID = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_ID.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments() {
      return ["CLIENT", "ID"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_KILL.js
var require_CLIENT_KILL = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_KILL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.ClientKillFilters = void 0;
    var ClientKillFilters;
    (function(ClientKillFilters2) {
      ClientKillFilters2["ADDRESS"] = "ADDR";
      ClientKillFilters2["LOCAL_ADDRESS"] = "LADDR";
      ClientKillFilters2["ID"] = "ID";
      ClientKillFilters2["TYPE"] = "TYPE";
      ClientKillFilters2["USER"] = "USER";
      ClientKillFilters2["SKIP_ME"] = "SKIPME";
    })(ClientKillFilters = exports2.ClientKillFilters || (exports2.ClientKillFilters = {}));
    function transformArguments(filters) {
      const args = ["CLIENT", "KILL"];
      if (Array.isArray(filters)) {
        for (const filter of filters) {
          pushFilter(args, filter);
        }
      } else {
        pushFilter(args, filters);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function pushFilter(args, filter) {
      if (filter === ClientKillFilters.SKIP_ME) {
        args.push("SKIPME");
        return;
      }
      args.push(filter.filter);
      switch (filter.filter) {
        case ClientKillFilters.ADDRESS:
          args.push(filter.address);
          break;
        case ClientKillFilters.LOCAL_ADDRESS:
          args.push(filter.localAddress);
          break;
        case ClientKillFilters.ID:
          args.push(typeof filter.id === "number" ? filter.id.toString() : filter.id);
          break;
        case ClientKillFilters.TYPE:
          args.push(filter.type);
          break;
        case ClientKillFilters.USER:
          args.push(filter.username);
          break;
        case ClientKillFilters.SKIP_ME:
          args.push(filter.skipMe ? "yes" : "no");
          break;
      }
    }
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_INFO.js
var require_CLIENT_INFO = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_INFO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments() {
      return ["CLIENT", "INFO"];
    }
    exports2.transformArguments = transformArguments;
    var CLIENT_INFO_REGEX = /([^\s=]+)=([^\s]*)/g;
    function transformReply(rawReply) {
      const map = {};
      for (const item of rawReply.matchAll(CLIENT_INFO_REGEX)) {
        map[item[1]] = item[2];
      }
      const reply = {
        id: Number(map.id),
        addr: map.addr,
        fd: Number(map.fd),
        name: map.name,
        age: Number(map.age),
        idle: Number(map.idle),
        flags: map.flags,
        db: Number(map.db),
        sub: Number(map.sub),
        psub: Number(map.psub),
        multi: Number(map.multi),
        qbuf: Number(map.qbuf),
        qbufFree: Number(map["qbuf-free"]),
        argvMem: Number(map["argv-mem"]),
        obl: Number(map.obl),
        oll: Number(map.oll),
        omem: Number(map.omem),
        totMem: Number(map["tot-mem"]),
        events: map.events,
        cmd: map.cmd,
        user: map.user,
        libName: map["lib-name"],
        libVer: map["lib-ver"]
      };
      if (map.laddr !== void 0) {
        reply.laddr = map.laddr;
      }
      if (map.redir !== void 0) {
        reply.redir = Number(map.redir);
      }
      if (map.ssub !== void 0) {
        reply.ssub = Number(map.ssub);
      }
      if (map["multi-mem"] !== void 0) {
        reply.multiMem = Number(map["multi-mem"]);
      }
      if (map.resp !== void 0) {
        reply.resp = Number(map.resp);
      }
      return reply;
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_LIST.js
var require_CLIENT_LIST = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_LIST.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var CLIENT_INFO_1 = require_CLIENT_INFO();
    exports2.IS_READ_ONLY = true;
    function transformArguments(filter) {
      let args = ["CLIENT", "LIST"];
      if (filter) {
        if (filter.TYPE !== void 0) {
          args.push("TYPE", filter.TYPE);
        } else {
          args.push("ID");
          args = (0, generic_transformers_1.pushVerdictArguments)(args, filter.ID);
        }
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(rawReply) {
      const split = rawReply.split("\n"), length = split.length - 1, reply = [];
      for (let i = 0; i < length; i++) {
        reply.push((0, CLIENT_INFO_1.transformReply)(split[i]));
      }
      return reply;
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_NO-EVICT.js
var require_CLIENT_NO_EVICT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_NO-EVICT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(value) {
      return [
        "CLIENT",
        "NO-EVICT",
        value ? "ON" : "OFF"
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_NO-TOUCH.js
var require_CLIENT_NO_TOUCH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_NO-TOUCH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(value) {
      return [
        "CLIENT",
        "NO-TOUCH",
        value ? "ON" : "OFF"
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_PAUSE.js
var require_CLIENT_PAUSE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_PAUSE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(timeout, mode) {
      const args = [
        "CLIENT",
        "PAUSE",
        timeout.toString()
      ];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_SETNAME.js
var require_CLIENT_SETNAME = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_SETNAME.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(name) {
      return ["CLIENT", "SETNAME", name];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_TRACKING.js
var require_CLIENT_TRACKING = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_TRACKING.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(mode, options) {
      const args = [
        "CLIENT",
        "TRACKING",
        mode ? "ON" : "OFF"
      ];
      if (mode) {
        if (options?.REDIRECT) {
          args.push("REDIRECT", options.REDIRECT.toString());
        }
        if (isBroadcast(options)) {
          args.push("BCAST");
          if (options?.PREFIX) {
            if (Array.isArray(options.PREFIX)) {
              for (const prefix of options.PREFIX) {
                args.push("PREFIX", prefix);
              }
            } else {
              args.push("PREFIX", options.PREFIX);
            }
          }
        } else if (isOptIn(options)) {
          args.push("OPTIN");
        } else if (isOptOut(options)) {
          args.push("OPTOUT");
        }
        if (options?.NOLOOP) {
          args.push("NOLOOP");
        }
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function isBroadcast(options) {
      return options?.BCAST === true;
    }
    function isOptIn(options) {
      return options?.OPTIN === true;
    }
    function isOptOut(options) {
      return options?.OPTOUT === true;
    }
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_TRACKINGINFO.js
var require_CLIENT_TRACKINGINFO = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_TRACKINGINFO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    function transformArguments() {
      return ["CLIENT", "TRACKINGINFO"];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        flags: new Set(reply[1]),
        redirect: reply[3],
        prefixes: reply[5]
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_UNPAUSE.js
var require_CLIENT_UNPAUSE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLIENT_UNPAUSE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["CLIENT", "UNPAUSE"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_ADDSLOTS.js
var require_CLUSTER_ADDSLOTS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_ADDSLOTS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(slots) {
      return (0, generic_transformers_1.pushVerdictNumberArguments)(["CLUSTER", "ADDSLOTS"], slots);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_ADDSLOTSRANGE.js
var require_CLUSTER_ADDSLOTSRANGE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_ADDSLOTSRANGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(ranges) {
      return (0, generic_transformers_1.pushSlotRangesArguments)(["CLUSTER", "ADDSLOTSRANGE"], ranges);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_BUMPEPOCH.js
var require_CLUSTER_BUMPEPOCH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_BUMPEPOCH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["CLUSTER", "BUMPEPOCH"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_COUNT-FAILURE-REPORTS.js
var require_CLUSTER_COUNT_FAILURE_REPORTS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_COUNT-FAILURE-REPORTS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(nodeId) {
      return ["CLUSTER", "COUNT-FAILURE-REPORTS", nodeId];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_COUNTKEYSINSLOT.js
var require_CLUSTER_COUNTKEYSINSLOT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_COUNTKEYSINSLOT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(slot) {
      return ["CLUSTER", "COUNTKEYSINSLOT", slot.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_DELSLOTS.js
var require_CLUSTER_DELSLOTS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_DELSLOTS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(slots) {
      return (0, generic_transformers_1.pushVerdictNumberArguments)(["CLUSTER", "DELSLOTS"], slots);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_DELSLOTSRANGE.js
var require_CLUSTER_DELSLOTSRANGE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_DELSLOTSRANGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(ranges) {
      return (0, generic_transformers_1.pushSlotRangesArguments)(["CLUSTER", "DELSLOTSRANGE"], ranges);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_FAILOVER.js
var require_CLUSTER_FAILOVER = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_FAILOVER.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FailoverModes = void 0;
    var FailoverModes;
    (function(FailoverModes2) {
      FailoverModes2["FORCE"] = "FORCE";
      FailoverModes2["TAKEOVER"] = "TAKEOVER";
    })(FailoverModes = exports2.FailoverModes || (exports2.FailoverModes = {}));
    function transformArguments(mode) {
      const args = ["CLUSTER", "FAILOVER"];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_FLUSHSLOTS.js
var require_CLUSTER_FLUSHSLOTS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_FLUSHSLOTS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["CLUSTER", "FLUSHSLOTS"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_FORGET.js
var require_CLUSTER_FORGET = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_FORGET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(nodeId) {
      return ["CLUSTER", "FORGET", nodeId];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_GETKEYSINSLOT.js
var require_CLUSTER_GETKEYSINSLOT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_GETKEYSINSLOT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(slot, count) {
      return ["CLUSTER", "GETKEYSINSLOT", slot.toString(), count.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_INFO.js
var require_CLUSTER_INFO = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_INFO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.extractLineValue = exports2.transformReply = exports2.transformArguments = void 0;
    function transformArguments() {
      return ["CLUSTER", "INFO"];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      const lines = reply.split("\r\n");
      return {
        state: extractLineValue(lines[0]),
        slots: {
          assigned: Number(extractLineValue(lines[1])),
          ok: Number(extractLineValue(lines[2])),
          pfail: Number(extractLineValue(lines[3])),
          fail: Number(extractLineValue(lines[4]))
        },
        knownNodes: Number(extractLineValue(lines[5])),
        size: Number(extractLineValue(lines[6])),
        currentEpoch: Number(extractLineValue(lines[7])),
        myEpoch: Number(extractLineValue(lines[8])),
        stats: {
          messagesSent: Number(extractLineValue(lines[9])),
          messagesReceived: Number(extractLineValue(lines[10]))
        }
      };
    }
    exports2.transformReply = transformReply;
    function extractLineValue(line) {
      return line.substring(line.indexOf(":") + 1);
    }
    exports2.extractLineValue = extractLineValue;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_KEYSLOT.js
var require_CLUSTER_KEYSLOT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_KEYSLOT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(key) {
      return ["CLUSTER", "KEYSLOT", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_LINKS.js
var require_CLUSTER_LINKS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_LINKS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    function transformArguments() {
      return ["CLUSTER", "LINKS"];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map((peerLink) => ({
        direction: peerLink[1],
        node: peerLink[3],
        createTime: Number(peerLink[5]),
        events: peerLink[7],
        sendBufferAllocated: Number(peerLink[9]),
        sendBufferUsed: Number(peerLink[11])
      }));
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_MEET.js
var require_CLUSTER_MEET = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_MEET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(ip, port) {
      return ["CLUSTER", "MEET", ip, port.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_MYID.js
var require_CLUSTER_MYID = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_MYID.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["CLUSTER", "MYID"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_MYSHARDID.js
var require_CLUSTER_MYSHARDID = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_MYSHARDID.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments() {
      return ["CLUSTER", "MYSHARDID"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_NODES.js
var require_CLUSTER_NODES = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_NODES.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.RedisClusterNodeLinkStates = exports2.transformArguments = void 0;
    function transformArguments() {
      return ["CLUSTER", "NODES"];
    }
    exports2.transformArguments = transformArguments;
    var RedisClusterNodeLinkStates;
    (function(RedisClusterNodeLinkStates2) {
      RedisClusterNodeLinkStates2["CONNECTED"] = "connected";
      RedisClusterNodeLinkStates2["DISCONNECTED"] = "disconnected";
    })(RedisClusterNodeLinkStates = exports2.RedisClusterNodeLinkStates || (exports2.RedisClusterNodeLinkStates = {}));
    function transformReply(reply) {
      const lines = reply.split("\n");
      lines.pop();
      const mastersMap = /* @__PURE__ */ new Map(), replicasMap = /* @__PURE__ */ new Map();
      for (const line of lines) {
        const [id, address, flags, masterId, pingSent, pongRecv, configEpoch, linkState, ...slots] = line.split(" "), node = {
          id,
          address,
          ...transformNodeAddress(address),
          flags: flags.split(","),
          pingSent: Number(pingSent),
          pongRecv: Number(pongRecv),
          configEpoch: Number(configEpoch),
          linkState
        };
        if (masterId === "-") {
          let replicas = replicasMap.get(id);
          if (!replicas) {
            replicas = [];
            replicasMap.set(id, replicas);
          }
          mastersMap.set(id, {
            ...node,
            slots: slots.map((slot) => {
              const [fromString, toString] = slot.split("-", 2), from = Number(fromString);
              return {
                from,
                to: toString ? Number(toString) : from
              };
            }),
            replicas
          });
        } else {
          const replicas = replicasMap.get(masterId);
          if (!replicas) {
            replicasMap.set(masterId, [node]);
          } else {
            replicas.push(node);
          }
        }
      }
      return [...mastersMap.values()];
    }
    exports2.transformReply = transformReply;
    function transformNodeAddress(address) {
      const indexOfColon = address.lastIndexOf(":"), indexOfAt = address.indexOf("@", indexOfColon), host = address.substring(0, indexOfColon);
      if (indexOfAt === -1) {
        return {
          host,
          port: Number(address.substring(indexOfColon + 1)),
          cport: null
        };
      }
      return {
        host: address.substring(0, indexOfColon),
        port: Number(address.substring(indexOfColon + 1, indexOfAt)),
        cport: Number(address.substring(indexOfAt + 1))
      };
    }
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_REPLICAS.js
var require_CLUSTER_REPLICAS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_REPLICAS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    function transformArguments(nodeId) {
      return ["CLUSTER", "REPLICAS", nodeId];
    }
    exports2.transformArguments = transformArguments;
    var CLUSTER_NODES_1 = require_CLUSTER_NODES();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return CLUSTER_NODES_1.transformReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_REPLICATE.js
var require_CLUSTER_REPLICATE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_REPLICATE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(nodeId) {
      return ["CLUSTER", "REPLICATE", nodeId];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_RESET.js
var require_CLUSTER_RESET = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_RESET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(mode) {
      const args = ["CLUSTER", "RESET"];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_SAVECONFIG.js
var require_CLUSTER_SAVECONFIG = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_SAVECONFIG.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["CLUSTER", "SAVECONFIG"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_SET-CONFIG-EPOCH.js
var require_CLUSTER_SET_CONFIG_EPOCH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_SET-CONFIG-EPOCH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(configEpoch) {
      return ["CLUSTER", "SET-CONFIG-EPOCH", configEpoch.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_SETSLOT.js
var require_CLUSTER_SETSLOT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_SETSLOT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.ClusterSlotStates = void 0;
    var ClusterSlotStates;
    (function(ClusterSlotStates2) {
      ClusterSlotStates2["IMPORTING"] = "IMPORTING";
      ClusterSlotStates2["MIGRATING"] = "MIGRATING";
      ClusterSlotStates2["STABLE"] = "STABLE";
      ClusterSlotStates2["NODE"] = "NODE";
    })(ClusterSlotStates = exports2.ClusterSlotStates || (exports2.ClusterSlotStates = {}));
    function transformArguments(slot, state, nodeId) {
      const args = ["CLUSTER", "SETSLOT", slot.toString(), state];
      if (nodeId) {
        args.push(nodeId);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_SLOTS.js
var require_CLUSTER_SLOTS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CLUSTER_SLOTS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    function transformArguments() {
      return ["CLUSTER", "SLOTS"];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map(([from, to, master, ...replicas]) => {
        return {
          from,
          to,
          master: transformNode(master),
          replicas: replicas.map(transformNode)
        };
      });
    }
    exports2.transformReply = transformReply;
    function transformNode([ip, port, id]) {
      return {
        ip,
        port,
        id
      };
    }
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/COMMAND_COUNT.js
var require_COMMAND_COUNT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/COMMAND_COUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments() {
      return ["COMMAND", "COUNT"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/COMMAND_GETKEYS.js
var require_COMMAND_GETKEYS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/COMMAND_GETKEYS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments(args) {
      return ["COMMAND", "GETKEYS", ...args];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/COMMAND_GETKEYSANDFLAGS.js
var require_COMMAND_GETKEYSANDFLAGS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/COMMAND_GETKEYSANDFLAGS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments(args) {
      return ["COMMAND", "GETKEYSANDFLAGS", ...args];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map(([key, flags]) => ({
        key,
        flags
      }));
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/COMMAND_INFO.js
var require_COMMAND_INFO = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/COMMAND_INFO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.IS_READ_ONLY = true;
    function transformArguments(commands) {
      return ["COMMAND", "INFO", ...commands];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map((command) => command ? (0, generic_transformers_1.transformCommandReply)(command) : null);
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/COMMAND_LIST.js
var require_COMMAND_LIST = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/COMMAND_LIST.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FilterBy = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    var FilterBy;
    (function(FilterBy2) {
      FilterBy2["MODULE"] = "MODULE";
      FilterBy2["ACLCAT"] = "ACLCAT";
      FilterBy2["PATTERN"] = "PATTERN";
    })(FilterBy = exports2.FilterBy || (exports2.FilterBy = {}));
    function transformArguments(filter) {
      const args = ["COMMAND", "LIST"];
      if (filter) {
        args.push("FILTERBY", filter.filterBy, filter.value);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/COMMAND.js
var require_COMMAND = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/COMMAND.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.IS_READ_ONLY = true;
    function transformArguments() {
      return ["COMMAND"];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map(generic_transformers_1.transformCommandReply);
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CONFIG_GET.js
var require_CONFIG_GET = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CONFIG_GET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    function transformArguments(parameter) {
      return ["CONFIG", "GET", parameter];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformTuplesReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CONFIG_RESETSTAT.js
var require_CONFIG_RESETSTAT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CONFIG_RESETSTAT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["CONFIG", "RESETSTAT"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CONFIG_REWRITE.js
var require_CONFIG_REWRITE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CONFIG_REWRITE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["CONFIG", "REWRITE"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CONFIG_SET.js
var require_CONFIG_SET = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/CONFIG_SET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(...[parameterOrConfig, value]) {
      const args = ["CONFIG", "SET"];
      if (typeof parameterOrConfig === "string") {
        args.push(parameterOrConfig, value);
      } else {
        for (const [key, value2] of Object.entries(parameterOrConfig)) {
          args.push(key, value2);
        }
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/DBSIZE.js
var require_DBSIZE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/DBSIZE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments() {
      return ["DBSIZE"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/DISCARD.js
var require_DISCARD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/DISCARD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["DISCARD"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ECHO.js
var require_ECHO = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ECHO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments(message) {
      return ["ECHO", message];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FAILOVER.js
var require_FAILOVER = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FAILOVER.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(options) {
      const args = ["FAILOVER"];
      if (options?.TO) {
        args.push("TO", options.TO.host, options.TO.port.toString());
        if (options.TO.FORCE) {
          args.push("FORCE");
        }
      }
      if (options?.ABORT) {
        args.push("ABORT");
      }
      if (options?.TIMEOUT) {
        args.push("TIMEOUT", options.TIMEOUT.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FLUSHALL.js
var require_FLUSHALL = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FLUSHALL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.RedisFlushModes = void 0;
    var RedisFlushModes;
    (function(RedisFlushModes2) {
      RedisFlushModes2["ASYNC"] = "ASYNC";
      RedisFlushModes2["SYNC"] = "SYNC";
    })(RedisFlushModes = exports2.RedisFlushModes || (exports2.RedisFlushModes = {}));
    function transformArguments(mode) {
      const args = ["FLUSHALL"];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FLUSHDB.js
var require_FLUSHDB = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FLUSHDB.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(mode) {
      const args = ["FLUSHDB"];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_DELETE.js
var require_FUNCTION_DELETE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_DELETE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(library) {
      return ["FUNCTION", "DELETE", library];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_DUMP.js
var require_FUNCTION_DUMP = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_DUMP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["FUNCTION", "DUMP"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_FLUSH.js
var require_FUNCTION_FLUSH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_FLUSH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(mode) {
      const args = ["FUNCTION", "FLUSH"];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_KILL.js
var require_FUNCTION_KILL = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_KILL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["FUNCTION", "KILL"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_LIST.js
var require_FUNCTION_LIST = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_LIST.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(pattern) {
      const args = ["FUNCTION", "LIST"];
      if (pattern) {
        args.push(pattern);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map(generic_transformers_1.transformFunctionListItemReply);
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_LIST_WITHCODE.js
var require_FUNCTION_LIST_WITHCODE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_LIST_WITHCODE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    var FUNCTION_LIST_1 = require_FUNCTION_LIST();
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(pattern) {
      const args = (0, FUNCTION_LIST_1.transformArguments)(pattern);
      args.push("WITHCODE");
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map((library) => ({
        ...(0, generic_transformers_1.transformFunctionListItemReply)(library),
        libraryCode: library[7]
      }));
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_LOAD.js
var require_FUNCTION_LOAD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_LOAD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(code, options) {
      const args = ["FUNCTION", "LOAD"];
      if (options?.REPLACE) {
        args.push("REPLACE");
      }
      args.push(code);
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_RESTORE.js
var require_FUNCTION_RESTORE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_RESTORE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(dump, mode) {
      const args = ["FUNCTION", "RESTORE", dump];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_STATS.js
var require_FUNCTION_STATS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/FUNCTION_STATS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    function transformArguments() {
      return ["FUNCTION", "STATS"];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      const engines = /* @__PURE__ */ Object.create(null);
      for (let i = 0; i < reply[3].length; i++) {
        engines[reply[3][i]] = {
          librariesCount: reply[3][++i][1],
          functionsCount: reply[3][i][3]
        };
      }
      return {
        runningScript: reply[1] === null ? null : {
          name: reply[1][1],
          command: reply[1][3],
          durationMs: reply[1][5]
        },
        engines
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HELLO.js
var require_HELLO = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/HELLO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    function transformArguments(options) {
      const args = ["HELLO"];
      if (options) {
        args.push(options.protover.toString());
        if (options.auth) {
          args.push("AUTH", options.auth.username, options.auth.password);
        }
        if (options.clientName) {
          args.push("SETNAME", options.clientName);
        }
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        server: reply[1],
        version: reply[3],
        proto: reply[5],
        id: reply[7],
        mode: reply[9],
        role: reply[11],
        modules: reply[13]
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/INFO.js
var require_INFO = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/INFO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments(section) {
      const args = ["INFO"];
      if (section) {
        args.push(section);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/KEYS.js
var require_KEYS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/KEYS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(pattern) {
      return ["KEYS", pattern];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LASTSAVE.js
var require_LASTSAVE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LASTSAVE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments() {
      return ["LASTSAVE"];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return new Date(reply);
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LATENCY_DOCTOR.js
var require_LATENCY_DOCTOR = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LATENCY_DOCTOR.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["LATENCY", "DOCTOR"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LATENCY_GRAPH.js
var require_LATENCY_GRAPH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LATENCY_GRAPH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(event) {
      return ["LATENCY", "GRAPH", event];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LATENCY_HISTORY.js
var require_LATENCY_HISTORY = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LATENCY_HISTORY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(event) {
      return ["LATENCY", "HISTORY", event];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LATENCY_LATEST.js
var require_LATENCY_LATEST = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LATENCY_LATEST.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["LATENCY", "LATEST"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LOLWUT.js
var require_LOLWUT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/LOLWUT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments(version, ...optionalArguments) {
      const args = ["LOLWUT"];
      if (version) {
        args.push("VERSION", version.toString(), ...optionalArguments.map(String));
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MEMORY_DOCTOR.js
var require_MEMORY_DOCTOR = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MEMORY_DOCTOR.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["MEMORY", "DOCTOR"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MEMORY_MALLOC-STATS.js
var require_MEMORY_MALLOC_STATS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MEMORY_MALLOC-STATS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["MEMORY", "MALLOC-STATS"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MEMORY_PURGE.js
var require_MEMORY_PURGE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MEMORY_PURGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["MEMORY", "PURGE"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MEMORY_STATS.js
var require_MEMORY_STATS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MEMORY_STATS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    function transformArguments() {
      return ["MEMORY", "STATS"];
    }
    exports2.transformArguments = transformArguments;
    var FIELDS_MAPPING = {
      "peak.allocated": "peakAllocated",
      "total.allocated": "totalAllocated",
      "startup.allocated": "startupAllocated",
      "replication.backlog": "replicationBacklog",
      "clients.slaves": "clientsReplicas",
      "clients.normal": "clientsNormal",
      "aof.buffer": "aofBuffer",
      "lua.caches": "luaCaches",
      "overhead.total": "overheadTotal",
      "keys.count": "keysCount",
      "keys.bytes-per-key": "keysBytesPerKey",
      "dataset.bytes": "datasetBytes",
      "dataset.percentage": "datasetPercentage",
      "peak.percentage": "peakPercentage",
      "allocator.allocated": "allocatorAllocated",
      "allocator.active": "allocatorActive",
      "allocator.resident": "allocatorResident",
      "allocator-fragmentation.ratio": "allocatorFragmentationRatio",
      "allocator-fragmentation.bytes": "allocatorFragmentationBytes",
      "allocator-rss.ratio": "allocatorRssRatio",
      "allocator-rss.bytes": "allocatorRssBytes",
      "rss-overhead.ratio": "rssOverheadRatio",
      "rss-overhead.bytes": "rssOverheadBytes",
      "fragmentation": "fragmentation",
      "fragmentation.bytes": "fragmentationBytes"
    };
    var DB_FIELDS_MAPPING = {
      "overhead.hashtable.main": "overheadHashtableMain",
      "overhead.hashtable.expires": "overheadHashtableExpires"
    };
    function transformReply(rawReply) {
      const reply = {
        db: {}
      };
      for (let i = 0; i < rawReply.length; i += 2) {
        const key = rawReply[i];
        if (key.startsWith("db.")) {
          const dbTuples = rawReply[i + 1], db = {};
          for (let j = 0; j < dbTuples.length; j += 2) {
            db[DB_FIELDS_MAPPING[dbTuples[j]]] = dbTuples[j + 1];
          }
          reply.db[key.substring(3)] = db;
          continue;
        }
        reply[FIELDS_MAPPING[key]] = Number(rawReply[i + 1]);
      }
      return reply;
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MEMORY_USAGE.js
var require_MEMORY_USAGE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MEMORY_USAGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, options) {
      const args = ["MEMORY", "USAGE", key];
      if (options?.SAMPLES) {
        args.push("SAMPLES", options.SAMPLES.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MODULE_LIST.js
var require_MODULE_LIST = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MODULE_LIST.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["MODULE", "LIST"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MODULE_LOAD.js
var require_MODULE_LOAD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MODULE_LOAD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(path, moduleArgs) {
      const args = ["MODULE", "LOAD", path];
      if (moduleArgs) {
        args.push(...moduleArgs);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MODULE_UNLOAD.js
var require_MODULE_UNLOAD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MODULE_UNLOAD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(name) {
      return ["MODULE", "UNLOAD", name];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MOVE.js
var require_MOVE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/MOVE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, db) {
      return ["MOVE", key, db.toString()];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PING.js
var require_PING = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PING.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(message) {
      const args = ["PING"];
      if (message) {
        args.push(message);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PUBSUB_CHANNELS.js
var require_PUBSUB_CHANNELS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PUBSUB_CHANNELS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments(pattern) {
      const args = ["PUBSUB", "CHANNELS"];
      if (pattern) {
        args.push(pattern);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PUBSUB_NUMPAT.js
var require_PUBSUB_NUMPAT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PUBSUB_NUMPAT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments() {
      return ["PUBSUB", "NUMPAT"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PUBSUB_NUMSUB.js
var require_PUBSUB_NUMSUB = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PUBSUB_NUMSUB.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.IS_READ_ONLY = true;
    function transformArguments(channels) {
      const args = ["PUBSUB", "NUMSUB"];
      if (channels)
        return (0, generic_transformers_1.pushVerdictArguments)(args, channels);
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(rawReply) {
      const transformedReply = /* @__PURE__ */ Object.create(null);
      for (let i = 0; i < rawReply.length; i += 2) {
        transformedReply[rawReply[i]] = rawReply[i + 1];
      }
      return transformedReply;
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PUBSUB_SHARDCHANNELS.js
var require_PUBSUB_SHARDCHANNELS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PUBSUB_SHARDCHANNELS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments(pattern) {
      const args = ["PUBSUB", "SHARDCHANNELS"];
      if (pattern)
        args.push(pattern);
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PUBSUB_SHARDNUMSUB.js
var require_PUBSUB_SHARDNUMSUB = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/PUBSUB_SHARDNUMSUB.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.IS_READ_ONLY = true;
    function transformArguments(channels) {
      const args = ["PUBSUB", "SHARDNUMSUB"];
      if (channels)
        return (0, generic_transformers_1.pushVerdictArguments)(args, channels);
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(rawReply) {
      const transformedReply = /* @__PURE__ */ Object.create(null);
      for (let i = 0; i < rawReply.length; i += 2) {
        transformedReply[rawReply[i]] = rawReply[i + 1];
      }
      return transformedReply;
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RANDOMKEY.js
var require_RANDOMKEY = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RANDOMKEY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments() {
      return ["RANDOMKEY"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/READONLY.js
var require_READONLY = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/READONLY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["READONLY"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/READWRITE.js
var require_READWRITE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/READWRITE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["READWRITE"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/REPLICAOF.js
var require_REPLICAOF = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/REPLICAOF.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(host, port) {
      return ["REPLICAOF", host, port.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RESTORE-ASKING.js
var require_RESTORE_ASKING = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/RESTORE-ASKING.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["RESTORE-ASKING"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ROLE.js
var require_ROLE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/ROLE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments() {
      return ["ROLE"];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      switch (reply[0]) {
        case "master":
          return {
            role: "master",
            replicationOffest: reply[1],
            replicas: reply[2].map(([ip, port, replicationOffest]) => ({
              ip,
              port: Number(port),
              replicationOffest: Number(replicationOffest)
            }))
          };
        case "slave":
          return {
            role: "slave",
            master: {
              ip: reply[1],
              port: reply[2]
            },
            state: reply[3],
            dataReceived: reply[4]
          };
        case "sentinel":
          return {
            role: "sentinel",
            masterNames: reply[1]
          };
      }
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SAVE.js
var require_SAVE = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SAVE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["SAVE"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SCAN.js
var require_SCAN = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SCAN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.IS_READ_ONLY = true;
    function transformArguments(cursor, options) {
      const args = (0, generic_transformers_1.pushScanArguments)(["SCAN"], cursor, options);
      if (options?.TYPE) {
        args.push("TYPE", options.TYPE);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply([cursor, keys]) {
      return {
        cursor: Number(cursor),
        keys
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SCRIPT_DEBUG.js
var require_SCRIPT_DEBUG = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SCRIPT_DEBUG.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(mode) {
      return ["SCRIPT", "DEBUG", mode];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SCRIPT_EXISTS.js
var require_SCRIPT_EXISTS = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SCRIPT_EXISTS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(sha1) {
      return (0, generic_transformers_1.pushVerdictArguments)(["SCRIPT", "EXISTS"], sha1);
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformBooleanArrayReply;
    } });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SCRIPT_FLUSH.js
var require_SCRIPT_FLUSH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SCRIPT_FLUSH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(mode) {
      const args = ["SCRIPT", "FLUSH"];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SCRIPT_KILL.js
var require_SCRIPT_KILL = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SCRIPT_KILL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["SCRIPT", "KILL"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SCRIPT_LOAD.js
var require_SCRIPT_LOAD = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SCRIPT_LOAD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(script) {
      return ["SCRIPT", "LOAD", script];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SHUTDOWN.js
var require_SHUTDOWN = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SHUTDOWN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(mode) {
      const args = ["SHUTDOWN"];
      if (mode) {
        args.push(mode);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SWAPDB.js
var require_SWAPDB = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/SWAPDB.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(index1, index2) {
      return ["SWAPDB", index1.toString(), index2.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/TIME.js
var require_TIME = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/TIME.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    function transformArguments() {
      return ["TIME"];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      const seconds = Number(reply[0]), microseconds = Number(reply[1]), d = new Date(seconds * 1e3 + microseconds / 1e3);
      d.microseconds = microseconds;
      return d;
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/UNWATCH.js
var require_UNWATCH = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/UNWATCH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["UNWATCH"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/WAIT.js
var require_WAIT = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commands/WAIT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(numberOfReplicas, timeout) {
      return ["WAIT", numberOfReplicas.toString(), timeout.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/commands.js
var require_commands2 = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/commands.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var commands_1 = require_commands();
    var ACL_CAT = require_ACL_CAT();
    var ACL_DELUSER = require_ACL_DELUSER();
    var ACL_DRYRUN = require_ACL_DRYRUN();
    var ACL_GENPASS = require_ACL_GENPASS();
    var ACL_GETUSER = require_ACL_GETUSER();
    var ACL_LIST = require_ACL_LIST();
    var ACL_LOAD = require_ACL_LOAD();
    var ACL_LOG_RESET = require_ACL_LOG_RESET();
    var ACL_LOG = require_ACL_LOG();
    var ACL_SAVE = require_ACL_SAVE();
    var ACL_SETUSER = require_ACL_SETUSER();
    var ACL_USERS = require_ACL_USERS();
    var ACL_WHOAMI = require_ACL_WHOAMI();
    var ASKING = require_ASKING();
    var AUTH = require_AUTH();
    var BGREWRITEAOF = require_BGREWRITEAOF();
    var BGSAVE = require_BGSAVE();
    var CLIENT_CACHING = require_CLIENT_CACHING();
    var CLIENT_GETNAME = require_CLIENT_GETNAME();
    var CLIENT_GETREDIR = require_CLIENT_GETREDIR();
    var CLIENT_ID = require_CLIENT_ID();
    var CLIENT_KILL = require_CLIENT_KILL();
    var CLIENT_LIST = require_CLIENT_LIST();
    var CLIENT_NO_EVICT = require_CLIENT_NO_EVICT();
    var CLIENT_NO_TOUCH = require_CLIENT_NO_TOUCH();
    var CLIENT_PAUSE = require_CLIENT_PAUSE();
    var CLIENT_SETNAME = require_CLIENT_SETNAME();
    var CLIENT_TRACKING = require_CLIENT_TRACKING();
    var CLIENT_TRACKINGINFO = require_CLIENT_TRACKINGINFO();
    var CLIENT_UNPAUSE = require_CLIENT_UNPAUSE();
    var CLIENT_INFO = require_CLIENT_INFO();
    var CLUSTER_ADDSLOTS = require_CLUSTER_ADDSLOTS();
    var CLUSTER_ADDSLOTSRANGE = require_CLUSTER_ADDSLOTSRANGE();
    var CLUSTER_BUMPEPOCH = require_CLUSTER_BUMPEPOCH();
    var CLUSTER_COUNT_FAILURE_REPORTS = require_CLUSTER_COUNT_FAILURE_REPORTS();
    var CLUSTER_COUNTKEYSINSLOT = require_CLUSTER_COUNTKEYSINSLOT();
    var CLUSTER_DELSLOTS = require_CLUSTER_DELSLOTS();
    var CLUSTER_DELSLOTSRANGE = require_CLUSTER_DELSLOTSRANGE();
    var CLUSTER_FAILOVER = require_CLUSTER_FAILOVER();
    var CLUSTER_FLUSHSLOTS = require_CLUSTER_FLUSHSLOTS();
    var CLUSTER_FORGET = require_CLUSTER_FORGET();
    var CLUSTER_GETKEYSINSLOT = require_CLUSTER_GETKEYSINSLOT();
    var CLUSTER_INFO = require_CLUSTER_INFO();
    var CLUSTER_KEYSLOT = require_CLUSTER_KEYSLOT();
    var CLUSTER_LINKS = require_CLUSTER_LINKS();
    var CLUSTER_MEET = require_CLUSTER_MEET();
    var CLUSTER_MYID = require_CLUSTER_MYID();
    var CLUSTER_MYSHARDID = require_CLUSTER_MYSHARDID();
    var CLUSTER_NODES = require_CLUSTER_NODES();
    var CLUSTER_REPLICAS = require_CLUSTER_REPLICAS();
    var CLUSTER_REPLICATE = require_CLUSTER_REPLICATE();
    var CLUSTER_RESET = require_CLUSTER_RESET();
    var CLUSTER_SAVECONFIG = require_CLUSTER_SAVECONFIG();
    var CLUSTER_SET_CONFIG_EPOCH = require_CLUSTER_SET_CONFIG_EPOCH();
    var CLUSTER_SETSLOT = require_CLUSTER_SETSLOT();
    var CLUSTER_SLOTS = require_CLUSTER_SLOTS();
    var COMMAND_COUNT = require_COMMAND_COUNT();
    var COMMAND_GETKEYS = require_COMMAND_GETKEYS();
    var COMMAND_GETKEYSANDFLAGS = require_COMMAND_GETKEYSANDFLAGS();
    var COMMAND_INFO = require_COMMAND_INFO();
    var COMMAND_LIST = require_COMMAND_LIST();
    var COMMAND = require_COMMAND();
    var CONFIG_GET = require_CONFIG_GET();
    var CONFIG_RESETASTAT = require_CONFIG_RESETSTAT();
    var CONFIG_REWRITE = require_CONFIG_REWRITE();
    var CONFIG_SET = require_CONFIG_SET();
    var DBSIZE = require_DBSIZE();
    var DISCARD = require_DISCARD();
    var ECHO = require_ECHO();
    var FAILOVER = require_FAILOVER();
    var FLUSHALL = require_FLUSHALL();
    var FLUSHDB = require_FLUSHDB();
    var FUNCTION_DELETE = require_FUNCTION_DELETE();
    var FUNCTION_DUMP = require_FUNCTION_DUMP();
    var FUNCTION_FLUSH = require_FUNCTION_FLUSH();
    var FUNCTION_KILL = require_FUNCTION_KILL();
    var FUNCTION_LIST_WITHCODE = require_FUNCTION_LIST_WITHCODE();
    var FUNCTION_LIST = require_FUNCTION_LIST();
    var FUNCTION_LOAD = require_FUNCTION_LOAD();
    var FUNCTION_RESTORE = require_FUNCTION_RESTORE();
    var FUNCTION_STATS = require_FUNCTION_STATS();
    var HELLO = require_HELLO();
    var INFO = require_INFO();
    var KEYS = require_KEYS();
    var LASTSAVE = require_LASTSAVE();
    var LATENCY_DOCTOR = require_LATENCY_DOCTOR();
    var LATENCY_GRAPH = require_LATENCY_GRAPH();
    var LATENCY_HISTORY = require_LATENCY_HISTORY();
    var LATENCY_LATEST = require_LATENCY_LATEST();
    var LOLWUT = require_LOLWUT();
    var MEMORY_DOCTOR = require_MEMORY_DOCTOR();
    var MEMORY_MALLOC_STATS = require_MEMORY_MALLOC_STATS();
    var MEMORY_PURGE = require_MEMORY_PURGE();
    var MEMORY_STATS = require_MEMORY_STATS();
    var MEMORY_USAGE = require_MEMORY_USAGE();
    var MODULE_LIST = require_MODULE_LIST();
    var MODULE_LOAD = require_MODULE_LOAD();
    var MODULE_UNLOAD = require_MODULE_UNLOAD();
    var MOVE = require_MOVE();
    var PING = require_PING();
    var PUBSUB_CHANNELS = require_PUBSUB_CHANNELS();
    var PUBSUB_NUMPAT = require_PUBSUB_NUMPAT();
    var PUBSUB_NUMSUB = require_PUBSUB_NUMSUB();
    var PUBSUB_SHARDCHANNELS = require_PUBSUB_SHARDCHANNELS();
    var PUBSUB_SHARDNUMSUB = require_PUBSUB_SHARDNUMSUB();
    var RANDOMKEY = require_RANDOMKEY();
    var READONLY = require_READONLY();
    var READWRITE = require_READWRITE();
    var REPLICAOF = require_REPLICAOF();
    var RESTORE_ASKING = require_RESTORE_ASKING();
    var ROLE = require_ROLE();
    var SAVE = require_SAVE();
    var SCAN = require_SCAN();
    var SCRIPT_DEBUG = require_SCRIPT_DEBUG();
    var SCRIPT_EXISTS = require_SCRIPT_EXISTS();
    var SCRIPT_FLUSH = require_SCRIPT_FLUSH();
    var SCRIPT_KILL = require_SCRIPT_KILL();
    var SCRIPT_LOAD = require_SCRIPT_LOAD();
    var SHUTDOWN = require_SHUTDOWN();
    var SWAPDB = require_SWAPDB();
    var TIME = require_TIME();
    var UNWATCH = require_UNWATCH();
    var WAIT = require_WAIT();
    exports2.default = {
      ...commands_1.default,
      ACL_CAT,
      aclCat: ACL_CAT,
      ACL_DELUSER,
      aclDelUser: ACL_DELUSER,
      ACL_DRYRUN,
      aclDryRun: ACL_DRYRUN,
      ACL_GENPASS,
      aclGenPass: ACL_GENPASS,
      ACL_GETUSER,
      aclGetUser: ACL_GETUSER,
      ACL_LIST,
      aclList: ACL_LIST,
      ACL_LOAD,
      aclLoad: ACL_LOAD,
      ACL_LOG_RESET,
      aclLogReset: ACL_LOG_RESET,
      ACL_LOG,
      aclLog: ACL_LOG,
      ACL_SAVE,
      aclSave: ACL_SAVE,
      ACL_SETUSER,
      aclSetUser: ACL_SETUSER,
      ACL_USERS,
      aclUsers: ACL_USERS,
      ACL_WHOAMI,
      aclWhoAmI: ACL_WHOAMI,
      ASKING,
      asking: ASKING,
      AUTH,
      auth: AUTH,
      BGREWRITEAOF,
      bgRewriteAof: BGREWRITEAOF,
      BGSAVE,
      bgSave: BGSAVE,
      CLIENT_CACHING,
      clientCaching: CLIENT_CACHING,
      CLIENT_GETNAME,
      clientGetName: CLIENT_GETNAME,
      CLIENT_GETREDIR,
      clientGetRedir: CLIENT_GETREDIR,
      CLIENT_ID,
      clientId: CLIENT_ID,
      CLIENT_KILL,
      clientKill: CLIENT_KILL,
      "CLIENT_NO-EVICT": CLIENT_NO_EVICT,
      clientNoEvict: CLIENT_NO_EVICT,
      "CLIENT_NO-TOUCH": CLIENT_NO_TOUCH,
      clientNoTouch: CLIENT_NO_TOUCH,
      CLIENT_LIST,
      clientList: CLIENT_LIST,
      CLIENT_PAUSE,
      clientPause: CLIENT_PAUSE,
      CLIENT_SETNAME,
      clientSetName: CLIENT_SETNAME,
      CLIENT_TRACKING,
      clientTracking: CLIENT_TRACKING,
      CLIENT_TRACKINGINFO,
      clientTrackingInfo: CLIENT_TRACKINGINFO,
      CLIENT_UNPAUSE,
      clientUnpause: CLIENT_UNPAUSE,
      CLIENT_INFO,
      clientInfo: CLIENT_INFO,
      CLUSTER_ADDSLOTS,
      clusterAddSlots: CLUSTER_ADDSLOTS,
      CLUSTER_ADDSLOTSRANGE,
      clusterAddSlotsRange: CLUSTER_ADDSLOTSRANGE,
      CLUSTER_BUMPEPOCH,
      clusterBumpEpoch: CLUSTER_BUMPEPOCH,
      CLUSTER_COUNT_FAILURE_REPORTS,
      clusterCountFailureReports: CLUSTER_COUNT_FAILURE_REPORTS,
      CLUSTER_COUNTKEYSINSLOT,
      clusterCountKeysInSlot: CLUSTER_COUNTKEYSINSLOT,
      CLUSTER_DELSLOTS,
      clusterDelSlots: CLUSTER_DELSLOTS,
      CLUSTER_DELSLOTSRANGE,
      clusterDelSlotsRange: CLUSTER_DELSLOTSRANGE,
      CLUSTER_FAILOVER,
      clusterFailover: CLUSTER_FAILOVER,
      CLUSTER_FLUSHSLOTS,
      clusterFlushSlots: CLUSTER_FLUSHSLOTS,
      CLUSTER_FORGET,
      clusterForget: CLUSTER_FORGET,
      CLUSTER_GETKEYSINSLOT,
      clusterGetKeysInSlot: CLUSTER_GETKEYSINSLOT,
      CLUSTER_INFO,
      clusterInfo: CLUSTER_INFO,
      CLUSTER_KEYSLOT,
      clusterKeySlot: CLUSTER_KEYSLOT,
      CLUSTER_LINKS,
      clusterLinks: CLUSTER_LINKS,
      CLUSTER_MEET,
      clusterMeet: CLUSTER_MEET,
      CLUSTER_MYID,
      clusterMyId: CLUSTER_MYID,
      CLUSTER_MYSHARDID,
      clusterMyShardId: CLUSTER_MYSHARDID,
      CLUSTER_NODES,
      clusterNodes: CLUSTER_NODES,
      CLUSTER_REPLICAS,
      clusterReplicas: CLUSTER_REPLICAS,
      CLUSTER_REPLICATE,
      clusterReplicate: CLUSTER_REPLICATE,
      CLUSTER_RESET,
      clusterReset: CLUSTER_RESET,
      CLUSTER_SAVECONFIG,
      clusterSaveConfig: CLUSTER_SAVECONFIG,
      CLUSTER_SET_CONFIG_EPOCH,
      clusterSetConfigEpoch: CLUSTER_SET_CONFIG_EPOCH,
      CLUSTER_SETSLOT,
      clusterSetSlot: CLUSTER_SETSLOT,
      CLUSTER_SLOTS,
      clusterSlots: CLUSTER_SLOTS,
      COMMAND_COUNT,
      commandCount: COMMAND_COUNT,
      COMMAND_GETKEYS,
      commandGetKeys: COMMAND_GETKEYS,
      COMMAND_GETKEYSANDFLAGS,
      commandGetKeysAndFlags: COMMAND_GETKEYSANDFLAGS,
      COMMAND_INFO,
      commandInfo: COMMAND_INFO,
      COMMAND_LIST,
      commandList: COMMAND_LIST,
      COMMAND,
      command: COMMAND,
      CONFIG_GET,
      configGet: CONFIG_GET,
      CONFIG_RESETASTAT,
      configResetStat: CONFIG_RESETASTAT,
      CONFIG_REWRITE,
      configRewrite: CONFIG_REWRITE,
      CONFIG_SET,
      configSet: CONFIG_SET,
      DBSIZE,
      dbSize: DBSIZE,
      DISCARD,
      discard: DISCARD,
      ECHO,
      echo: ECHO,
      FAILOVER,
      failover: FAILOVER,
      FLUSHALL,
      flushAll: FLUSHALL,
      FLUSHDB,
      flushDb: FLUSHDB,
      FUNCTION_DELETE,
      functionDelete: FUNCTION_DELETE,
      FUNCTION_DUMP,
      functionDump: FUNCTION_DUMP,
      FUNCTION_FLUSH,
      functionFlush: FUNCTION_FLUSH,
      FUNCTION_KILL,
      functionKill: FUNCTION_KILL,
      FUNCTION_LIST_WITHCODE,
      functionListWithCode: FUNCTION_LIST_WITHCODE,
      FUNCTION_LIST,
      functionList: FUNCTION_LIST,
      FUNCTION_LOAD,
      functionLoad: FUNCTION_LOAD,
      FUNCTION_RESTORE,
      functionRestore: FUNCTION_RESTORE,
      FUNCTION_STATS,
      functionStats: FUNCTION_STATS,
      HELLO,
      hello: HELLO,
      INFO,
      info: INFO,
      KEYS,
      keys: KEYS,
      LASTSAVE,
      lastSave: LASTSAVE,
      LATENCY_DOCTOR,
      latencyDoctor: LATENCY_DOCTOR,
      LATENCY_GRAPH,
      latencyGraph: LATENCY_GRAPH,
      LATENCY_HISTORY,
      latencyHistory: LATENCY_HISTORY,
      LATENCY_LATEST,
      latencyLatest: LATENCY_LATEST,
      LOLWUT,
      lolwut: LOLWUT,
      MEMORY_DOCTOR,
      memoryDoctor: MEMORY_DOCTOR,
      "MEMORY_MALLOC-STATS": MEMORY_MALLOC_STATS,
      memoryMallocStats: MEMORY_MALLOC_STATS,
      MEMORY_PURGE,
      memoryPurge: MEMORY_PURGE,
      MEMORY_STATS,
      memoryStats: MEMORY_STATS,
      MEMORY_USAGE,
      memoryUsage: MEMORY_USAGE,
      MODULE_LIST,
      moduleList: MODULE_LIST,
      MODULE_LOAD,
      moduleLoad: MODULE_LOAD,
      MODULE_UNLOAD,
      moduleUnload: MODULE_UNLOAD,
      MOVE,
      move: MOVE,
      PING,
      ping: PING,
      PUBSUB_CHANNELS,
      pubSubChannels: PUBSUB_CHANNELS,
      PUBSUB_NUMPAT,
      pubSubNumPat: PUBSUB_NUMPAT,
      PUBSUB_NUMSUB,
      pubSubNumSub: PUBSUB_NUMSUB,
      PUBSUB_SHARDCHANNELS,
      pubSubShardChannels: PUBSUB_SHARDCHANNELS,
      PUBSUB_SHARDNUMSUB,
      pubSubShardNumSub: PUBSUB_SHARDNUMSUB,
      RANDOMKEY,
      randomKey: RANDOMKEY,
      READONLY,
      readonly: READONLY,
      READWRITE,
      readwrite: READWRITE,
      REPLICAOF,
      replicaOf: REPLICAOF,
      "RESTORE-ASKING": RESTORE_ASKING,
      restoreAsking: RESTORE_ASKING,
      ROLE,
      role: ROLE,
      SAVE,
      save: SAVE,
      SCAN,
      scan: SCAN,
      SCRIPT_DEBUG,
      scriptDebug: SCRIPT_DEBUG,
      SCRIPT_EXISTS,
      scriptExists: SCRIPT_EXISTS,
      SCRIPT_FLUSH,
      scriptFlush: SCRIPT_FLUSH,
      SCRIPT_KILL,
      scriptKill: SCRIPT_KILL,
      SCRIPT_LOAD,
      scriptLoad: SCRIPT_LOAD,
      SHUTDOWN,
      shutdown: SHUTDOWN,
      SWAPDB,
      swapDb: SWAPDB,
      TIME,
      time: TIME,
      UNWATCH,
      unwatch: UNWATCH,
      WAIT,
      wait: WAIT
    };
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/errors.js
var require_errors = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/errors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MultiErrorReply = exports2.ErrorReply = exports2.ReconnectStrategyError = exports2.RootNodesUnavailableError = exports2.SocketClosedUnexpectedlyError = exports2.DisconnectsClientError = exports2.ClientOfflineError = exports2.ClientClosedError = exports2.ConnectionTimeoutError = exports2.WatchError = exports2.AbortError = void 0;
    var AbortError = class extends Error {
      constructor() {
        super("The command was aborted");
      }
    };
    exports2.AbortError = AbortError;
    var WatchError = class extends Error {
      constructor() {
        super("One (or more) of the watched keys has been changed");
      }
    };
    exports2.WatchError = WatchError;
    var ConnectionTimeoutError = class extends Error {
      constructor() {
        super("Connection timeout");
      }
    };
    exports2.ConnectionTimeoutError = ConnectionTimeoutError;
    var ClientClosedError = class extends Error {
      constructor() {
        super("The client is closed");
      }
    };
    exports2.ClientClosedError = ClientClosedError;
    var ClientOfflineError = class extends Error {
      constructor() {
        super("The client is offline");
      }
    };
    exports2.ClientOfflineError = ClientOfflineError;
    var DisconnectsClientError = class extends Error {
      constructor() {
        super("Disconnects client");
      }
    };
    exports2.DisconnectsClientError = DisconnectsClientError;
    var SocketClosedUnexpectedlyError = class extends Error {
      constructor() {
        super("Socket closed unexpectedly");
      }
    };
    exports2.SocketClosedUnexpectedlyError = SocketClosedUnexpectedlyError;
    var RootNodesUnavailableError = class extends Error {
      constructor() {
        super("All the root nodes are unavailable");
      }
    };
    exports2.RootNodesUnavailableError = RootNodesUnavailableError;
    var ReconnectStrategyError = class extends Error {
      constructor(originalError, socketError) {
        super(originalError.message);
        Object.defineProperty(this, "originalError", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "socketError", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.originalError = originalError;
        this.socketError = socketError;
      }
    };
    exports2.ReconnectStrategyError = ReconnectStrategyError;
    var ErrorReply = class extends Error {
      constructor(message) {
        super(message);
        this.stack = void 0;
      }
    };
    exports2.ErrorReply = ErrorReply;
    var MultiErrorReply = class extends ErrorReply {
      constructor(replies, errorIndexes) {
        super(`${errorIndexes.length} commands failed, see .replies and .errorIndexes for more information`);
        Object.defineProperty(this, "replies", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "errorIndexes", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.replies = replies;
        this.errorIndexes = errorIndexes;
      }
      *errors() {
        for (const index of this.errorIndexes) {
          yield this.replies[index];
        }
      }
    };
    exports2.MultiErrorReply = MultiErrorReply;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/utils.js
var require_utils = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.promiseTimeout = void 0;
    function promiseTimeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    exports2.promiseTimeout = promiseTimeout;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/socket.js
var require_socket = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/socket.js"(exports2) {
    "use strict";
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _RedisSocket_instances;
    var _a;
    var _RedisSocket_initiateOptions;
    var _RedisSocket_isTlsSocket;
    var _RedisSocket_initiator;
    var _RedisSocket_options;
    var _RedisSocket_socket;
    var _RedisSocket_isOpen;
    var _RedisSocket_isReady;
    var _RedisSocket_writableNeedDrain;
    var _RedisSocket_isSocketUnrefed;
    var _RedisSocket_reconnectStrategy;
    var _RedisSocket_shouldReconnect;
    var _RedisSocket_connect;
    var _RedisSocket_createSocket;
    var _RedisSocket_createNetSocket;
    var _RedisSocket_createTlsSocket;
    var _RedisSocket_onSocketError;
    var _RedisSocket_disconnect;
    var _RedisSocket_isCorked;
    Object.defineProperty(exports2, "__esModule", { value: true });
    var events_1 = require("events");
    var net = require("net");
    var tls = require("tls");
    var errors_1 = require_errors();
    var utils_1 = require_utils();
    var RedisSocket = class _RedisSocket extends events_1.EventEmitter {
      get isOpen() {
        return __classPrivateFieldGet(this, _RedisSocket_isOpen, "f");
      }
      get isReady() {
        return __classPrivateFieldGet(this, _RedisSocket_isReady, "f");
      }
      get writableNeedDrain() {
        return __classPrivateFieldGet(this, _RedisSocket_writableNeedDrain, "f");
      }
      constructor(initiator, options) {
        super();
        _RedisSocket_instances.add(this);
        _RedisSocket_initiator.set(this, void 0);
        _RedisSocket_options.set(this, void 0);
        _RedisSocket_socket.set(this, void 0);
        _RedisSocket_isOpen.set(this, false);
        _RedisSocket_isReady.set(this, false);
        _RedisSocket_writableNeedDrain.set(this, false);
        _RedisSocket_isSocketUnrefed.set(this, false);
        _RedisSocket_isCorked.set(this, false);
        __classPrivateFieldSet(this, _RedisSocket_initiator, initiator, "f");
        __classPrivateFieldSet(this, _RedisSocket_options, __classPrivateFieldGet(_RedisSocket, _a, "m", _RedisSocket_initiateOptions).call(_RedisSocket, options), "f");
      }
      async connect() {
        if (__classPrivateFieldGet(this, _RedisSocket_isOpen, "f")) {
          throw new Error("Socket already opened");
        }
        __classPrivateFieldSet(this, _RedisSocket_isOpen, true, "f");
        return __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_connect).call(this);
      }
      writeCommand(args) {
        if (!__classPrivateFieldGet(this, _RedisSocket_socket, "f")) {
          throw new errors_1.ClientClosedError();
        }
        for (const toWrite of args) {
          __classPrivateFieldSet(this, _RedisSocket_writableNeedDrain, !__classPrivateFieldGet(this, _RedisSocket_socket, "f").write(toWrite), "f");
        }
      }
      disconnect() {
        if (!__classPrivateFieldGet(this, _RedisSocket_isOpen, "f")) {
          throw new errors_1.ClientClosedError();
        }
        __classPrivateFieldSet(this, _RedisSocket_isOpen, false, "f");
        __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_disconnect).call(this);
      }
      async quit(fn) {
        if (!__classPrivateFieldGet(this, _RedisSocket_isOpen, "f")) {
          throw new errors_1.ClientClosedError();
        }
        __classPrivateFieldSet(this, _RedisSocket_isOpen, false, "f");
        const reply = await fn();
        __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_disconnect).call(this);
        return reply;
      }
      cork() {
        if (!__classPrivateFieldGet(this, _RedisSocket_socket, "f") || __classPrivateFieldGet(this, _RedisSocket_isCorked, "f")) {
          return;
        }
        __classPrivateFieldGet(this, _RedisSocket_socket, "f").cork();
        __classPrivateFieldSet(this, _RedisSocket_isCorked, true, "f");
        setImmediate(() => {
          __classPrivateFieldGet(this, _RedisSocket_socket, "f")?.uncork();
          __classPrivateFieldSet(this, _RedisSocket_isCorked, false, "f");
        });
      }
      ref() {
        __classPrivateFieldSet(this, _RedisSocket_isSocketUnrefed, false, "f");
        __classPrivateFieldGet(this, _RedisSocket_socket, "f")?.ref();
      }
      unref() {
        __classPrivateFieldSet(this, _RedisSocket_isSocketUnrefed, true, "f");
        __classPrivateFieldGet(this, _RedisSocket_socket, "f")?.unref();
      }
    };
    exports2.default = RedisSocket;
    _a = RedisSocket, _RedisSocket_initiator = /* @__PURE__ */ new WeakMap(), _RedisSocket_options = /* @__PURE__ */ new WeakMap(), _RedisSocket_socket = /* @__PURE__ */ new WeakMap(), _RedisSocket_isOpen = /* @__PURE__ */ new WeakMap(), _RedisSocket_isReady = /* @__PURE__ */ new WeakMap(), _RedisSocket_writableNeedDrain = /* @__PURE__ */ new WeakMap(), _RedisSocket_isSocketUnrefed = /* @__PURE__ */ new WeakMap(), _RedisSocket_isCorked = /* @__PURE__ */ new WeakMap(), _RedisSocket_instances = /* @__PURE__ */ new WeakSet(), _RedisSocket_initiateOptions = function _RedisSocket_initiateOptions2(options) {
      var _b, _c;
      options ?? (options = {});
      if (!options.path) {
        (_b = options).port ?? (_b.port = 6379);
        (_c = options).host ?? (_c.host = "localhost");
      }
      options.connectTimeout ?? (options.connectTimeout = 5e3);
      options.keepAlive ?? (options.keepAlive = 5e3);
      options.noDelay ?? (options.noDelay = true);
      return options;
    }, _RedisSocket_isTlsSocket = function _RedisSocket_isTlsSocket2(options) {
      return options.tls === true;
    }, _RedisSocket_reconnectStrategy = function _RedisSocket_reconnectStrategy2(retries, cause) {
      if (__classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy === false) {
        return false;
      } else if (typeof __classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy === "number") {
        return __classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy;
      } else if (__classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy) {
        try {
          const retryIn = __classPrivateFieldGet(this, _RedisSocket_options, "f").reconnectStrategy(retries, cause);
          if (retryIn !== false && !(retryIn instanceof Error) && typeof retryIn !== "number") {
            throw new TypeError(`Reconnect strategy should return \`false | Error | number\`, got ${retryIn} instead`);
          }
          return retryIn;
        } catch (err) {
          this.emit("error", err);
        }
      }
      return Math.min(retries * 50, 500);
    }, _RedisSocket_shouldReconnect = function _RedisSocket_shouldReconnect2(retries, cause) {
      const retryIn = __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_reconnectStrategy).call(this, retries, cause);
      if (retryIn === false) {
        __classPrivateFieldSet(this, _RedisSocket_isOpen, false, "f");
        this.emit("error", cause);
        return cause;
      } else if (retryIn instanceof Error) {
        __classPrivateFieldSet(this, _RedisSocket_isOpen, false, "f");
        this.emit("error", cause);
        return new errors_1.ReconnectStrategyError(retryIn, cause);
      }
      return retryIn;
    }, _RedisSocket_connect = async function _RedisSocket_connect2() {
      let retries = 0;
      do {
        try {
          __classPrivateFieldSet(this, _RedisSocket_socket, await __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_createSocket).call(this), "f");
          __classPrivateFieldSet(this, _RedisSocket_writableNeedDrain, false, "f");
          this.emit("connect");
          try {
            await __classPrivateFieldGet(this, _RedisSocket_initiator, "f").call(this);
          } catch (err) {
            __classPrivateFieldGet(this, _RedisSocket_socket, "f").destroy();
            __classPrivateFieldSet(this, _RedisSocket_socket, void 0, "f");
            throw err;
          }
          __classPrivateFieldSet(this, _RedisSocket_isReady, true, "f");
          this.emit("ready");
        } catch (err) {
          const retryIn = __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_shouldReconnect).call(this, retries++, err);
          if (typeof retryIn !== "number") {
            throw retryIn;
          }
          this.emit("error", err);
          await (0, utils_1.promiseTimeout)(retryIn);
          this.emit("reconnecting");
        }
      } while (__classPrivateFieldGet(this, _RedisSocket_isOpen, "f") && !__classPrivateFieldGet(this, _RedisSocket_isReady, "f"));
    }, _RedisSocket_createSocket = function _RedisSocket_createSocket2() {
      return new Promise((resolve, reject) => {
        const { connectEvent, socket } = __classPrivateFieldGet(RedisSocket, _a, "m", _RedisSocket_isTlsSocket).call(RedisSocket, __classPrivateFieldGet(this, _RedisSocket_options, "f")) ? __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_createTlsSocket).call(this) : __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_createNetSocket).call(this);
        if (__classPrivateFieldGet(this, _RedisSocket_options, "f").connectTimeout) {
          socket.setTimeout(__classPrivateFieldGet(this, _RedisSocket_options, "f").connectTimeout, () => socket.destroy(new errors_1.ConnectionTimeoutError()));
        }
        if (__classPrivateFieldGet(this, _RedisSocket_isSocketUnrefed, "f")) {
          socket.unref();
        }
        socket.setNoDelay(__classPrivateFieldGet(this, _RedisSocket_options, "f").noDelay).once("error", reject).once(connectEvent, () => {
          socket.setTimeout(0).setKeepAlive(__classPrivateFieldGet(this, _RedisSocket_options, "f").keepAlive !== false, __classPrivateFieldGet(this, _RedisSocket_options, "f").keepAlive || 0).off("error", reject).once("error", (err) => __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_onSocketError).call(this, err)).once("close", (hadError) => {
            if (!hadError && __classPrivateFieldGet(this, _RedisSocket_isOpen, "f") && __classPrivateFieldGet(this, _RedisSocket_socket, "f") === socket) {
              __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_onSocketError).call(this, new errors_1.SocketClosedUnexpectedlyError());
            }
          }).on("drain", () => {
            __classPrivateFieldSet(this, _RedisSocket_writableNeedDrain, false, "f");
            this.emit("drain");
          }).on("data", (data) => this.emit("data", data));
          resolve(socket);
        });
      });
    }, _RedisSocket_createNetSocket = function _RedisSocket_createNetSocket2() {
      return {
        connectEvent: "connect",
        socket: net.connect(__classPrivateFieldGet(this, _RedisSocket_options, "f"))
        // TODO
      };
    }, _RedisSocket_createTlsSocket = function _RedisSocket_createTlsSocket2() {
      return {
        connectEvent: "secureConnect",
        socket: tls.connect(__classPrivateFieldGet(this, _RedisSocket_options, "f"))
        // TODO
      };
    }, _RedisSocket_onSocketError = function _RedisSocket_onSocketError2(err) {
      const wasReady = __classPrivateFieldGet(this, _RedisSocket_isReady, "f");
      __classPrivateFieldSet(this, _RedisSocket_isReady, false, "f");
      this.emit("error", err);
      if (!wasReady || !__classPrivateFieldGet(this, _RedisSocket_isOpen, "f") || typeof __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_shouldReconnect).call(this, 0, err) !== "number")
        return;
      this.emit("reconnecting");
      __classPrivateFieldGet(this, _RedisSocket_instances, "m", _RedisSocket_connect).call(this).catch(() => {
      });
    }, _RedisSocket_disconnect = function _RedisSocket_disconnect2() {
      __classPrivateFieldSet(this, _RedisSocket_isReady, false, "f");
      if (__classPrivateFieldGet(this, _RedisSocket_socket, "f")) {
        __classPrivateFieldGet(this, _RedisSocket_socket, "f").destroy();
        __classPrivateFieldSet(this, _RedisSocket_socket, void 0, "f");
      }
      this.emit("end");
    };
  }
});

// node_modules/.store/yallist-npm-4.0.0-b493d9e907/node_modules/yallist/iterator.js
var require_iterator = __commonJS({
  "node_modules/.store/yallist-npm-4.0.0-b493d9e907/node_modules/yallist/iterator.js"(exports2, module2) {
    "use strict";
    module2.exports = function(Yallist) {
      Yallist.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value;
        }
      };
    };
  }
});

// node_modules/.store/yallist-npm-4.0.0-b493d9e907/node_modules/yallist/yallist.js
var require_yallist = __commonJS({
  "node_modules/.store/yallist-npm-4.0.0-b493d9e907/node_modules/yallist/yallist.js"(exports2, module2) {
    "use strict";
    module2.exports = Yallist;
    Yallist.Node = Node;
    Yallist.create = Yallist;
    function Yallist(list) {
      var self = this;
      if (!(self instanceof Yallist)) {
        self = new Yallist();
      }
      self.tail = null;
      self.head = null;
      self.length = 0;
      if (list && typeof list.forEach === "function") {
        list.forEach(function(item) {
          self.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i = 0, l = arguments.length; i < l; i++) {
          self.push(arguments[i]);
        }
      }
      return self;
    }
    Yallist.prototype.removeNode = function(node) {
      if (node.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var next = node.next;
      var prev = node.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;
      return next;
    };
    Yallist.prototype.unshiftNode = function(node) {
      if (node === this.head) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };
    Yallist.prototype.pushNode = function(node) {
      if (node === this.tail) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };
    Yallist.prototype.push = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        push(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.unshift = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        unshift(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.pop = function() {
      if (!this.tail) {
        return void 0;
      }
      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.shift = function() {
      if (!this.head) {
        return void 0;
      }
      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i = 0; walker !== null; i++) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n) {
      for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
        walker = walker.next;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n) {
      for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
        walker = walker.prev;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = 0; walker !== null; i++) {
        acc = fn(acc, walker.value, i);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = this.length - 1; walker !== null; i--) {
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
      }
      return acc;
    };
    Yallist.prototype.toArray = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.head; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.next;
      }
      return arr;
    };
    Yallist.prototype.toArrayReverse = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.tail; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.prev;
      }
      return arr;
    };
    Yallist.prototype.slice = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
        walker = walker.next;
      }
      for (; walker !== null && i < to; i++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.sliceReverse = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
        walker = walker.prev;
      }
      for (; walker !== null && i > from; i--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
      if (start > this.length) {
        start = this.length - 1;
      }
      if (start < 0) {
        start = this.length + start;
      }
      for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
        walker = walker.next;
      }
      var ret = [];
      for (var i = 0; walker && i < deleteCount; i++) {
        ret.push(walker.value);
        walker = this.removeNode(walker);
      }
      if (walker === null) {
        walker = this.tail;
      }
      if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
      }
      for (var i = 0; i < nodes.length; i++) {
        walker = insert(this, walker, nodes[i]);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function insert(self, node, value) {
      var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);
      if (inserted.next === null) {
        self.tail = inserted;
      }
      if (inserted.prev === null) {
        self.head = inserted;
      }
      self.length++;
      return inserted;
    }
    function push(self, item) {
      self.tail = new Node(item, self.tail, null, self);
      if (!self.head) {
        self.head = self.tail;
      }
      self.length++;
    }
    function unshift(self, item) {
      self.head = new Node(item, null, self.head, self);
      if (!self.tail) {
        self.tail = self.head;
      }
      self.length++;
    }
    function Node(value, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value, prev, next, list);
      }
      this.list = list;
      this.value = value;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
    try {
      require_iterator()(Yallist);
    } catch (er) {
    }
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/RESP2/composers/buffer.js
var require_buffer = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/RESP2/composers/buffer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var BufferComposer = class {
      constructor() {
        Object.defineProperty(this, "chunks", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: []
        });
      }
      write(buffer) {
        this.chunks.push(buffer);
      }
      end(buffer) {
        this.write(buffer);
        return Buffer.concat(this.chunks.splice(0));
      }
      reset() {
        this.chunks = [];
      }
    };
    exports2.default = BufferComposer;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/RESP2/composers/string.js
var require_string = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/RESP2/composers/string.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var string_decoder_1 = require("string_decoder");
    var StringComposer = class {
      constructor() {
        Object.defineProperty(this, "decoder", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: new string_decoder_1.StringDecoder()
        });
        Object.defineProperty(this, "string", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: ""
        });
      }
      write(buffer) {
        this.string += this.decoder.write(buffer);
      }
      end(buffer) {
        const string = this.string + this.decoder.end(buffer);
        this.string = "";
        return string;
      }
      reset() {
        this.string = "";
      }
    };
    exports2.default = StringComposer;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/RESP2/decoder.js
var require_decoder = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/RESP2/decoder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var errors_1 = require_errors();
    var buffer_1 = require_buffer();
    var string_1 = require_string();
    var Types;
    (function(Types2) {
      Types2[Types2["SIMPLE_STRING"] = 43] = "SIMPLE_STRING";
      Types2[Types2["ERROR"] = 45] = "ERROR";
      Types2[Types2["INTEGER"] = 58] = "INTEGER";
      Types2[Types2["BULK_STRING"] = 36] = "BULK_STRING";
      Types2[Types2["ARRAY"] = 42] = "ARRAY";
    })(Types || (Types = {}));
    var ASCII;
    (function(ASCII2) {
      ASCII2[ASCII2["CR"] = 13] = "CR";
      ASCII2[ASCII2["ZERO"] = 48] = "ZERO";
      ASCII2[ASCII2["MINUS"] = 45] = "MINUS";
    })(ASCII || (ASCII = {}));
    var RESP2Decoder = class {
      constructor(options) {
        Object.defineProperty(this, "options", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: options
        });
        Object.defineProperty(this, "cursor", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: 0
        });
        Object.defineProperty(this, "type", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "bufferComposer", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: new buffer_1.default()
        });
        Object.defineProperty(this, "stringComposer", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: new string_1.default()
        });
        Object.defineProperty(this, "currentStringComposer", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.stringComposer
        });
        Object.defineProperty(this, "integer", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: 0
        });
        Object.defineProperty(this, "isNegativeInteger", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "bulkStringRemainingLength", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "arraysInProcess", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: []
        });
        Object.defineProperty(this, "initializeArray", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: false
        });
        Object.defineProperty(this, "arrayItemType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
      }
      reset() {
        this.cursor = 0;
        this.type = void 0;
        this.bufferComposer.reset();
        this.stringComposer.reset();
        this.currentStringComposer = this.stringComposer;
      }
      write(chunk) {
        while (this.cursor < chunk.length) {
          if (!this.type) {
            this.currentStringComposer = this.options.returnStringsAsBuffers() ? this.bufferComposer : this.stringComposer;
            this.type = chunk[this.cursor];
            if (++this.cursor >= chunk.length)
              break;
          }
          const reply = this.parseType(chunk, this.type);
          if (reply === void 0)
            break;
          this.type = void 0;
          this.options.onReply(reply);
        }
        this.cursor -= chunk.length;
      }
      parseType(chunk, type, arraysToKeep) {
        switch (type) {
          case Types.SIMPLE_STRING:
            return this.parseSimpleString(chunk);
          case Types.ERROR:
            return this.parseError(chunk);
          case Types.INTEGER:
            return this.parseInteger(chunk);
          case Types.BULK_STRING:
            return this.parseBulkString(chunk);
          case Types.ARRAY:
            return this.parseArray(chunk, arraysToKeep);
        }
      }
      compose(chunk, composer) {
        for (let i = this.cursor; i < chunk.length; i++) {
          if (chunk[i] === ASCII.CR) {
            const reply = composer.end(chunk.subarray(this.cursor, i));
            this.cursor = i + 2;
            return reply;
          }
        }
        const toWrite = chunk.subarray(this.cursor);
        composer.write(toWrite);
        this.cursor = chunk.length;
      }
      parseSimpleString(chunk) {
        return this.compose(chunk, this.currentStringComposer);
      }
      parseError(chunk) {
        const message = this.compose(chunk, this.stringComposer);
        if (message !== void 0) {
          return new errors_1.ErrorReply(message);
        }
      }
      parseInteger(chunk) {
        if (this.isNegativeInteger === void 0) {
          this.isNegativeInteger = chunk[this.cursor] === ASCII.MINUS;
          if (this.isNegativeInteger && ++this.cursor === chunk.length)
            return;
        }
        do {
          const byte = chunk[this.cursor];
          if (byte === ASCII.CR) {
            const integer = this.isNegativeInteger ? -this.integer : this.integer;
            this.integer = 0;
            this.isNegativeInteger = void 0;
            this.cursor += 2;
            return integer;
          }
          this.integer = this.integer * 10 + byte - ASCII.ZERO;
        } while (++this.cursor < chunk.length);
      }
      parseBulkString(chunk) {
        if (this.bulkStringRemainingLength === void 0) {
          const length = this.parseInteger(chunk);
          if (length === void 0)
            return;
          if (length === -1)
            return null;
          this.bulkStringRemainingLength = length;
          if (this.cursor >= chunk.length)
            return;
        }
        const end = this.cursor + this.bulkStringRemainingLength;
        if (chunk.length >= end) {
          const reply = this.currentStringComposer.end(chunk.subarray(this.cursor, end));
          this.bulkStringRemainingLength = void 0;
          this.cursor = end + 2;
          return reply;
        }
        const toWrite = chunk.subarray(this.cursor);
        this.currentStringComposer.write(toWrite);
        this.bulkStringRemainingLength -= toWrite.length;
        this.cursor = chunk.length;
      }
      parseArray(chunk, arraysToKeep = 0) {
        if (this.initializeArray || this.arraysInProcess.length === arraysToKeep) {
          const length = this.parseInteger(chunk);
          if (length === void 0) {
            this.initializeArray = true;
            return void 0;
          }
          this.initializeArray = false;
          this.arrayItemType = void 0;
          if (length === -1) {
            return this.returnArrayReply(null, arraysToKeep, chunk);
          } else if (length === 0) {
            return this.returnArrayReply([], arraysToKeep, chunk);
          }
          this.arraysInProcess.push({
            array: new Array(length),
            pushCounter: 0
          });
        }
        while (this.cursor < chunk.length) {
          if (!this.arrayItemType) {
            this.arrayItemType = chunk[this.cursor];
            if (++this.cursor >= chunk.length)
              break;
          }
          const item = this.parseType(chunk, this.arrayItemType, arraysToKeep + 1);
          if (item === void 0)
            break;
          this.arrayItemType = void 0;
          const reply = this.pushArrayItem(item, arraysToKeep);
          if (reply !== void 0)
            return reply;
        }
      }
      returnArrayReply(reply, arraysToKeep, chunk) {
        if (this.arraysInProcess.length <= arraysToKeep)
          return reply;
        return this.pushArrayItem(reply, arraysToKeep, chunk);
      }
      pushArrayItem(item, arraysToKeep, chunk) {
        const to = this.arraysInProcess[this.arraysInProcess.length - 1];
        to.array[to.pushCounter] = item;
        if (++to.pushCounter === to.array.length) {
          return this.returnArrayReply(this.arraysInProcess.pop().array, arraysToKeep, chunk);
        } else if (chunk && chunk.length > this.cursor) {
          return this.parseArray(chunk, arraysToKeep);
        }
      }
    };
    exports2.default = RESP2Decoder;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/RESP2/encoder.js
var require_encoder = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/RESP2/encoder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var CRLF = "\r\n";
    function encodeCommand(args) {
      const toWrite = [];
      let strings = "*" + args.length + CRLF;
      for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (typeof arg === "string") {
          strings += "$" + Buffer.byteLength(arg) + CRLF + arg + CRLF;
        } else if (arg instanceof Buffer) {
          toWrite.push(strings + "$" + arg.length.toString() + CRLF, arg);
          strings = CRLF;
        } else {
          throw new TypeError("Invalid argument type");
        }
      }
      toWrite.push(strings);
      return toWrite;
    }
    exports2.default = encodeCommand;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/pub-sub.js
var require_pub_sub = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/pub-sub.js"(exports2) {
    "use strict";
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _PubSub_instances;
    var _a;
    var _PubSub_channelsArray;
    var _PubSub_listenersSet;
    var _PubSub_subscribing;
    var _PubSub_isActive;
    var _PubSub_listeners;
    var _PubSub_extendChannelListeners;
    var _PubSub_unsubscribeCommand;
    var _PubSub_updateIsActive;
    var _PubSub_emitPubSubMessage;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PubSub = exports2.PubSubType = void 0;
    var PubSubType;
    (function(PubSubType2) {
      PubSubType2["CHANNELS"] = "CHANNELS";
      PubSubType2["PATTERNS"] = "PATTERNS";
      PubSubType2["SHARDED"] = "SHARDED";
    })(PubSubType = exports2.PubSubType || (exports2.PubSubType = {}));
    var COMMANDS = {
      [PubSubType.CHANNELS]: {
        subscribe: Buffer.from("subscribe"),
        unsubscribe: Buffer.from("unsubscribe"),
        message: Buffer.from("message")
      },
      [PubSubType.PATTERNS]: {
        subscribe: Buffer.from("psubscribe"),
        unsubscribe: Buffer.from("punsubscribe"),
        message: Buffer.from("pmessage")
      },
      [PubSubType.SHARDED]: {
        subscribe: Buffer.from("ssubscribe"),
        unsubscribe: Buffer.from("sunsubscribe"),
        message: Buffer.from("smessage")
      }
    };
    var PubSub = class _PubSub {
      constructor() {
        _PubSub_instances.add(this);
        _PubSub_subscribing.set(this, 0);
        _PubSub_isActive.set(this, false);
        _PubSub_listeners.set(this, {
          [PubSubType.CHANNELS]: /* @__PURE__ */ new Map(),
          [PubSubType.PATTERNS]: /* @__PURE__ */ new Map(),
          [PubSubType.SHARDED]: /* @__PURE__ */ new Map()
        });
      }
      static isStatusReply(reply) {
        return COMMANDS[PubSubType.CHANNELS].subscribe.equals(reply[0]) || COMMANDS[PubSubType.CHANNELS].unsubscribe.equals(reply[0]) || COMMANDS[PubSubType.PATTERNS].subscribe.equals(reply[0]) || COMMANDS[PubSubType.PATTERNS].unsubscribe.equals(reply[0]) || COMMANDS[PubSubType.SHARDED].subscribe.equals(reply[0]);
      }
      static isShardedUnsubscribe(reply) {
        return COMMANDS[PubSubType.SHARDED].unsubscribe.equals(reply[0]);
      }
      get isActive() {
        return __classPrivateFieldGet(this, _PubSub_isActive, "f");
      }
      subscribe(type, channels, listener, returnBuffers) {
        var _b;
        const args = [COMMANDS[type].subscribe], channelsArray = __classPrivateFieldGet(_PubSub, _a, "m", _PubSub_channelsArray).call(_PubSub, channels);
        for (const channel of channelsArray) {
          let channelListeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].get(channel);
          if (!channelListeners || channelListeners.unsubscribing) {
            args.push(channel);
          }
        }
        if (args.length === 1) {
          for (const channel of channelsArray) {
            __classPrivateFieldGet(_PubSub, _a, "m", _PubSub_listenersSet).call(_PubSub, __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].get(channel), returnBuffers).add(listener);
          }
          return;
        }
        __classPrivateFieldSet(this, _PubSub_isActive, true, "f");
        __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b++, _b), "f");
        return {
          args,
          channelsCounter: args.length - 1,
          resolve: () => {
            var _b2;
            __classPrivateFieldSet(this, _PubSub_subscribing, (_b2 = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b2--, _b2), "f");
            for (const channel of channelsArray) {
              let listeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].get(channel);
              if (!listeners) {
                listeners = {
                  unsubscribing: false,
                  buffers: /* @__PURE__ */ new Set(),
                  strings: /* @__PURE__ */ new Set()
                };
                __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].set(channel, listeners);
              }
              __classPrivateFieldGet(_PubSub, _a, "m", _PubSub_listenersSet).call(_PubSub, listeners, returnBuffers).add(listener);
            }
          },
          reject: () => {
            var _b2;
            __classPrivateFieldSet(this, _PubSub_subscribing, (_b2 = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b2--, _b2), "f");
            __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_updateIsActive).call(this);
          }
        };
      }
      extendChannelListeners(type, channel, listeners) {
        var _b;
        if (!__classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_extendChannelListeners).call(this, type, channel, listeners))
          return;
        __classPrivateFieldSet(this, _PubSub_isActive, true, "f");
        __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b++, _b), "f");
        return {
          args: [
            COMMANDS[type].subscribe,
            channel
          ],
          channelsCounter: 1,
          resolve: () => {
            var _b2, _c;
            return __classPrivateFieldSet(this, _PubSub_subscribing, (_c = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b2 = _c--, _c), "f"), _b2;
          },
          reject: () => {
            var _b2;
            __classPrivateFieldSet(this, _PubSub_subscribing, (_b2 = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b2--, _b2), "f");
            __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_updateIsActive).call(this);
          }
        };
      }
      extendTypeListeners(type, listeners) {
        var _b;
        const args = [COMMANDS[type].subscribe];
        for (const [channel, channelListeners] of listeners) {
          if (__classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_extendChannelListeners).call(this, type, channel, channelListeners)) {
            args.push(channel);
          }
        }
        if (args.length === 1)
          return;
        __classPrivateFieldSet(this, _PubSub_isActive, true, "f");
        __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b++, _b), "f");
        return {
          args,
          channelsCounter: args.length - 1,
          resolve: () => {
            var _b2, _c;
            return __classPrivateFieldSet(this, _PubSub_subscribing, (_c = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b2 = _c--, _c), "f"), _b2;
          },
          reject: () => {
            var _b2;
            __classPrivateFieldSet(this, _PubSub_subscribing, (_b2 = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b2--, _b2), "f");
            __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_updateIsActive).call(this);
          }
        };
      }
      unsubscribe(type, channels, listener, returnBuffers) {
        const listeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[type];
        if (!channels) {
          return __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_unsubscribeCommand).call(
            this,
            [COMMANDS[type].unsubscribe],
            // cannot use `this.#subscribed` because there might be some `SUBSCRIBE` commands in the queue
            // cannot use `this.#subscribed + this.#subscribing` because some `SUBSCRIBE` commands might fail
            NaN,
            () => listeners.clear()
          );
        }
        const channelsArray = __classPrivateFieldGet(_PubSub, _a, "m", _PubSub_channelsArray).call(_PubSub, channels);
        if (!listener) {
          return __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_unsubscribeCommand).call(this, [COMMANDS[type].unsubscribe, ...channelsArray], channelsArray.length, () => {
            for (const channel of channelsArray) {
              listeners.delete(channel);
            }
          });
        }
        const args = [COMMANDS[type].unsubscribe];
        for (const channel of channelsArray) {
          const sets = listeners.get(channel);
          if (sets) {
            let current, other;
            if (returnBuffers) {
              current = sets.buffers;
              other = sets.strings;
            } else {
              current = sets.strings;
              other = sets.buffers;
            }
            const currentSize = current.has(listener) ? current.size - 1 : current.size;
            if (currentSize !== 0 || other.size !== 0)
              continue;
            sets.unsubscribing = true;
          }
          args.push(channel);
        }
        if (args.length === 1) {
          for (const channel of channelsArray) {
            __classPrivateFieldGet(_PubSub, _a, "m", _PubSub_listenersSet).call(_PubSub, listeners.get(channel), returnBuffers).delete(listener);
          }
          return;
        }
        return __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_unsubscribeCommand).call(this, args, args.length - 1, () => {
          for (const channel of channelsArray) {
            const sets = listeners.get(channel);
            if (!sets)
              continue;
            (returnBuffers ? sets.buffers : sets.strings).delete(listener);
            if (sets.buffers.size === 0 && sets.strings.size === 0) {
              listeners.delete(channel);
            }
          }
        });
      }
      reset() {
        __classPrivateFieldSet(this, _PubSub_isActive, false, "f");
        __classPrivateFieldSet(this, _PubSub_subscribing, 0, "f");
      }
      resubscribe() {
        var _b;
        const commands = [];
        for (const [type, listeners] of Object.entries(__classPrivateFieldGet(this, _PubSub_listeners, "f"))) {
          if (!listeners.size)
            continue;
          __classPrivateFieldSet(this, _PubSub_isActive, true, "f");
          __classPrivateFieldSet(this, _PubSub_subscribing, (_b = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b++, _b), "f");
          const callback = () => {
            var _b2, _c;
            return __classPrivateFieldSet(this, _PubSub_subscribing, (_c = __classPrivateFieldGet(this, _PubSub_subscribing, "f"), _b2 = _c--, _c), "f"), _b2;
          };
          commands.push({
            args: [
              COMMANDS[type].subscribe,
              ...listeners.keys()
            ],
            channelsCounter: listeners.size,
            resolve: callback,
            reject: callback
          });
        }
        return commands;
      }
      handleMessageReply(reply) {
        if (COMMANDS[PubSubType.CHANNELS].message.equals(reply[0])) {
          __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_emitPubSubMessage).call(this, PubSubType.CHANNELS, reply[2], reply[1]);
          return true;
        } else if (COMMANDS[PubSubType.PATTERNS].message.equals(reply[0])) {
          __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_emitPubSubMessage).call(this, PubSubType.PATTERNS, reply[3], reply[2], reply[1]);
          return true;
        } else if (COMMANDS[PubSubType.SHARDED].message.equals(reply[0])) {
          __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_emitPubSubMessage).call(this, PubSubType.SHARDED, reply[2], reply[1]);
          return true;
        }
        return false;
      }
      removeShardedListeners(channel) {
        const listeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[PubSubType.SHARDED].get(channel);
        __classPrivateFieldGet(this, _PubSub_listeners, "f")[PubSubType.SHARDED].delete(channel);
        __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_updateIsActive).call(this);
        return listeners;
      }
      getTypeListeners(type) {
        return __classPrivateFieldGet(this, _PubSub_listeners, "f")[type];
      }
    };
    exports2.PubSub = PubSub;
    _a = PubSub, _PubSub_subscribing = /* @__PURE__ */ new WeakMap(), _PubSub_isActive = /* @__PURE__ */ new WeakMap(), _PubSub_listeners = /* @__PURE__ */ new WeakMap(), _PubSub_instances = /* @__PURE__ */ new WeakSet(), _PubSub_channelsArray = function _PubSub_channelsArray2(channels) {
      return Array.isArray(channels) ? channels : [channels];
    }, _PubSub_listenersSet = function _PubSub_listenersSet2(listeners, returnBuffers) {
      return returnBuffers ? listeners.buffers : listeners.strings;
    }, _PubSub_extendChannelListeners = function _PubSub_extendChannelListeners2(type, channel, listeners) {
      const existingListeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].get(channel);
      if (!existingListeners) {
        __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].set(channel, listeners);
        return true;
      }
      for (const listener of listeners.buffers) {
        existingListeners.buffers.add(listener);
      }
      for (const listener of listeners.strings) {
        existingListeners.strings.add(listener);
      }
      return false;
    }, _PubSub_unsubscribeCommand = function _PubSub_unsubscribeCommand2(args, channelsCounter, removeListeners) {
      return {
        args,
        channelsCounter,
        resolve: () => {
          removeListeners();
          __classPrivateFieldGet(this, _PubSub_instances, "m", _PubSub_updateIsActive).call(this);
        },
        reject: void 0
        // use the same structure as `subscribe`
      };
    }, _PubSub_updateIsActive = function _PubSub_updateIsActive2() {
      __classPrivateFieldSet(this, _PubSub_isActive, __classPrivateFieldGet(this, _PubSub_listeners, "f")[PubSubType.CHANNELS].size !== 0 || __classPrivateFieldGet(this, _PubSub_listeners, "f")[PubSubType.PATTERNS].size !== 0 || __classPrivateFieldGet(this, _PubSub_listeners, "f")[PubSubType.SHARDED].size !== 0 || __classPrivateFieldGet(this, _PubSub_subscribing, "f") !== 0, "f");
    }, _PubSub_emitPubSubMessage = function _PubSub_emitPubSubMessage2(type, message, channel, pattern) {
      const keyString = (pattern ?? channel).toString(), listeners = __classPrivateFieldGet(this, _PubSub_listeners, "f")[type].get(keyString);
      if (!listeners)
        return;
      for (const listener of listeners.buffers) {
        listener(message, channel);
      }
      if (!listeners.strings.size)
        return;
      const channelString = pattern ? channel.toString() : keyString, messageString = channelString === "__redis__:invalidate" ? (
        // https://github.com/redis/redis/pull/7469
        // https://github.com/redis/redis/issues/7463
        message === null ? null : message.map((x) => x.toString())
      ) : message.toString();
      for (const listener of listeners.strings) {
        listener(messageString, channelString);
      }
    };
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/commands-queue.js
var require_commands_queue = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/commands-queue.js"(exports2) {
    "use strict";
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _RedisCommandsQueue_instances;
    var _a;
    var _RedisCommandsQueue_flushQueue;
    var _RedisCommandsQueue_maxLength;
    var _RedisCommandsQueue_waitingToBeSent;
    var _RedisCommandsQueue_waitingForReply;
    var _RedisCommandsQueue_onShardedChannelMoved;
    var _RedisCommandsQueue_pubSub;
    var _RedisCommandsQueue_chainInExecution;
    var _RedisCommandsQueue_decoder;
    var _RedisCommandsQueue_pushPubSubCommand;
    Object.defineProperty(exports2, "__esModule", { value: true });
    var LinkedList = require_yallist();
    var errors_1 = require_errors();
    var decoder_1 = require_decoder();
    var encoder_1 = require_encoder();
    var pub_sub_1 = require_pub_sub();
    var PONG = Buffer.from("pong");
    var RedisCommandsQueue = class _RedisCommandsQueue {
      get isPubSubActive() {
        return __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").isActive;
      }
      constructor(maxLength, onShardedChannelMoved) {
        _RedisCommandsQueue_instances.add(this);
        _RedisCommandsQueue_maxLength.set(this, void 0);
        _RedisCommandsQueue_waitingToBeSent.set(this, new LinkedList());
        _RedisCommandsQueue_waitingForReply.set(this, new LinkedList());
        _RedisCommandsQueue_onShardedChannelMoved.set(this, void 0);
        _RedisCommandsQueue_pubSub.set(this, new pub_sub_1.PubSub());
        _RedisCommandsQueue_chainInExecution.set(this, void 0);
        _RedisCommandsQueue_decoder.set(this, new decoder_1.default({
          returnStringsAsBuffers: () => {
            return !!__classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").head?.value.returnBuffers || __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").isActive;
          },
          onReply: (reply) => {
            if (__classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").isActive && Array.isArray(reply)) {
              if (__classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").handleMessageReply(reply))
                return;
              const isShardedUnsubscribe = pub_sub_1.PubSub.isShardedUnsubscribe(reply);
              if (isShardedUnsubscribe && !__classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").length) {
                const channel = reply[1].toString();
                __classPrivateFieldGet(this, _RedisCommandsQueue_onShardedChannelMoved, "f").call(this, channel, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").removeShardedListeners(channel));
                return;
              } else if (isShardedUnsubscribe || pub_sub_1.PubSub.isStatusReply(reply)) {
                const head = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").head.value;
                if (Number.isNaN(head.channelsCounter) && reply[2] === 0 || --head.channelsCounter === 0) {
                  __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").shift().resolve();
                }
                return;
              }
              if (PONG.equals(reply[0])) {
                const { resolve: resolve2, returnBuffers } = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").shift(), buffer = reply[1].length === 0 ? reply[0] : reply[1];
                resolve2(returnBuffers ? buffer : buffer.toString());
                return;
              }
            }
            const { resolve, reject } = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").shift();
            if (reply instanceof errors_1.ErrorReply) {
              reject(reply);
            } else {
              resolve(reply);
            }
          }
        }));
        __classPrivateFieldSet(this, _RedisCommandsQueue_maxLength, maxLength, "f");
        __classPrivateFieldSet(this, _RedisCommandsQueue_onShardedChannelMoved, onShardedChannelMoved, "f");
      }
      addCommand(args, options) {
        if (__classPrivateFieldGet(this, _RedisCommandsQueue_maxLength, "f") && __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").length + __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").length >= __classPrivateFieldGet(this, _RedisCommandsQueue_maxLength, "f")) {
          return Promise.reject(new Error("The queue is full"));
        } else if (options?.signal?.aborted) {
          return Promise.reject(new errors_1.AbortError());
        }
        return new Promise((resolve, reject) => {
          const node = new LinkedList.Node({
            args,
            chainId: options?.chainId,
            returnBuffers: options?.returnBuffers,
            resolve,
            reject
          });
          if (options?.signal) {
            const listener = () => {
              __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").removeNode(node);
              node.value.reject(new errors_1.AbortError());
            };
            node.value.abort = {
              signal: options.signal,
              listener
            };
            options.signal.addEventListener("abort", listener, {
              once: true
            });
          }
          if (options?.asap) {
            __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").unshiftNode(node);
          } else {
            __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").pushNode(node);
          }
        });
      }
      subscribe(type, channels, listener, returnBuffers) {
        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").subscribe(type, channels, listener, returnBuffers));
      }
      unsubscribe(type, channels, listener, returnBuffers) {
        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").unsubscribe(type, channels, listener, returnBuffers));
      }
      resubscribe() {
        const commands = __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").resubscribe();
        if (!commands.length)
          return;
        return Promise.all(commands.map((command) => __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, command)));
      }
      extendPubSubChannelListeners(type, channel, listeners) {
        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").extendChannelListeners(type, channel, listeners));
      }
      extendPubSubListeners(type, listeners) {
        return __classPrivateFieldGet(this, _RedisCommandsQueue_instances, "m", _RedisCommandsQueue_pushPubSubCommand).call(this, __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").extendTypeListeners(type, listeners));
      }
      getPubSubListeners(type) {
        return __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").getTypeListeners(type);
      }
      getCommandToSend() {
        const toSend = __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").shift();
        if (!toSend)
          return;
        let encoded;
        try {
          encoded = (0, encoder_1.default)(toSend.args);
        } catch (err) {
          toSend.reject(err);
          return;
        }
        __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f").push({
          resolve: toSend.resolve,
          reject: toSend.reject,
          channelsCounter: toSend.channelsCounter,
          returnBuffers: toSend.returnBuffers
        });
        __classPrivateFieldSet(this, _RedisCommandsQueue_chainInExecution, toSend.chainId, "f");
        return encoded;
      }
      onReplyChunk(chunk) {
        __classPrivateFieldGet(this, _RedisCommandsQueue_decoder, "f").write(chunk);
      }
      flushWaitingForReply(err) {
        __classPrivateFieldGet(this, _RedisCommandsQueue_decoder, "f").reset();
        __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").reset();
        __classPrivateFieldGet(_RedisCommandsQueue, _a, "m", _RedisCommandsQueue_flushQueue).call(_RedisCommandsQueue, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f"), err);
        if (!__classPrivateFieldGet(this, _RedisCommandsQueue_chainInExecution, "f"))
          return;
        while (__classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").head?.value.chainId === __classPrivateFieldGet(this, _RedisCommandsQueue_chainInExecution, "f")) {
          __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").shift();
        }
        __classPrivateFieldSet(this, _RedisCommandsQueue_chainInExecution, void 0, "f");
      }
      flushAll(err) {
        __classPrivateFieldGet(this, _RedisCommandsQueue_decoder, "f").reset();
        __classPrivateFieldGet(this, _RedisCommandsQueue_pubSub, "f").reset();
        __classPrivateFieldGet(_RedisCommandsQueue, _a, "m", _RedisCommandsQueue_flushQueue).call(_RedisCommandsQueue, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingForReply, "f"), err);
        __classPrivateFieldGet(_RedisCommandsQueue, _a, "m", _RedisCommandsQueue_flushQueue).call(_RedisCommandsQueue, __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f"), err);
      }
    };
    exports2.default = RedisCommandsQueue;
    _a = RedisCommandsQueue, _RedisCommandsQueue_maxLength = /* @__PURE__ */ new WeakMap(), _RedisCommandsQueue_waitingToBeSent = /* @__PURE__ */ new WeakMap(), _RedisCommandsQueue_waitingForReply = /* @__PURE__ */ new WeakMap(), _RedisCommandsQueue_onShardedChannelMoved = /* @__PURE__ */ new WeakMap(), _RedisCommandsQueue_pubSub = /* @__PURE__ */ new WeakMap(), _RedisCommandsQueue_chainInExecution = /* @__PURE__ */ new WeakMap(), _RedisCommandsQueue_decoder = /* @__PURE__ */ new WeakMap(), _RedisCommandsQueue_instances = /* @__PURE__ */ new WeakSet(), _RedisCommandsQueue_flushQueue = function _RedisCommandsQueue_flushQueue2(queue, err) {
      while (queue.length) {
        queue.shift().reject(err);
      }
    }, _RedisCommandsQueue_pushPubSubCommand = function _RedisCommandsQueue_pushPubSubCommand2(command) {
      if (command === void 0)
        return;
      return new Promise((resolve, reject) => {
        __classPrivateFieldGet(this, _RedisCommandsQueue_waitingToBeSent, "f").push({
          args: command.args,
          channelsCounter: command.channelsCounter,
          returnBuffers: true,
          resolve: () => {
            command.resolve();
            resolve();
          },
          reject: (err) => {
            command.reject?.();
            reject(err);
          }
        });
      });
    };
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/command-options.js
var require_command_options = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/command-options.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isCommandOptions = exports2.commandOptions = void 0;
    var symbol = Symbol("Command Options");
    function commandOptions(options) {
      options[symbol] = true;
      return options;
    }
    exports2.commandOptions = commandOptions;
    function isCommandOptions(options) {
      return options?.[symbol] === true;
    }
    exports2.isCommandOptions = isCommandOptions;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commander.js
var require_commander = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/commander.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fCallArguments = exports2.transformCommandReply = exports2.transformLegacyCommandArguments = exports2.transformCommandArguments = exports2.attachExtensions = exports2.attachCommands = void 0;
    var command_options_1 = require_command_options();
    function attachCommands({ BaseClass, commands, executor }) {
      for (const [name, command] of Object.entries(commands)) {
        BaseClass.prototype[name] = function(...args) {
          return executor.call(this, command, args, name);
        };
      }
    }
    exports2.attachCommands = attachCommands;
    function attachExtensions(config) {
      let Commander;
      if (config.modules) {
        Commander = attachWithNamespaces({
          BaseClass: config.BaseClass,
          namespaces: config.modules,
          executor: config.modulesExecutor
        });
      }
      if (config.functions) {
        Commander = attachWithNamespaces({
          BaseClass: Commander ?? config.BaseClass,
          namespaces: config.functions,
          executor: config.functionsExecutor
        });
      }
      if (config.scripts) {
        Commander ?? (Commander = class extends config.BaseClass {
        });
        attachCommands({
          BaseClass: Commander,
          commands: config.scripts,
          executor: config.scriptsExecutor
        });
      }
      return Commander ?? config.BaseClass;
    }
    exports2.attachExtensions = attachExtensions;
    function attachWithNamespaces({ BaseClass, namespaces, executor }) {
      const Commander = class extends BaseClass {
        constructor(...args) {
          super(...args);
          for (const namespace of Object.keys(namespaces)) {
            this[namespace] = Object.create(this[namespace], {
              self: {
                value: this
              }
            });
          }
        }
      };
      for (const [namespace, commands] of Object.entries(namespaces)) {
        Commander.prototype[namespace] = {};
        for (const [name, command] of Object.entries(commands)) {
          Commander.prototype[namespace][name] = function(...args) {
            return executor.call(this.self, command, args, name);
          };
        }
      }
      return Commander;
    }
    function transformCommandArguments(command, args) {
      let options;
      if ((0, command_options_1.isCommandOptions)(args[0])) {
        options = args[0];
        args = args.slice(1);
      }
      return {
        jsArgs: args,
        args: command.transformArguments(...args),
        options
      };
    }
    exports2.transformCommandArguments = transformCommandArguments;
    function transformLegacyCommandArguments(args) {
      return args.flat().map((arg) => {
        return typeof arg === "number" || arg instanceof Date ? arg.toString() : arg;
      });
    }
    exports2.transformLegacyCommandArguments = transformLegacyCommandArguments;
    function transformCommandReply(command, rawReply, preserved) {
      if (!command.transformReply) {
        return rawReply;
      }
      return command.transformReply(rawReply, preserved);
    }
    exports2.transformCommandReply = transformCommandReply;
    function fCallArguments(name, fn, args) {
      const actualArgs = [
        fn.IS_READ_ONLY ? "FCALL_RO" : "FCALL",
        name
      ];
      if (fn.NUMBER_OF_KEYS !== void 0) {
        actualArgs.push(fn.NUMBER_OF_KEYS.toString());
      }
      actualArgs.push(...args);
      return actualArgs;
    }
    exports2.fCallArguments = fCallArguments;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/multi-command.js
var require_multi_command = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/multi-command.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var commander_1 = require_commander();
    var errors_1 = require_errors();
    var RedisMultiCommand = class {
      constructor() {
        Object.defineProperty(this, "queue", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: []
        });
        Object.defineProperty(this, "scriptsInUse", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: /* @__PURE__ */ new Set()
        });
      }
      static generateChainId() {
        return Symbol("RedisMultiCommand Chain Id");
      }
      addCommand(args, transformReply) {
        this.queue.push({
          args,
          transformReply
        });
      }
      addFunction(name, fn, args) {
        const transformedArguments = (0, commander_1.fCallArguments)(name, fn, fn.transformArguments(...args));
        this.queue.push({
          args: transformedArguments,
          transformReply: fn.transformReply
        });
        return transformedArguments;
      }
      addScript(script, args) {
        const transformedArguments = [];
        if (this.scriptsInUse.has(script.SHA1)) {
          transformedArguments.push("EVALSHA", script.SHA1);
        } else {
          this.scriptsInUse.add(script.SHA1);
          transformedArguments.push("EVAL", script.SCRIPT);
        }
        if (script.NUMBER_OF_KEYS !== void 0) {
          transformedArguments.push(script.NUMBER_OF_KEYS.toString());
        }
        const scriptArguments = script.transformArguments(...args);
        transformedArguments.push(...scriptArguments);
        if (scriptArguments.preserve) {
          transformedArguments.preserve = scriptArguments.preserve;
        }
        this.addCommand(transformedArguments, script.transformReply);
        return transformedArguments;
      }
      handleExecReplies(rawReplies) {
        const execReply = rawReplies[rawReplies.length - 1];
        if (execReply === null) {
          throw new errors_1.WatchError();
        }
        return this.transformReplies(execReply);
      }
      transformReplies(rawReplies) {
        const errorIndexes = [], replies = rawReplies.map((reply, i) => {
          if (reply instanceof errors_1.ErrorReply) {
            errorIndexes.push(i);
            return reply;
          }
          const { transformReply, args } = this.queue[i];
          return transformReply ? transformReply(reply, args.preserve) : reply;
        });
        if (errorIndexes.length)
          throw new errors_1.MultiErrorReply(replies, errorIndexes);
        return replies;
      }
    };
    exports2.default = RedisMultiCommand;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/multi-command.js
var require_multi_command2 = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/multi-command.js"(exports2) {
    "use strict";
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _RedisClientMultiCommand_instances;
    var _RedisClientMultiCommand_multi;
    var _RedisClientMultiCommand_executor;
    var _RedisClientMultiCommand_selectedDB;
    var _RedisClientMultiCommand_legacyMode;
    var _RedisClientMultiCommand_defineLegacyCommand;
    Object.defineProperty(exports2, "__esModule", { value: true });
    var commands_1 = require_commands2();
    var multi_command_1 = require_multi_command();
    var commander_1 = require_commander();
    var RedisClientMultiCommand = class _RedisClientMultiCommand {
      static extend(extensions) {
        return (0, commander_1.attachExtensions)({
          BaseClass: _RedisClientMultiCommand,
          modulesExecutor: _RedisClientMultiCommand.prototype.commandsExecutor,
          modules: extensions?.modules,
          functionsExecutor: _RedisClientMultiCommand.prototype.functionsExecutor,
          functions: extensions?.functions,
          scriptsExecutor: _RedisClientMultiCommand.prototype.scriptsExecutor,
          scripts: extensions?.scripts
        });
      }
      constructor(executor, legacyMode = false) {
        _RedisClientMultiCommand_instances.add(this);
        _RedisClientMultiCommand_multi.set(this, new multi_command_1.default());
        _RedisClientMultiCommand_executor.set(this, void 0);
        Object.defineProperty(this, "v4", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: {}
        });
        _RedisClientMultiCommand_selectedDB.set(this, void 0);
        Object.defineProperty(this, "select", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.SELECT
        });
        Object.defineProperty(this, "EXEC", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.exec
        });
        __classPrivateFieldSet(this, _RedisClientMultiCommand_executor, executor, "f");
        if (legacyMode) {
          __classPrivateFieldGet(this, _RedisClientMultiCommand_instances, "m", _RedisClientMultiCommand_legacyMode).call(this);
        }
      }
      commandsExecutor(command, args) {
        return this.addCommand(command.transformArguments(...args), command.transformReply);
      }
      SELECT(db, transformReply) {
        __classPrivateFieldSet(this, _RedisClientMultiCommand_selectedDB, db, "f");
        return this.addCommand(["SELECT", db.toString()], transformReply);
      }
      addCommand(args, transformReply) {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addCommand(args, transformReply);
        return this;
      }
      functionsExecutor(fn, args, name) {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addFunction(name, fn, args);
        return this;
      }
      scriptsExecutor(script, args) {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addScript(script, args);
        return this;
      }
      async exec(execAsPipeline = false) {
        if (execAsPipeline) {
          return this.execAsPipeline();
        }
        return __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").handleExecReplies(await __classPrivateFieldGet(this, _RedisClientMultiCommand_executor, "f").call(this, __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").queue, __classPrivateFieldGet(this, _RedisClientMultiCommand_selectedDB, "f"), multi_command_1.default.generateChainId()));
      }
      async execAsPipeline() {
        if (__classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").queue.length === 0)
          return [];
        return __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").transformReplies(await __classPrivateFieldGet(this, _RedisClientMultiCommand_executor, "f").call(this, __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").queue, __classPrivateFieldGet(this, _RedisClientMultiCommand_selectedDB, "f")));
      }
    };
    exports2.default = RedisClientMultiCommand;
    _RedisClientMultiCommand_multi = /* @__PURE__ */ new WeakMap(), _RedisClientMultiCommand_executor = /* @__PURE__ */ new WeakMap(), _RedisClientMultiCommand_selectedDB = /* @__PURE__ */ new WeakMap(), _RedisClientMultiCommand_instances = /* @__PURE__ */ new WeakSet(), _RedisClientMultiCommand_legacyMode = function _RedisClientMultiCommand_legacyMode2() {
      var _a, _b;
      this.v4.addCommand = this.addCommand.bind(this);
      this.addCommand = (...args) => {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addCommand((0, commander_1.transformLegacyCommandArguments)(args));
        return this;
      };
      this.v4.exec = this.exec.bind(this);
      this.exec = (callback) => {
        this.v4.exec().then((reply) => {
          if (!callback)
            return;
          callback(null, reply);
        }).catch((err) => {
          if (!callback) {
            return;
          }
          callback(err);
        });
      };
      for (const [name, command] of Object.entries(commands_1.default)) {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_instances, "m", _RedisClientMultiCommand_defineLegacyCommand).call(this, name, command);
        (_a = this)[_b = name.toLowerCase()] ?? (_a[_b] = this[name]);
      }
    }, _RedisClientMultiCommand_defineLegacyCommand = function _RedisClientMultiCommand_defineLegacyCommand2(name, command) {
      this.v4[name] = this[name].bind(this.v4);
      this[name] = command && command.TRANSFORM_LEGACY_REPLY && command.transformReply ? (...args) => {
        __classPrivateFieldGet(this, _RedisClientMultiCommand_multi, "f").addCommand([name, ...(0, commander_1.transformLegacyCommandArguments)(args)], command.transformReply);
        return this;
      } : (...args) => this.addCommand(name, ...args);
    };
    (0, commander_1.attachCommands)({
      BaseClass: RedisClientMultiCommand,
      commands: commands_1.default,
      executor: RedisClientMultiCommand.prototype.commandsExecutor
    });
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/factoryValidator.js
var require_factoryValidator = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/factoryValidator.js"(exports2, module2) {
    "use strict";
    module2.exports = function(factory) {
      if (typeof factory.create !== "function") {
        throw new TypeError("factory.create must be a function");
      }
      if (typeof factory.destroy !== "function") {
        throw new TypeError("factory.destroy must be a function");
      }
      if (typeof factory.validate !== "undefined" && typeof factory.validate !== "function") {
        throw new TypeError("factory.validate must be a function");
      }
    };
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/PoolDefaults.js
var require_PoolDefaults = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/PoolDefaults.js"(exports2, module2) {
    "use strict";
    var PoolDefaults = class {
      constructor() {
        this.fifo = true;
        this.priorityRange = 1;
        this.testOnBorrow = false;
        this.testOnReturn = false;
        this.autostart = true;
        this.evictionRunIntervalMillis = 0;
        this.numTestsPerEvictionRun = 3;
        this.softIdleTimeoutMillis = -1;
        this.idleTimeoutMillis = 3e4;
        this.acquireTimeoutMillis = null;
        this.destroyTimeoutMillis = null;
        this.maxWaitingClients = null;
        this.min = null;
        this.max = null;
        this.Promise = Promise;
      }
    };
    module2.exports = PoolDefaults;
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/PoolOptions.js
var require_PoolOptions = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/PoolOptions.js"(exports2, module2) {
    "use strict";
    var PoolDefaults = require_PoolDefaults();
    var PoolOptions = class {
      /**
       * @param {Object} opts
       *   configuration for the pool
       * @param {Number} [opts.max=null]
       *   Maximum number of items that can exist at the same time.  Default: 1.
       *   Any further acquire requests will be pushed to the waiting list.
       * @param {Number} [opts.min=null]
       *   Minimum number of items in pool (including in-use). Default: 0.
       *   When the pool is created, or a resource destroyed, this minimum will
       *   be checked. If the pool resource count is below the minimum, a new
       *   resource will be created and added to the pool.
       * @param {Number} [opts.maxWaitingClients=null]
       *   maximum number of queued requests allowed after which acquire calls will be rejected
       * @param {Boolean} [opts.testOnBorrow=false]
       *   should the pool validate resources before giving them to clients. Requires that
       *   `factory.validate` is specified.
       * @param {Boolean} [opts.testOnReturn=false]
       *   should the pool validate resources before returning them to the pool.
       * @param {Number} [opts.acquireTimeoutMillis=null]
       *   Delay in milliseconds after which the an `acquire` call will fail. optional.
       *   Default: undefined. Should be positive and non-zero
       * @param {Number} [opts.destroyTimeoutMillis=null]
       *   Delay in milliseconds after which the an `destroy` call will fail, causing it to emit a factoryDestroyError event. optional.
       *   Default: undefined. Should be positive and non-zero
       * @param {Number} [opts.priorityRange=1]
       *   The range from 1 to be treated as a valid priority
       * @param {Boolean} [opts.fifo=true]
       *   Sets whether the pool has LIFO (last in, first out) behaviour with respect to idle objects.
       *   if false then pool has FIFO behaviour
       * @param {Boolean} [opts.autostart=true]
       *   Should the pool start creating resources etc once the constructor is called
       * @param {Number} [opts.evictionRunIntervalMillis=0]
       *   How often to run eviction checks.  Default: 0 (does not run).
       * @param {Number} [opts.numTestsPerEvictionRun=3]
       *   Number of resources to check each eviction run.  Default: 3.
       * @param {Number} [opts.softIdleTimeoutMillis=-1]
       *   amount of time an object may sit idle in the pool before it is eligible
       *   for eviction by the idle object evictor (if any), with the extra condition
       *   that at least "min idle" object instances remain in the pool. Default -1 (nothing can get evicted)
       * @param {Number} [opts.idleTimeoutMillis=30000]
       *   the minimum amount of time that an object may sit idle in the pool before it is eligible for eviction
       *   due to idle time. Supercedes "softIdleTimeoutMillis" Default: 30000
       * @param {typeof Promise} [opts.Promise=Promise]
       *   What promise implementation should the pool use, defaults to native promises.
       */
      constructor(opts) {
        const poolDefaults = new PoolDefaults();
        opts = opts || {};
        this.fifo = typeof opts.fifo === "boolean" ? opts.fifo : poolDefaults.fifo;
        this.priorityRange = opts.priorityRange || poolDefaults.priorityRange;
        this.testOnBorrow = typeof opts.testOnBorrow === "boolean" ? opts.testOnBorrow : poolDefaults.testOnBorrow;
        this.testOnReturn = typeof opts.testOnReturn === "boolean" ? opts.testOnReturn : poolDefaults.testOnReturn;
        this.autostart = typeof opts.autostart === "boolean" ? opts.autostart : poolDefaults.autostart;
        if (opts.acquireTimeoutMillis) {
          this.acquireTimeoutMillis = parseInt(opts.acquireTimeoutMillis, 10);
        }
        if (opts.destroyTimeoutMillis) {
          this.destroyTimeoutMillis = parseInt(opts.destroyTimeoutMillis, 10);
        }
        if (opts.maxWaitingClients !== void 0) {
          this.maxWaitingClients = parseInt(opts.maxWaitingClients, 10);
        }
        this.max = parseInt(opts.max, 10);
        this.min = parseInt(opts.min, 10);
        this.max = Math.max(isNaN(this.max) ? 1 : this.max, 1);
        this.min = Math.min(isNaN(this.min) ? 0 : this.min, this.max);
        this.evictionRunIntervalMillis = opts.evictionRunIntervalMillis || poolDefaults.evictionRunIntervalMillis;
        this.numTestsPerEvictionRun = opts.numTestsPerEvictionRun || poolDefaults.numTestsPerEvictionRun;
        this.softIdleTimeoutMillis = opts.softIdleTimeoutMillis || poolDefaults.softIdleTimeoutMillis;
        this.idleTimeoutMillis = opts.idleTimeoutMillis || poolDefaults.idleTimeoutMillis;
        this.Promise = opts.Promise != null ? opts.Promise : poolDefaults.Promise;
      }
    };
    module2.exports = PoolOptions;
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/Deferred.js
var require_Deferred = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/Deferred.js"(exports2, module2) {
    "use strict";
    var Deferred = class _Deferred {
      constructor(Promise2) {
        this._state = _Deferred.PENDING;
        this._resolve = void 0;
        this._reject = void 0;
        this._promise = new Promise2((resolve, reject) => {
          this._resolve = resolve;
          this._reject = reject;
        });
      }
      get state() {
        return this._state;
      }
      get promise() {
        return this._promise;
      }
      reject(reason) {
        if (this._state !== _Deferred.PENDING) {
          return;
        }
        this._state = _Deferred.REJECTED;
        this._reject(reason);
      }
      resolve(value) {
        if (this._state !== _Deferred.PENDING) {
          return;
        }
        this._state = _Deferred.FULFILLED;
        this._resolve(value);
      }
    };
    Deferred.PENDING = "PENDING";
    Deferred.FULFILLED = "FULFILLED";
    Deferred.REJECTED = "REJECTED";
    module2.exports = Deferred;
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/errors.js
var require_errors2 = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/errors.js"(exports2, module2) {
    "use strict";
    var ExtendableError = class extends Error {
      constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        if (typeof Error.captureStackTrace === "function") {
          Error.captureStackTrace(this, this.constructor);
        } else {
          this.stack = new Error(message).stack;
        }
      }
    };
    var TimeoutError = class extends ExtendableError {
      constructor(m) {
        super(m);
      }
    };
    module2.exports = {
      TimeoutError
    };
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/ResourceRequest.js
var require_ResourceRequest = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/ResourceRequest.js"(exports2, module2) {
    "use strict";
    var Deferred = require_Deferred();
    var errors = require_errors2();
    function fbind(fn, ctx) {
      return function bound() {
        return fn.apply(ctx, arguments);
      };
    }
    var ResourceRequest = class _ResourceRequest extends Deferred {
      /**
       * [constructor description]
       * @param  {Number} ttl     timeout
       */
      constructor(ttl, Promise2) {
        super(Promise2);
        this._creationTimestamp = Date.now();
        this._timeout = null;
        if (ttl !== void 0) {
          this.setTimeout(ttl);
        }
      }
      setTimeout(delay) {
        if (this._state !== _ResourceRequest.PENDING) {
          return;
        }
        const ttl = parseInt(delay, 10);
        if (isNaN(ttl) || ttl <= 0) {
          throw new Error("delay must be a positive int");
        }
        const age = Date.now() - this._creationTimestamp;
        if (this._timeout) {
          this.removeTimeout();
        }
        this._timeout = setTimeout(
          fbind(this._fireTimeout, this),
          Math.max(ttl - age, 0)
        );
      }
      removeTimeout() {
        if (this._timeout) {
          clearTimeout(this._timeout);
        }
        this._timeout = null;
      }
      _fireTimeout() {
        this.reject(new errors.TimeoutError("ResourceRequest timed out"));
      }
      reject(reason) {
        this.removeTimeout();
        super.reject(reason);
      }
      resolve(value) {
        this.removeTimeout();
        super.resolve(value);
      }
    };
    module2.exports = ResourceRequest;
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/ResourceLoan.js
var require_ResourceLoan = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/ResourceLoan.js"(exports2, module2) {
    "use strict";
    var Deferred = require_Deferred();
    var ResourceLoan = class extends Deferred {
      /**
       *
       * @param  {any} pooledResource the PooledResource this loan belongs to
       * @return {any}                [description]
       */
      constructor(pooledResource, Promise2) {
        super(Promise2);
        this._creationTimestamp = Date.now();
        this.pooledResource = pooledResource;
      }
      reject() {
      }
    };
    module2.exports = ResourceLoan;
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/PooledResourceStateEnum.js
var require_PooledResourceStateEnum = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/PooledResourceStateEnum.js"(exports2, module2) {
    "use strict";
    var PooledResourceStateEnum = {
      ALLOCATED: "ALLOCATED",
      // In use
      IDLE: "IDLE",
      // In the queue, not in use.
      INVALID: "INVALID",
      // Failed validation
      RETURNING: "RETURNING",
      // Resource is in process of returning
      VALIDATION: "VALIDATION"
      // Currently being tested
    };
    module2.exports = PooledResourceStateEnum;
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/PooledResource.js
var require_PooledResource = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/PooledResource.js"(exports2, module2) {
    "use strict";
    var PooledResourceStateEnum = require_PooledResourceStateEnum();
    var PooledResource = class {
      constructor(resource) {
        this.creationTime = Date.now();
        this.lastReturnTime = null;
        this.lastBorrowTime = null;
        this.lastIdleTime = null;
        this.obj = resource;
        this.state = PooledResourceStateEnum.IDLE;
      }
      // mark the resource as "allocated"
      allocate() {
        this.lastBorrowTime = Date.now();
        this.state = PooledResourceStateEnum.ALLOCATED;
      }
      // mark the resource as "deallocated"
      deallocate() {
        this.lastReturnTime = Date.now();
        this.state = PooledResourceStateEnum.IDLE;
      }
      invalidate() {
        this.state = PooledResourceStateEnum.INVALID;
      }
      test() {
        this.state = PooledResourceStateEnum.VALIDATION;
      }
      idle() {
        this.lastIdleTime = Date.now();
        this.state = PooledResourceStateEnum.IDLE;
      }
      returning() {
        this.state = PooledResourceStateEnum.RETURNING;
      }
    };
    module2.exports = PooledResource;
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/DefaultEvictor.js
var require_DefaultEvictor = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/DefaultEvictor.js"(exports2, module2) {
    "use strict";
    var DefaultEvictor = class {
      evict(config, pooledResource, availableObjectsCount) {
        const idleTime = Date.now() - pooledResource.lastIdleTime;
        if (config.softIdleTimeoutMillis > 0 && config.softIdleTimeoutMillis < idleTime && config.min < availableObjectsCount) {
          return true;
        }
        if (config.idleTimeoutMillis < idleTime) {
          return true;
        }
        return false;
      }
    };
    module2.exports = DefaultEvictor;
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/DoublyLinkedList.js
var require_DoublyLinkedList = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/DoublyLinkedList.js"(exports2, module2) {
    "use strict";
    var DoublyLinkedList = class {
      constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      insertBeginning(node) {
        if (this.head === null) {
          this.head = node;
          this.tail = node;
          node.prev = null;
          node.next = null;
          this.length++;
        } else {
          this.insertBefore(this.head, node);
        }
      }
      insertEnd(node) {
        if (this.tail === null) {
          this.insertBeginning(node);
        } else {
          this.insertAfter(this.tail, node);
        }
      }
      insertAfter(node, newNode) {
        newNode.prev = node;
        newNode.next = node.next;
        if (node.next === null) {
          this.tail = newNode;
        } else {
          node.next.prev = newNode;
        }
        node.next = newNode;
        this.length++;
      }
      insertBefore(node, newNode) {
        newNode.prev = node.prev;
        newNode.next = node;
        if (node.prev === null) {
          this.head = newNode;
        } else {
          node.prev.next = newNode;
        }
        node.prev = newNode;
        this.length++;
      }
      remove(node) {
        if (node.prev === null) {
          this.head = node.next;
        } else {
          node.prev.next = node.next;
        }
        if (node.next === null) {
          this.tail = node.prev;
        } else {
          node.next.prev = node.prev;
        }
        node.prev = null;
        node.next = null;
        this.length--;
      }
      // FIXME: this should not live here and has become a dumping ground...
      static createNode(data) {
        return {
          prev: null,
          next: null,
          data
        };
      }
    };
    module2.exports = DoublyLinkedList;
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/DoublyLinkedListIterator.js
var require_DoublyLinkedListIterator = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/DoublyLinkedListIterator.js"(exports2, module2) {
    "use strict";
    var DoublyLinkedListIterator = class {
      /**
       * @param  {Object} doublyLinkedList     a node that is part of a doublyLinkedList
       * @param  {Boolean} [reverse=false]     is this a reverse iterator? default: false
       */
      constructor(doublyLinkedList, reverse) {
        this._list = doublyLinkedList;
        this._direction = reverse === true ? "prev" : "next";
        this._startPosition = reverse === true ? "tail" : "head";
        this._started = false;
        this._cursor = null;
        this._done = false;
      }
      _start() {
        this._cursor = this._list[this._startPosition];
        this._started = true;
      }
      _advanceCursor() {
        if (this._started === false) {
          this._started = true;
          this._cursor = this._list[this._startPosition];
          return;
        }
        this._cursor = this._cursor[this._direction];
      }
      reset() {
        this._done = false;
        this._started = false;
        this._cursor = null;
      }
      remove() {
        if (this._started === false || this._done === true || this._isCursorDetached()) {
          return false;
        }
        this._list.remove(this._cursor);
      }
      next() {
        if (this._done === true) {
          return { done: true };
        }
        this._advanceCursor();
        if (this._cursor === null || this._isCursorDetached()) {
          this._done = true;
          return { done: true };
        }
        return {
          value: this._cursor,
          done: false
        };
      }
      /**
       * Is the node detached from a list?
       * NOTE: you can trick/bypass/confuse this check by removing a node from one DoublyLinkedList
       * and adding it to another.
       * TODO: We can make this smarter by checking the direction of travel and only checking
       * the required next/prev/head/tail rather than all of them
       * @return {Boolean}      [description]
       */
      _isCursorDetached() {
        return this._cursor.prev === null && this._cursor.next === null && this._list.tail !== this._cursor && this._list.head !== this._cursor;
      }
    };
    module2.exports = DoublyLinkedListIterator;
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/DequeIterator.js
var require_DequeIterator = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/DequeIterator.js"(exports2, module2) {
    "use strict";
    var DoublyLinkedListIterator = require_DoublyLinkedListIterator();
    var DequeIterator = class extends DoublyLinkedListIterator {
      next() {
        const result = super.next();
        if (result.value) {
          result.value = result.value.data;
        }
        return result;
      }
    };
    module2.exports = DequeIterator;
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/Deque.js
var require_Deque = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/Deque.js"(exports2, module2) {
    "use strict";
    var DoublyLinkedList = require_DoublyLinkedList();
    var DequeIterator = require_DequeIterator();
    var Deque = class {
      constructor() {
        this._list = new DoublyLinkedList();
      }
      /**
       * removes and returns the first element from the queue
       * @return {any} [description]
       */
      shift() {
        if (this.length === 0) {
          return void 0;
        }
        const node = this._list.head;
        this._list.remove(node);
        return node.data;
      }
      /**
       * adds one elemts to the beginning of the queue
       * @param  {any} element [description]
       * @return {any}         [description]
       */
      unshift(element) {
        const node = DoublyLinkedList.createNode(element);
        this._list.insertBeginning(node);
      }
      /**
       * adds one to the end of the queue
       * @param  {any} element [description]
       * @return {any}         [description]
       */
      push(element) {
        const node = DoublyLinkedList.createNode(element);
        this._list.insertEnd(node);
      }
      /**
       * removes and returns the last element from the queue
       */
      pop() {
        if (this.length === 0) {
          return void 0;
        }
        const node = this._list.tail;
        this._list.remove(node);
        return node.data;
      }
      [Symbol.iterator]() {
        return new DequeIterator(this._list);
      }
      iterator() {
        return new DequeIterator(this._list);
      }
      reverseIterator() {
        return new DequeIterator(this._list, true);
      }
      /**
       * get a reference to the item at the head of the queue
       * @return {any} [description]
       */
      get head() {
        if (this.length === 0) {
          return void 0;
        }
        const node = this._list.head;
        return node.data;
      }
      /**
       * get a reference to the item at the tail of the queue
       * @return {any} [description]
       */
      get tail() {
        if (this.length === 0) {
          return void 0;
        }
        const node = this._list.tail;
        return node.data;
      }
      get length() {
        return this._list.length;
      }
    };
    module2.exports = Deque;
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/Queue.js
var require_Queue = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/Queue.js"(exports2, module2) {
    "use strict";
    var DoublyLinkedList = require_DoublyLinkedList();
    var Deque = require_Deque();
    var Queue = class extends Deque {
      /**
       * Adds the obj to the end of the list for this slot
       * we completely override the parent method because we need access to the
       * node for our rejection handler
       * @param {any} resourceRequest [description]
       */
      push(resourceRequest) {
        const node = DoublyLinkedList.createNode(resourceRequest);
        resourceRequest.promise.catch(this._createTimeoutRejectionHandler(node));
        this._list.insertEnd(node);
      }
      _createTimeoutRejectionHandler(node) {
        return (reason) => {
          if (reason.name === "TimeoutError") {
            this._list.remove(node);
          }
        };
      }
    };
    module2.exports = Queue;
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/PriorityQueue.js
var require_PriorityQueue = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/PriorityQueue.js"(exports2, module2) {
    "use strict";
    var Queue = require_Queue();
    var PriorityQueue = class {
      constructor(size) {
        this._size = Math.max(+size | 0, 1);
        this._slots = [];
        for (let i = 0; i < this._size; i++) {
          this._slots.push(new Queue());
        }
      }
      get length() {
        let _length = 0;
        for (let i = 0, slots = this._slots.length; i < slots; i++) {
          _length += this._slots[i].length;
        }
        return _length;
      }
      enqueue(obj, priority) {
        priority = priority && +priority | 0 || 0;
        if (priority) {
          if (priority < 0 || priority >= this._size) {
            priority = this._size - 1;
          }
        }
        this._slots[priority].push(obj);
      }
      dequeue() {
        for (let i = 0, sl = this._slots.length; i < sl; i += 1) {
          if (this._slots[i].length) {
            return this._slots[i].shift();
          }
        }
        return;
      }
      get head() {
        for (let i = 0, sl = this._slots.length; i < sl; i += 1) {
          if (this._slots[i].length > 0) {
            return this._slots[i].head;
          }
        }
        return;
      }
      get tail() {
        for (let i = this._slots.length - 1; i >= 0; i--) {
          if (this._slots[i].length > 0) {
            return this._slots[i].tail;
          }
        }
        return;
      }
    };
    module2.exports = PriorityQueue;
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/utils.js"(exports2) {
    "use strict";
    function noop() {
    }
    exports2.reflector = function(promise) {
      return promise.then(noop, noop);
    };
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/Pool.js
var require_Pool = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/lib/Pool.js"(exports2, module2) {
    "use strict";
    var EventEmitter = require("events").EventEmitter;
    var factoryValidator = require_factoryValidator();
    var PoolOptions = require_PoolOptions();
    var ResourceRequest = require_ResourceRequest();
    var ResourceLoan = require_ResourceLoan();
    var PooledResource = require_PooledResource();
    var DefaultEvictor = require_DefaultEvictor();
    var Deque = require_Deque();
    var Deferred = require_Deferred();
    var PriorityQueue = require_PriorityQueue();
    var DequeIterator = require_DequeIterator();
    var reflector = require_utils2().reflector;
    var FACTORY_CREATE_ERROR = "factoryCreateError";
    var FACTORY_DESTROY_ERROR = "factoryDestroyError";
    var Pool = class extends EventEmitter {
      /**
       * Generate an Object pool with a specified `factory` and `config`.
       *
       * @param {typeof DefaultEvictor} Evictor
       * @param {typeof Deque} Deque
       * @param {typeof PriorityQueue} PriorityQueue
       * @param {Object} factory
       *   Factory to be used for generating and destroying the items.
       * @param {Function} factory.create
       *   Should create the item to be acquired,
       *   and call it's first callback argument with the generated item as it's argument.
       * @param {Function} factory.destroy
       *   Should gently close any resources that the item is using.
       *   Called before the items is destroyed.
       * @param {Function} factory.validate
       *   Test if a resource is still valid .Should return a promise that resolves to a boolean, true if resource is still valid and false
       *   If it should be removed from pool.
       * @param {Object} options
       */
      constructor(Evictor, Deque2, PriorityQueue2, factory, options) {
        super();
        factoryValidator(factory);
        this._config = new PoolOptions(options);
        this._Promise = this._config.Promise;
        this._factory = factory;
        this._draining = false;
        this._started = false;
        this._waitingClientsQueue = new PriorityQueue2(this._config.priorityRange);
        this._factoryCreateOperations = /* @__PURE__ */ new Set();
        this._factoryDestroyOperations = /* @__PURE__ */ new Set();
        this._availableObjects = new Deque2();
        this._testOnBorrowResources = /* @__PURE__ */ new Set();
        this._testOnReturnResources = /* @__PURE__ */ new Set();
        this._validationOperations = /* @__PURE__ */ new Set();
        this._allObjects = /* @__PURE__ */ new Set();
        this._resourceLoans = /* @__PURE__ */ new Map();
        this._evictionIterator = this._availableObjects.iterator();
        this._evictor = new Evictor();
        this._scheduledEviction = null;
        if (this._config.autostart === true) {
          this.start();
        }
      }
      _destroy(pooledResource) {
        pooledResource.invalidate();
        this._allObjects.delete(pooledResource);
        const destroyPromise = this._factory.destroy(pooledResource.obj);
        const wrappedDestroyPromise = this._config.destroyTimeoutMillis ? this._Promise.resolve(this._applyDestroyTimeout(destroyPromise)) : this._Promise.resolve(destroyPromise);
        this._trackOperation(
          wrappedDestroyPromise,
          this._factoryDestroyOperations
        ).catch((reason) => {
          this.emit(FACTORY_DESTROY_ERROR, reason);
        });
        this._ensureMinimum();
      }
      _applyDestroyTimeout(promise) {
        const timeoutPromise = new this._Promise((resolve, reject) => {
          setTimeout(() => {
            reject(new Error("destroy timed out"));
          }, this._config.destroyTimeoutMillis).unref();
        });
        return this._Promise.race([timeoutPromise, promise]);
      }
      /**
       * Attempt to move an available resource into test and then onto a waiting client
       * @return {Boolean} could we move an available resource into test
       */
      _testOnBorrow() {
        if (this._availableObjects.length < 1) {
          return false;
        }
        const pooledResource = this._availableObjects.shift();
        pooledResource.test();
        this._testOnBorrowResources.add(pooledResource);
        const validationPromise = this._factory.validate(pooledResource.obj);
        const wrappedValidationPromise = this._Promise.resolve(validationPromise);
        this._trackOperation(
          wrappedValidationPromise,
          this._validationOperations
        ).then((isValid) => {
          this._testOnBorrowResources.delete(pooledResource);
          if (isValid === false) {
            pooledResource.invalidate();
            this._destroy(pooledResource);
            this._dispense();
            return;
          }
          this._dispatchPooledResourceToNextWaitingClient(pooledResource);
        });
        return true;
      }
      /**
       * Attempt to move an available resource to a waiting client
       * @return {Boolean} [description]
       */
      _dispatchResource() {
        if (this._availableObjects.length < 1) {
          return false;
        }
        const pooledResource = this._availableObjects.shift();
        this._dispatchPooledResourceToNextWaitingClient(pooledResource);
        return false;
      }
      /**
       * Attempt to resolve an outstanding resource request using an available resource from
       * the pool, or creating new ones
       *
       * @private
       */
      _dispense() {
        const numWaitingClients = this._waitingClientsQueue.length;
        if (numWaitingClients < 1) {
          return;
        }
        const resourceShortfall = numWaitingClients - this._potentiallyAllocableResourceCount;
        const actualNumberOfResourcesToCreate = Math.min(
          this.spareResourceCapacity,
          resourceShortfall
        );
        for (let i = 0; actualNumberOfResourcesToCreate > i; i++) {
          this._createResource();
        }
        if (this._config.testOnBorrow === true) {
          const desiredNumberOfResourcesToMoveIntoTest = numWaitingClients - this._testOnBorrowResources.size;
          const actualNumberOfResourcesToMoveIntoTest = Math.min(
            this._availableObjects.length,
            desiredNumberOfResourcesToMoveIntoTest
          );
          for (let i = 0; actualNumberOfResourcesToMoveIntoTest > i; i++) {
            this._testOnBorrow();
          }
        }
        if (this._config.testOnBorrow === false) {
          const actualNumberOfResourcesToDispatch = Math.min(
            this._availableObjects.length,
            numWaitingClients
          );
          for (let i = 0; actualNumberOfResourcesToDispatch > i; i++) {
            this._dispatchResource();
          }
        }
      }
      /**
       * Dispatches a pooledResource to the next waiting client (if any) else
       * puts the PooledResource back on the available list
       * @param  {PooledResource} pooledResource [description]
       * @return {Boolean}                [description]
       */
      _dispatchPooledResourceToNextWaitingClient(pooledResource) {
        const clientResourceRequest = this._waitingClientsQueue.dequeue();
        if (clientResourceRequest === void 0 || clientResourceRequest.state !== Deferred.PENDING) {
          this._addPooledResourceToAvailableObjects(pooledResource);
          return false;
        }
        const loan = new ResourceLoan(pooledResource, this._Promise);
        this._resourceLoans.set(pooledResource.obj, loan);
        pooledResource.allocate();
        clientResourceRequest.resolve(pooledResource.obj);
        return true;
      }
      /**
       * tracks on operation using given set
       * handles adding/removing from the set and resolve/rejects the value/reason
       * @param  {Promise} operation
       * @param  {Set} set       Set holding operations
       * @return {Promise}       Promise that resolves once operation has been removed from set
       */
      _trackOperation(operation, set) {
        set.add(operation);
        return operation.then(
          (v) => {
            set.delete(operation);
            return this._Promise.resolve(v);
          },
          (e) => {
            set.delete(operation);
            return this._Promise.reject(e);
          }
        );
      }
      /**
       * @private
       */
      _createResource() {
        const factoryPromise = this._factory.create();
        const wrappedFactoryPromise = this._Promise.resolve(factoryPromise).then((resource) => {
          const pooledResource = new PooledResource(resource);
          this._allObjects.add(pooledResource);
          this._addPooledResourceToAvailableObjects(pooledResource);
        });
        this._trackOperation(wrappedFactoryPromise, this._factoryCreateOperations).then(() => {
          this._dispense();
          return null;
        }).catch((reason) => {
          this.emit(FACTORY_CREATE_ERROR, reason);
          this._dispense();
        });
      }
      /**
       * @private
       */
      _ensureMinimum() {
        if (this._draining === true) {
          return;
        }
        const minShortfall = this._config.min - this._count;
        for (let i = 0; i < minShortfall; i++) {
          this._createResource();
        }
      }
      _evict() {
        const testsToRun = Math.min(
          this._config.numTestsPerEvictionRun,
          this._availableObjects.length
        );
        const evictionConfig = {
          softIdleTimeoutMillis: this._config.softIdleTimeoutMillis,
          idleTimeoutMillis: this._config.idleTimeoutMillis,
          min: this._config.min
        };
        for (let testsHaveRun = 0; testsHaveRun < testsToRun; ) {
          const iterationResult = this._evictionIterator.next();
          if (iterationResult.done === true && this._availableObjects.length < 1) {
            this._evictionIterator.reset();
            return;
          }
          if (iterationResult.done === true && this._availableObjects.length > 0) {
            this._evictionIterator.reset();
            continue;
          }
          const resource = iterationResult.value;
          const shouldEvict = this._evictor.evict(
            evictionConfig,
            resource,
            this._availableObjects.length
          );
          testsHaveRun++;
          if (shouldEvict === true) {
            this._evictionIterator.remove();
            this._destroy(resource);
          }
        }
      }
      _scheduleEvictorRun() {
        if (this._config.evictionRunIntervalMillis > 0) {
          this._scheduledEviction = setTimeout(() => {
            this._evict();
            this._scheduleEvictorRun();
          }, this._config.evictionRunIntervalMillis).unref();
        }
      }
      _descheduleEvictorRun() {
        if (this._scheduledEviction) {
          clearTimeout(this._scheduledEviction);
        }
        this._scheduledEviction = null;
      }
      start() {
        if (this._draining === true) {
          return;
        }
        if (this._started === true) {
          return;
        }
        this._started = true;
        this._scheduleEvictorRun();
        this._ensureMinimum();
      }
      /**
       * Request a new resource. The callback will be called,
       * when a new resource is available, passing the resource to the callback.
       * TODO: should we add a seperate "acquireWithPriority" function
       *
       * @param {Number} [priority=0]
       *   Optional.  Integer between 0 and (priorityRange - 1).  Specifies the priority
       *   of the caller if there are no available resources.  Lower numbers mean higher
       *   priority.
       *
       * @returns {Promise}
       */
      acquire(priority) {
        if (this._started === false && this._config.autostart === false) {
          this.start();
        }
        if (this._draining) {
          return this._Promise.reject(
            new Error("pool is draining and cannot accept work")
          );
        }
        if (this.spareResourceCapacity < 1 && this._availableObjects.length < 1 && this._config.maxWaitingClients !== void 0 && this._waitingClientsQueue.length >= this._config.maxWaitingClients) {
          return this._Promise.reject(
            new Error("max waitingClients count exceeded")
          );
        }
        const resourceRequest = new ResourceRequest(
          this._config.acquireTimeoutMillis,
          this._Promise
        );
        this._waitingClientsQueue.enqueue(resourceRequest, priority);
        this._dispense();
        return resourceRequest.promise;
      }
      /**
       * [use method, aquires a resource, passes the resource to a user supplied function and releases it]
       * @param  {Function} fn [a function that accepts a resource and returns a promise that resolves/rejects once it has finished using the resource]
       * @return {Promise}      [resolves once the resource is released to the pool]
       */
      use(fn, priority) {
        return this.acquire(priority).then((resource) => {
          return fn(resource).then(
            (result) => {
              this.release(resource);
              return result;
            },
            (err) => {
              this.destroy(resource);
              throw err;
            }
          );
        });
      }
      /**
       * Check if resource is currently on loan from the pool
       *
       * @param {Function} resource
       *    Resource for checking.
       *
       * @returns {Boolean}
       *  True if resource belongs to this pool and false otherwise
       */
      isBorrowedResource(resource) {
        return this._resourceLoans.has(resource);
      }
      /**
       * Return the resource to the pool when it is no longer required.
       *
       * @param {Object} resource
       *   The acquired object to be put back to the pool.
       */
      release(resource) {
        const loan = this._resourceLoans.get(resource);
        if (loan === void 0) {
          return this._Promise.reject(
            new Error("Resource not currently part of this pool")
          );
        }
        this._resourceLoans.delete(resource);
        loan.resolve();
        const pooledResource = loan.pooledResource;
        pooledResource.deallocate();
        this._addPooledResourceToAvailableObjects(pooledResource);
        this._dispense();
        return this._Promise.resolve();
      }
      /**
       * Request the resource to be destroyed. The factory's destroy handler
       * will also be called.
       *
       * This should be called within an acquire() block as an alternative to release().
       *
       * @param {Object} resource
       *   The acquired resource to be destoyed.
       */
      destroy(resource) {
        const loan = this._resourceLoans.get(resource);
        if (loan === void 0) {
          return this._Promise.reject(
            new Error("Resource not currently part of this pool")
          );
        }
        this._resourceLoans.delete(resource);
        loan.resolve();
        const pooledResource = loan.pooledResource;
        pooledResource.deallocate();
        this._destroy(pooledResource);
        this._dispense();
        return this._Promise.resolve();
      }
      _addPooledResourceToAvailableObjects(pooledResource) {
        pooledResource.idle();
        if (this._config.fifo === true) {
          this._availableObjects.push(pooledResource);
        } else {
          this._availableObjects.unshift(pooledResource);
        }
      }
      /**
       * Disallow any new acquire calls and let the request backlog dissapate.
       * The Pool will no longer attempt to maintain a "min" number of resources
       * and will only make new resources on demand.
       * Resolves once all resource requests are fulfilled and all resources are returned to pool and available...
       * Should probably be called "drain work"
       * @returns {Promise}
       */
      drain() {
        this._draining = true;
        return this.__allResourceRequestsSettled().then(() => {
          return this.__allResourcesReturned();
        }).then(() => {
          this._descheduleEvictorRun();
        });
      }
      __allResourceRequestsSettled() {
        if (this._waitingClientsQueue.length > 0) {
          return reflector(this._waitingClientsQueue.tail.promise);
        }
        return this._Promise.resolve();
      }
      // FIXME: this is a horrific mess
      __allResourcesReturned() {
        const ps = Array.from(this._resourceLoans.values()).map((loan) => loan.promise).map(reflector);
        return this._Promise.all(ps);
      }
      /**
       * Forcibly destroys all available resources regardless of timeout.  Intended to be
       * invoked as part of a drain.  Does not prevent the creation of new
       * resources as a result of subsequent calls to acquire.
       *
       * Note that if factory.min > 0 and the pool isn't "draining", the pool will destroy all idle resources
       * in the pool, but replace them with newly created resources up to the
       * specified factory.min value.  If this is not desired, set factory.min
       * to zero before calling clear()
       *
       */
      clear() {
        const reflectedCreatePromises = Array.from(
          this._factoryCreateOperations
        ).map(reflector);
        return this._Promise.all(reflectedCreatePromises).then(() => {
          for (const resource of this._availableObjects) {
            this._destroy(resource);
          }
          const reflectedDestroyPromises = Array.from(
            this._factoryDestroyOperations
          ).map(reflector);
          return reflector(this._Promise.all(reflectedDestroyPromises));
        });
      }
      /**
       * Waits until the pool is ready.
       * We define ready by checking if the current resource number is at least
       * the minimum number defined.
       * @returns {Promise} that resolves when the minimum number is ready.
       */
      ready() {
        return new this._Promise((resolve) => {
          const isReady = () => {
            if (this.available >= this.min) {
              resolve();
            } else {
              setTimeout(isReady, 100);
            }
          };
          isReady();
        });
      }
      /**
       * How many resources are available to allocated
       * (includes resources that have not been tested and may faul validation)
       * NOTE: internal for now as the name is awful and might not be useful to anyone
       * @return {Number} number of resources the pool has to allocate
       */
      get _potentiallyAllocableResourceCount() {
        return this._availableObjects.length + this._testOnBorrowResources.size + this._testOnReturnResources.size + this._factoryCreateOperations.size;
      }
      /**
       * The combined count of the currently created objects and those in the
       * process of being created
       * Does NOT include resources in the process of being destroyed
       * sort of legacy...
       * @return {Number}
       */
      get _count() {
        return this._allObjects.size + this._factoryCreateOperations.size;
      }
      /**
       * How many more resources does the pool have room for
       * @return {Number} number of resources the pool could create before hitting any limits
       */
      get spareResourceCapacity() {
        return this._config.max - (this._allObjects.size + this._factoryCreateOperations.size);
      }
      /**
       * see _count above
       * @return {Number} [description]
       */
      get size() {
        return this._count;
      }
      /**
       * number of available resources
       * @return {Number} [description]
       */
      get available() {
        return this._availableObjects.length;
      }
      /**
       * number of resources that are currently acquired
       * @return {Number} [description]
       */
      get borrowed() {
        return this._resourceLoans.size;
      }
      /**
       * number of waiting acquire calls
       * @return {Number} [description]
       */
      get pending() {
        return this._waitingClientsQueue.length;
      }
      /**
       * maximum size of the pool
       * @return {Number} [description]
       */
      get max() {
        return this._config.max;
      }
      /**
       * minimum size of the pool
       * @return {Number} [description]
       */
      get min() {
        return this._config.min;
      }
    };
    module2.exports = Pool;
  }
});

// node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/index.js
var require_generic_pool = __commonJS({
  "node_modules/.store/generic-pool-npm-3.9.0-21fff1a77f/node_modules/generic-pool/index.js"(exports2, module2) {
    "use strict";
    var Pool = require_Pool();
    var Deque = require_Deque();
    var PriorityQueue = require_PriorityQueue();
    var DefaultEvictor = require_DefaultEvictor();
    module2.exports = {
      Pool,
      Deque,
      PriorityQueue,
      DefaultEvictor,
      createPool: function(factory, config) {
        return new Pool(DefaultEvictor, Deque, PriorityQueue, factory, config);
      }
    };
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/package.json
var require_package = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/package.json"(exports2, module2) {
    module2.exports = {
      name: "@redis/client",
      version: "1.5.12",
      license: "MIT",
      main: "./dist/index.js",
      types: "./dist/index.d.ts",
      files: [
        "dist/"
      ],
      scripts: {
        test: "nyc -r text-summary -r lcov mocha -r source-map-support/register -r ts-node/register './lib/**/*.spec.ts'",
        build: "tsc",
        lint: "eslint ./*.ts ./lib/**/*.ts",
        documentation: "typedoc"
      },
      dependencies: {
        "cluster-key-slot": "1.1.2",
        "generic-pool": "3.9.0",
        yallist: "4.0.0"
      },
      devDependencies: {
        "@istanbuljs/nyc-config-typescript": "^1.0.2",
        "@redis/test-utils": "*",
        "@types/node": "^20.6.2",
        "@types/sinon": "^10.0.16",
        "@types/yallist": "^4.0.1",
        "@typescript-eslint/eslint-plugin": "^6.7.2",
        "@typescript-eslint/parser": "^6.7.2",
        eslint: "^8.49.0",
        nyc: "^15.1.0",
        "release-it": "^16.1.5",
        sinon: "^16.0.0",
        "source-map-support": "^0.5.21",
        "ts-node": "^10.9.1",
        typedoc: "^0.25.1",
        typescript: "^5.2.2"
      },
      engines: {
        node: ">=14"
      },
      repository: {
        type: "git",
        url: "git://github.com/redis/node-redis.git"
      },
      bugs: {
        url: "https://github.com/redis/node-redis/issues"
      },
      homepage: "https://github.com/redis/node-redis/tree/master/packages/client",
      keywords: [
        "redis"
      ]
    };
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/index.js
var require_client = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/client/index.js"(exports2) {
    "use strict";
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _RedisClient_instances;
    var _RedisClient_options;
    var _RedisClient_socket;
    var _RedisClient_queue;
    var _RedisClient_isolationPool;
    var _RedisClient_v4;
    var _RedisClient_selectedDB;
    var _RedisClient_initiateOptions;
    var _RedisClient_initiateQueue;
    var _RedisClient_initiateSocket;
    var _RedisClient_initiateIsolationPool;
    var _RedisClient_legacyMode;
    var _RedisClient_legacySendCommand;
    var _RedisClient_defineLegacyCommand;
    var _RedisClient_pingTimer;
    var _RedisClient_setPingTimer;
    var _RedisClient_sendCommand;
    var _RedisClient_pubSubCommand;
    var _RedisClient_tick;
    var _RedisClient_addMultiCommands;
    var _RedisClient_destroyIsolationPool;
    Object.defineProperty(exports2, "__esModule", { value: true });
    var commands_1 = require_commands2();
    var socket_1 = require_socket();
    var commands_queue_1 = require_commands_queue();
    var multi_command_1 = require_multi_command2();
    var events_1 = require("events");
    var command_options_1 = require_command_options();
    var commander_1 = require_commander();
    var generic_pool_1 = require_generic_pool();
    var errors_1 = require_errors();
    var url_1 = require("url");
    var pub_sub_1 = require_pub_sub();
    var package_json_1 = require_package();
    var RedisClient = class _RedisClient extends events_1.EventEmitter {
      static commandOptions(options) {
        return (0, command_options_1.commandOptions)(options);
      }
      static extend(extensions) {
        const Client = (0, commander_1.attachExtensions)({
          BaseClass: _RedisClient,
          modulesExecutor: _RedisClient.prototype.commandsExecutor,
          modules: extensions?.modules,
          functionsExecutor: _RedisClient.prototype.functionsExecuter,
          functions: extensions?.functions,
          scriptsExecutor: _RedisClient.prototype.scriptsExecuter,
          scripts: extensions?.scripts
        });
        if (Client !== _RedisClient) {
          Client.prototype.Multi = multi_command_1.default.extend(extensions);
        }
        return Client;
      }
      static create(options) {
        return new (_RedisClient.extend(options))(options);
      }
      static parseURL(url) {
        const { hostname, port, protocol, username, password, pathname } = new url_1.URL(url), parsed = {
          socket: {
            host: hostname
          }
        };
        if (protocol === "rediss:") {
          parsed.socket.tls = true;
        } else if (protocol !== "redis:") {
          throw new TypeError("Invalid protocol");
        }
        if (port) {
          parsed.socket.port = Number(port);
        }
        if (username) {
          parsed.username = decodeURIComponent(username);
        }
        if (password) {
          parsed.password = decodeURIComponent(password);
        }
        if (pathname.length > 1) {
          const database = Number(pathname.substring(1));
          if (isNaN(database)) {
            throw new TypeError("Invalid pathname");
          }
          parsed.database = database;
        }
        return parsed;
      }
      get options() {
        return __classPrivateFieldGet(this, _RedisClient_options, "f");
      }
      get isOpen() {
        return __classPrivateFieldGet(this, _RedisClient_socket, "f").isOpen;
      }
      get isReady() {
        return __classPrivateFieldGet(this, _RedisClient_socket, "f").isReady;
      }
      get isPubSubActive() {
        return __classPrivateFieldGet(this, _RedisClient_queue, "f").isPubSubActive;
      }
      get v4() {
        if (!__classPrivateFieldGet(this, _RedisClient_options, "f")?.legacyMode) {
          throw new Error('the client is not in "legacy mode"');
        }
        return __classPrivateFieldGet(this, _RedisClient_v4, "f");
      }
      constructor(options) {
        super();
        _RedisClient_instances.add(this);
        Object.defineProperty(this, "commandOptions", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: _RedisClient.commandOptions
        });
        _RedisClient_options.set(this, void 0);
        _RedisClient_socket.set(this, void 0);
        _RedisClient_queue.set(this, void 0);
        _RedisClient_isolationPool.set(this, void 0);
        _RedisClient_v4.set(this, {});
        _RedisClient_selectedDB.set(this, 0);
        _RedisClient_pingTimer.set(this, void 0);
        Object.defineProperty(this, "select", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.SELECT
        });
        Object.defineProperty(this, "subscribe", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.SUBSCRIBE
        });
        Object.defineProperty(this, "unsubscribe", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.UNSUBSCRIBE
        });
        Object.defineProperty(this, "pSubscribe", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.PSUBSCRIBE
        });
        Object.defineProperty(this, "pUnsubscribe", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.PUNSUBSCRIBE
        });
        Object.defineProperty(this, "sSubscribe", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.SSUBSCRIBE
        });
        Object.defineProperty(this, "sUnsubscribe", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.SUNSUBSCRIBE
        });
        Object.defineProperty(this, "quit", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.QUIT
        });
        Object.defineProperty(this, "multi", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.MULTI
        });
        __classPrivateFieldSet(this, _RedisClient_options, __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateOptions).call(this, options), "f");
        __classPrivateFieldSet(this, _RedisClient_queue, __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateQueue).call(this), "f");
        __classPrivateFieldSet(this, _RedisClient_socket, __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateSocket).call(this), "f");
        __classPrivateFieldSet(this, _RedisClient_isolationPool, __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateIsolationPool).call(this), "f");
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_legacyMode).call(this);
      }
      duplicate(overrides) {
        return new (Object.getPrototypeOf(this)).constructor({
          ...__classPrivateFieldGet(this, _RedisClient_options, "f"),
          ...overrides
        });
      }
      async connect() {
        __classPrivateFieldSet(this, _RedisClient_isolationPool, __classPrivateFieldGet(this, _RedisClient_isolationPool, "f") ?? __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_initiateIsolationPool).call(this), "f");
        await __classPrivateFieldGet(this, _RedisClient_socket, "f").connect();
        return this;
      }
      async commandsExecutor(command, args) {
        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(command, args);
        return (0, commander_1.transformCommandReply)(command, await __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, redisArgs, options), redisArgs.preserve);
      }
      sendCommand(args, options) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, args, options);
      }
      async functionsExecuter(fn, args, name) {
        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(fn, args);
        return (0, commander_1.transformCommandReply)(fn, await this.executeFunction(name, fn, redisArgs, options), redisArgs.preserve);
      }
      executeFunction(name, fn, args, options) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, (0, commander_1.fCallArguments)(name, fn, args), options);
      }
      async scriptsExecuter(script, args) {
        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(script, args);
        return (0, commander_1.transformCommandReply)(script, await this.executeScript(script, redisArgs, options), redisArgs.preserve);
      }
      async executeScript(script, args, options) {
        const redisArgs = ["EVALSHA", script.SHA1];
        if (script.NUMBER_OF_KEYS !== void 0) {
          redisArgs.push(script.NUMBER_OF_KEYS.toString());
        }
        redisArgs.push(...args);
        try {
          return await __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, redisArgs, options);
        } catch (err) {
          if (!err?.message?.startsWith?.("NOSCRIPT")) {
            throw err;
          }
          redisArgs[0] = "EVAL";
          redisArgs[1] = script.SCRIPT;
          return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, redisArgs, options);
        }
      }
      async SELECT(options, db) {
        if (!(0, command_options_1.isCommandOptions)(options)) {
          db = options;
          options = null;
        }
        await __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, ["SELECT", db.toString()], options);
        __classPrivateFieldSet(this, _RedisClient_selectedDB, db, "f");
      }
      SUBSCRIBE(channels, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").subscribe(pub_sub_1.PubSubType.CHANNELS, channels, listener, bufferMode));
      }
      UNSUBSCRIBE(channels, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").unsubscribe(pub_sub_1.PubSubType.CHANNELS, channels, listener, bufferMode));
      }
      PSUBSCRIBE(patterns, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").subscribe(pub_sub_1.PubSubType.PATTERNS, patterns, listener, bufferMode));
      }
      PUNSUBSCRIBE(patterns, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").unsubscribe(pub_sub_1.PubSubType.PATTERNS, patterns, listener, bufferMode));
      }
      SSUBSCRIBE(channels, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").subscribe(pub_sub_1.PubSubType.SHARDED, channels, listener, bufferMode));
      }
      SUNSUBSCRIBE(channels, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").unsubscribe(pub_sub_1.PubSubType.SHARDED, channels, listener, bufferMode));
      }
      getPubSubListeners(type) {
        return __classPrivateFieldGet(this, _RedisClient_queue, "f").getPubSubListeners(type);
      }
      extendPubSubChannelListeners(type, channel, listeners) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").extendPubSubChannelListeners(type, channel, listeners));
      }
      extendPubSubListeners(type, listeners) {
        return __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_pubSubCommand).call(this, __classPrivateFieldGet(this, _RedisClient_queue, "f").extendPubSubListeners(type, listeners));
      }
      QUIT() {
        return __classPrivateFieldGet(this, _RedisClient_socket, "f").quit(async () => {
          if (__classPrivateFieldGet(this, _RedisClient_pingTimer, "f"))
            clearTimeout(__classPrivateFieldGet(this, _RedisClient_pingTimer, "f"));
          const quitPromise = __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(["QUIT"]);
          __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
          const [reply] = await Promise.all([
            quitPromise,
            __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_destroyIsolationPool).call(this)
          ]);
          return reply;
        });
      }
      executeIsolated(fn) {
        if (!__classPrivateFieldGet(this, _RedisClient_isolationPool, "f"))
          return Promise.reject(new errors_1.ClientClosedError());
        return __classPrivateFieldGet(this, _RedisClient_isolationPool, "f").use(fn);
      }
      MULTI() {
        return new this.Multi(this.multiExecutor.bind(this), __classPrivateFieldGet(this, _RedisClient_options, "f")?.legacyMode);
      }
      async multiExecutor(commands, selectedDB, chainId) {
        if (!__classPrivateFieldGet(this, _RedisClient_socket, "f").isOpen) {
          return Promise.reject(new errors_1.ClientClosedError());
        }
        const promise = chainId ? (
          // if `chainId` has a value, it's a `MULTI` (and not "pipeline") - need to add the `MULTI` and `EXEC` commands
          Promise.all([
            __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(["MULTI"], { chainId }),
            __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_addMultiCommands).call(this, commands, chainId),
            __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(["EXEC"], { chainId })
          ])
        ) : __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_addMultiCommands).call(this, commands);
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
        const results = await promise;
        if (selectedDB !== void 0) {
          __classPrivateFieldSet(this, _RedisClient_selectedDB, selectedDB, "f");
        }
        return results;
      }
      async *scanIterator(options) {
        let cursor = 0;
        do {
          const reply = await this.scan(cursor, options);
          cursor = reply.cursor;
          for (const key of reply.keys) {
            yield key;
          }
        } while (cursor !== 0);
      }
      async *hScanIterator(key, options) {
        let cursor = 0;
        do {
          const reply = await this.hScan(key, cursor, options);
          cursor = reply.cursor;
          for (const tuple of reply.tuples) {
            yield tuple;
          }
        } while (cursor !== 0);
      }
      async *sScanIterator(key, options) {
        let cursor = 0;
        do {
          const reply = await this.sScan(key, cursor, options);
          cursor = reply.cursor;
          for (const member of reply.members) {
            yield member;
          }
        } while (cursor !== 0);
      }
      async *zScanIterator(key, options) {
        let cursor = 0;
        do {
          const reply = await this.zScan(key, cursor, options);
          cursor = reply.cursor;
          for (const member of reply.members) {
            yield member;
          }
        } while (cursor !== 0);
      }
      async disconnect() {
        if (__classPrivateFieldGet(this, _RedisClient_pingTimer, "f"))
          clearTimeout(__classPrivateFieldGet(this, _RedisClient_pingTimer, "f"));
        __classPrivateFieldGet(this, _RedisClient_queue, "f").flushAll(new errors_1.DisconnectsClientError());
        __classPrivateFieldGet(this, _RedisClient_socket, "f").disconnect();
        await __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_destroyIsolationPool).call(this);
      }
      ref() {
        __classPrivateFieldGet(this, _RedisClient_socket, "f").ref();
      }
      unref() {
        __classPrivateFieldGet(this, _RedisClient_socket, "f").unref();
      }
    };
    exports2.default = RedisClient;
    _RedisClient_options = /* @__PURE__ */ new WeakMap(), _RedisClient_socket = /* @__PURE__ */ new WeakMap(), _RedisClient_queue = /* @__PURE__ */ new WeakMap(), _RedisClient_isolationPool = /* @__PURE__ */ new WeakMap(), _RedisClient_v4 = /* @__PURE__ */ new WeakMap(), _RedisClient_selectedDB = /* @__PURE__ */ new WeakMap(), _RedisClient_pingTimer = /* @__PURE__ */ new WeakMap(), _RedisClient_instances = /* @__PURE__ */ new WeakSet(), _RedisClient_initiateOptions = function _RedisClient_initiateOptions2(options) {
      if (options?.url) {
        const parsed = RedisClient.parseURL(options.url);
        if (options.socket) {
          parsed.socket = Object.assign(options.socket, parsed.socket);
        }
        Object.assign(options, parsed);
      }
      if (options?.database) {
        __classPrivateFieldSet(this, _RedisClient_selectedDB, options.database, "f");
      }
      return options;
    }, _RedisClient_initiateQueue = function _RedisClient_initiateQueue2() {
      return new commands_queue_1.default(__classPrivateFieldGet(this, _RedisClient_options, "f")?.commandsQueueMaxLength, (channel, listeners) => this.emit("sharded-channel-moved", channel, listeners));
    }, _RedisClient_initiateSocket = function _RedisClient_initiateSocket2() {
      const socketInitiator = async () => {
        const promises = [];
        if (__classPrivateFieldGet(this, _RedisClient_selectedDB, "f") !== 0) {
          promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(["SELECT", __classPrivateFieldGet(this, _RedisClient_selectedDB, "f").toString()], { asap: true }));
        }
        if (__classPrivateFieldGet(this, _RedisClient_options, "f")?.readonly) {
          promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(commands_1.default.READONLY.transformArguments(), { asap: true }));
        }
        if (!__classPrivateFieldGet(this, _RedisClient_options, "f")?.disableClientInfo) {
          promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(["CLIENT", "SETINFO", "LIB-VER", package_json_1.version], { asap: true }).catch((err) => {
            if (!(err instanceof errors_1.ErrorReply)) {
              throw err;
            }
          }));
          promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand([
            "CLIENT",
            "SETINFO",
            "LIB-NAME",
            __classPrivateFieldGet(this, _RedisClient_options, "f")?.clientInfoTag ? `node-redis(${__classPrivateFieldGet(this, _RedisClient_options, "f").clientInfoTag})` : "node-redis"
          ], { asap: true }).catch((err) => {
            if (!(err instanceof errors_1.ErrorReply)) {
              throw err;
            }
          }));
        }
        if (__classPrivateFieldGet(this, _RedisClient_options, "f")?.name) {
          promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(commands_1.default.CLIENT_SETNAME.transformArguments(__classPrivateFieldGet(this, _RedisClient_options, "f").name), { asap: true }));
        }
        if (__classPrivateFieldGet(this, _RedisClient_options, "f")?.username || __classPrivateFieldGet(this, _RedisClient_options, "f")?.password) {
          promises.push(__classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(commands_1.default.AUTH.transformArguments({
            username: __classPrivateFieldGet(this, _RedisClient_options, "f").username,
            password: __classPrivateFieldGet(this, _RedisClient_options, "f").password ?? ""
          }), { asap: true }));
        }
        const resubscribePromise = __classPrivateFieldGet(this, _RedisClient_queue, "f").resubscribe();
        if (resubscribePromise) {
          promises.push(resubscribePromise);
        }
        if (promises.length) {
          __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this, true);
          await Promise.all(promises);
        }
      };
      return new socket_1.default(socketInitiator, __classPrivateFieldGet(this, _RedisClient_options, "f")?.socket).on("data", (chunk) => __classPrivateFieldGet(this, _RedisClient_queue, "f").onReplyChunk(chunk)).on("error", (err) => {
        this.emit("error", err);
        if (__classPrivateFieldGet(this, _RedisClient_socket, "f").isOpen && !__classPrivateFieldGet(this, _RedisClient_options, "f")?.disableOfflineQueue) {
          __classPrivateFieldGet(this, _RedisClient_queue, "f").flushWaitingForReply(err);
        } else {
          __classPrivateFieldGet(this, _RedisClient_queue, "f").flushAll(err);
        }
      }).on("connect", () => {
        this.emit("connect");
      }).on("ready", () => {
        this.emit("ready");
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_setPingTimer).call(this);
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
      }).on("reconnecting", () => this.emit("reconnecting")).on("drain", () => __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this)).on("end", () => this.emit("end"));
    }, _RedisClient_initiateIsolationPool = function _RedisClient_initiateIsolationPool2() {
      return (0, generic_pool_1.createPool)({
        create: async () => {
          const duplicate = this.duplicate({
            isolationPoolOptions: void 0
          }).on("error", (err) => this.emit("error", err));
          await duplicate.connect();
          return duplicate;
        },
        destroy: (client) => client.disconnect()
      }, __classPrivateFieldGet(this, _RedisClient_options, "f")?.isolationPoolOptions);
    }, _RedisClient_legacyMode = function _RedisClient_legacyMode2() {
      var _a, _b;
      if (!__classPrivateFieldGet(this, _RedisClient_options, "f")?.legacyMode)
        return;
      __classPrivateFieldGet(this, _RedisClient_v4, "f").sendCommand = __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).bind(this);
      this.sendCommand = (...args) => {
        const result = __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_legacySendCommand).call(this, ...args);
        if (result) {
          result.promise.then((reply) => result.callback(null, reply)).catch((err) => result.callback(err));
        }
      };
      for (const [name, command] of Object.entries(commands_1.default)) {
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, name, command);
        (_a = this)[_b = name.toLowerCase()] ?? (_a[_b] = this[name]);
      }
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "SELECT");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "select");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "SUBSCRIBE");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "subscribe");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "PSUBSCRIBE");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "pSubscribe");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "UNSUBSCRIBE");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "unsubscribe");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "PUNSUBSCRIBE");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "pUnsubscribe");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "QUIT");
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_defineLegacyCommand).call(this, "quit");
    }, _RedisClient_legacySendCommand = function _RedisClient_legacySendCommand2(...args) {
      const callback = typeof args[args.length - 1] === "function" ? args.pop() : void 0;
      const promise = __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, (0, commander_1.transformLegacyCommandArguments)(args));
      if (callback)
        return {
          promise,
          callback
        };
      promise.catch((err) => this.emit("error", err));
    }, _RedisClient_defineLegacyCommand = function _RedisClient_defineLegacyCommand2(name, command) {
      __classPrivateFieldGet(this, _RedisClient_v4, "f")[name] = this[name].bind(this);
      this[name] = command && command.TRANSFORM_LEGACY_REPLY && command.transformReply ? (...args) => {
        const result = __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_legacySendCommand).call(this, name, ...args);
        if (result) {
          result.promise.then((reply) => result.callback(null, command.transformReply(reply))).catch((err) => result.callback(err));
        }
      } : (...args) => this.sendCommand(name, ...args);
    }, _RedisClient_setPingTimer = function _RedisClient_setPingTimer2() {
      if (!__classPrivateFieldGet(this, _RedisClient_options, "f")?.pingInterval || !__classPrivateFieldGet(this, _RedisClient_socket, "f").isReady)
        return;
      clearTimeout(__classPrivateFieldGet(this, _RedisClient_pingTimer, "f"));
      __classPrivateFieldSet(this, _RedisClient_pingTimer, setTimeout(() => {
        if (!__classPrivateFieldGet(this, _RedisClient_socket, "f").isReady)
          return;
        __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_sendCommand).call(this, ["PING"]).then((reply) => this.emit("ping-interval", reply)).catch((err) => this.emit("error", err)).finally(() => __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_setPingTimer2).call(this));
      }, __classPrivateFieldGet(this, _RedisClient_options, "f").pingInterval), "f");
    }, _RedisClient_sendCommand = function _RedisClient_sendCommand2(args, options) {
      if (!__classPrivateFieldGet(this, _RedisClient_socket, "f").isOpen) {
        return Promise.reject(new errors_1.ClientClosedError());
      } else if (options?.isolated) {
        return this.executeIsolated((isolatedClient) => isolatedClient.sendCommand(args, {
          ...options,
          isolated: false
        }));
      } else if (!__classPrivateFieldGet(this, _RedisClient_socket, "f").isReady && __classPrivateFieldGet(this, _RedisClient_options, "f")?.disableOfflineQueue) {
        return Promise.reject(new errors_1.ClientOfflineError());
      }
      const promise = __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(args, options);
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
      return promise;
    }, _RedisClient_pubSubCommand = function _RedisClient_pubSubCommand2(promise) {
      if (promise === void 0)
        return Promise.resolve();
      __classPrivateFieldGet(this, _RedisClient_instances, "m", _RedisClient_tick).call(this);
      return promise;
    }, _RedisClient_tick = function _RedisClient_tick2(force = false) {
      if (__classPrivateFieldGet(this, _RedisClient_socket, "f").writableNeedDrain || !force && !__classPrivateFieldGet(this, _RedisClient_socket, "f").isReady) {
        return;
      }
      __classPrivateFieldGet(this, _RedisClient_socket, "f").cork();
      while (!__classPrivateFieldGet(this, _RedisClient_socket, "f").writableNeedDrain) {
        const args = __classPrivateFieldGet(this, _RedisClient_queue, "f").getCommandToSend();
        if (args === void 0)
          break;
        __classPrivateFieldGet(this, _RedisClient_socket, "f").writeCommand(args);
      }
    }, _RedisClient_addMultiCommands = function _RedisClient_addMultiCommands2(commands, chainId) {
      return Promise.all(commands.map(({ args }) => __classPrivateFieldGet(this, _RedisClient_queue, "f").addCommand(args, { chainId })));
    }, _RedisClient_destroyIsolationPool = async function _RedisClient_destroyIsolationPool2() {
      await __classPrivateFieldGet(this, _RedisClient_isolationPool, "f").drain();
      await __classPrivateFieldGet(this, _RedisClient_isolationPool, "f").clear();
      __classPrivateFieldSet(this, _RedisClient_isolationPool, void 0, "f");
    };
    (0, commander_1.attachCommands)({
      BaseClass: RedisClient,
      commands: commands_1.default,
      executor: RedisClient.prototype.commandsExecutor
    });
    RedisClient.prototype.Multi = multi_command_1.default;
  }
});

// node_modules/.store/cluster-key-slot-npm-1.1.2-0571a28825/node_modules/cluster-key-slot/lib/index.js
var require_lib = __commonJS({
  "node_modules/.store/cluster-key-slot-npm-1.1.2-0571a28825/node_modules/cluster-key-slot/lib/index.js"(exports2, module2) {
    "use strict";
    var lookup = [
      0,
      4129,
      8258,
      12387,
      16516,
      20645,
      24774,
      28903,
      33032,
      37161,
      41290,
      45419,
      49548,
      53677,
      57806,
      61935,
      4657,
      528,
      12915,
      8786,
      21173,
      17044,
      29431,
      25302,
      37689,
      33560,
      45947,
      41818,
      54205,
      50076,
      62463,
      58334,
      9314,
      13379,
      1056,
      5121,
      25830,
      29895,
      17572,
      21637,
      42346,
      46411,
      34088,
      38153,
      58862,
      62927,
      50604,
      54669,
      13907,
      9842,
      5649,
      1584,
      30423,
      26358,
      22165,
      18100,
      46939,
      42874,
      38681,
      34616,
      63455,
      59390,
      55197,
      51132,
      18628,
      22757,
      26758,
      30887,
      2112,
      6241,
      10242,
      14371,
      51660,
      55789,
      59790,
      63919,
      35144,
      39273,
      43274,
      47403,
      23285,
      19156,
      31415,
      27286,
      6769,
      2640,
      14899,
      10770,
      56317,
      52188,
      64447,
      60318,
      39801,
      35672,
      47931,
      43802,
      27814,
      31879,
      19684,
      23749,
      11298,
      15363,
      3168,
      7233,
      60846,
      64911,
      52716,
      56781,
      44330,
      48395,
      36200,
      40265,
      32407,
      28342,
      24277,
      20212,
      15891,
      11826,
      7761,
      3696,
      65439,
      61374,
      57309,
      53244,
      48923,
      44858,
      40793,
      36728,
      37256,
      33193,
      45514,
      41451,
      53516,
      49453,
      61774,
      57711,
      4224,
      161,
      12482,
      8419,
      20484,
      16421,
      28742,
      24679,
      33721,
      37784,
      41979,
      46042,
      49981,
      54044,
      58239,
      62302,
      689,
      4752,
      8947,
      13010,
      16949,
      21012,
      25207,
      29270,
      46570,
      42443,
      38312,
      34185,
      62830,
      58703,
      54572,
      50445,
      13538,
      9411,
      5280,
      1153,
      29798,
      25671,
      21540,
      17413,
      42971,
      47098,
      34713,
      38840,
      59231,
      63358,
      50973,
      55100,
      9939,
      14066,
      1681,
      5808,
      26199,
      30326,
      17941,
      22068,
      55628,
      51565,
      63758,
      59695,
      39368,
      35305,
      47498,
      43435,
      22596,
      18533,
      30726,
      26663,
      6336,
      2273,
      14466,
      10403,
      52093,
      56156,
      60223,
      64286,
      35833,
      39896,
      43963,
      48026,
      19061,
      23124,
      27191,
      31254,
      2801,
      6864,
      10931,
      14994,
      64814,
      60687,
      56684,
      52557,
      48554,
      44427,
      40424,
      36297,
      31782,
      27655,
      23652,
      19525,
      15522,
      11395,
      7392,
      3265,
      61215,
      65342,
      53085,
      57212,
      44955,
      49082,
      36825,
      40952,
      28183,
      32310,
      20053,
      24180,
      11923,
      16050,
      3793,
      7920
    ];
    var toUTF8Array = function toUTF8Array2(str) {
      var char;
      var i = 0;
      var p = 0;
      var utf8 = [];
      var len = str.length;
      for (; i < len; i++) {
        char = str.charCodeAt(i);
        if (char < 128) {
          utf8[p++] = char;
        } else if (char < 2048) {
          utf8[p++] = char >> 6 | 192;
          utf8[p++] = char & 63 | 128;
        } else if ((char & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
          char = 65536 + ((char & 1023) << 10) + (str.charCodeAt(++i) & 1023);
          utf8[p++] = char >> 18 | 240;
          utf8[p++] = char >> 12 & 63 | 128;
          utf8[p++] = char >> 6 & 63 | 128;
          utf8[p++] = char & 63 | 128;
        } else {
          utf8[p++] = char >> 12 | 224;
          utf8[p++] = char >> 6 & 63 | 128;
          utf8[p++] = char & 63 | 128;
        }
      }
      return utf8;
    };
    var generate = module2.exports = function generate2(str) {
      var char;
      var i = 0;
      var start = -1;
      var result = 0;
      var resultHash = 0;
      var utf8 = typeof str === "string" ? toUTF8Array(str) : str;
      var len = utf8.length;
      while (i < len) {
        char = utf8[i++];
        if (start === -1) {
          if (char === 123) {
            start = i;
          }
        } else if (char !== 125) {
          resultHash = lookup[(char ^ resultHash >> 8) & 255] ^ resultHash << 8;
        } else if (i - 1 !== start) {
          return resultHash & 16383;
        }
        result = lookup[(char ^ result >> 8) & 255] ^ result << 8;
      }
      return result & 16383;
    };
    module2.exports.generateMulti = function generateMulti(keys) {
      var i = 1;
      var len = keys.length;
      var base = generate(keys[0]);
      while (i < len) {
        if (generate(keys[i++]) !== base)
          return -1;
      }
      return base;
    };
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/cluster/cluster-slots.js
var require_cluster_slots = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/cluster/cluster-slots.js"(exports2) {
    "use strict";
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _RedisClusterSlots_instances;
    var _a;
    var _RedisClusterSlots_SLOTS;
    var _RedisClusterSlots_options;
    var _RedisClusterSlots_Client;
    var _RedisClusterSlots_emit;
    var _RedisClusterSlots_isOpen;
    var _RedisClusterSlots_discoverWithRootNodes;
    var _RedisClusterSlots_resetSlots;
    var _RedisClusterSlots_discover;
    var _RedisClusterSlots_getShards;
    var _RedisClusterSlots_getNodeAddress;
    var _RedisClusterSlots_clientOptionsDefaults;
    var _RedisClusterSlots_initiateSlotNode;
    var _RedisClusterSlots_createClient;
    var _RedisClusterSlots_createNodeClient;
    var _RedisClusterSlots_runningRediscoverPromise;
    var _RedisClusterSlots_rediscover;
    var _RedisClusterSlots_destroy;
    var _RedisClusterSlots_execOnNodeClient;
    var _RedisClusterSlots_iterateAllNodes;
    var _RedisClusterSlots_randomNodeIterator;
    var _RedisClusterSlots_slotNodesIterator;
    var _RedisClusterSlots_initiatePubSubClient;
    var _RedisClusterSlots_initiateShardedPubSubClient;
    Object.defineProperty(exports2, "__esModule", { value: true });
    var client_1 = require_client();
    var errors_1 = require_errors();
    var util_1 = require("util");
    var pub_sub_1 = require_pub_sub();
    var calculateSlot = require_lib();
    var RedisClusterSlots = class _RedisClusterSlots {
      get isOpen() {
        return __classPrivateFieldGet(this, _RedisClusterSlots_isOpen, "f");
      }
      constructor(options, emit) {
        _RedisClusterSlots_instances.add(this);
        _RedisClusterSlots_options.set(this, void 0);
        _RedisClusterSlots_Client.set(this, void 0);
        _RedisClusterSlots_emit.set(this, void 0);
        Object.defineProperty(this, "slots", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: new Array(__classPrivateFieldGet(_RedisClusterSlots, _a, "f", _RedisClusterSlots_SLOTS))
        });
        Object.defineProperty(this, "shards", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: new Array()
        });
        Object.defineProperty(this, "masters", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: new Array()
        });
        Object.defineProperty(this, "replicas", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: new Array()
        });
        Object.defineProperty(this, "nodeByAddress", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: /* @__PURE__ */ new Map()
        });
        Object.defineProperty(this, "pubSubNode", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        _RedisClusterSlots_isOpen.set(this, false);
        _RedisClusterSlots_runningRediscoverPromise.set(this, void 0);
        _RedisClusterSlots_randomNodeIterator.set(this, void 0);
        __classPrivateFieldSet(this, _RedisClusterSlots_options, options, "f");
        __classPrivateFieldSet(this, _RedisClusterSlots_Client, client_1.default.extend(options), "f");
        __classPrivateFieldSet(this, _RedisClusterSlots_emit, emit, "f");
      }
      async connect() {
        if (__classPrivateFieldGet(this, _RedisClusterSlots_isOpen, "f")) {
          throw new Error("Cluster already open");
        }
        __classPrivateFieldSet(this, _RedisClusterSlots_isOpen, true, "f");
        try {
          await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discoverWithRootNodes).call(this);
        } catch (err) {
          __classPrivateFieldSet(this, _RedisClusterSlots_isOpen, false, "f");
          throw err;
        }
      }
      nodeClient(node) {
        return node.client ?? __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_createNodeClient).call(this, node);
      }
      async rediscover(startWith) {
        __classPrivateFieldSet(this, _RedisClusterSlots_runningRediscoverPromise, __classPrivateFieldGet(this, _RedisClusterSlots_runningRediscoverPromise, "f") ?? __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_rediscover).call(this, startWith).finally(() => __classPrivateFieldSet(this, _RedisClusterSlots_runningRediscoverPromise, void 0, "f")), "f");
        return __classPrivateFieldGet(this, _RedisClusterSlots_runningRediscoverPromise, "f");
      }
      quit() {
        return __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_destroy).call(this, (client) => client.quit());
      }
      disconnect() {
        return __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_destroy).call(this, (client) => client.disconnect());
      }
      getClient(firstKey, isReadonly) {
        if (!firstKey) {
          return this.nodeClient(this.getRandomNode());
        }
        const slotNumber = calculateSlot(firstKey);
        if (!isReadonly) {
          return this.nodeClient(this.slots[slotNumber].master);
        }
        return this.nodeClient(this.getSlotRandomNode(slotNumber));
      }
      getRandomNode() {
        __classPrivateFieldSet(this, _RedisClusterSlots_randomNodeIterator, __classPrivateFieldGet(this, _RedisClusterSlots_randomNodeIterator, "f") ?? __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_iterateAllNodes).call(this), "f");
        return __classPrivateFieldGet(this, _RedisClusterSlots_randomNodeIterator, "f").next().value;
      }
      getSlotRandomNode(slotNumber) {
        const slot = this.slots[slotNumber];
        if (!slot.replicas?.length) {
          return slot.master;
        }
        slot.nodesIterator ?? (slot.nodesIterator = __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_slotNodesIterator).call(this, slot));
        return slot.nodesIterator.next().value;
      }
      getMasterByAddress(address) {
        const master = this.nodeByAddress.get(address);
        if (!master)
          return;
        return this.nodeClient(master);
      }
      getPubSubClient() {
        return this.pubSubNode ? this.pubSubNode.client : __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiatePubSubClient).call(this);
      }
      async executeUnsubscribeCommand(unsubscribe) {
        const client = await this.getPubSubClient();
        await unsubscribe(client);
        if (!client.isPubSubActive) {
          await client.disconnect();
          this.pubSubNode = void 0;
        }
      }
      getShardedPubSubClient(channel) {
        const { master } = this.slots[calculateSlot(channel)];
        return master.pubSubClient ?? __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateShardedPubSubClient).call(this, master);
      }
      async executeShardedUnsubscribeCommand(channel, unsubscribe) {
        const { master } = this.slots[calculateSlot(channel)];
        if (!master.pubSubClient)
          return Promise.resolve();
        const client = await master.pubSubClient;
        await unsubscribe(client);
        if (!client.isPubSubActive) {
          await client.disconnect();
          master.pubSubClient = void 0;
        }
      }
    };
    exports2.default = RedisClusterSlots;
    _a = RedisClusterSlots, _RedisClusterSlots_options = /* @__PURE__ */ new WeakMap(), _RedisClusterSlots_Client = /* @__PURE__ */ new WeakMap(), _RedisClusterSlots_emit = /* @__PURE__ */ new WeakMap(), _RedisClusterSlots_isOpen = /* @__PURE__ */ new WeakMap(), _RedisClusterSlots_runningRediscoverPromise = /* @__PURE__ */ new WeakMap(), _RedisClusterSlots_randomNodeIterator = /* @__PURE__ */ new WeakMap(), _RedisClusterSlots_instances = /* @__PURE__ */ new WeakSet(), _RedisClusterSlots_discoverWithRootNodes = async function _RedisClusterSlots_discoverWithRootNodes2() {
      let start = Math.floor(Math.random() * __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").rootNodes.length);
      for (let i = start; i < __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").rootNodes.length; i++) {
        if (await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discover).call(this, __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").rootNodes[i]))
          return;
      }
      for (let i = 0; i < start; i++) {
        if (await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discover).call(this, __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").rootNodes[i]))
          return;
      }
      throw new errors_1.RootNodesUnavailableError();
    }, _RedisClusterSlots_resetSlots = function _RedisClusterSlots_resetSlots2() {
      this.slots = new Array(__classPrivateFieldGet(RedisClusterSlots, _a, "f", _RedisClusterSlots_SLOTS));
      this.shards = [];
      this.masters = [];
      this.replicas = [];
      __classPrivateFieldSet(this, _RedisClusterSlots_randomNodeIterator, void 0, "f");
    }, _RedisClusterSlots_discover = async function _RedisClusterSlots_discover2(rootNode) {
      __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_resetSlots).call(this);
      const addressesInUse = /* @__PURE__ */ new Set();
      try {
        const shards = await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getShards).call(this, rootNode), promises = [], eagerConnect = __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").minimizeConnections !== true;
        for (const { from, to, master, replicas } of shards) {
          const shard = {
            master: __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateSlotNode).call(this, master, false, eagerConnect, addressesInUse, promises)
          };
          if (__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").useReplicas) {
            shard.replicas = replicas.map((replica) => __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiateSlotNode).call(this, replica, true, eagerConnect, addressesInUse, promises));
          }
          this.shards.push(shard);
          for (let i = from; i <= to; i++) {
            this.slots[i] = shard;
          }
        }
        if (this.pubSubNode && !addressesInUse.has(this.pubSubNode.address)) {
          if (util_1.types.isPromise(this.pubSubNode.client)) {
            promises.push(this.pubSubNode.client.then((client) => client.disconnect()));
            this.pubSubNode = void 0;
          } else {
            promises.push(this.pubSubNode.client.disconnect());
            const channelsListeners = this.pubSubNode.client.getPubSubListeners(pub_sub_1.PubSubType.CHANNELS), patternsListeners = this.pubSubNode.client.getPubSubListeners(pub_sub_1.PubSubType.PATTERNS);
            if (channelsListeners.size || patternsListeners.size) {
              promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_initiatePubSubClient).call(this, {
                [pub_sub_1.PubSubType.CHANNELS]: channelsListeners,
                [pub_sub_1.PubSubType.PATTERNS]: patternsListeners
              }));
            }
          }
        }
        for (const [address, node] of this.nodeByAddress.entries()) {
          if (addressesInUse.has(address))
            continue;
          if (node.client) {
            promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, node.client, (client) => client.disconnect()));
          }
          const { pubSubClient } = node;
          if (pubSubClient) {
            promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, pubSubClient, (client) => client.disconnect()));
          }
          this.nodeByAddress.delete(address);
        }
        await Promise.all(promises);
        return true;
      } catch (err) {
        __classPrivateFieldGet(this, _RedisClusterSlots_emit, "f").call(this, "error", err);
        return false;
      }
    }, _RedisClusterSlots_getShards = async function _RedisClusterSlots_getShards2(rootNode) {
      const client = new (__classPrivateFieldGet(this, _RedisClusterSlots_Client, "f"))(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_clientOptionsDefaults).call(this, rootNode, true));
      client.on("error", (err) => __classPrivateFieldGet(this, _RedisClusterSlots_emit, "f").call(this, "error", err));
      await client.connect();
      try {
        return await client.clusterSlots();
      } finally {
        await client.disconnect();
      }
    }, _RedisClusterSlots_getNodeAddress = function _RedisClusterSlots_getNodeAddress2(address) {
      switch (typeof __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").nodeAddressMap) {
        case "object":
          return __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").nodeAddressMap[address];
        case "function":
          return __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").nodeAddressMap(address);
      }
    }, _RedisClusterSlots_clientOptionsDefaults = function _RedisClusterSlots_clientOptionsDefaults2(options, disableReconnect) {
      let result;
      if (__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults) {
        let socket;
        if (__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults.socket) {
          socket = options?.socket ? {
            ...__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults.socket,
            ...options.socket
          } : __classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults.socket;
        } else {
          socket = options?.socket;
        }
        result = {
          ...__classPrivateFieldGet(this, _RedisClusterSlots_options, "f").defaults,
          ...options,
          socket
        };
      } else {
        result = options;
      }
      if (disableReconnect) {
        result ?? (result = {});
        result.socket ?? (result.socket = {});
        result.socket.reconnectStrategy = false;
      }
      return result;
    }, _RedisClusterSlots_initiateSlotNode = function _RedisClusterSlots_initiateSlotNode2({ id, ip, port }, readonly, eagerConnent, addressesInUse, promises) {
      const address = `${ip}:${port}`;
      addressesInUse.add(address);
      let node = this.nodeByAddress.get(address);
      if (!node) {
        node = {
          id,
          host: ip,
          port,
          address,
          readonly,
          client: void 0
        };
        if (eagerConnent) {
          promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_createNodeClient).call(this, node));
        }
        this.nodeByAddress.set(address, node);
      }
      (readonly ? this.replicas : this.masters).push(node);
      return node;
    }, _RedisClusterSlots_createClient = async function _RedisClusterSlots_createClient2(node, readonly = node.readonly) {
      const client = new (__classPrivateFieldGet(this, _RedisClusterSlots_Client, "f"))(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_clientOptionsDefaults).call(this, {
        socket: __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_getNodeAddress).call(this, node.address) ?? {
          host: node.host,
          port: node.port
        },
        readonly
      }));
      client.on("error", (err) => __classPrivateFieldGet(this, _RedisClusterSlots_emit, "f").call(this, "error", err));
      await client.connect();
      return client;
    }, _RedisClusterSlots_createNodeClient = function _RedisClusterSlots_createNodeClient2(node) {
      const promise = __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_createClient).call(this, node).then((client) => {
        node.client = client;
        return client;
      }).catch((err) => {
        node.client = void 0;
        throw err;
      });
      node.client = promise;
      return promise;
    }, _RedisClusterSlots_rediscover = async function _RedisClusterSlots_rediscover2(startWith) {
      if (await __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discover).call(this, startWith.options))
        return;
      return __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_discoverWithRootNodes).call(this);
    }, _RedisClusterSlots_destroy = async function _RedisClusterSlots_destroy2(fn) {
      __classPrivateFieldSet(this, _RedisClusterSlots_isOpen, false, "f");
      const promises = [];
      for (const { master, replicas } of this.shards) {
        if (master.client) {
          promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, master.client, fn));
        }
        if (master.pubSubClient) {
          promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, master.pubSubClient, fn));
        }
        if (replicas) {
          for (const { client } of replicas) {
            if (client) {
              promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, client, fn));
            }
          }
        }
      }
      if (this.pubSubNode) {
        promises.push(__classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_execOnNodeClient).call(this, this.pubSubNode.client, fn));
        this.pubSubNode = void 0;
      }
      __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_resetSlots).call(this);
      this.nodeByAddress.clear();
      await Promise.allSettled(promises);
    }, _RedisClusterSlots_execOnNodeClient = function _RedisClusterSlots_execOnNodeClient2(client, fn) {
      return util_1.types.isPromise(client) ? client.then(fn) : fn(client);
    }, _RedisClusterSlots_iterateAllNodes = function* _RedisClusterSlots_iterateAllNodes2() {
      let i = Math.floor(Math.random() * (this.masters.length + this.replicas.length));
      if (i < this.masters.length) {
        do {
          yield this.masters[i];
        } while (++i < this.masters.length);
        for (const replica of this.replicas) {
          yield replica;
        }
      } else {
        i -= this.masters.length;
        do {
          yield this.replicas[i];
        } while (++i < this.replicas.length);
      }
      while (true) {
        for (const master of this.masters) {
          yield master;
        }
        for (const replica of this.replicas) {
          yield replica;
        }
      }
    }, _RedisClusterSlots_slotNodesIterator = function* _RedisClusterSlots_slotNodesIterator2(slot) {
      let i = Math.floor(Math.random() * (1 + slot.replicas.length));
      if (i < slot.replicas.length) {
        do {
          yield slot.replicas[i];
        } while (++i < slot.replicas.length);
      }
      while (true) {
        yield slot.master;
        for (const replica of slot.replicas) {
          yield replica;
        }
      }
    }, _RedisClusterSlots_initiatePubSubClient = async function _RedisClusterSlots_initiatePubSubClient2(toResubscribe) {
      const index = Math.floor(Math.random() * (this.masters.length + this.replicas.length)), node = index < this.masters.length ? this.masters[index] : this.replicas[index - this.masters.length];
      this.pubSubNode = {
        address: node.address,
        client: __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_createClient).call(this, node, true).then(async (client) => {
          if (toResubscribe) {
            await Promise.all([
              client.extendPubSubListeners(pub_sub_1.PubSubType.CHANNELS, toResubscribe[pub_sub_1.PubSubType.CHANNELS]),
              client.extendPubSubListeners(pub_sub_1.PubSubType.PATTERNS, toResubscribe[pub_sub_1.PubSubType.PATTERNS])
            ]);
          }
          this.pubSubNode.client = client;
          return client;
        }).catch((err) => {
          this.pubSubNode = void 0;
          throw err;
        })
      };
      return this.pubSubNode.client;
    }, _RedisClusterSlots_initiateShardedPubSubClient = function _RedisClusterSlots_initiateShardedPubSubClient2(master) {
      const promise = __classPrivateFieldGet(this, _RedisClusterSlots_instances, "m", _RedisClusterSlots_createClient).call(this, master, true).then((client) => {
        client.on("server-sunsubscribe", async (channel, listeners) => {
          try {
            await this.rediscover(client);
            const redirectTo = await this.getShardedPubSubClient(channel);
            redirectTo.extendPubSubChannelListeners(pub_sub_1.PubSubType.SHARDED, channel, listeners);
          } catch (err) {
            __classPrivateFieldGet(this, _RedisClusterSlots_emit, "f").call(this, "sharded-shannel-moved-error", err, channel, listeners);
          }
        });
        master.pubSubClient = client;
        return client;
      }).catch((err) => {
        master.pubSubClient = void 0;
        throw err;
      });
      master.pubSubClient = promise;
      return promise;
    };
    _RedisClusterSlots_SLOTS = { value: 16384 };
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/cluster/multi-command.js
var require_multi_command3 = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/cluster/multi-command.js"(exports2) {
    "use strict";
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _RedisClusterMultiCommand_multi;
    var _RedisClusterMultiCommand_executor;
    var _RedisClusterMultiCommand_firstKey;
    Object.defineProperty(exports2, "__esModule", { value: true });
    var commands_1 = require_commands();
    var multi_command_1 = require_multi_command();
    var commander_1 = require_commander();
    var _1 = require_cluster();
    var RedisClusterMultiCommand = class _RedisClusterMultiCommand {
      static extend(extensions) {
        return (0, commander_1.attachExtensions)({
          BaseClass: _RedisClusterMultiCommand,
          modulesExecutor: _RedisClusterMultiCommand.prototype.commandsExecutor,
          modules: extensions?.modules,
          functionsExecutor: _RedisClusterMultiCommand.prototype.functionsExecutor,
          functions: extensions?.functions,
          scriptsExecutor: _RedisClusterMultiCommand.prototype.scriptsExecutor,
          scripts: extensions?.scripts
        });
      }
      constructor(executor, firstKey) {
        _RedisClusterMultiCommand_multi.set(this, new multi_command_1.default());
        _RedisClusterMultiCommand_executor.set(this, void 0);
        _RedisClusterMultiCommand_firstKey.set(this, void 0);
        Object.defineProperty(this, "EXEC", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.exec
        });
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_executor, executor, "f");
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, firstKey, "f");
      }
      commandsExecutor(command, args) {
        const transformedArguments = command.transformArguments(...args);
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f") ?? _1.default.extractFirstKey(command, args, transformedArguments), "f");
        return this.addCommand(void 0, transformedArguments, command.transformReply);
      }
      addCommand(firstKey, args, transformReply) {
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f") ?? firstKey, "f");
        __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").addCommand(args, transformReply);
        return this;
      }
      functionsExecutor(fn, args, name) {
        const transformedArguments = __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").addFunction(name, fn, args);
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f") ?? _1.default.extractFirstKey(fn, args, transformedArguments), "f");
        return this;
      }
      scriptsExecutor(script, args) {
        const transformedArguments = __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").addScript(script, args);
        __classPrivateFieldSet(this, _RedisClusterMultiCommand_firstKey, __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f") ?? _1.default.extractFirstKey(script, args, transformedArguments), "f");
        return this;
      }
      async exec(execAsPipeline = false) {
        if (execAsPipeline) {
          return this.execAsPipeline();
        }
        return __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").handleExecReplies(await __classPrivateFieldGet(this, _RedisClusterMultiCommand_executor, "f").call(this, __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").queue, __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f"), multi_command_1.default.generateChainId()));
      }
      async execAsPipeline() {
        return __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").transformReplies(await __classPrivateFieldGet(this, _RedisClusterMultiCommand_executor, "f").call(this, __classPrivateFieldGet(this, _RedisClusterMultiCommand_multi, "f").queue, __classPrivateFieldGet(this, _RedisClusterMultiCommand_firstKey, "f")));
      }
    };
    exports2.default = RedisClusterMultiCommand;
    _RedisClusterMultiCommand_multi = /* @__PURE__ */ new WeakMap(), _RedisClusterMultiCommand_executor = /* @__PURE__ */ new WeakMap(), _RedisClusterMultiCommand_firstKey = /* @__PURE__ */ new WeakMap();
    (0, commander_1.attachCommands)({
      BaseClass: RedisClusterMultiCommand,
      commands: commands_1.default,
      executor: RedisClusterMultiCommand.prototype.commandsExecutor
    });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/cluster/index.js
var require_cluster = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/cluster/index.js"(exports2) {
    "use strict";
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _RedisCluster_instances;
    var _RedisCluster_options;
    var _RedisCluster_slots;
    var _RedisCluster_Multi;
    var _RedisCluster_execute;
    Object.defineProperty(exports2, "__esModule", { value: true });
    var commands_1 = require_commands();
    var cluster_slots_1 = require_cluster_slots();
    var commander_1 = require_commander();
    var events_1 = require("events");
    var multi_command_1 = require_multi_command3();
    var errors_1 = require_errors();
    var RedisCluster = class _RedisCluster extends events_1.EventEmitter {
      static extractFirstKey(command, originalArgs, redisArgs) {
        if (command.FIRST_KEY_INDEX === void 0) {
          return void 0;
        } else if (typeof command.FIRST_KEY_INDEX === "number") {
          return redisArgs[command.FIRST_KEY_INDEX];
        }
        return command.FIRST_KEY_INDEX(...originalArgs);
      }
      static create(options) {
        return new ((0, commander_1.attachExtensions)({
          BaseClass: _RedisCluster,
          modulesExecutor: _RedisCluster.prototype.commandsExecutor,
          modules: options?.modules,
          functionsExecutor: _RedisCluster.prototype.functionsExecutor,
          functions: options?.functions,
          scriptsExecutor: _RedisCluster.prototype.scriptsExecutor,
          scripts: options?.scripts
        }))(options);
      }
      get slots() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").slots;
      }
      get shards() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").shards;
      }
      get masters() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").masters;
      }
      get replicas() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").replicas;
      }
      get nodeByAddress() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").nodeByAddress;
      }
      get pubSubNode() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").pubSubNode;
      }
      get isOpen() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").isOpen;
      }
      constructor(options) {
        super();
        _RedisCluster_instances.add(this);
        _RedisCluster_options.set(this, void 0);
        _RedisCluster_slots.set(this, void 0);
        _RedisCluster_Multi.set(this, void 0);
        Object.defineProperty(this, "multi", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.MULTI
        });
        Object.defineProperty(this, "subscribe", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.SUBSCRIBE
        });
        Object.defineProperty(this, "unsubscribe", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.UNSUBSCRIBE
        });
        Object.defineProperty(this, "pSubscribe", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.PSUBSCRIBE
        });
        Object.defineProperty(this, "pUnsubscribe", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.PUNSUBSCRIBE
        });
        Object.defineProperty(this, "sSubscribe", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.SSUBSCRIBE
        });
        Object.defineProperty(this, "sUnsubscribe", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: this.SUNSUBSCRIBE
        });
        __classPrivateFieldSet(this, _RedisCluster_options, options, "f");
        __classPrivateFieldSet(this, _RedisCluster_slots, new cluster_slots_1.default(options, this.emit.bind(this)), "f");
        __classPrivateFieldSet(this, _RedisCluster_Multi, multi_command_1.default.extend(options), "f");
      }
      duplicate(overrides) {
        return new (Object.getPrototypeOf(this)).constructor({
          ...__classPrivateFieldGet(this, _RedisCluster_options, "f"),
          ...overrides
        });
      }
      connect() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").connect();
      }
      async commandsExecutor(command, args) {
        const { jsArgs, args: redisArgs, options } = (0, commander_1.transformCommandArguments)(command, args);
        return (0, commander_1.transformCommandReply)(command, await this.sendCommand(_RedisCluster.extractFirstKey(command, jsArgs, redisArgs), command.IS_READ_ONLY, redisArgs, options), redisArgs.preserve);
      }
      async sendCommand(firstKey, isReadonly, args, options) {
        return __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, firstKey, isReadonly, (client) => client.sendCommand(args, options));
      }
      async functionsExecutor(fn, args, name) {
        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(fn, args);
        return (0, commander_1.transformCommandReply)(fn, await this.executeFunction(name, fn, args, redisArgs, options), redisArgs.preserve);
      }
      async executeFunction(name, fn, originalArgs, redisArgs, options) {
        return __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, _RedisCluster.extractFirstKey(fn, originalArgs, redisArgs), fn.IS_READ_ONLY, (client) => client.executeFunction(name, fn, redisArgs, options));
      }
      async scriptsExecutor(script, args) {
        const { args: redisArgs, options } = (0, commander_1.transformCommandArguments)(script, args);
        return (0, commander_1.transformCommandReply)(script, await this.executeScript(script, args, redisArgs, options), redisArgs.preserve);
      }
      async executeScript(script, originalArgs, redisArgs, options) {
        return __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, _RedisCluster.extractFirstKey(script, originalArgs, redisArgs), script.IS_READ_ONLY, (client) => client.executeScript(script, redisArgs, options));
      }
      MULTI(routing) {
        return new (__classPrivateFieldGet(this, _RedisCluster_Multi, "f"))((commands, firstKey, chainId) => {
          return __classPrivateFieldGet(this, _RedisCluster_instances, "m", _RedisCluster_execute).call(this, firstKey, false, (client) => client.multiExecutor(commands, void 0, chainId));
        }, routing);
      }
      async SUBSCRIBE(channels, listener, bufferMode) {
        return (await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getPubSubClient()).SUBSCRIBE(channels, listener, bufferMode);
      }
      async UNSUBSCRIBE(channels, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").executeUnsubscribeCommand((client) => client.UNSUBSCRIBE(channels, listener, bufferMode));
      }
      async PSUBSCRIBE(patterns, listener, bufferMode) {
        return (await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getPubSubClient()).PSUBSCRIBE(patterns, listener, bufferMode);
      }
      async PUNSUBSCRIBE(patterns, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").executeUnsubscribeCommand((client) => client.PUNSUBSCRIBE(patterns, listener, bufferMode));
      }
      async SSUBSCRIBE(channels, listener, bufferMode) {
        const maxCommandRedirections = __classPrivateFieldGet(this, _RedisCluster_options, "f").maxCommandRedirections ?? 16, firstChannel = Array.isArray(channels) ? channels[0] : channels;
        let client = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getShardedPubSubClient(firstChannel);
        for (let i = 0; ; i++) {
          try {
            return await client.SSUBSCRIBE(channels, listener, bufferMode);
          } catch (err) {
            if (++i > maxCommandRedirections || !(err instanceof errors_1.ErrorReply)) {
              throw err;
            }
            if (err.message.startsWith("MOVED")) {
              await __classPrivateFieldGet(this, _RedisCluster_slots, "f").rediscover(client);
              client = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getShardedPubSubClient(firstChannel);
              continue;
            }
            throw err;
          }
        }
      }
      SUNSUBSCRIBE(channels, listener, bufferMode) {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").executeShardedUnsubscribeCommand(Array.isArray(channels) ? channels[0] : channels, (client) => client.SUNSUBSCRIBE(channels, listener, bufferMode));
      }
      quit() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").quit();
      }
      disconnect() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").disconnect();
      }
      nodeClient(node) {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").nodeClient(node);
      }
      getRandomNode() {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").getRandomNode();
      }
      getSlotRandomNode(slot) {
        return __classPrivateFieldGet(this, _RedisCluster_slots, "f").getSlotRandomNode(slot);
      }
      /**
       * @deprecated use `.masters` instead
       */
      getMasters() {
        return this.masters;
      }
      /**
       * @deprecated use `.slots[<SLOT>]` instead
       */
      getSlotMaster(slot) {
        return this.slots[slot].master;
      }
    };
    exports2.default = RedisCluster;
    _RedisCluster_options = /* @__PURE__ */ new WeakMap(), _RedisCluster_slots = /* @__PURE__ */ new WeakMap(), _RedisCluster_Multi = /* @__PURE__ */ new WeakMap(), _RedisCluster_instances = /* @__PURE__ */ new WeakSet(), _RedisCluster_execute = async function _RedisCluster_execute2(firstKey, isReadonly, executor) {
      const maxCommandRedirections = __classPrivateFieldGet(this, _RedisCluster_options, "f").maxCommandRedirections ?? 16;
      let client = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getClient(firstKey, isReadonly);
      for (let i = 0; ; i++) {
        try {
          return await executor(client);
        } catch (err) {
          if (++i > maxCommandRedirections || !(err instanceof errors_1.ErrorReply)) {
            throw err;
          }
          if (err.message.startsWith("ASK")) {
            const address = err.message.substring(err.message.lastIndexOf(" ") + 1);
            let redirectTo = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getMasterByAddress(address);
            if (!redirectTo) {
              await __classPrivateFieldGet(this, _RedisCluster_slots, "f").rediscover(client);
              redirectTo = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getMasterByAddress(address);
            }
            if (!redirectTo) {
              throw new Error(`Cannot find node ${address}`);
            }
            await redirectTo.asking();
            client = redirectTo;
            continue;
          } else if (err.message.startsWith("MOVED")) {
            await __classPrivateFieldGet(this, _RedisCluster_slots, "f").rediscover(client);
            client = await __classPrivateFieldGet(this, _RedisCluster_slots, "f").getClient(firstKey, isReadonly);
            continue;
          }
          throw err;
        }
      }
    };
    (0, commander_1.attachCommands)({
      BaseClass: RedisCluster,
      commands: commands_1.default,
      executor: RedisCluster.prototype.commandsExecutor
    });
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/lua-script.js
var require_lua_script = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/lib/lua-script.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.scriptSha1 = exports2.defineScript = void 0;
    var crypto_1 = require("crypto");
    function defineScript(script) {
      return {
        ...script,
        SHA1: scriptSha1(script.SCRIPT)
      };
    }
    exports2.defineScript = defineScript;
    function scriptSha1(script) {
      return (0, crypto_1.createHash)("sha1").update(script).digest("hex");
    }
    exports2.scriptSha1 = scriptSha1;
  }
});

// node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/index.js
var require_dist = __commonJS({
  "node_modules/.store/@redis-client-npm-1.5.13-8eadda07b8/node_modules/@redis/client/dist/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RedisFlushModes = exports2.GeoReplyWith = exports2.defineScript = exports2.createCluster = exports2.commandOptions = exports2.createClient = void 0;
    var client_1 = require_client();
    var cluster_1 = require_cluster();
    exports2.createClient = client_1.default.create;
    exports2.commandOptions = client_1.default.commandOptions;
    exports2.createCluster = cluster_1.default.create;
    var lua_script_1 = require_lua_script();
    Object.defineProperty(exports2, "defineScript", { enumerable: true, get: function() {
      return lua_script_1.defineScript;
    } });
    __exportStar(require_errors(), exports2);
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "GeoReplyWith", { enumerable: true, get: function() {
      return generic_transformers_1.GeoReplyWith;
    } });
    var FLUSHALL_1 = require_FLUSHALL();
    Object.defineProperty(exports2, "RedisFlushModes", { enumerable: true, get: function() {
      return FLUSHALL_1.RedisFlushModes;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/ADD.js
var require_ADD = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/ADD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, item) {
      return ["BF.ADD", key, item];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/CARD.js
var require_CARD = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/CARD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["BF.CARD", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/EXISTS.js
var require_EXISTS2 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/EXISTS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, item) {
      return ["BF.EXISTS", key, item];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/INFO.js
var require_INFO2 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/INFO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["BF.INFO", key];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        capacity: reply[1],
        size: reply[3],
        numberOfFilters: reply[5],
        numberOfInsertedItems: reply[7],
        expansionRate: reply[9]
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/INSERT.js
var require_INSERT = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/INSERT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, items, options) {
      const args = ["BF.INSERT", key];
      if (options?.CAPACITY) {
        args.push("CAPACITY", options.CAPACITY.toString());
      }
      if (options?.ERROR) {
        args.push("ERROR", options.ERROR.toString());
      }
      if (options?.EXPANSION) {
        args.push("EXPANSION", options.EXPANSION.toString());
      }
      if (options?.NOCREATE) {
        args.push("NOCREATE");
      }
      if (options?.NONSCALING) {
        args.push("NONSCALING");
      }
      args.push("ITEMS");
      return (0, generic_transformers_1.pushVerdictArguments)(args, items);
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_2 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_2.transformBooleanArrayReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/LOADCHUNK.js
var require_LOADCHUNK = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/LOADCHUNK.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, iteretor, chunk) {
      return ["BF.LOADCHUNK", key, iteretor.toString(), chunk];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/MADD.js
var require_MADD = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/MADD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, items) {
      return ["BF.MADD", key, ...items];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanArrayReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/MEXISTS.js
var require_MEXISTS = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/MEXISTS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, items) {
      return ["BF.MEXISTS", key, ...items];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanArrayReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/RESERVE.js
var require_RESERVE = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/RESERVE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, errorRate, capacity, options) {
      const args = ["BF.RESERVE", key, errorRate.toString(), capacity.toString()];
      if (options?.EXPANSION) {
        args.push("EXPANSION", options.EXPANSION.toString());
      }
      if (options?.NONSCALING) {
        args.push("NONSCALING");
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/SCANDUMP.js
var require_SCANDUMP = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/SCANDUMP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, iterator) {
      return ["BF.SCANDUMP", key, iterator.toString()];
    }
    exports2.transformArguments = transformArguments;
    function transformReply([iterator, chunk]) {
      return {
        iterator,
        chunk
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/index.js
var require_bloom = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/bloom/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var ADD = require_ADD();
    var CARD = require_CARD();
    var EXISTS = require_EXISTS2();
    var INFO = require_INFO2();
    var INSERT = require_INSERT();
    var LOADCHUNK = require_LOADCHUNK();
    var MADD = require_MADD();
    var MEXISTS = require_MEXISTS();
    var RESERVE = require_RESERVE();
    var SCANDUMP = require_SCANDUMP();
    exports2.default = {
      ADD,
      add: ADD,
      CARD,
      card: CARD,
      EXISTS,
      exists: EXISTS,
      INFO,
      info: INFO,
      INSERT,
      insert: INSERT,
      LOADCHUNK,
      loadChunk: LOADCHUNK,
      MADD,
      mAdd: MADD,
      MEXISTS,
      mExists: MEXISTS,
      RESERVE,
      reserve: RESERVE,
      SCANDUMP,
      scanDump: SCANDUMP
    };
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/count-min-sketch/INCRBY.js
var require_INCRBY2 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/count-min-sketch/INCRBY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, items) {
      const args = ["CMS.INCRBY", key];
      if (Array.isArray(items)) {
        for (const item of items) {
          pushIncrByItem(args, item);
        }
      } else {
        pushIncrByItem(args, items);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function pushIncrByItem(args, { item, incrementBy }) {
      args.push(item, incrementBy.toString());
    }
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/count-min-sketch/INFO.js
var require_INFO3 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/count-min-sketch/INFO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["CMS.INFO", key];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        width: reply[1],
        depth: reply[3],
        count: reply[5]
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/count-min-sketch/INITBYDIM.js
var require_INITBYDIM = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/count-min-sketch/INITBYDIM.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, width, depth) {
      return ["CMS.INITBYDIM", key, width.toString(), depth.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/count-min-sketch/INITBYPROB.js
var require_INITBYPROB = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/count-min-sketch/INITBYPROB.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, error, probability) {
      return ["CMS.INITBYPROB", key, error.toString(), probability.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/count-min-sketch/MERGE.js
var require_MERGE = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/count-min-sketch/MERGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(dest, src) {
      const args = [
        "CMS.MERGE",
        dest,
        src.length.toString()
      ];
      if (isStringSketches(src)) {
        args.push(...src);
      } else {
        for (const sketch of src) {
          args.push(sketch.name);
        }
        args.push("WEIGHTS");
        for (const sketch of src) {
          args.push(sketch.weight.toString());
        }
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function isStringSketches(src) {
      return typeof src[0] === "string";
    }
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/count-min-sketch/QUERY.js
var require_QUERY = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/count-min-sketch/QUERY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, items) {
      return (0, generic_transformers_1.pushVerdictArguments)(["CMS.QUERY", key], items);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/count-min-sketch/index.js
var require_count_min_sketch = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/count-min-sketch/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var INCRBY = require_INCRBY2();
    var INFO = require_INFO3();
    var INITBYDIM = require_INITBYDIM();
    var INITBYPROB = require_INITBYPROB();
    var MERGE = require_MERGE();
    var QUERY = require_QUERY();
    exports2.default = {
      INCRBY,
      incrBy: INCRBY,
      INFO,
      info: INFO,
      INITBYDIM,
      initByDim: INITBYDIM,
      INITBYPROB,
      initByProb: INITBYPROB,
      MERGE,
      merge: MERGE,
      QUERY,
      query: QUERY
    };
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/ADD.js
var require_ADD2 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/ADD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, item) {
      return ["CF.ADD", key, item];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/ADDNX.js
var require_ADDNX = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/ADDNX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, item) {
      return ["CF.ADDNX", key, item];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/COUNT.js
var require_COUNT = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/COUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, item) {
      return ["CF.COUNT", key, item];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/DEL.js
var require_DEL2 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/DEL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, item) {
      return ["CF.DEL", key, item];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/EXISTS.js
var require_EXISTS3 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/EXISTS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, item) {
      return ["CF.EXISTS", key, item];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/INFO.js
var require_INFO4 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/INFO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["CF.INFO", key];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        size: reply[1],
        numberOfBuckets: reply[3],
        numberOfFilters: reply[5],
        numberOfInsertedItems: reply[7],
        numberOfDeletedItems: reply[9],
        bucketSize: reply[11],
        expansionRate: reply[13],
        maxIteration: reply[15]
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/INSERT.js
var require_INSERT2 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/INSERT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_cuckoo();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, items, options) {
      return (0, _1.pushInsertOptions)(["CF.INSERT", key], items, options);
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanArrayReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/INSERTNX.js
var require_INSERTNX = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/INSERTNX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_cuckoo();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, items, options) {
      return (0, _1.pushInsertOptions)(["CF.INSERTNX", key], items, options);
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanArrayReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/LOADCHUNK.js
var require_LOADCHUNK2 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/LOADCHUNK.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, iterator, chunk) {
      return ["CF.LOADCHUNK", key, iterator.toString(), chunk];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/RESERVE.js
var require_RESERVE2 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/RESERVE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, capacity, options) {
      const args = ["CF.RESERVE", key, capacity.toString()];
      if (options?.BUCKETSIZE) {
        args.push("BUCKETSIZE", options.BUCKETSIZE.toString());
      }
      if (options?.MAXITERATIONS) {
        args.push("MAXITERATIONS", options.MAXITERATIONS.toString());
      }
      if (options?.EXPANSION) {
        args.push("EXPANSION", options.EXPANSION.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/SCANDUMP.js
var require_SCANDUMP2 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/SCANDUMP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, iterator) {
      return ["CF.SCANDUMP", key, iterator.toString()];
    }
    exports2.transformArguments = transformArguments;
    function transformReply([iterator, chunk]) {
      return {
        iterator,
        chunk
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/index.js
var require_cuckoo = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/cuckoo/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.pushInsertOptions = void 0;
    var ADD = require_ADD2();
    var ADDNX = require_ADDNX();
    var COUNT = require_COUNT();
    var DEL = require_DEL2();
    var EXISTS = require_EXISTS3();
    var INFO = require_INFO4();
    var INSERT = require_INSERT2();
    var INSERTNX = require_INSERTNX();
    var LOADCHUNK = require_LOADCHUNK2();
    var RESERVE = require_RESERVE2();
    var SCANDUMP = require_SCANDUMP2();
    var generic_transformers_1 = require_generic_transformers();
    exports2.default = {
      ADD,
      add: ADD,
      ADDNX,
      addNX: ADDNX,
      COUNT,
      count: COUNT,
      DEL,
      del: DEL,
      EXISTS,
      exists: EXISTS,
      INFO,
      info: INFO,
      INSERT,
      insert: INSERT,
      INSERTNX,
      insertNX: INSERTNX,
      LOADCHUNK,
      loadChunk: LOADCHUNK,
      RESERVE,
      reserve: RESERVE,
      SCANDUMP,
      scanDump: SCANDUMP
    };
    function pushInsertOptions(args, items, options) {
      if (options?.CAPACITY) {
        args.push("CAPACITY");
        args.push(options.CAPACITY.toString());
      }
      if (options?.NOCREATE) {
        args.push("NOCREATE");
      }
      args.push("ITEMS");
      return (0, generic_transformers_1.pushVerdictArguments)(args, items);
    }
    exports2.pushInsertOptions = pushInsertOptions;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/ADD.js
var require_ADD3 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/ADD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, values) {
      const args = ["TDIGEST.ADD", key];
      for (const item of values) {
        args.push(item.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/BYRANK.js
var require_BYRANK = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/BYRANK.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, ranks) {
      const args = ["TDIGEST.BYRANK", key];
      for (const rank of ranks) {
        args.push(rank.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var _1 = require_t_digest();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return _1.transformDoublesReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/BYREVRANK.js
var require_BYREVRANK = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/BYREVRANK.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, ranks) {
      const args = ["TDIGEST.BYREVRANK", key];
      for (const rank of ranks) {
        args.push(rank.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var _1 = require_t_digest();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return _1.transformDoublesReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/CDF.js
var require_CDF = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/CDF.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, values) {
      const args = ["TDIGEST.CDF", key];
      for (const item of values) {
        args.push(item.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var _1 = require_t_digest();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return _1.transformDoublesReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/CREATE.js
var require_CREATE = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/CREATE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_t_digest();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, options) {
      return (0, _1.pushCompressionArgument)(["TDIGEST.CREATE", key], options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/INFO.js
var require_INFO5 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/INFO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return [
        "TDIGEST.INFO",
        key
      ];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        comperssion: reply[1],
        capacity: reply[3],
        mergedNodes: reply[5],
        unmergedNodes: reply[7],
        mergedWeight: Number(reply[9]),
        unmergedWeight: Number(reply[11]),
        totalCompression: reply[13]
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/MAX.js
var require_MAX = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/MAX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return [
        "TDIGEST.MAX",
        key
      ];
    }
    exports2.transformArguments = transformArguments;
    var _1 = require_t_digest();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return _1.transformDoubleReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/MERGE.js
var require_MERGE2 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/MERGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var _1 = require_t_digest();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(destKey, srcKeys, options) {
      const args = (0, generic_transformers_1.pushVerdictArgument)(["TDIGEST.MERGE", destKey], srcKeys);
      (0, _1.pushCompressionArgument)(args, options);
      if (options?.OVERRIDE) {
        args.push("OVERRIDE");
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/MIN.js
var require_MIN = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/MIN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return [
        "TDIGEST.MIN",
        key
      ];
    }
    exports2.transformArguments = transformArguments;
    var _1 = require_t_digest();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return _1.transformDoubleReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/QUANTILE.js
var require_QUANTILE = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/QUANTILE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, quantiles) {
      const args = [
        "TDIGEST.QUANTILE",
        key
      ];
      for (const quantile of quantiles) {
        args.push(quantile.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var _1 = require_t_digest();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return _1.transformDoublesReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/RANK.js
var require_RANK = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/RANK.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, values) {
      const args = ["TDIGEST.RANK", key];
      for (const item of values) {
        args.push(item.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/RESET.js
var require_RESET = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/RESET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["TDIGEST.RESET", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/REVRANK.js
var require_REVRANK = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/REVRANK.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, values) {
      const args = ["TDIGEST.REVRANK", key];
      for (const item of values) {
        args.push(item.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/TRIMMED_MEAN.js
var require_TRIMMED_MEAN = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/TRIMMED_MEAN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, lowCutPercentile, highCutPercentile) {
      return [
        "TDIGEST.TRIMMED_MEAN",
        key,
        lowCutPercentile.toString(),
        highCutPercentile.toString()
      ];
    }
    exports2.transformArguments = transformArguments;
    var _1 = require_t_digest();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return _1.transformDoubleReply;
    } });
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/index.js
var require_t_digest = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/t-digest/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformDoublesReply = exports2.transformDoubleReply = exports2.pushCompressionArgument = void 0;
    var ADD = require_ADD3();
    var BYRANK = require_BYRANK();
    var BYREVRANK = require_BYREVRANK();
    var CDF = require_CDF();
    var CREATE = require_CREATE();
    var INFO = require_INFO5();
    var MAX = require_MAX();
    var MERGE = require_MERGE2();
    var MIN = require_MIN();
    var QUANTILE = require_QUANTILE();
    var RANK = require_RANK();
    var RESET = require_RESET();
    var REVRANK = require_REVRANK();
    var TRIMMED_MEAN = require_TRIMMED_MEAN();
    exports2.default = {
      ADD,
      add: ADD,
      BYRANK,
      byRank: BYRANK,
      BYREVRANK,
      byRevRank: BYREVRANK,
      CDF,
      cdf: CDF,
      CREATE,
      create: CREATE,
      INFO,
      info: INFO,
      MAX,
      max: MAX,
      MERGE,
      merge: MERGE,
      MIN,
      min: MIN,
      QUANTILE,
      quantile: QUANTILE,
      RANK,
      rank: RANK,
      RESET,
      reset: RESET,
      REVRANK,
      revRank: REVRANK,
      TRIMMED_MEAN,
      trimmedMean: TRIMMED_MEAN
    };
    function pushCompressionArgument(args, options) {
      if (options?.COMPRESSION) {
        args.push("COMPRESSION", options.COMPRESSION.toString());
      }
      return args;
    }
    exports2.pushCompressionArgument = pushCompressionArgument;
    function transformDoubleReply(reply) {
      switch (reply) {
        case "inf":
          return Infinity;
        case "-inf":
          return -Infinity;
        case "nan":
          return NaN;
        default:
          return parseFloat(reply);
      }
    }
    exports2.transformDoubleReply = transformDoubleReply;
    function transformDoublesReply(reply) {
      return reply.map(transformDoubleReply);
    }
    exports2.transformDoublesReply = transformDoublesReply;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/ADD.js
var require_ADD4 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/ADD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, items) {
      return (0, generic_transformers_1.pushVerdictArguments)(["TOPK.ADD", key], items);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/COUNT.js
var require_COUNT2 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/COUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, items) {
      return (0, generic_transformers_1.pushVerdictArguments)(["TOPK.COUNT", key], items);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/INCRBY.js
var require_INCRBY3 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/INCRBY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, items) {
      const args = ["TOPK.INCRBY", key];
      if (Array.isArray(items)) {
        for (const item of items) {
          pushIncrByItem(args, item);
        }
      } else {
        pushIncrByItem(args, items);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function pushIncrByItem(args, { item, incrementBy }) {
      args.push(item, incrementBy.toString());
    }
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/INFO.js
var require_INFO6 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/INFO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["TOPK.INFO", key];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        k: reply[1],
        width: reply[3],
        depth: reply[5],
        decay: Number(reply[7])
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/LIST_WITHCOUNT.js
var require_LIST_WITHCOUNT = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/LIST_WITHCOUNT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["TOPK.LIST", key, "WITHCOUNT"];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(rawReply) {
      const reply = [];
      for (let i = 0; i < rawReply.length; i++) {
        reply.push({
          item: rawReply[i],
          count: rawReply[++i]
        });
      }
      return reply;
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/LIST.js
var require_LIST = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/LIST.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["TOPK.LIST", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/QUERY.js
var require_QUERY2 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/QUERY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, items) {
      return (0, generic_transformers_1.pushVerdictArguments)(["TOPK.QUERY", key], items);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/RESERVE.js
var require_RESERVE3 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/RESERVE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, topK, options) {
      const args = ["TOPK.RESERVE", key, topK.toString()];
      if (options) {
        args.push(options.width.toString(), options.depth.toString(), options.decay.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/index.js
var require_top_k = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/top-k/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var ADD = require_ADD4();
    var COUNT = require_COUNT2();
    var INCRBY = require_INCRBY3();
    var INFO = require_INFO6();
    var LIST_WITHCOUNT = require_LIST_WITHCOUNT();
    var LIST = require_LIST();
    var QUERY = require_QUERY2();
    var RESERVE = require_RESERVE3();
    exports2.default = {
      ADD,
      add: ADD,
      COUNT,
      count: COUNT,
      INCRBY,
      incrBy: INCRBY,
      INFO,
      info: INFO,
      LIST_WITHCOUNT,
      listWithCount: LIST_WITHCOUNT,
      LIST,
      list: LIST,
      QUERY,
      query: QUERY,
      RESERVE,
      reserve: RESERVE
    };
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/index.js
var require_commands3 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/commands/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var bloom_1 = require_bloom();
    var count_min_sketch_1 = require_count_min_sketch();
    var cuckoo_1 = require_cuckoo();
    var t_digest_1 = require_t_digest();
    var top_k_1 = require_top_k();
    exports2.default = {
      bf: bloom_1.default,
      cms: count_min_sketch_1.default,
      cf: cuckoo_1.default,
      tDigest: t_digest_1.default,
      topK: top_k_1.default
    };
  }
});

// node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/.store/@redis-bloom-virtual-18feac1bf9/node_modules/@redis/bloom/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = void 0;
    var commands_1 = require_commands3();
    Object.defineProperty(exports2, "default", { enumerable: true, get: function() {
      return commands_1.default;
    } });
  }
});

// node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/CONFIG_GET.js
var require_CONFIG_GET2 = __commonJS({
  "node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/CONFIG_GET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments(configKey) {
      return ["GRAPH.CONFIG", "GET", configKey];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/CONFIG_SET.js
var require_CONFIG_SET2 = __commonJS({
  "node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/CONFIG_SET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(configKey, value) {
      return [
        "GRAPH.CONFIG",
        "SET",
        configKey,
        value.toString()
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/DELETE.js
var require_DELETE = __commonJS({
  "node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/DELETE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["GRAPH.DELETE", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/EXPLAIN.js
var require_EXPLAIN = __commonJS({
  "node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/EXPLAIN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, query) {
      return ["GRAPH.EXPLAIN", key, query];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/LIST.js
var require_LIST2 = __commonJS({
  "node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/LIST.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments() {
      return ["GRAPH.LIST"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/PROFILE.js
var require_PROFILE = __commonJS({
  "node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/PROFILE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, query) {
      return ["GRAPH.PROFILE", key, query];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/QUERY.js
var require_QUERY3 = __commonJS({
  "node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/QUERY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands4();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(graph, query, options, compact) {
      return (0, _1.pushQueryArguments)(["GRAPH.QUERY"], graph, query, options, compact);
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.length === 1 ? {
        headers: void 0,
        data: void 0,
        metadata: reply[0]
      } : {
        headers: reply[0],
        data: reply[1],
        metadata: reply[2]
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/RO_QUERY.js
var require_RO_QUERY = __commonJS({
  "node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/RO_QUERY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands4();
    var QUERY_1 = require_QUERY3();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return QUERY_1.FIRST_KEY_INDEX;
    } });
    exports2.IS_READ_ONLY = true;
    function transformArguments(graph, query, options, compact) {
      return (0, _1.pushQueryArguments)(["GRAPH.RO_QUERY"], graph, query, options, compact);
    }
    exports2.transformArguments = transformArguments;
    var QUERY_2 = require_QUERY3();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return QUERY_2.transformReply;
    } });
  }
});

// node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/SLOWLOG.js
var require_SLOWLOG = __commonJS({
  "node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/SLOWLOG.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key) {
      return ["GRAPH.SLOWLOG", key];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(logs) {
      return logs.map(([timestamp, command, query, took]) => ({
        timestamp: new Date(Number(timestamp) * 1e3),
        command,
        query,
        took: Number(took)
      }));
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/index.js
var require_commands4 = __commonJS({
  "node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/commands/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.pushQueryArguments = void 0;
    var CONFIG_GET = require_CONFIG_GET2();
    var CONFIG_SET = require_CONFIG_SET2();
    var DELETE = require_DELETE();
    var EXPLAIN = require_EXPLAIN();
    var LIST = require_LIST2();
    var PROFILE = require_PROFILE();
    var QUERY = require_QUERY3();
    var RO_QUERY = require_RO_QUERY();
    var SLOWLOG = require_SLOWLOG();
    exports2.default = {
      CONFIG_GET,
      configGet: CONFIG_GET,
      CONFIG_SET,
      configSet: CONFIG_SET,
      DELETE,
      delete: DELETE,
      EXPLAIN,
      explain: EXPLAIN,
      LIST,
      list: LIST,
      PROFILE,
      profile: PROFILE,
      QUERY,
      query: QUERY,
      RO_QUERY,
      roQuery: RO_QUERY,
      SLOWLOG,
      slowLog: SLOWLOG
    };
    function pushQueryArguments(args, graph, query, options, compact) {
      args.push(graph);
      if (typeof options === "number") {
        args.push(query);
        pushTimeout(args, options);
      } else {
        args.push(options?.params ? `CYPHER ${queryParamsToString(options.params)} ${query}` : query);
        if (options?.TIMEOUT !== void 0) {
          pushTimeout(args, options.TIMEOUT);
        }
      }
      if (compact) {
        args.push("--compact");
      }
      return args;
    }
    exports2.pushQueryArguments = pushQueryArguments;
    function pushTimeout(args, timeout) {
      args.push("TIMEOUT", timeout.toString());
    }
    function queryParamsToString(params) {
      const parts = [];
      for (const [key, value] of Object.entries(params)) {
        parts.push(`${key}=${queryParamToString(value)}`);
      }
      return parts.join(" ");
    }
    function queryParamToString(param) {
      if (param === null) {
        return "null";
      }
      switch (typeof param) {
        case "string":
          return `"${param.replace(/["\\]/g, "\\$&")}"`;
        case "number":
        case "boolean":
          return param.toString();
      }
      if (Array.isArray(param)) {
        return `[${param.map(queryParamToString).join(",")}]`;
      } else if (typeof param === "object") {
        const body = [];
        for (const [key, value] of Object.entries(param)) {
          body.push(`${key}:${queryParamToString(value)}`);
        }
        return `{${body.join(",")}}`;
      } else {
        throw new TypeError(`Unexpected param type ${typeof param} ${param}`);
      }
    }
  }
});

// node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/graph.js
var require_graph = __commonJS({
  "node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/graph.js"(exports2) {
    "use strict";
    var __classPrivateFieldSet = exports2 && exports2.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports2 && exports2.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Graph_instances;
    var _Graph_client;
    var _Graph_name;
    var _Graph_metadata;
    var _Graph_setMetadataPromise;
    var _Graph_updateMetadata;
    var _Graph_setMetadata;
    var _Graph_cleanMetadataArray;
    var _Graph_getMetadata;
    var _Graph_getMetadataAsync;
    var _Graph_parseReply;
    var _Graph_parseValue;
    var _Graph_parseEdge;
    var _Graph_parseNode;
    var _Graph_parseProperties;
    Object.defineProperty(exports2, "__esModule", { value: true });
    var GraphValueTypes;
    (function(GraphValueTypes2) {
      GraphValueTypes2[GraphValueTypes2["UNKNOWN"] = 0] = "UNKNOWN";
      GraphValueTypes2[GraphValueTypes2["NULL"] = 1] = "NULL";
      GraphValueTypes2[GraphValueTypes2["STRING"] = 2] = "STRING";
      GraphValueTypes2[GraphValueTypes2["INTEGER"] = 3] = "INTEGER";
      GraphValueTypes2[GraphValueTypes2["BOOLEAN"] = 4] = "BOOLEAN";
      GraphValueTypes2[GraphValueTypes2["DOUBLE"] = 5] = "DOUBLE";
      GraphValueTypes2[GraphValueTypes2["ARRAY"] = 6] = "ARRAY";
      GraphValueTypes2[GraphValueTypes2["EDGE"] = 7] = "EDGE";
      GraphValueTypes2[GraphValueTypes2["NODE"] = 8] = "NODE";
      GraphValueTypes2[GraphValueTypes2["PATH"] = 9] = "PATH";
      GraphValueTypes2[GraphValueTypes2["MAP"] = 10] = "MAP";
      GraphValueTypes2[GraphValueTypes2["POINT"] = 11] = "POINT";
    })(GraphValueTypes || (GraphValueTypes = {}));
    var Graph = class {
      constructor(client, name) {
        _Graph_instances.add(this);
        _Graph_client.set(this, void 0);
        _Graph_name.set(this, void 0);
        _Graph_metadata.set(this, void 0);
        _Graph_setMetadataPromise.set(this, void 0);
        __classPrivateFieldSet(this, _Graph_client, client, "f");
        __classPrivateFieldSet(this, _Graph_name, name, "f");
      }
      async query(query, options) {
        return __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseReply).call(this, await __classPrivateFieldGet(this, _Graph_client, "f").graph.query(__classPrivateFieldGet(this, _Graph_name, "f"), query, options, true));
      }
      async roQuery(query, options) {
        return __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseReply).call(this, await __classPrivateFieldGet(this, _Graph_client, "f").graph.roQuery(__classPrivateFieldGet(this, _Graph_name, "f"), query, options, true));
      }
    };
    _Graph_client = /* @__PURE__ */ new WeakMap(), _Graph_name = /* @__PURE__ */ new WeakMap(), _Graph_metadata = /* @__PURE__ */ new WeakMap(), _Graph_setMetadataPromise = /* @__PURE__ */ new WeakMap(), _Graph_instances = /* @__PURE__ */ new WeakSet(), _Graph_updateMetadata = function _Graph_updateMetadata2() {
      __classPrivateFieldSet(this, _Graph_setMetadataPromise, __classPrivateFieldGet(this, _Graph_setMetadataPromise, "f") ?? __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_setMetadata).call(this).finally(() => __classPrivateFieldSet(this, _Graph_setMetadataPromise, void 0, "f")), "f");
      return __classPrivateFieldGet(this, _Graph_setMetadataPromise, "f");
    }, _Graph_setMetadata = // DO NOT use directly, use #updateMetadata instead
    async function _Graph_setMetadata2() {
      const [labels, relationshipTypes, propertyKeys] = await Promise.all([
        __classPrivateFieldGet(this, _Graph_client, "f").graph.roQuery(__classPrivateFieldGet(this, _Graph_name, "f"), "CALL db.labels()"),
        __classPrivateFieldGet(this, _Graph_client, "f").graph.roQuery(__classPrivateFieldGet(this, _Graph_name, "f"), "CALL db.relationshipTypes()"),
        __classPrivateFieldGet(this, _Graph_client, "f").graph.roQuery(__classPrivateFieldGet(this, _Graph_name, "f"), "CALL db.propertyKeys()")
      ]);
      __classPrivateFieldSet(this, _Graph_metadata, {
        labels: __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_cleanMetadataArray).call(this, labels.data),
        relationshipTypes: __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_cleanMetadataArray).call(this, relationshipTypes.data),
        propertyKeys: __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_cleanMetadataArray).call(this, propertyKeys.data)
      }, "f");
      return __classPrivateFieldGet(this, _Graph_metadata, "f");
    }, _Graph_cleanMetadataArray = function _Graph_cleanMetadataArray2(arr) {
      return arr.map(([value]) => value);
    }, _Graph_getMetadata = function _Graph_getMetadata2(key, id) {
      return __classPrivateFieldGet(this, _Graph_metadata, "f")?.[key][id] ?? __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_getMetadataAsync).call(this, key, id);
    }, _Graph_getMetadataAsync = // DO NOT use directly, use #getMetadata instead
    async function _Graph_getMetadataAsync2(key, id) {
      const value = (await __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_updateMetadata).call(this))[key][id];
      if (value === void 0)
        throw new Error(`Cannot find value from ${key}[${id}]`);
      return value;
    }, _Graph_parseReply = async function _Graph_parseReply2(reply) {
      if (!reply.data)
        return reply;
      const promises = [], parsed = {
        metadata: reply.metadata,
        data: reply.data.map((row) => {
          const data = {};
          for (let i = 0; i < row.length; i++) {
            data[reply.headers[i][1]] = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseValue).call(this, row[i], promises);
          }
          return data;
        })
      };
      if (promises.length)
        await Promise.all(promises);
      return parsed;
    }, _Graph_parseValue = function _Graph_parseValue2([valueType, value], promises) {
      switch (valueType) {
        case GraphValueTypes.NULL:
          return null;
        case GraphValueTypes.STRING:
        case GraphValueTypes.INTEGER:
          return value;
        case GraphValueTypes.BOOLEAN:
          return value === "true";
        case GraphValueTypes.DOUBLE:
          return parseFloat(value);
        case GraphValueTypes.ARRAY:
          return value.map((x) => __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseValue2).call(this, x, promises));
        case GraphValueTypes.EDGE:
          return __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseEdge).call(this, value, promises);
        case GraphValueTypes.NODE:
          return __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseNode).call(this, value, promises);
        case GraphValueTypes.PATH:
          return {
            nodes: value[0][1].map(([, node]) => __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseNode).call(this, node, promises)),
            edges: value[1][1].map(([, edge]) => __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseEdge).call(this, edge, promises))
          };
        case GraphValueTypes.MAP:
          const map = {};
          for (let i = 0; i < value.length; i++) {
            map[value[i++]] = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseValue2).call(this, value[i], promises);
          }
          return map;
        case GraphValueTypes.POINT:
          return {
            latitude: parseFloat(value[0]),
            longitude: parseFloat(value[1])
          };
        default:
          throw new Error(`unknown scalar type: ${valueType}`);
      }
    }, _Graph_parseEdge = function _Graph_parseEdge2([id, relationshipTypeId, sourceId, destinationId, properties], promises) {
      const edge = {
        id,
        sourceId,
        destinationId,
        properties: __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseProperties).call(this, properties, promises)
      };
      const relationshipType = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_getMetadata).call(this, "relationshipTypes", relationshipTypeId);
      if (relationshipType instanceof Promise) {
        promises.push(relationshipType.then((value) => edge.relationshipType = value));
      } else {
        edge.relationshipType = relationshipType;
      }
      return edge;
    }, _Graph_parseNode = function _Graph_parseNode2([id, labelIds, properties], promises) {
      const labels = new Array(labelIds.length);
      for (let i = 0; i < labelIds.length; i++) {
        const value = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_getMetadata).call(this, "labels", labelIds[i]);
        if (value instanceof Promise) {
          promises.push(value.then((value2) => labels[i] = value2));
        } else {
          labels[i] = value;
        }
      }
      return {
        id,
        labels,
        properties: __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseProperties).call(this, properties, promises)
      };
    }, _Graph_parseProperties = function _Graph_parseProperties2(raw, promises) {
      const parsed = {};
      for (const [id, type, value] of raw) {
        const parsedValue = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_parseValue).call(this, [type, value], promises), key = __classPrivateFieldGet(this, _Graph_instances, "m", _Graph_getMetadata).call(this, "propertyKeys", id);
        if (key instanceof Promise) {
          promises.push(key.then((key2) => parsed[key2] = parsedValue));
        } else {
          parsed[key] = parsedValue;
        }
      }
      return parsed;
    };
    exports2.default = Graph;
  }
});

// node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/.store/@redis-graph-virtual-05b1b36b2d/node_modules/@redis/graph/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Graph = exports2.default = void 0;
    var commands_1 = require_commands4();
    Object.defineProperty(exports2, "default", { enumerable: true, get: function() {
      return commands_1.default;
    } });
    var graph_1 = require_graph();
    Object.defineProperty(exports2, "Graph", { enumerable: true, get: function() {
      return graph_1.default;
    } });
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/ARRAPPEND.js
var require_ARRAPPEND = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/ARRAPPEND.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands5();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path, ...jsons) {
      const args = ["JSON.ARRAPPEND", key, path];
      for (const json of jsons) {
        args.push((0, _1.transformRedisJsonArgument)(json));
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/ARRINDEX.js
var require_ARRINDEX = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/ARRINDEX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands5();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, path, json, start, stop) {
      const args = ["JSON.ARRINDEX", key, path, (0, _1.transformRedisJsonArgument)(json)];
      if (start !== void 0 && start !== null) {
        args.push(start.toString());
        if (stop !== void 0 && stop !== null) {
          args.push(stop.toString());
        }
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/ARRINSERT.js
var require_ARRINSERT = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/ARRINSERT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands5();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path, index, ...jsons) {
      const args = ["JSON.ARRINSERT", key, path, index.toString()];
      for (const json of jsons) {
        args.push((0, _1.transformRedisJsonArgument)(json));
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/ARRLEN.js
var require_ARRLEN = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/ARRLEN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, path) {
      const args = ["JSON.ARRLEN", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/ARRPOP.js
var require_ARRPOP = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/ARRPOP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands5();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path, index) {
      const args = ["JSON.ARRPOP", key];
      if (path) {
        args.push(path);
        if (index !== void 0 && index !== null) {
          args.push(index.toString());
        }
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      if (reply === null)
        return null;
      if (Array.isArray(reply)) {
        return reply.map(_1.transformRedisJsonNullReply);
      }
      return (0, _1.transformRedisJsonNullReply)(reply);
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/ARRTRIM.js
var require_ARRTRIM = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/ARRTRIM.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path, start, stop) {
      return ["JSON.ARRTRIM", key, path, start.toString(), stop.toString()];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/DEBUG_MEMORY.js
var require_DEBUG_MEMORY = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/DEBUG_MEMORY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 2;
    function transformArguments(key, path) {
      const args = ["JSON.DEBUG", "MEMORY", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/DEL.js
var require_DEL3 = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/DEL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path) {
      const args = ["JSON.DEL", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/FORGET.js
var require_FORGET = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/FORGET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path) {
      const args = ["JSON.FORGET", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/GET.js
var require_GET2 = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/GET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, options) {
      let args = ["JSON.GET", key];
      if (options?.path) {
        args = (0, generic_transformers_1.pushVerdictArguments)(args, options.path);
      }
      if (options?.INDENT) {
        args.push("INDENT", options.INDENT);
      }
      if (options?.NEWLINE) {
        args.push("NEWLINE", options.NEWLINE);
      }
      if (options?.SPACE) {
        args.push("SPACE", options.SPACE);
      }
      if (options?.NOESCAPE) {
        args.push("NOESCAPE");
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var _1 = require_commands5();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return _1.transformRedisJsonNullReply;
    } });
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/MERGE.js
var require_MERGE3 = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/MERGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands5();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path, json) {
      return ["JSON.MERGE", key, path, (0, _1.transformRedisJsonArgument)(json)];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/MGET.js
var require_MGET2 = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/MGET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands5();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(keys, path) {
      return [
        "JSON.MGET",
        ...keys,
        path
      ];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map(_1.transformRedisJsonNullReply);
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/MSET.js
var require_MSET2 = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/MSET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands5();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(items) {
      const args = new Array(1 + items.length * 3);
      args[0] = "JSON.MSET";
      let argsIndex = 1;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        args[argsIndex++] = item.key;
        args[argsIndex++] = item.path;
        args[argsIndex++] = (0, _1.transformRedisJsonArgument)(item.value);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/NUMINCRBY.js
var require_NUMINCRBY = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/NUMINCRBY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path, by) {
      return ["JSON.NUMINCRBY", key, path, by.toString()];
    }
    exports2.transformArguments = transformArguments;
    var _1 = require_commands5();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return _1.transformNumbersReply;
    } });
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/NUMMULTBY.js
var require_NUMMULTBY = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/NUMMULTBY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path, by) {
      return ["JSON.NUMMULTBY", key, path, by.toString()];
    }
    exports2.transformArguments = transformArguments;
    var _1 = require_commands5();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return _1.transformNumbersReply;
    } });
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/OBJKEYS.js
var require_OBJKEYS = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/OBJKEYS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path) {
      const args = ["JSON.OBJKEYS", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/OBJLEN.js
var require_OBJLEN = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/OBJLEN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path) {
      const args = ["JSON.OBJLEN", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/RESP.js
var require_RESP = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/RESP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path) {
      const args = ["JSON.RESP", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/SET.js
var require_SET2 = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/SET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands5();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path, json, options) {
      const args = ["JSON.SET", key, path, (0, _1.transformRedisJsonArgument)(json)];
      if (options?.NX) {
        args.push("NX");
      } else if (options?.XX) {
        args.push("XX");
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/STRAPPEND.js
var require_STRAPPEND = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/STRAPPEND.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands5();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(...[key, pathOrAppend, append]) {
      const args = ["JSON.STRAPPEND", key];
      if (append !== void 0 && append !== null) {
        args.push(pathOrAppend, (0, _1.transformRedisJsonArgument)(append));
      } else {
        args.push((0, _1.transformRedisJsonArgument)(pathOrAppend));
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/STRLEN.js
var require_STRLEN2 = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/STRLEN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, path) {
      const args = ["JSON.STRLEN", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/TYPE.js
var require_TYPE2 = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/TYPE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, path) {
      const args = ["JSON.TYPE", key];
      if (path) {
        args.push(path);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/index.js
var require_commands5 = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/commands/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformNumbersReply = exports2.transformRedisJsonNullReply = exports2.transformRedisJsonReply = exports2.transformRedisJsonArgument = void 0;
    var ARRAPPEND = require_ARRAPPEND();
    var ARRINDEX = require_ARRINDEX();
    var ARRINSERT = require_ARRINSERT();
    var ARRLEN = require_ARRLEN();
    var ARRPOP = require_ARRPOP();
    var ARRTRIM = require_ARRTRIM();
    var DEBUG_MEMORY = require_DEBUG_MEMORY();
    var DEL = require_DEL3();
    var FORGET = require_FORGET();
    var GET = require_GET2();
    var MERGE = require_MERGE3();
    var MGET = require_MGET2();
    var MSET = require_MSET2();
    var NUMINCRBY = require_NUMINCRBY();
    var NUMMULTBY = require_NUMMULTBY();
    var OBJKEYS = require_OBJKEYS();
    var OBJLEN = require_OBJLEN();
    var RESP = require_RESP();
    var SET = require_SET2();
    var STRAPPEND = require_STRAPPEND();
    var STRLEN = require_STRLEN2();
    var TYPE = require_TYPE2();
    exports2.default = {
      ARRAPPEND,
      arrAppend: ARRAPPEND,
      ARRINDEX,
      arrIndex: ARRINDEX,
      ARRINSERT,
      arrInsert: ARRINSERT,
      ARRLEN,
      arrLen: ARRLEN,
      ARRPOP,
      arrPop: ARRPOP,
      ARRTRIM,
      arrTrim: ARRTRIM,
      DEBUG_MEMORY,
      debugMemory: DEBUG_MEMORY,
      DEL,
      del: DEL,
      FORGET,
      forget: FORGET,
      GET,
      get: GET,
      MERGE,
      merge: MERGE,
      MGET,
      mGet: MGET,
      MSET,
      mSet: MSET,
      NUMINCRBY,
      numIncrBy: NUMINCRBY,
      NUMMULTBY,
      numMultBy: NUMMULTBY,
      OBJKEYS,
      objKeys: OBJKEYS,
      OBJLEN,
      objLen: OBJLEN,
      RESP,
      resp: RESP,
      SET,
      set: SET,
      STRAPPEND,
      strAppend: STRAPPEND,
      STRLEN,
      strLen: STRLEN,
      TYPE,
      type: TYPE
    };
    function transformRedisJsonArgument(json) {
      return JSON.stringify(json);
    }
    exports2.transformRedisJsonArgument = transformRedisJsonArgument;
    function transformRedisJsonReply(json) {
      return JSON.parse(json);
    }
    exports2.transformRedisJsonReply = transformRedisJsonReply;
    function transformRedisJsonNullReply(json) {
      if (json === null)
        return null;
      return transformRedisJsonReply(json);
    }
    exports2.transformRedisJsonNullReply = transformRedisJsonNullReply;
    function transformNumbersReply(reply) {
      return JSON.parse(reply);
    }
    exports2.transformNumbersReply = transformNumbersReply;
  }
});

// node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/index.js
var require_dist4 = __commonJS({
  "node_modules/.store/@redis-json-virtual-2b511a60d8/node_modules/@redis/json/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = void 0;
    var commands_1 = require_commands5();
    Object.defineProperty(exports2, "default", { enumerable: true, get: function() {
      return commands_1.default;
    } });
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/_LIST.js
var require_LIST3 = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/_LIST.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments() {
      return ["FT._LIST"];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/ALTER.js
var require_ALTER = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/ALTER.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    var _1 = require_commands6();
    function transformArguments(index, schema) {
      const args = ["FT.ALTER", index, "SCHEMA", "ADD"];
      (0, _1.pushSchema)(args, schema);
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/AGGREGATE.js
var require_AGGREGATE = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/AGGREGATE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.pushAggregatehOptions = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = exports2.AggregateGroupByReducers = exports2.AggregateSteps = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var _1 = require_commands6();
    var AggregateSteps;
    (function(AggregateSteps2) {
      AggregateSteps2["GROUPBY"] = "GROUPBY";
      AggregateSteps2["SORTBY"] = "SORTBY";
      AggregateSteps2["APPLY"] = "APPLY";
      AggregateSteps2["LIMIT"] = "LIMIT";
      AggregateSteps2["FILTER"] = "FILTER";
    })(AggregateSteps || (exports2.AggregateSteps = AggregateSteps = {}));
    var AggregateGroupByReducers;
    (function(AggregateGroupByReducers2) {
      AggregateGroupByReducers2["COUNT"] = "COUNT";
      AggregateGroupByReducers2["COUNT_DISTINCT"] = "COUNT_DISTINCT";
      AggregateGroupByReducers2["COUNT_DISTINCTISH"] = "COUNT_DISTINCTISH";
      AggregateGroupByReducers2["SUM"] = "SUM";
      AggregateGroupByReducers2["MIN"] = "MIN";
      AggregateGroupByReducers2["MAX"] = "MAX";
      AggregateGroupByReducers2["AVG"] = "AVG";
      AggregateGroupByReducers2["STDDEV"] = "STDDEV";
      AggregateGroupByReducers2["QUANTILE"] = "QUANTILE";
      AggregateGroupByReducers2["TOLIST"] = "TOLIST";
      AggregateGroupByReducers2["TO_LIST"] = "TOLIST";
      AggregateGroupByReducers2["FIRST_VALUE"] = "FIRST_VALUE";
      AggregateGroupByReducers2["RANDOM_SAMPLE"] = "RANDOM_SAMPLE";
    })(AggregateGroupByReducers || (exports2.AggregateGroupByReducers = AggregateGroupByReducers = {}));
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(index, query, options) {
      return pushAggregatehOptions(["FT.AGGREGATE", index, query], options);
    }
    exports2.transformArguments = transformArguments;
    function pushAggregatehOptions(args, options) {
      if (options?.VERBATIM) {
        args.push("VERBATIM");
      }
      if (options?.LOAD) {
        args.push("LOAD");
        (0, _1.pushArgumentsWithLength)(args, () => {
          if (Array.isArray(options.LOAD)) {
            for (const load of options.LOAD) {
              pushLoadField(args, load);
            }
          } else {
            pushLoadField(args, options.LOAD);
          }
        });
      }
      if (options?.STEPS) {
        for (const step of options.STEPS) {
          switch (step.type) {
            case AggregateSteps.GROUPBY:
              args.push("GROUPBY");
              if (!step.properties) {
                args.push("0");
              } else {
                (0, generic_transformers_1.pushVerdictArgument)(args, step.properties);
              }
              if (Array.isArray(step.REDUCE)) {
                for (const reducer of step.REDUCE) {
                  pushGroupByReducer(args, reducer);
                }
              } else {
                pushGroupByReducer(args, step.REDUCE);
              }
              break;
            case AggregateSteps.SORTBY:
              (0, _1.pushSortByArguments)(args, "SORTBY", step.BY);
              if (step.MAX) {
                args.push("MAX", step.MAX.toString());
              }
              break;
            case AggregateSteps.APPLY:
              args.push("APPLY", step.expression, "AS", step.AS);
              break;
            case AggregateSteps.LIMIT:
              args.push("LIMIT", step.from.toString(), step.size.toString());
              break;
            case AggregateSteps.FILTER:
              args.push("FILTER", step.expression);
              break;
          }
        }
      }
      (0, _1.pushParamsArgs)(args, options?.PARAMS);
      if (options?.DIALECT) {
        args.push("DIALECT", options.DIALECT.toString());
      }
      if (options?.TIMEOUT !== void 0) {
        args.push("TIMEOUT", options.TIMEOUT.toString());
      }
      return args;
    }
    exports2.pushAggregatehOptions = pushAggregatehOptions;
    function pushLoadField(args, toLoad) {
      if (typeof toLoad === "string") {
        args.push(toLoad);
      } else {
        args.push(toLoad.identifier);
        if (toLoad.AS) {
          args.push("AS", toLoad.AS);
        }
      }
    }
    function pushGroupByReducer(args, reducer) {
      args.push("REDUCE", reducer.type);
      switch (reducer.type) {
        case AggregateGroupByReducers.COUNT:
          args.push("0");
          break;
        case AggregateGroupByReducers.COUNT_DISTINCT:
        case AggregateGroupByReducers.COUNT_DISTINCTISH:
        case AggregateGroupByReducers.SUM:
        case AggregateGroupByReducers.MIN:
        case AggregateGroupByReducers.MAX:
        case AggregateGroupByReducers.AVG:
        case AggregateGroupByReducers.STDDEV:
        case AggregateGroupByReducers.TOLIST:
          args.push("1", reducer.property);
          break;
        case AggregateGroupByReducers.QUANTILE:
          args.push("2", reducer.property, reducer.quantile.toString());
          break;
        case AggregateGroupByReducers.FIRST_VALUE: {
          (0, _1.pushArgumentsWithLength)(args, () => {
            args.push(reducer.property);
            if (reducer.BY) {
              args.push("BY");
              if (typeof reducer.BY === "string") {
                args.push(reducer.BY);
              } else {
                args.push(reducer.BY.property);
                if (reducer.BY.direction) {
                  args.push(reducer.BY.direction);
                }
              }
            }
          });
          break;
        }
        case AggregateGroupByReducers.RANDOM_SAMPLE:
          args.push("2", reducer.property, reducer.sampleSize.toString());
          break;
      }
      if (reducer.AS) {
        args.push("AS", reducer.AS);
      }
    }
    function transformReply(rawReply) {
      const results = [];
      for (let i = 1; i < rawReply.length; i++) {
        results.push((0, generic_transformers_1.transformTuplesReply)(rawReply[i]));
      }
      return {
        total: rawReply[0],
        results
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/AGGREGATE_WITHCURSOR.js
var require_AGGREGATE_WITHCURSOR = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/AGGREGATE_WITHCURSOR.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var AGGREGATE_1 = require_AGGREGATE();
    var AGGREGATE_2 = require_AGGREGATE();
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return AGGREGATE_2.FIRST_KEY_INDEX;
    } });
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return AGGREGATE_2.IS_READ_ONLY;
    } });
    function transformArguments(index, query, options) {
      const args = (0, AGGREGATE_1.transformArguments)(index, query, options);
      args.push("WITHCURSOR");
      if (options?.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        ...(0, AGGREGATE_1.transformReply)(reply[0]),
        cursor: reply[1]
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/ALIASADD.js
var require_ALIASADD = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/ALIASADD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(name, index) {
      return ["FT.ALIASADD", name, index];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/ALIASDEL.js
var require_ALIASDEL = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/ALIASDEL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(name, index) {
      return ["FT.ALIASDEL", name, index];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/ALIASUPDATE.js
var require_ALIASUPDATE = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/ALIASUPDATE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(name, index) {
      return ["FT.ALIASUPDATE", name, index];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/CONFIG_GET.js
var require_CONFIG_GET3 = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/CONFIG_GET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    function transformArguments(option) {
      return ["FT.CONFIG", "GET", option];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(rawReply) {
      const transformedReply = /* @__PURE__ */ Object.create(null);
      for (const [key, value] of rawReply) {
        transformedReply[key] = value;
      }
      return transformedReply;
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/CONFIG_SET.js
var require_CONFIG_SET3 = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/CONFIG_SET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(option, value) {
      return ["FT.CONFIG", "SET", option, value];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/CREATE.js
var require_CREATE2 = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/CREATE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    var _1 = require_commands6();
    function transformArguments(index, schema, options) {
      const args = ["FT.CREATE", index];
      if (options?.ON) {
        args.push("ON", options.ON);
      }
      (0, generic_transformers_1.pushOptionalVerdictArgument)(args, "PREFIX", options?.PREFIX);
      if (options?.FILTER) {
        args.push("FILTER", options.FILTER);
      }
      if (options?.LANGUAGE) {
        args.push("LANGUAGE", options.LANGUAGE);
      }
      if (options?.LANGUAGE_FIELD) {
        args.push("LANGUAGE_FIELD", options.LANGUAGE_FIELD);
      }
      if (options?.SCORE) {
        args.push("SCORE", options.SCORE.toString());
      }
      if (options?.SCORE_FIELD) {
        args.push("SCORE_FIELD", options.SCORE_FIELD);
      }
      if (options?.MAXTEXTFIELDS) {
        args.push("MAXTEXTFIELDS");
      }
      if (options?.TEMPORARY) {
        args.push("TEMPORARY", options.TEMPORARY.toString());
      }
      if (options?.NOOFFSETS) {
        args.push("NOOFFSETS");
      }
      if (options?.NOHL) {
        args.push("NOHL");
      }
      if (options?.NOFIELDS) {
        args.push("NOFIELDS");
      }
      if (options?.NOFREQS) {
        args.push("NOFREQS");
      }
      if (options?.SKIPINITIALSCAN) {
        args.push("SKIPINITIALSCAN");
      }
      (0, generic_transformers_1.pushOptionalVerdictArgument)(args, "STOPWORDS", options?.STOPWORDS);
      args.push("SCHEMA");
      (0, _1.pushSchema)(args, schema);
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/CURSOR_DEL.js
var require_CURSOR_DEL = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/CURSOR_DEL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(index, cursorId) {
      return [
        "FT.CURSOR",
        "DEL",
        index,
        cursorId.toString()
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/CURSOR_READ.js
var require_CURSOR_READ = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/CURSOR_READ.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(index, cursor, options) {
      const args = [
        "FT.CURSOR",
        "READ",
        index,
        cursor.toString()
      ];
      if (options?.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    var AGGREGATE_WITHCURSOR_1 = require_AGGREGATE_WITHCURSOR();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return AGGREGATE_WITHCURSOR_1.transformReply;
    } });
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/DICTADD.js
var require_DICTADD = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/DICTADD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(dictionary, term) {
      return (0, generic_transformers_1.pushVerdictArguments)(["FT.DICTADD", dictionary], term);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/DICTDEL.js
var require_DICTDEL = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/DICTDEL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(dictionary, term) {
      return (0, generic_transformers_1.pushVerdictArguments)(["FT.DICTDEL", dictionary], term);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/DICTDUMP.js
var require_DICTDUMP = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/DICTDUMP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(dictionary) {
      return ["FT.DICTDUMP", dictionary];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/DROPINDEX.js
var require_DROPINDEX = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/DROPINDEX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(index, options) {
      const args = ["FT.DROPINDEX", index];
      if (options?.DD) {
        args.push("DD");
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/EXPLAIN.js
var require_EXPLAIN2 = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/EXPLAIN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var _1 = require_commands6();
    exports2.IS_READ_ONLY = true;
    function transformArguments(index, query, options) {
      const args = ["FT.EXPLAIN", index, query];
      (0, _1.pushParamsArgs)(args, options?.PARAMS);
      if (options?.DIALECT) {
        args.push("DIALECT", options.DIALECT.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/EXPLAINCLI.js
var require_EXPLAINCLI = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/EXPLAINCLI.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments(index, query) {
      return ["FT.EXPLAINCLI", index, query];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/INFO.js
var require_INFO7 = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/INFO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(index) {
      return ["FT.INFO", index];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(rawReply) {
      return {
        indexName: rawReply[1],
        indexOptions: rawReply[3],
        indexDefinition: (0, generic_transformers_1.transformTuplesReply)(rawReply[5]),
        attributes: rawReply[7].map((attribute) => (0, generic_transformers_1.transformTuplesReply)(attribute)),
        numDocs: rawReply[9],
        maxDocId: rawReply[11],
        numTerms: rawReply[13],
        numRecords: rawReply[15],
        invertedSzMb: rawReply[17],
        vectorIndexSzMb: rawReply[19],
        totalInvertedIndexBlocks: rawReply[21],
        offsetVectorsSzMb: rawReply[23],
        docTableSizeMb: rawReply[25],
        sortableValuesSizeMb: rawReply[27],
        keyTableSizeMb: rawReply[29],
        recordsPerDocAvg: rawReply[31],
        bytesPerRecordAvg: rawReply[33],
        offsetsPerTermAvg: rawReply[35],
        offsetBitsPerRecordAvg: rawReply[37],
        hashIndexingFailures: rawReply[39],
        indexing: rawReply[41],
        percentIndexed: rawReply[43],
        gcStats: {
          bytesCollected: rawReply[45][1],
          totalMsRun: rawReply[45][3],
          totalCycles: rawReply[45][5],
          averageCycleTimeMs: rawReply[45][7],
          lastRunTimeMs: rawReply[45][9],
          gcNumericTreesMissed: rawReply[45][11],
          gcBlocksDenied: rawReply[45][13]
        },
        cursorStats: {
          globalIdle: rawReply[47][1],
          globalTotal: rawReply[47][3],
          indexCapacity: rawReply[47][5],
          idnexTotal: rawReply[47][7]
        },
        stopWords: rawReply[49]
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SEARCH.js
var require_SEARCH = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SEARCH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands6();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(index, query, options) {
      return (0, _1.pushSearchOptions)(["FT.SEARCH", index, query], options);
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply, withoutDocuments) {
      const documents = [];
      let i = 1;
      while (i < reply.length) {
        documents.push({
          id: reply[i++],
          value: withoutDocuments ? /* @__PURE__ */ Object.create(null) : documentValue(reply[i++])
        });
      }
      return {
        total: reply[0],
        documents
      };
    }
    exports2.transformReply = transformReply;
    function documentValue(tuples) {
      const message = /* @__PURE__ */ Object.create(null);
      let i = 0;
      while (i < tuples.length) {
        const key = tuples[i++], value = tuples[i++];
        if (key === "$") {
          try {
            Object.assign(message, JSON.parse(value));
            continue;
          } catch {
          }
        }
        message[key] = value;
      }
      return message;
    }
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/PROFILE_SEARCH.js
var require_PROFILE_SEARCH = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/PROFILE_SEARCH.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var SEARCH_1 = require_SEARCH();
    var _1 = require_commands6();
    exports2.IS_READ_ONLY = true;
    function transformArguments(index, query, options) {
      let args = ["FT.PROFILE", index, "SEARCH"];
      if (options?.LIMITED) {
        args.push("LIMITED");
      }
      args.push("QUERY", query);
      return (0, _1.pushSearchOptions)(args, options);
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply, withoutDocuments) {
      return {
        results: (0, SEARCH_1.transformReply)(reply[0], withoutDocuments),
        profile: (0, _1.transformProfile)(reply[1])
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/PROFILE_AGGREGATE.js
var require_PROFILE_AGGREGATE = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/PROFILE_AGGREGATE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var AGGREGATE_1 = require_AGGREGATE();
    var _1 = require_commands6();
    exports2.IS_READ_ONLY = true;
    function transformArguments(index, query, options) {
      const args = ["FT.PROFILE", index, "AGGREGATE"];
      if (options?.LIMITED) {
        args.push("LIMITED");
      }
      args.push("QUERY", query);
      (0, AGGREGATE_1.pushAggregatehOptions)(args, options);
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        results: (0, AGGREGATE_1.transformReply)(reply[0]),
        profile: (0, _1.transformProfile)(reply[1])
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SEARCH_NOCONTENT.js
var require_SEARCH_NOCONTENT = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SEARCH_NOCONTENT.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands6();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(index, query, options) {
      return (0, _1.pushSearchOptions)(["FT.SEARCH", index, query, "NOCONTENT"], options);
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        total: reply[0],
        documents: reply.slice(1)
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SPELLCHECK.js
var require_SPELLCHECK = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SPELLCHECK.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    function transformArguments(index, query, options) {
      const args = ["FT.SPELLCHECK", index, query];
      if (options?.DISTANCE) {
        args.push("DISTANCE", options.DISTANCE.toString());
      }
      if (options?.TERMS) {
        if (Array.isArray(options.TERMS)) {
          for (const term of options.TERMS) {
            pushTerms(args, term);
          }
        } else {
          pushTerms(args, options.TERMS);
        }
      }
      if (options?.DIALECT) {
        args.push("DIALECT", options.DIALECT.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
    function pushTerms(args, { mode, dictionary }) {
      args.push("TERMS", mode, dictionary);
    }
    function transformReply(rawReply) {
      return rawReply.map(([, term, suggestions]) => ({
        term,
        suggestions: suggestions.map(([score, suggestion]) => ({
          score: Number(score),
          suggestion
        }))
      }));
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SUGADD.js
var require_SUGADD = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SUGADD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(key, string, score, options) {
      const args = ["FT.SUGADD", key, string, score.toString()];
      if (options?.INCR) {
        args.push("INCR");
      }
      if (options?.PAYLOAD) {
        args.push("PAYLOAD", options.PAYLOAD);
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SUGDEL.js
var require_SUGDEL = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SUGDEL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = void 0;
    function transformArguments(key, string) {
      return ["FT.SUGDEL", key, string];
    }
    exports2.transformArguments = transformArguments;
    var generic_transformers_1 = require_generic_transformers();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return generic_transformers_1.transformBooleanReply;
    } });
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SUGGET.js
var require_SUGGET = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SUGGET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, prefix, options) {
      const args = ["FT.SUGGET", key, prefix];
      if (options?.FUZZY) {
        args.push("FUZZY");
      }
      if (options?.MAX) {
        args.push("MAX", options.MAX.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SUGGET_WITHPAYLOADS.js
var require_SUGGET_WITHPAYLOADS = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SUGGET_WITHPAYLOADS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var SUGGET_1 = require_SUGGET();
    var SUGGET_2 = require_SUGGET();
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return SUGGET_2.IS_READ_ONLY;
    } });
    function transformArguments(key, prefix, options) {
      return [
        ...(0, SUGGET_1.transformArguments)(key, prefix, options),
        "WITHPAYLOADS"
      ];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(rawReply) {
      if (rawReply === null)
        return null;
      const transformedReply = [];
      for (let i = 0; i < rawReply.length; i += 2) {
        transformedReply.push({
          suggestion: rawReply[i],
          payload: rawReply[i + 1]
        });
      }
      return transformedReply;
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SUGGET_WITHSCORES_WITHPAYLOADS.js
var require_SUGGET_WITHSCORES_WITHPAYLOADS = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SUGGET_WITHSCORES_WITHPAYLOADS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var SUGGET_1 = require_SUGGET();
    var SUGGET_2 = require_SUGGET();
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return SUGGET_2.IS_READ_ONLY;
    } });
    function transformArguments(key, prefix, options) {
      return [
        ...(0, SUGGET_1.transformArguments)(key, prefix, options),
        "WITHSCORES",
        "WITHPAYLOADS"
      ];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(rawReply) {
      if (rawReply === null)
        return null;
      const transformedReply = [];
      for (let i = 0; i < rawReply.length; i += 3) {
        transformedReply.push({
          suggestion: rawReply[i],
          score: Number(rawReply[i + 1]),
          payload: rawReply[i + 2]
        });
      }
      return transformedReply;
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SUGGET_WITHSCORES.js
var require_SUGGET_WITHSCORES = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SUGGET_WITHSCORES.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var SUGGET_1 = require_SUGGET();
    var SUGGET_2 = require_SUGGET();
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return SUGGET_2.IS_READ_ONLY;
    } });
    function transformArguments(key, prefix, options) {
      return [
        ...(0, SUGGET_1.transformArguments)(key, prefix, options),
        "WITHSCORES"
      ];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(rawReply) {
      if (rawReply === null)
        return null;
      const transformedReply = [];
      for (let i = 0; i < rawReply.length; i += 2) {
        transformedReply.push({
          suggestion: rawReply[i],
          score: Number(rawReply[i + 1])
        });
      }
      return transformedReply;
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SUGLEN.js
var require_SUGLEN = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SUGLEN.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["FT.SUGLEN", key];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SYNDUMP.js
var require_SYNDUMP = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SYNDUMP.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(index) {
      return ["FT.SYNDUMP", index];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SYNUPDATE.js
var require_SYNUPDATE = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/SYNUPDATE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    var generic_transformers_1 = require_generic_transformers();
    function transformArguments(index, groupId, terms, options) {
      const args = ["FT.SYNUPDATE", index, groupId];
      if (options?.SKIPINITIALSCAN) {
        args.push("SKIPINITIALSCAN");
      }
      return (0, generic_transformers_1.pushVerdictArguments)(args, terms);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/TAGVALS.js
var require_TAGVALS = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/TAGVALS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = void 0;
    function transformArguments(index, fieldName) {
      return ["FT.TAGVALS", index, fieldName];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/index.js
var require_commands6 = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/commands/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformProfile = exports2.pushSearchOptions = exports2.pushParamsArgs = exports2.pushSchema = exports2.VectorAlgorithms = exports2.SchemaTextFieldPhonetics = exports2.SchemaFieldTypes = exports2.pushArgumentsWithLength = exports2.pushSortByArguments = exports2.pushSortByProperty = exports2.RedisSearchLanguages = void 0;
    var _LIST = require_LIST3();
    var ALTER = require_ALTER();
    var AGGREGATE_WITHCURSOR = require_AGGREGATE_WITHCURSOR();
    var AGGREGATE = require_AGGREGATE();
    var ALIASADD = require_ALIASADD();
    var ALIASDEL = require_ALIASDEL();
    var ALIASUPDATE = require_ALIASUPDATE();
    var CONFIG_GET = require_CONFIG_GET3();
    var CONFIG_SET = require_CONFIG_SET3();
    var CREATE = require_CREATE2();
    var CURSOR_DEL = require_CURSOR_DEL();
    var CURSOR_READ = require_CURSOR_READ();
    var DICTADD = require_DICTADD();
    var DICTDEL = require_DICTDEL();
    var DICTDUMP = require_DICTDUMP();
    var DROPINDEX = require_DROPINDEX();
    var EXPLAIN = require_EXPLAIN2();
    var EXPLAINCLI = require_EXPLAINCLI();
    var INFO = require_INFO7();
    var PROFILESEARCH = require_PROFILE_SEARCH();
    var PROFILEAGGREGATE = require_PROFILE_AGGREGATE();
    var SEARCH = require_SEARCH();
    var SEARCH_NOCONTENT = require_SEARCH_NOCONTENT();
    var SPELLCHECK = require_SPELLCHECK();
    var SUGADD = require_SUGADD();
    var SUGDEL = require_SUGDEL();
    var SUGGET_WITHPAYLOADS = require_SUGGET_WITHPAYLOADS();
    var SUGGET_WITHSCORES_WITHPAYLOADS = require_SUGGET_WITHSCORES_WITHPAYLOADS();
    var SUGGET_WITHSCORES = require_SUGGET_WITHSCORES();
    var SUGGET = require_SUGGET();
    var SUGLEN = require_SUGLEN();
    var SYNDUMP = require_SYNDUMP();
    var SYNUPDATE = require_SYNUPDATE();
    var TAGVALS = require_TAGVALS();
    var generic_transformers_1 = require_generic_transformers();
    exports2.default = {
      _LIST,
      _list: _LIST,
      ALTER,
      alter: ALTER,
      AGGREGATE_WITHCURSOR,
      aggregateWithCursor: AGGREGATE_WITHCURSOR,
      AGGREGATE,
      aggregate: AGGREGATE,
      ALIASADD,
      aliasAdd: ALIASADD,
      ALIASDEL,
      aliasDel: ALIASDEL,
      ALIASUPDATE,
      aliasUpdate: ALIASUPDATE,
      CONFIG_GET,
      configGet: CONFIG_GET,
      CONFIG_SET,
      configSet: CONFIG_SET,
      CREATE,
      create: CREATE,
      CURSOR_DEL,
      cursorDel: CURSOR_DEL,
      CURSOR_READ,
      cursorRead: CURSOR_READ,
      DICTADD,
      dictAdd: DICTADD,
      DICTDEL,
      dictDel: DICTDEL,
      DICTDUMP,
      dictDump: DICTDUMP,
      DROPINDEX,
      dropIndex: DROPINDEX,
      EXPLAIN,
      explain: EXPLAIN,
      EXPLAINCLI,
      explainCli: EXPLAINCLI,
      INFO,
      info: INFO,
      PROFILESEARCH,
      profileSearch: PROFILESEARCH,
      PROFILEAGGREGATE,
      profileAggregate: PROFILEAGGREGATE,
      SEARCH,
      search: SEARCH,
      SEARCH_NOCONTENT,
      searchNoContent: SEARCH_NOCONTENT,
      SPELLCHECK,
      spellCheck: SPELLCHECK,
      SUGADD,
      sugAdd: SUGADD,
      SUGDEL,
      sugDel: SUGDEL,
      SUGGET_WITHPAYLOADS,
      sugGetWithPayloads: SUGGET_WITHPAYLOADS,
      SUGGET_WITHSCORES_WITHPAYLOADS,
      sugGetWithScoresWithPayloads: SUGGET_WITHSCORES_WITHPAYLOADS,
      SUGGET_WITHSCORES,
      sugGetWithScores: SUGGET_WITHSCORES,
      SUGGET,
      sugGet: SUGGET,
      SUGLEN,
      sugLen: SUGLEN,
      SYNDUMP,
      synDump: SYNDUMP,
      SYNUPDATE,
      synUpdate: SYNUPDATE,
      TAGVALS,
      tagVals: TAGVALS
    };
    var RedisSearchLanguages;
    (function(RedisSearchLanguages2) {
      RedisSearchLanguages2["ARABIC"] = "Arabic";
      RedisSearchLanguages2["BASQUE"] = "Basque";
      RedisSearchLanguages2["CATALANA"] = "Catalan";
      RedisSearchLanguages2["DANISH"] = "Danish";
      RedisSearchLanguages2["DUTCH"] = "Dutch";
      RedisSearchLanguages2["ENGLISH"] = "English";
      RedisSearchLanguages2["FINNISH"] = "Finnish";
      RedisSearchLanguages2["FRENCH"] = "French";
      RedisSearchLanguages2["GERMAN"] = "German";
      RedisSearchLanguages2["GREEK"] = "Greek";
      RedisSearchLanguages2["HUNGARIAN"] = "Hungarian";
      RedisSearchLanguages2["INDONESAIN"] = "Indonesian";
      RedisSearchLanguages2["IRISH"] = "Irish";
      RedisSearchLanguages2["ITALIAN"] = "Italian";
      RedisSearchLanguages2["LITHUANIAN"] = "Lithuanian";
      RedisSearchLanguages2["NEPALI"] = "Nepali";
      RedisSearchLanguages2["NORWEIGAN"] = "Norwegian";
      RedisSearchLanguages2["PORTUGUESE"] = "Portuguese";
      RedisSearchLanguages2["ROMANIAN"] = "Romanian";
      RedisSearchLanguages2["RUSSIAN"] = "Russian";
      RedisSearchLanguages2["SPANISH"] = "Spanish";
      RedisSearchLanguages2["SWEDISH"] = "Swedish";
      RedisSearchLanguages2["TAMIL"] = "Tamil";
      RedisSearchLanguages2["TURKISH"] = "Turkish";
      RedisSearchLanguages2["CHINESE"] = "Chinese";
    })(RedisSearchLanguages || (exports2.RedisSearchLanguages = RedisSearchLanguages = {}));
    function pushSortByProperty(args, sortBy) {
      if (typeof sortBy === "string") {
        args.push(sortBy);
      } else {
        args.push(sortBy.BY);
        if (sortBy.DIRECTION) {
          args.push(sortBy.DIRECTION);
        }
      }
    }
    exports2.pushSortByProperty = pushSortByProperty;
    function pushSortByArguments(args, name, sortBy) {
      const lengthBefore = args.push(
        name,
        ""
        // will be overwritten
      );
      if (Array.isArray(sortBy)) {
        for (const field of sortBy) {
          pushSortByProperty(args, field);
        }
      } else {
        pushSortByProperty(args, sortBy);
      }
      args[lengthBefore - 1] = (args.length - lengthBefore).toString();
      return args;
    }
    exports2.pushSortByArguments = pushSortByArguments;
    function pushArgumentsWithLength(args, fn) {
      const lengthIndex = args.push("") - 1;
      fn(args);
      args[lengthIndex] = (args.length - lengthIndex - 1).toString();
      return args;
    }
    exports2.pushArgumentsWithLength = pushArgumentsWithLength;
    var SchemaFieldTypes;
    (function(SchemaFieldTypes2) {
      SchemaFieldTypes2["TEXT"] = "TEXT";
      SchemaFieldTypes2["NUMERIC"] = "NUMERIC";
      SchemaFieldTypes2["GEO"] = "GEO";
      SchemaFieldTypes2["TAG"] = "TAG";
      SchemaFieldTypes2["VECTOR"] = "VECTOR";
    })(SchemaFieldTypes || (exports2.SchemaFieldTypes = SchemaFieldTypes = {}));
    var SchemaTextFieldPhonetics;
    (function(SchemaTextFieldPhonetics2) {
      SchemaTextFieldPhonetics2["DM_EN"] = "dm:en";
      SchemaTextFieldPhonetics2["DM_FR"] = "dm:fr";
      SchemaTextFieldPhonetics2["FM_PT"] = "dm:pt";
      SchemaTextFieldPhonetics2["DM_ES"] = "dm:es";
    })(SchemaTextFieldPhonetics || (exports2.SchemaTextFieldPhonetics = SchemaTextFieldPhonetics = {}));
    var VectorAlgorithms;
    (function(VectorAlgorithms2) {
      VectorAlgorithms2["FLAT"] = "FLAT";
      VectorAlgorithms2["HNSW"] = "HNSW";
    })(VectorAlgorithms || (exports2.VectorAlgorithms = VectorAlgorithms = {}));
    function pushSchema(args, schema) {
      for (const [field, fieldOptions] of Object.entries(schema)) {
        args.push(field);
        if (typeof fieldOptions === "string") {
          args.push(fieldOptions);
          continue;
        }
        if (fieldOptions.AS) {
          args.push("AS", fieldOptions.AS);
        }
        args.push(fieldOptions.type);
        switch (fieldOptions.type) {
          case SchemaFieldTypes.TEXT:
            if (fieldOptions.NOSTEM) {
              args.push("NOSTEM");
            }
            if (fieldOptions.WEIGHT) {
              args.push("WEIGHT", fieldOptions.WEIGHT.toString());
            }
            if (fieldOptions.PHONETIC) {
              args.push("PHONETIC", fieldOptions.PHONETIC);
            }
            if (fieldOptions.WITHSUFFIXTRIE) {
              args.push("WITHSUFFIXTRIE");
            }
            break;
          case SchemaFieldTypes.TAG:
            if (fieldOptions.SEPARATOR) {
              args.push("SEPARATOR", fieldOptions.SEPARATOR);
            }
            if (fieldOptions.CASESENSITIVE) {
              args.push("CASESENSITIVE");
            }
            if (fieldOptions.WITHSUFFIXTRIE) {
              args.push("WITHSUFFIXTRIE");
            }
            break;
          case SchemaFieldTypes.VECTOR:
            args.push(fieldOptions.ALGORITHM);
            pushArgumentsWithLength(args, () => {
              args.push("TYPE", fieldOptions.TYPE, "DIM", fieldOptions.DIM.toString(), "DISTANCE_METRIC", fieldOptions.DISTANCE_METRIC);
              if (fieldOptions.INITIAL_CAP) {
                args.push("INITIAL_CAP", fieldOptions.INITIAL_CAP.toString());
              }
              switch (fieldOptions.ALGORITHM) {
                case VectorAlgorithms.FLAT:
                  if (fieldOptions.BLOCK_SIZE) {
                    args.push("BLOCK_SIZE", fieldOptions.BLOCK_SIZE.toString());
                  }
                  break;
                case VectorAlgorithms.HNSW:
                  if (fieldOptions.M) {
                    args.push("M", fieldOptions.M.toString());
                  }
                  if (fieldOptions.EF_CONSTRUCTION) {
                    args.push("EF_CONSTRUCTION", fieldOptions.EF_CONSTRUCTION.toString());
                  }
                  if (fieldOptions.EF_RUNTIME) {
                    args.push("EF_RUNTIME", fieldOptions.EF_RUNTIME.toString());
                  }
                  break;
              }
            });
            continue;
        }
        if (fieldOptions.SORTABLE) {
          args.push("SORTABLE");
          if (fieldOptions.SORTABLE === "UNF") {
            args.push("UNF");
          }
        }
        if (fieldOptions.NOINDEX) {
          args.push("NOINDEX");
        }
      }
    }
    exports2.pushSchema = pushSchema;
    function pushParamsArgs(args, params) {
      if (params) {
        const enrties = Object.entries(params);
        args.push("PARAMS", (enrties.length * 2).toString());
        for (const [key, value] of enrties) {
          args.push(key, typeof value === "number" ? value.toString() : value);
        }
      }
      return args;
    }
    exports2.pushParamsArgs = pushParamsArgs;
    function pushSearchOptions(args, options) {
      if (options?.VERBATIM) {
        args.push("VERBATIM");
      }
      if (options?.NOSTOPWORDS) {
        args.push("NOSTOPWORDS");
      }
      (0, generic_transformers_1.pushOptionalVerdictArgument)(args, "INKEYS", options?.INKEYS);
      (0, generic_transformers_1.pushOptionalVerdictArgument)(args, "INFIELDS", options?.INFIELDS);
      (0, generic_transformers_1.pushOptionalVerdictArgument)(args, "RETURN", options?.RETURN);
      if (options?.SUMMARIZE) {
        args.push("SUMMARIZE");
        if (typeof options.SUMMARIZE === "object") {
          if (options.SUMMARIZE.FIELDS) {
            args.push("FIELDS");
            (0, generic_transformers_1.pushVerdictArgument)(args, options.SUMMARIZE.FIELDS);
          }
          if (options.SUMMARIZE.FRAGS) {
            args.push("FRAGS", options.SUMMARIZE.FRAGS.toString());
          }
          if (options.SUMMARIZE.LEN) {
            args.push("LEN", options.SUMMARIZE.LEN.toString());
          }
          if (options.SUMMARIZE.SEPARATOR) {
            args.push("SEPARATOR", options.SUMMARIZE.SEPARATOR);
          }
        }
      }
      if (options?.HIGHLIGHT) {
        args.push("HIGHLIGHT");
        if (typeof options.HIGHLIGHT === "object") {
          if (options.HIGHLIGHT.FIELDS) {
            args.push("FIELDS");
            (0, generic_transformers_1.pushVerdictArgument)(args, options.HIGHLIGHT.FIELDS);
          }
          if (options.HIGHLIGHT.TAGS) {
            args.push("TAGS", options.HIGHLIGHT.TAGS.open, options.HIGHLIGHT.TAGS.close);
          }
        }
      }
      if (options?.SLOP) {
        args.push("SLOP", options.SLOP.toString());
      }
      if (options?.INORDER) {
        args.push("INORDER");
      }
      if (options?.LANGUAGE) {
        args.push("LANGUAGE", options.LANGUAGE);
      }
      if (options?.EXPANDER) {
        args.push("EXPANDER", options.EXPANDER);
      }
      if (options?.SCORER) {
        args.push("SCORER", options.SCORER);
      }
      if (options?.SORTBY) {
        args.push("SORTBY");
        pushSortByProperty(args, options.SORTBY);
      }
      if (options?.LIMIT) {
        args.push("LIMIT", options.LIMIT.from.toString(), options.LIMIT.size.toString());
      }
      if (options?.PARAMS) {
        pushParamsArgs(args, options.PARAMS);
      }
      if (options?.DIALECT) {
        args.push("DIALECT", options.DIALECT.toString());
      }
      if (options?.RETURN?.length === 0) {
        args.preserve = true;
      }
      if (options?.TIMEOUT !== void 0) {
        args.push("TIMEOUT", options.TIMEOUT.toString());
      }
      return args;
    }
    exports2.pushSearchOptions = pushSearchOptions;
    function transformProfile(reply) {
      return {
        totalProfileTime: reply[0][1],
        parsingTime: reply[1][1],
        pipelineCreationTime: reply[2][1],
        iteratorsProfile: transformIterators(reply[3][1])
      };
    }
    exports2.transformProfile = transformProfile;
    function transformIterators(IteratorsProfile) {
      var res = {};
      for (let i = 0; i < IteratorsProfile.length; i += 2) {
        const value = IteratorsProfile[i + 1];
        switch (IteratorsProfile[i]) {
          case "Type":
            res.type = value;
            break;
          case "Counter":
            res.counter = value;
            break;
          case "Time":
            res.time = value;
            break;
          case "Query type":
            res.queryType = value;
            break;
          case "Child iterators":
            res.childIterators = value.map(transformChildIterators);
            break;
        }
      }
      return res;
    }
    function transformChildIterators(IteratorsProfile) {
      var res = {};
      for (let i = 1; i < IteratorsProfile.length; i += 2) {
        const value = IteratorsProfile[i + 1];
        switch (IteratorsProfile[i]) {
          case "Type":
            res.type = value;
            break;
          case "Counter":
            res.counter = value;
            break;
          case "Time":
            res.time = value;
            break;
          case "Size":
            res.size = value;
            break;
          case "Term":
            res.term = value;
            break;
          case "Child iterators":
            res.childIterators = value.map(transformChildIterators);
            break;
        }
      }
      return res;
    }
  }
});

// node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/index.js
var require_dist5 = __commonJS({
  "node_modules/.store/@redis-search-virtual-7c3961ca3f/node_modules/@redis/search/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AggregateSteps = exports2.AggregateGroupByReducers = exports2.VectorAlgorithms = exports2.SchemaTextFieldPhonetics = exports2.SchemaFieldTypes = exports2.RedisSearchLanguages = exports2.default = void 0;
    var commands_1 = require_commands6();
    Object.defineProperty(exports2, "default", { enumerable: true, get: function() {
      return commands_1.default;
    } });
    var commands_2 = require_commands6();
    Object.defineProperty(exports2, "RedisSearchLanguages", { enumerable: true, get: function() {
      return commands_2.RedisSearchLanguages;
    } });
    Object.defineProperty(exports2, "SchemaFieldTypes", { enumerable: true, get: function() {
      return commands_2.SchemaFieldTypes;
    } });
    Object.defineProperty(exports2, "SchemaTextFieldPhonetics", { enumerable: true, get: function() {
      return commands_2.SchemaTextFieldPhonetics;
    } });
    Object.defineProperty(exports2, "VectorAlgorithms", { enumerable: true, get: function() {
      return commands_2.VectorAlgorithms;
    } });
    var AGGREGATE_1 = require_AGGREGATE();
    Object.defineProperty(exports2, "AggregateGroupByReducers", { enumerable: true, get: function() {
      return AGGREGATE_1.AggregateGroupByReducers;
    } });
    Object.defineProperty(exports2, "AggregateSteps", { enumerable: true, get: function() {
      return AGGREGATE_1.AggregateSteps;
    } });
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/ADD.js
var require_ADD5 = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/ADD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, timestamp, value, options) {
      const args = [
        "TS.ADD",
        key,
        (0, _1.transformTimestampArgument)(timestamp),
        value.toString()
      ];
      (0, _1.pushRetentionArgument)(args, options?.RETENTION);
      (0, _1.pushEncodingArgument)(args, options?.ENCODING);
      (0, _1.pushChunkSizeArgument)(args, options?.CHUNK_SIZE);
      if (options?.ON_DUPLICATE) {
        args.push("ON_DUPLICATE", options.ON_DUPLICATE);
      }
      (0, _1.pushLabelsArgument)(args, options?.LABELS);
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/ALTER.js
var require_ALTER2 = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/ALTER.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, options) {
      const args = ["TS.ALTER", key];
      (0, _1.pushRetentionArgument)(args, options?.RETENTION);
      (0, _1.pushChunkSizeArgument)(args, options?.CHUNK_SIZE);
      (0, _1.pushDuplicatePolicy)(args, options?.DUPLICATE_POLICY);
      (0, _1.pushLabelsArgument)(args, options?.LABELS);
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/CREATE.js
var require_CREATE3 = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/CREATE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, options) {
      const args = ["TS.CREATE", key];
      (0, _1.pushRetentionArgument)(args, options?.RETENTION);
      (0, _1.pushEncodingArgument)(args, options?.ENCODING);
      (0, _1.pushChunkSizeArgument)(args, options?.CHUNK_SIZE);
      (0, _1.pushDuplicatePolicy)(args, options?.DUPLICATE_POLICY);
      (0, _1.pushLabelsArgument)(args, options?.LABELS);
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/CREATERULE.js
var require_CREATERULE = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/CREATERULE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(sourceKey, destinationKey, aggregationType, bucketDuration, alignTimestamp) {
      const args = [
        "TS.CREATERULE",
        sourceKey,
        destinationKey,
        "AGGREGATION",
        aggregationType,
        bucketDuration.toString()
      ];
      if (alignTimestamp) {
        args.push(alignTimestamp.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/DECRBY.js
var require_DECRBY2 = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/DECRBY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, value, options) {
      return (0, _1.transformIncrDecrArguments)("TS.DECRBY", key, value, options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/DEL.js
var require_DEL4 = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/DEL.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRTS_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports2.FIRTS_KEY_INDEX = 1;
    function transformArguments(key, fromTimestamp, toTimestamp) {
      return [
        "TS.DEL",
        key,
        (0, _1.transformTimestampArgument)(fromTimestamp),
        (0, _1.transformTimestampArgument)(toTimestamp)
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/DELETERULE.js
var require_DELETERULE = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/DELETERULE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(sourceKey, destinationKey) {
      return [
        "TS.DELETERULE",
        sourceKey,
        destinationKey
      ];
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/GET.js
var require_GET3 = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/GET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, options) {
      return (0, _1.pushLatestArgument)(["TS.GET", key], options?.LATEST);
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      if (reply.length === 0)
        return null;
      return (0, _1.transformSampleReply)(reply);
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/INCRBY.js
var require_INCRBY4 = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/INCRBY.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(key, value, options) {
      return (0, _1.transformIncrDecrArguments)("TS.INCRBY", key, value, options);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/INFO.js
var require_INFO8 = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/INFO.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key) {
      return ["TS.INFO", key];
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return {
        totalSamples: reply[1],
        memoryUsage: reply[3],
        firstTimestamp: reply[5],
        lastTimestamp: reply[7],
        retentionTime: reply[9],
        chunkCount: reply[11],
        chunkSize: reply[13],
        chunkType: reply[15],
        duplicatePolicy: reply[17],
        labels: reply[19].map(([name, value]) => ({
          name,
          value
        })),
        sourceKey: reply[21],
        rules: reply[23].map(([key, timeBucket, aggregationType]) => ({
          key,
          timeBucket,
          aggregationType
        }))
      };
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/INFO_DEBUG.js
var require_INFO_DEBUG = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/INFO_DEBUG.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.FIRST_KEY_INDEX = exports2.IS_READ_ONLY = void 0;
    var INFO_1 = require_INFO8();
    var INFO_2 = require_INFO8();
    Object.defineProperty(exports2, "IS_READ_ONLY", { enumerable: true, get: function() {
      return INFO_2.IS_READ_ONLY;
    } });
    Object.defineProperty(exports2, "FIRST_KEY_INDEX", { enumerable: true, get: function() {
      return INFO_2.FIRST_KEY_INDEX;
    } });
    function transformArguments(key) {
      const args = (0, INFO_1.transformArguments)(key);
      args.push("DEBUG");
      return args;
    }
    exports2.transformArguments = transformArguments;
    function transformReply(rawReply) {
      const reply = (0, INFO_1.transformReply)(rawReply);
      reply.keySelfName = rawReply[25];
      reply.chunks = rawReply[27].map((chunk) => ({
        startTimestamp: chunk[1],
        endTimestamp: chunk[3],
        samples: chunk[5],
        size: chunk[7],
        bytesPerSample: chunk[9]
      }));
      return reply;
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/MADD.js
var require_MADD2 = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/MADD.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports2.FIRST_KEY_INDEX = 1;
    function transformArguments(toAdd) {
      const args = ["TS.MADD"];
      for (const { key, timestamp, value } of toAdd) {
        args.push(key, (0, _1.transformTimestampArgument)(timestamp), value.toString());
      }
      return args;
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/MGET.js
var require_MGET3 = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/MGET.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var _1 = require_commands7();
    exports2.IS_READ_ONLY = true;
    function transformArguments(filter, options) {
      const args = (0, _1.pushLatestArgument)(["TS.MGET"], options?.LATEST);
      return (0, _1.pushFilterArgument)(args, filter);
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map(([key, _, sample]) => ({
        key,
        sample: (0, _1.transformSampleReply)(sample)
      }));
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/MGET_WITHLABELS.js
var require_MGET_WITHLABELS = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/MGET_WITHLABELS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var _1 = require_commands7();
    exports2.IS_READ_ONLY = true;
    function transformArguments(filter, options) {
      const args = (0, _1.pushWithLabelsArgument)(["TS.MGET"], options?.SELECTED_LABELS);
      return (0, _1.pushFilterArgument)(args, filter);
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return reply.map(([key, labels, sample]) => ({
        key,
        labels: (0, _1.transformLablesReply)(labels),
        sample: (0, _1.transformSampleReply)(sample)
      }));
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/QUERYINDEX.js
var require_QUERYINDEX = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/QUERYINDEX.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var generic_transformers_1 = require_generic_transformers();
    exports2.IS_READ_ONLY = true;
    function transformArguments(filter) {
      return (0, generic_transformers_1.pushVerdictArguments)(["TS.QUERYINDEX"], filter);
    }
    exports2.transformArguments = transformArguments;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/RANGE.js
var require_RANGE = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/RANGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, fromTimestamp, toTimestamp, options) {
      return (0, _1.pushRangeArguments)(["TS.RANGE", key], fromTimestamp, toTimestamp, options);
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return (0, _1.transformRangeReply)(reply);
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/REVRANGE.js
var require_REVRANGE = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/REVRANGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = exports2.FIRST_KEY_INDEX = void 0;
    var _1 = require_commands7();
    exports2.FIRST_KEY_INDEX = 1;
    exports2.IS_READ_ONLY = true;
    function transformArguments(key, fromTimestamp, toTimestamp, options) {
      return (0, _1.pushRangeArguments)(["TS.REVRANGE", key], fromTimestamp, toTimestamp, options);
    }
    exports2.transformArguments = transformArguments;
    function transformReply(reply) {
      return (0, _1.transformRangeReply)(reply);
    }
    exports2.transformReply = transformReply;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/MRANGE.js
var require_MRANGE = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/MRANGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var _1 = require_commands7();
    exports2.IS_READ_ONLY = true;
    function transformArguments(fromTimestamp, toTimestamp, filters, options) {
      return (0, _1.pushMRangeArguments)(["TS.MRANGE"], fromTimestamp, toTimestamp, filters, options);
    }
    exports2.transformArguments = transformArguments;
    var _2 = require_commands7();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return _2.transformMRangeReply;
    } });
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/MRANGE_WITHLABELS.js
var require_MRANGE_WITHLABELS = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/MRANGE_WITHLABELS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var _1 = require_commands7();
    exports2.IS_READ_ONLY = true;
    function transformArguments(fromTimestamp, toTimestamp, filters, options) {
      return (0, _1.pushMRangeWithLabelsArguments)(["TS.MRANGE"], fromTimestamp, toTimestamp, filters, options);
    }
    exports2.transformArguments = transformArguments;
    var _2 = require_commands7();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return _2.transformMRangeWithLabelsReply;
    } });
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/MREVRANGE.js
var require_MREVRANGE = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/MREVRANGE.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var _1 = require_commands7();
    exports2.IS_READ_ONLY = true;
    function transformArguments(fromTimestamp, toTimestamp, filters, options) {
      return (0, _1.pushMRangeArguments)(["TS.MREVRANGE"], fromTimestamp, toTimestamp, filters, options);
    }
    exports2.transformArguments = transformArguments;
    var _2 = require_commands7();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return _2.transformMRangeReply;
    } });
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/MREVRANGE_WITHLABELS.js
var require_MREVRANGE_WITHLABELS = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/MREVRANGE_WITHLABELS.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.transformReply = exports2.transformArguments = exports2.IS_READ_ONLY = void 0;
    var _1 = require_commands7();
    exports2.IS_READ_ONLY = true;
    function transformArguments(fromTimestamp, toTimestamp, filters, options) {
      return (0, _1.pushMRangeWithLabelsArguments)(["TS.MREVRANGE"], fromTimestamp, toTimestamp, filters, options);
    }
    exports2.transformArguments = transformArguments;
    var _2 = require_commands7();
    Object.defineProperty(exports2, "transformReply", { enumerable: true, get: function() {
      return _2.transformMRangeWithLabelsReply;
    } });
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/index.js
var require_commands7 = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/commands/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.pushLatestArgument = exports2.transformMRangeWithLabelsReply = exports2.transformMRangeReply = exports2.transformRangeReply = exports2.pushMRangeWithLabelsArguments = exports2.pushWithLabelsArgument = exports2.pushMRangeArguments = exports2.pushFilterArgument = exports2.pushMRangeGroupByArguments = exports2.pushRangeArguments = exports2.TimeSeriesBucketTimestamp = exports2.transformSampleReply = exports2.transformIncrDecrArguments = exports2.pushLabelsArgument = exports2.transformLablesReply = exports2.pushDuplicatePolicy = exports2.pushChunkSizeArgument = exports2.pushEncodingArgument = exports2.TimeSeriesEncoding = exports2.pushRetentionArgument = exports2.transformTimestampArgument = exports2.TimeSeriesReducers = exports2.TimeSeriesDuplicatePolicies = exports2.TimeSeriesAggregationType = void 0;
    var ADD = require_ADD5();
    var ALTER = require_ALTER2();
    var CREATE = require_CREATE3();
    var CREATERULE = require_CREATERULE();
    var DECRBY = require_DECRBY2();
    var DEL = require_DEL4();
    var DELETERULE = require_DELETERULE();
    var GET = require_GET3();
    var INCRBY = require_INCRBY4();
    var INFO_DEBUG = require_INFO_DEBUG();
    var INFO = require_INFO8();
    var MADD = require_MADD2();
    var MGET = require_MGET3();
    var MGET_WITHLABELS = require_MGET_WITHLABELS();
    var QUERYINDEX = require_QUERYINDEX();
    var RANGE = require_RANGE();
    var REVRANGE = require_REVRANGE();
    var MRANGE = require_MRANGE();
    var MRANGE_WITHLABELS = require_MRANGE_WITHLABELS();
    var MREVRANGE = require_MREVRANGE();
    var MREVRANGE_WITHLABELS = require_MREVRANGE_WITHLABELS();
    var generic_transformers_1 = require_generic_transformers();
    exports2.default = {
      ADD,
      add: ADD,
      ALTER,
      alter: ALTER,
      CREATE,
      create: CREATE,
      CREATERULE,
      createRule: CREATERULE,
      DECRBY,
      decrBy: DECRBY,
      DEL,
      del: DEL,
      DELETERULE,
      deleteRule: DELETERULE,
      GET,
      get: GET,
      INCRBY,
      incrBy: INCRBY,
      INFO_DEBUG,
      infoDebug: INFO_DEBUG,
      INFO,
      info: INFO,
      MADD,
      mAdd: MADD,
      MGET,
      mGet: MGET,
      MGET_WITHLABELS,
      mGetWithLabels: MGET_WITHLABELS,
      QUERYINDEX,
      queryIndex: QUERYINDEX,
      RANGE,
      range: RANGE,
      REVRANGE,
      revRange: REVRANGE,
      MRANGE,
      mRange: MRANGE,
      MRANGE_WITHLABELS,
      mRangeWithLabels: MRANGE_WITHLABELS,
      MREVRANGE,
      mRevRange: MREVRANGE,
      MREVRANGE_WITHLABELS,
      mRevRangeWithLabels: MREVRANGE_WITHLABELS
    };
    var TimeSeriesAggregationType;
    (function(TimeSeriesAggregationType2) {
      TimeSeriesAggregationType2["AVG"] = "AVG";
      TimeSeriesAggregationType2["AVERAGE"] = "AVG";
      TimeSeriesAggregationType2["FIRST"] = "FIRST";
      TimeSeriesAggregationType2["LAST"] = "LAST";
      TimeSeriesAggregationType2["MIN"] = "MIN";
      TimeSeriesAggregationType2["MINIMUM"] = "MIN";
      TimeSeriesAggregationType2["MAX"] = "MAX";
      TimeSeriesAggregationType2["MAXIMUM"] = "MAX";
      TimeSeriesAggregationType2["SUM"] = "SUM";
      TimeSeriesAggregationType2["RANGE"] = "RANGE";
      TimeSeriesAggregationType2["COUNT"] = "COUNT";
      TimeSeriesAggregationType2["STD_P"] = "STD.P";
      TimeSeriesAggregationType2["STD_S"] = "STD.S";
      TimeSeriesAggregationType2["VAR_P"] = "VAR.P";
      TimeSeriesAggregationType2["VAR_S"] = "VAR.S";
      TimeSeriesAggregationType2["TWA"] = "TWA";
    })(TimeSeriesAggregationType || (exports2.TimeSeriesAggregationType = TimeSeriesAggregationType = {}));
    var TimeSeriesDuplicatePolicies;
    (function(TimeSeriesDuplicatePolicies2) {
      TimeSeriesDuplicatePolicies2["BLOCK"] = "BLOCK";
      TimeSeriesDuplicatePolicies2["FIRST"] = "FIRST";
      TimeSeriesDuplicatePolicies2["LAST"] = "LAST";
      TimeSeriesDuplicatePolicies2["MIN"] = "MIN";
      TimeSeriesDuplicatePolicies2["MAX"] = "MAX";
      TimeSeriesDuplicatePolicies2["SUM"] = "SUM";
    })(TimeSeriesDuplicatePolicies || (exports2.TimeSeriesDuplicatePolicies = TimeSeriesDuplicatePolicies = {}));
    var TimeSeriesReducers;
    (function(TimeSeriesReducers2) {
      TimeSeriesReducers2["AVG"] = "AVG";
      TimeSeriesReducers2["SUM"] = "SUM";
      TimeSeriesReducers2["MIN"] = "MIN";
      TimeSeriesReducers2["MINIMUM"] = "MIN";
      TimeSeriesReducers2["MAX"] = "MAX";
      TimeSeriesReducers2["MAXIMUM"] = "MAX";
      TimeSeriesReducers2["RANGE"] = "range";
      TimeSeriesReducers2["COUNT"] = "COUNT";
      TimeSeriesReducers2["STD_P"] = "STD.P";
      TimeSeriesReducers2["STD_S"] = "STD.S";
      TimeSeriesReducers2["VAR_P"] = "VAR.P";
      TimeSeriesReducers2["VAR_S"] = "VAR.S";
    })(TimeSeriesReducers || (exports2.TimeSeriesReducers = TimeSeriesReducers = {}));
    function transformTimestampArgument(timestamp) {
      if (typeof timestamp === "string")
        return timestamp;
      return (typeof timestamp === "number" ? timestamp : timestamp.getTime()).toString();
    }
    exports2.transformTimestampArgument = transformTimestampArgument;
    function pushRetentionArgument(args, retention) {
      if (retention !== void 0) {
        args.push("RETENTION", retention.toString());
      }
      return args;
    }
    exports2.pushRetentionArgument = pushRetentionArgument;
    var TimeSeriesEncoding;
    (function(TimeSeriesEncoding2) {
      TimeSeriesEncoding2["COMPRESSED"] = "COMPRESSED";
      TimeSeriesEncoding2["UNCOMPRESSED"] = "UNCOMPRESSED";
    })(TimeSeriesEncoding || (exports2.TimeSeriesEncoding = TimeSeriesEncoding = {}));
    function pushEncodingArgument(args, encoding) {
      if (encoding !== void 0) {
        args.push("ENCODING", encoding);
      }
      return args;
    }
    exports2.pushEncodingArgument = pushEncodingArgument;
    function pushChunkSizeArgument(args, chunkSize) {
      if (chunkSize !== void 0) {
        args.push("CHUNK_SIZE", chunkSize.toString());
      }
      return args;
    }
    exports2.pushChunkSizeArgument = pushChunkSizeArgument;
    function pushDuplicatePolicy(args, duplicatePolicy) {
      if (duplicatePolicy !== void 0) {
        args.push("DUPLICATE_POLICY", duplicatePolicy);
      }
      return args;
    }
    exports2.pushDuplicatePolicy = pushDuplicatePolicy;
    function transformLablesReply(reply) {
      const labels = {};
      for (const [key, value] of reply) {
        labels[key] = value;
      }
      return labels;
    }
    exports2.transformLablesReply = transformLablesReply;
    function pushLabelsArgument(args, labels) {
      if (labels) {
        args.push("LABELS");
        for (const [label, value] of Object.entries(labels)) {
          args.push(label, value);
        }
      }
      return args;
    }
    exports2.pushLabelsArgument = pushLabelsArgument;
    function transformIncrDecrArguments(command, key, value, options) {
      const args = [
        command,
        key,
        value.toString()
      ];
      if (options?.TIMESTAMP !== void 0 && options?.TIMESTAMP !== null) {
        args.push("TIMESTAMP", transformTimestampArgument(options.TIMESTAMP));
      }
      pushRetentionArgument(args, options?.RETENTION);
      if (options?.UNCOMPRESSED) {
        args.push("UNCOMPRESSED");
      }
      pushChunkSizeArgument(args, options?.CHUNK_SIZE);
      pushLabelsArgument(args, options?.LABELS);
      return args;
    }
    exports2.transformIncrDecrArguments = transformIncrDecrArguments;
    function transformSampleReply(reply) {
      return {
        timestamp: reply[0],
        value: Number(reply[1])
      };
    }
    exports2.transformSampleReply = transformSampleReply;
    var TimeSeriesBucketTimestamp;
    (function(TimeSeriesBucketTimestamp2) {
      TimeSeriesBucketTimestamp2["LOW"] = "-";
      TimeSeriesBucketTimestamp2["HIGH"] = "+";
      TimeSeriesBucketTimestamp2["MID"] = "~";
    })(TimeSeriesBucketTimestamp || (exports2.TimeSeriesBucketTimestamp = TimeSeriesBucketTimestamp = {}));
    function pushRangeArguments(args, fromTimestamp, toTimestamp, options) {
      args.push(transformTimestampArgument(fromTimestamp), transformTimestampArgument(toTimestamp));
      pushLatestArgument(args, options?.LATEST);
      if (options?.FILTER_BY_TS) {
        args.push("FILTER_BY_TS");
        for (const ts of options.FILTER_BY_TS) {
          args.push(transformTimestampArgument(ts));
        }
      }
      if (options?.FILTER_BY_VALUE) {
        args.push("FILTER_BY_VALUE", options.FILTER_BY_VALUE.min.toString(), options.FILTER_BY_VALUE.max.toString());
      }
      if (options?.COUNT) {
        args.push("COUNT", options.COUNT.toString());
      }
      if (options?.ALIGN) {
        args.push("ALIGN", transformTimestampArgument(options.ALIGN));
      }
      if (options?.AGGREGATION) {
        args.push("AGGREGATION", options.AGGREGATION.type, transformTimestampArgument(options.AGGREGATION.timeBucket));
        if (options.AGGREGATION.BUCKETTIMESTAMP) {
          args.push("BUCKETTIMESTAMP", options.AGGREGATION.BUCKETTIMESTAMP);
        }
        if (options.AGGREGATION.EMPTY) {
          args.push("EMPTY");
        }
      }
      return args;
    }
    exports2.pushRangeArguments = pushRangeArguments;
    function pushMRangeGroupByArguments(args, groupBy) {
      if (groupBy) {
        args.push("GROUPBY", groupBy.label, "REDUCE", groupBy.reducer);
      }
      return args;
    }
    exports2.pushMRangeGroupByArguments = pushMRangeGroupByArguments;
    function pushFilterArgument(args, filter) {
      args.push("FILTER");
      return (0, generic_transformers_1.pushVerdictArguments)(args, filter);
    }
    exports2.pushFilterArgument = pushFilterArgument;
    function pushMRangeArguments(args, fromTimestamp, toTimestamp, filter, options) {
      args = pushRangeArguments(args, fromTimestamp, toTimestamp, options);
      args = pushFilterArgument(args, filter);
      return pushMRangeGroupByArguments(args, options?.GROUPBY);
    }
    exports2.pushMRangeArguments = pushMRangeArguments;
    function pushWithLabelsArgument(args, selectedLabels) {
      if (!selectedLabels) {
        args.push("WITHLABELS");
      } else {
        args.push("SELECTED_LABELS");
        args = (0, generic_transformers_1.pushVerdictArguments)(args, selectedLabels);
      }
      return args;
    }
    exports2.pushWithLabelsArgument = pushWithLabelsArgument;
    function pushMRangeWithLabelsArguments(args, fromTimestamp, toTimestamp, filter, options) {
      args = pushRangeArguments(args, fromTimestamp, toTimestamp, options);
      args = pushWithLabelsArgument(args, options?.SELECTED_LABELS);
      args = pushFilterArgument(args, filter);
      return pushMRangeGroupByArguments(args, options?.GROUPBY);
    }
    exports2.pushMRangeWithLabelsArguments = pushMRangeWithLabelsArguments;
    function transformRangeReply(reply) {
      return reply.map(transformSampleReply);
    }
    exports2.transformRangeReply = transformRangeReply;
    function transformMRangeReply(reply) {
      const args = [];
      for (const [key, _, sample] of reply) {
        args.push({
          key,
          samples: sample.map(transformSampleReply)
        });
      }
      return args;
    }
    exports2.transformMRangeReply = transformMRangeReply;
    function transformMRangeWithLabelsReply(reply) {
      const args = [];
      for (const [key, labels, samples] of reply) {
        args.push({
          key,
          labels: transformLablesReply(labels),
          samples: samples.map(transformSampleReply)
        });
      }
      return args;
    }
    exports2.transformMRangeWithLabelsReply = transformMRangeWithLabelsReply;
    function pushLatestArgument(args, latest) {
      if (latest) {
        args.push("LATEST");
      }
      return args;
    }
    exports2.pushLatestArgument = pushLatestArgument;
  }
});

// node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/index.js
var require_dist6 = __commonJS({
  "node_modules/.store/@redis-time-series-virtual-eabfea0315/node_modules/@redis/time-series/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TimeSeriesBucketTimestamp = exports2.TimeSeriesReducers = exports2.TimeSeriesAggregationType = exports2.TimeSeriesEncoding = exports2.TimeSeriesDuplicatePolicies = exports2.default = void 0;
    var commands_1 = require_commands7();
    Object.defineProperty(exports2, "default", { enumerable: true, get: function() {
      return commands_1.default;
    } });
    var commands_2 = require_commands7();
    Object.defineProperty(exports2, "TimeSeriesDuplicatePolicies", { enumerable: true, get: function() {
      return commands_2.TimeSeriesDuplicatePolicies;
    } });
    Object.defineProperty(exports2, "TimeSeriesEncoding", { enumerable: true, get: function() {
      return commands_2.TimeSeriesEncoding;
    } });
    Object.defineProperty(exports2, "TimeSeriesAggregationType", { enumerable: true, get: function() {
      return commands_2.TimeSeriesAggregationType;
    } });
    Object.defineProperty(exports2, "TimeSeriesReducers", { enumerable: true, get: function() {
      return commands_2.TimeSeriesReducers;
    } });
    Object.defineProperty(exports2, "TimeSeriesBucketTimestamp", { enumerable: true, get: function() {
      return commands_2.TimeSeriesBucketTimestamp;
    } });
  }
});

// node_modules/.store/redis-npm-4.6.12-60a0f42f8e/node_modules/redis/dist/index.js
var require_dist7 = __commonJS({
  "node_modules/.store/redis-npm-4.6.12-60a0f42f8e/node_modules/redis/dist/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createCluster = exports2.createClient = void 0;
    var client_1 = require_dist();
    var bloom_1 = require_dist2();
    var graph_1 = require_dist3();
    var json_1 = require_dist4();
    var search_1 = require_dist5();
    var time_series_1 = require_dist6();
    __exportStar(require_dist(), exports2);
    __exportStar(require_dist2(), exports2);
    __exportStar(require_dist3(), exports2);
    __exportStar(require_dist4(), exports2);
    __exportStar(require_dist5(), exports2);
    __exportStar(require_dist6(), exports2);
    var modules = {
      ...bloom_1.default,
      graph: graph_1.default,
      json: json_1.default,
      ft: search_1.default,
      ts: time_series_1.default
    };
    function createClient2(options) {
      return (0, client_1.createClient)({
        ...options,
        modules: {
          ...modules,
          ...options?.modules
        }
      });
    }
    exports2.createClient = createClient2;
    function createCluster(options) {
      return (0, client_1.createCluster)({
        ...options,
        modules: {
          ...modules,
          ...options?.modules
        }
      });
    }
    exports2.createCluster = createCluster;
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  XRedisClient: () => XRedisClient
});
module.exports = __toCommonJS(src_exports);

// src/client.ts
var import_redis = __toESM(require_dist7(), 1);
var XRedisClient = class {
  constructor(record, redisClientOptions, cacheValueProcessor, events) {
    this.record = record;
    this.promisesRecord = {};
    this.client = (0, import_redis.createClient)(redisClientOptions);
    this.cacheValueProcessor = cacheValueProcessor;
    this.events = events;
  }
  initialize() {
    return this.client.connect();
  }
  cleanup(additionalKeysToCleanup = []) {
    this.promisesRecord = {};
    return Promise.all(
      Object.keys(this.record).concat(additionalKeysToCleanup).map((key) => this.client.del(key))
    );
  }
  teardown() {
    this.promisesRecord = {};
    return this.client.disconnect();
  }
  async fetch({
    key,
    params,
    setOptions
  }) {
    const cached = await this.client.get(key);
    if (cached) {
      if (this.events?.onCacheHit) {
        this.events?.onCacheHit(key, cached);
      }
      const cacheKeyValueProcessor = this.cacheValueProcessor?.[key];
      return cacheKeyValueProcessor ? cacheKeyValueProcessor(cached) : cached;
    }
    const existingPromise = this.promisesRecord[key];
    if (existingPromise) {
      if (this.events?.onExistingPromiseHit) {
        this.events?.onExistingPromiseHit(key, existingPromise);
      }
      return existingPromise;
    }
    const promise = this.record[key](...params).then((res) => {
      delete this.promisesRecord[key];
      this.client.set(key, res, setOptions);
      return res;
    }).catch((err) => {
      delete this.promisesRecord[key];
      throw err;
    });
    this.promisesRecord[key] = promise;
    return promise;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  XRedisClient
});
